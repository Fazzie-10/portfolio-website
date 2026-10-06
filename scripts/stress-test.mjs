// Automated checks on the production builds (run `node scripts/preview.mjs` or build first).
// Checks every page for: broken internal links and assets, SEO tags, headings, image alt text,
// page weight, and that every external link responds.
//
//   node scripts/stress-test.mjs            → full run, including external links
//   node scripts/stress-test.mjs --offline  → skip external link checks
import { readFileSync, readdirSync, statSync, existsSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const apps = ["hub", "analystfemi", "automation", "insightshub"];
const offline = process.argv.includes("--offline");

const problems = []; // { level: "error" | "warn", site, page, msg }
const weights = [];
const external = new Map(); // url -> [site/page]
const add = (level, site, page, msg) => problems.push({ level, site, page, msg });

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = path.join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

function resolveLocal(dist, pageFile, ref) {
  const clean = decodeURIComponent(ref.split("#")[0].split("?")[0]);
  if (!clean) return pageFile; // pure #anchor
  const abs = clean.startsWith("/") ? path.join(dist, clean) : path.join(path.dirname(pageFile), clean);
  if (existsSync(abs) && statSync(abs).isFile()) return abs;
  const idx = path.join(abs, "index.html");
  return existsSync(idx) ? idx : null;
}

const attr = (tag, name) => tag.match(new RegExp(`\\s${name}\\s*=\\s*"([^"]*)"`, "i"))?.[1];

for (const site of apps) {
  const dist = path.join(root, "apps", site, "dist");
  if (!existsSync(dist)) {
    add("error", site, "-", "No build found (run node scripts/preview.mjs first)");
    continue;
  }
  const pages = walk(dist).filter((f) => f.endsWith(".html"));
  if (!existsSync(path.join(dist, "404.html"))) add("warn", site, "-", "No custom 404 page");
  if (!existsSync(path.join(dist, "robots.txt"))) add("warn", site, "-", "No robots.txt");
  if (!existsSync(path.join(dist, "sitemap-index.xml"))) add("warn", site, "-", "No sitemap");

  for (const file of pages) {
    const page = "/" + path.relative(dist, file).replace(/\\/g, "/").replace(/index\.html$/, "");
    const html = readFileSync(file, "utf8");

    // SEO basics
    const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim();
    const desc = attr(html.match(/<meta[^>]+name="description"[^>]*>/i)?.[0] ?? "", "content");
    if (!title) add("error", site, page, "Missing <title>");
    else if (title.length > 70) add("warn", site, page, `Title is ${title.length} chars (Google shows ~60): "${title}"`);
    if (!desc) add("error", site, page, "Missing meta description");
    else if (desc.length < 70 || desc.length > 170) add("warn", site, page, `Meta description is ${desc.length} chars (aim 120–160)`);
    if (!/rel="canonical"/.test(html) && !page.includes("404")) add("warn", site, page, "No canonical link");
    if (!/property="og:image"/.test(html) && !page.includes("404")) add("warn", site, page, "No og:image (link previews on WhatsApp/LinkedIn will have no picture)");
    if (!/rel="icon"/.test(html)) add("warn", site, page, "No favicon");
    if (!/<html[^>]+lang=/.test(html)) add("error", site, page, "Missing <html lang>");

    const h1s = (html.match(/<h1[\s>]/gi) || []).length;
    if (h1s !== 1) add("warn", site, page, `${h1s} <h1> tags (should be exactly 1)`);

    // Images need alt text
    for (const img of html.match(/<img\b[^>]*>/gi) || []) {
      if (!/\salt\s*=/.test(img)) add("error", site, page, `Image without alt: ${attr(img, "src")}`);
    }

    // Links and assets
    let bytes = statSync(file).size;
    const refs = [
      ...[...html.matchAll(/\s(?:href|src|data-src|poster)="([^"]+)"/g)].map((m) => m[1]),
      ...[...html.matchAll(/url\(([^)]+)\)/g)].map((m) => m[1].replace(/["']/g, "")),
    ];
    const seen = new Set();
    for (const ref of refs) {
      if (seen.has(ref) || ref.startsWith("data:") || ref.startsWith("mailto:") || ref.startsWith("tel:") || ref.startsWith("javascript:")) continue;
      seen.add(ref);
      if (/^https?:\/\//.test(ref)) {
        const u = new URL(ref);
        if (["localhost", "127.0.0.1"].includes(u.hostname) || /^\d+\.\d+\.\d+\.\d+$/.test(u.hostname)) continue; // other local sites
        if (u.hostname.endsWith("joshuaakintayo.me")) continue; // canonical / og urls for the not-yet-live domain
        if (u.hostname === "fonts.googleapis.com" || u.hostname === "fonts.gstatic.com") continue;
        if (!external.has(ref)) external.set(ref, []);
        external.get(ref).push(`${site}${page}`);
        continue;
      }
      if (ref.startsWith("#")) {
        const id = ref.slice(1);
        if (id && !new RegExp(`id="${id}"`).test(html)) add("error", site, page, `Anchor link to missing section: ${ref}`);
        continue;
      }
      const target = resolveLocal(dist, file, ref);
      if (!target) add("error", site, page, `Broken link/asset: ${ref}`);
      else if (!target.endsWith(".html") && !/\.(mp4|webm)$/.test(target)) bytes += statSync(target).size;
    }
    weights.push({ site, page, kb: Math.round(bytes / 1024) });
  }
}

// External links
const extResults = [];
if (!offline) {
  const check = async (url) => {
    for (const method of ["HEAD", "GET"]) {
      try {
        const r = await fetch(url, { method, redirect: "follow", signal: AbortSignal.timeout(15000), headers: { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/130 Safari/537.36" } });
        if (r.ok || method === "GET") return r.status;
      } catch (e) {
        if (method === "GET") return `failed (${e.cause?.code ?? e.name})`;
      }
    }
  };
  const urls = [...external.keys()];
  for (let i = 0; i < urls.length; i += 6) {
    const batch = urls.slice(i, i + 6);
    const res = await Promise.all(batch.map(check));
    batch.forEach((u, j) => extResults.push({ url: u, status: res[j], from: external.get(u) }));
  }
  for (const r of extResults) {
    const ok = typeof r.status === "number" && r.status < 400;
    // Social networks often block automated checks with 4xx/999: flag as "check by hand"
    const social = /linkedin|instagram|tiktok|facebook|x\.com|twitter|youtube/.test(r.url);
    if (!ok) add(social ? "warn" : "error", r.from[0].split("/")[0], r.from[0].slice(r.from[0].indexOf("/")), `External link ${r.status}${social ? " (social sites block bots; check by hand)" : ""}: ${r.url}`);
  }
}

// Report
const errors = problems.filter((p) => p.level === "error");
const warns = problems.filter((p) => p.level === "warn");
const lines = [];
lines.push(`# Stress test report`, ``, `Run: ${new Date().toISOString()}`, ``);
lines.push(`**${errors.length} errors · ${warns.length} warnings · ${weights.length} pages · ${external.size} external links checked${offline ? " (skipped)" : ""}**`, ``);
for (const [label, list] of [["Errors", errors], ["Warnings", warns]]) {
  lines.push(`## ${label}`, ``);
  if (!list.length) lines.push(`None.`, ``);
  for (const p of list) lines.push(`- **${p.site}** \`${p.page}\`: ${p.msg}`);
  lines.push(``);
}
lines.push(`## Page weight (first load, excluding videos)`, ``, `| Site | Page | KB |`, `|---|---|---|`);
for (const w of weights.sort((a, b) => b.kb - a.kb)) lines.push(`| ${w.site} | ${w.page} | ${w.kb}${w.kb > 1500 ? " ⚠️" : ""} |`);
if (extResults.length) {
  lines.push(``, `## External links`, ``, `| Status | URL |`, `|---|---|`);
  for (const r of extResults) lines.push(`| ${r.status} | ${r.url} |`);
}
const out = path.join(root, "stress-test-report.md");
writeFileSync(out, lines.join("\n"));
console.log(lines.slice(0, 6 + errors.length + warns.length + 6).join("\n"));
console.log(`\nFull report: ${out}`);
process.exit(errors.length ? 1 : 0);
