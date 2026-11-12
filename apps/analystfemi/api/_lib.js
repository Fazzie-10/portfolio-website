// Shared helpers for the payment functions (checkout + webhook).
// Files starting with "_" are not exposed as routes by Vercel.
// Pattern copied from rcpt (src/lib/bachs.ts): server-side checkout session, HMAC-signed webhook.

// Bachs products created in the same Bachs account as rcpt (metadata app=analystfemi). Ids are not secret.
export const PRODUCTS = {
  full: {
    name: "Full Course",
    launch: "prod_d72f0770471d45f0a0d7",
    regular: "prod_02275486925d48ee8cca",
    launchNgn: 12500,
    regularNgn: 25000,
    folderEnv: "DRIVE_FOLDER_FULL",
  },
  excel: {
    name: "Excel Track",
    launch: "prod_eff427f1ad884497adf3",
    regular: "prod_56d63d8340ed4614b503",
    launchNgn: 5000,
    regularNgn: 10000,
    folderEnv: "DRIVE_FOLDER_EXCEL",
  },
};

/** Launch price is on until LAUNCH_ENDS_ON (YYYY-MM-DD, Lagos time). Keep it in step with LAUNCH.endsOn in src/data/course.ts. */
export function launchActive() {
  const end = (process.env.LAUNCH_ENDS_ON || "").trim();
  if (!end) return true;
  const t = Date.parse(`${end}T23:59:59+01:00`);
  return Number.isNaN(t) ? true : Date.now() <= t;
}

export const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json", "cache-control": "no-store" } });

export class BachsError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function key() {
  const k = (process.env.BACHS_SECRET_KEY || "").trim();
  if (!k) throw new BachsError(500, "Payments are not configured.");
  return k;
}

const baseUrl = () => (key().startsWith("sk_live_") ? "https://api.bachs.io" : "https://sandbox-api.bachs.io");

export async function bachs(path, { method = "GET", body, idempotencyKey } = {}) {
  const headers = { Authorization: `Bearer ${key()}`, Accept: "application/json" };
  if (body !== undefined) headers["Content-Type"] = "application/json";
  if (idempotencyKey) headers["Idempotency-Key"] = idempotencyKey;
  const res = await fetch(baseUrl() + path, { method, headers, body: body === undefined ? undefined : JSON.stringify(body) });
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) throw new BachsError(res.status, data?.detail ?? `Bachs request failed (${res.status})`);
  return data;
}

/* ---------- Webhook signature (same scheme rcpt verifies) ---------- */

const TOLERANCE_S = 300;
const enc = new TextEncoder();

async function hmacHex(secret, message) {
  const k = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = new Uint8Array(await crypto.subtle.sign("HMAC", k, enc.encode(message)));
  return Array.from(sig, (b) => b.toString(16).padStart(2, "0")).join("");
}

function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Bachs signs `${timestamp}.${rawBody}` with HMAC-SHA256 (hex). The V2 header can carry several v1 signatures during rotation. */
export async function verifySignature(headers, raw, secret, nowMs = Date.now()) {
  let ts = null;
  let sigs = [];
  const v2 = headers.get("x-bachs-signature-v2");
  if (v2) {
    for (const part of v2.split(",")) {
      const [k, v] = part.trim().split("=", 2);
      if (k === "t") ts = v;
      else if (k === "v1" && v) sigs.push(v);
    }
  } else {
    ts = headers.get("x-bachs-timestamp");
    const s = headers.get("x-bachs-signature");
    sigs = s ? [s] : [];
  }
  if (!ts || !sigs.length || !/^\d+$/.test(ts)) return false;
  if (Math.abs(nowMs / 1000 - Number(ts)) > TOLERANCE_S) return false;
  const expected = await hmacHex(secret, `${ts}.${raw}`);
  return sigs.some((s) => safeEqual(expected, s.toLowerCase()));
}

/* ---------- Welcome email (Resend, same account and verified domain rcpt used) ---------- */

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

