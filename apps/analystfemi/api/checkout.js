// POST /api/checkout  { tier: "full" | "excel", email, name? }  ->  { url }
// Creates a one-time Bachs checkout (same pattern as rcpt's billing/checkout). The webhook grants access after payment.
import { createHash } from "node:crypto";
import { BachsError, PRODUCTS, bachs, json, launchActive } from "./_lib.js";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Bad request." }, 400);
  }

  const product = PRODUCTS[body?.tier];
  if (!product) return json({ error: "Pick a course." }, 400);

  const email = String(body.email ?? "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 160) return json({ error: "Enter a valid email address." }, 400);
  const name = String(body.name ?? "").trim().slice(0, 80);

  const variant = launchActive() ? "launch" : "regular";
  const site = (process.env.SITE_URL || new URL(request.url).origin).replace(/\/$/, "");
  const who = createHash("sha256").update(email).digest("hex").slice(0, 12);

  try {
    const checkout = await bachs("/v1/checkout-sessions", {
      method: "POST",
      idempotencyKey: `analystfemi-${body.tier}-${variant}-${who}-${Math.floor(Date.now() / 60000)}`,
      body: {
        product_cart: [{ product_id: product[variant], quantity: 1 }],
        customer: { email, name: name || email },
        metadata: { app: "analystfemi", tier: body.tier, variant, email },
        success_url: `${site}/thanks/?tier=${body.tier}`,
        cancel_url: `${site}/#pricing`,
        expires_in_minutes: 60,
      },
    });
    return json({ url: checkout.checkout_url });
  } catch (e) {
    console.error("checkout", e);
    return json({ error: e instanceof BachsError && e.status < 500 ? e.message : "Couldn't start checkout. Please try again." }, 502);
  }
}
