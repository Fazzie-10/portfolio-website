// Builds all four sites exactly as they'll be deployed, then serves them on ports 4321-4324.
// Open them on this laptop, or on your phone on the same Wi-Fi/hotspot.
//
//   node scripts/preview.mjs            → links between sites use localhost
//   node scripts/preview.mjs --phone    → links use this laptop's Wi-Fi IP, so they work on a phone
//   node scripts/preview.mjs --no-build → serve the last build again
import { spawn, spawnSync } from "node:child_process";
import { networkInterfaces } from "node:os";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const astroBin = path.join(root, "node_modules", "astro", "bin", "astro.mjs");
const apps = [["hub", 4321], ["analystfemi", 4322], ["automation", 4323], ["insightshub", 4324]];

const lanIp = Object.values(networkInterfaces())
  .flat()
  .find((n) => n && n.family === "IPv4" && !n.internal)?.address;
const phone = process.argv.includes("--phone");
const host = phone && lanIp ? lanIp : "localhost";

if (!process.argv.includes("--no-build")) {
  for (const [name] of apps) {
    console.log(`Building ${name}…`);
    const r = spawnSync(process.execPath, [astroBin, "build"], {
      cwd: path.join(root, "apps", name),
      env: { ...process.env, PUBLIC_LOCAL_HOST: host },
      stdio: ["ignore", "ignore", "inherit"],
    });
    if (r.status !== 0) process.exit(r.status ?? 1);
  }
}

const children = apps.map(([name, port]) => {
  const child = spawn(process.execPath, [astroBin, "preview", "--port", String(port), "--host", "0.0.0.0"], {
    cwd: path.join(root, "apps", name),
    stdio: ["ignore", "ignore", "inherit"],
  });
  return child;
});

console.log("\nProduction preview running:");
for (const [name, port] of apps) console.log(`  ${name.padEnd(12)} http://${host}:${port}`);
if (lanIp) console.log(`\nOn your phone (same Wi-Fi or hotspot): http://${lanIp}:4321`);
console.log("Press Ctrl+C to stop.");

const stop = () => {
  for (const c of children) c.kill();
  process.exit(0);
};
process.on("SIGINT", stop);
process.on("SIGTERM", stop);