export function welcomeEmail({ tierName, email, folderIds, whatsappLink, community = true }) {
  // The AnalystFemi Data Club (WhatsApp) is part of the Full Course only.
  if (!community) whatsappLink = "";
  const links = folderIds.map((id) => `https://drive.google.com/drive/folders/${id}`);
  const many = links.length > 1;
  const subject = `You're in: ${tierName} (AnalystFemi)`;
  const text = [
    `Welcome to the ${tierName}.`,
    "",
    "Your payment is confirmed and your course folder is shared with this email address:",
    email,
    "",
    ...links.map((l, i) => `${many ? `Folder ${i + 1}: ` : "Open your course folder: "}${l}`),
    "",
    "Start with the 00 Welcome file. It explains how to use the course.",
    ...(whatsappLink ? [`Join the AnalystFemi Data Club on WhatsApp: ${whatsappLink}`] : []),
    "",
    "Open the folder while signed in to Google with the email above. If something does not open, reply to this email.",
    "",
    "Joshua Akintayo",
    "AnalystFemi",
  ].join("\n");
  const button = (href, label) =>
    `<p style="margin:0 0 12px"><a href="${esc(href)}" style="display:inline-block;background:#0f766e;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:999px;font-weight:600">${esc(label)}</a></p>`;
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#0f172a;line-height:1.55">
  <h1 style="font-size:24px;margin:0 0 8px">Welcome. You're in.</h1>
  <p style="margin:0 0 16px">Your payment for the <strong>${esc(tierName)}</strong> is confirmed, and your course folder is now shared with <strong>${esc(email)}</strong>.</p>
  ${links.map((l, i) => button(l, many ? `Open folder ${i + 1}` : "Open your course folder")).join("")}
  <p style="margin:16px 0">Start with the <strong>00 Welcome</strong> file. It explains how to use the course.</p>
  ${whatsappLink ? button(whatsappLink, "Join the AnalystFemi Data Club on WhatsApp") : ""}
  <p style="margin:16px 0;color:#475569;font-size:14px">Open the folder while signed in to Google with the email above. If something does not open, just reply to this email.</p>
  <p style="margin:24px 0 0">Joshua Akintayo<br><span style="color:#475569">AnalystFemi</span></p>
</div>`;
  return { subject, text, html };
}

/** Sends the branded welcome email through Resend. Throws if it cannot, so the caller can fall back to Google's invite. */
export async function sendWelcomeEmail({ to, tierName, folderIds, idempotencyKey, community = true }) {
  const key = (process.env.RESEND_API_KEY || "").trim();
  if (!key) throw new Error("RESEND_API_KEY is not set.");
  const from = (process.env.MAIL_FROM || "AnalystFemi <hello@mail.joshuaakintayo.me>").trim();
  const replyTo = (process.env.MAIL_REPLY_TO || "joshuaakintayo21@gmail.com").trim();
  const mail = welcomeEmail({ tierName, email: to, folderIds, whatsappLink: (process.env.WHATSAPP_GROUP_LINK || "").trim(), community });
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "content-type": "application/json", ...(idempotencyKey ? { "Idempotency-Key": idempotencyKey } : {}) },
    body: JSON.stringify({ from, to: [to], reply_to: replyTo, subject: mail.subject, html: mail.html, text: mail.text }),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(`Resend failed (${res.status}) ${data?.message ?? ""}`);
  }
}

/* ---------- Google Drive: share a course folder with the buyer ---------- */

import { createSign } from "node:crypto";

const b64url = (input) => Buffer.from(input).toString("base64url");

function serviceAccount() {
  const raw = (process.env.GOOGLE_SERVICE_ACCOUNT_JSON || "").trim();
  if (!raw) throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is not set.");
  const text = raw.startsWith("{") ? raw : Buffer.from(raw, "base64").toString("utf8");
  const sa = JSON.parse(text);
  if (!sa.client_email || !sa.private_key) throw new Error("Service account JSON is missing client_email or private_key.");
  return sa;
}

export async function driveToken() {
  const sa = serviceAccount();
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(
    JSON.stringify({ iss: sa.client_email, scope: "https://www.googleapis.com/auth/drive", aud: "https://oauth2.googleapis.com/token", iat: now, exp: now + 3300 }),
  );
  const signature = createSign("RSA-SHA256").update(`${header}.${claims}`).sign(sa.private_key, "base64url");
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${header}.${claims}.${signature}` }),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok || !data?.access_token) throw new Error(`Google token request failed (${res.status}) ${data?.error_description ?? data?.error ?? ""}`);
  return data.access_token;
}

/** Gives `email` read-only access to the folder. Google also emails them the invite. Safe to repeat. */
// Shown inside Google's invite email. The invite is sent in the service account's name, so this explains who it is from.
const INVITE_MESSAGE =
  "Welcome to the AnalystFemi Excel & Power BI course, taught by Joshua Akintayo. This is your course folder, shared after your payment. Open the 00 Welcome file first: it explains how to use the course. If anything does not open, reply on WhatsApp via analystfemi.joshuaakintayo.me.";

export async function shareFolder(folderId, email, { notify = true } = {}) {
  const token = await driveToken();
  const message = notify ? `&emailMessage=${encodeURIComponent(INVITE_MESSAGE)}` : "";
  const url = `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(folderId)}/permissions?sendNotificationEmail=${notify}${message}&supportsAllDrives=true`;
  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "content-type": "application/json" },
    body: JSON.stringify({ type: "user", role: "reader", emailAddress: email }),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => null);
    const err = new Error(`Drive share failed (${res.status}) ${data?.error?.message ?? ""}`);
    err.status = res.status;
    throw err;
  }
}
