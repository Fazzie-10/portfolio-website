// POST /api/webhook  <- Bachs. Verifies the signature (same scheme as rcpt), checks what was paid, then shares the Drive folder.
import { PRODUCTS, bachs, json, shareFolder, verifySignature } from "./_lib.js";

const PAID_COLLECTION = new Set(["SUCCEEDED", "ACCEPTED", "OVERPAID"]);

/** Pulls checkout id, amount and metadata from a successful payment event. Null when the event is not a payment. */
function paymentOf(event) {
  const d = event.data ?? {};
  if (event.type === "checkout.completed" && d.payment_status !== "paid") return null;
  if (event.type === "collection.succeeded" && !PAID_COLLECTION.has(String(d.status).toUpperCase())) return null;
  if (event.type !== "checkout.completed" && event.type !== "collection.succeeded") return null;
  if (!d.checkout_id) return null;
  return {
    checkoutId: d.checkout_id,
    amount: d.amount,
    currency: d.currency,
    metadata: d.metadata,
    productIds: (d.product_cart ?? []).map((p) => p.product_id).filter(Boolean),
  };
}

export async function POST(request) {
  const secret = (process.env.BACHS_WEBHOOK_SECRET || "").trim();
  if (!secret) return json({ error: "webhook not configured" }, 500);

  const raw = await request.text();
  if (!(await verifySignature(request.headers, raw, secret))) return json({ error: "bad signature" }, 400);

  let event;
  try {
    event = JSON.parse(raw);
  } catch {
    return json({ error: "bad payload" }, 400);
  }
  if (!event?.id || !event.type) return json({ error: "bad payload" }, 400);

  const pay = paymentOf(event);
  if (!pay) return json({ ok: true, result: "ignored" });

  try {
    let { metadata, amount, currency, productIds } = pay;
    // Our metadata lives on the checkout; the charge event may not carry it, so ask Bachs.
    if (metadata?.app !== "analystfemi") {
      const c = await bachs(`/v1/checkout-sessions/${encodeURIComponent(pay.checkoutId)}`);
      metadata = c.metadata;
      amount ??= c.amount;
      currency ??= c.currency;
      if (!productIds.length) productIds = (c.products ?? []).map((p) => p.product_id ?? p.id).filter(Boolean);
    }
    if (metadata?.app !== "analystfemi") return json({ ok: true, result: "not-analystfemi" });

    const product = PRODUCTS[metadata.tier];
    const email = String(metadata.email ?? "").trim().toLowerCase();
    if (!product || !email) {
      console.error("webhook: missing tier or email", { event: event.id, tier: metadata.tier });
      return json({ ok: true, result: "bad-metadata" });
    }

    // Cross-check what was bought and paid against the tier we are about to unlock.
    const bought = productIds[0];
    const wrongProduct = bought && bought !== product.launch && bought !== product.regular;
    const short = amount && currency === "NGN" && Number(amount) < product.launchNgn;
    if (wrongProduct || short) {
      console.error("webhook mismatch", { event: event.id, tier: metadata.tier, bought, amount, currency });
      return json({ ok: true, result: "mismatch" });
    }

    const folderId = (process.env[product.folderEnv] || "").trim();
    if (!folderId) throw new Error(`${product.folderEnv} is not set.`);
    await shareFolder(folderId, email);
    console.log("webhook: shared", { event: event.id, tier: metadata.tier, checkout: pay.checkoutId });
    return json({ ok: true, result: `shared ${metadata.tier}` });
  } catch (e) {
    console.error("webhook failed", e);
    // 4xx from Drive (e.g. the email is not a Google account) will not fix itself on retry: stop retrying, handle by hand.
    if (e && typeof e.status === "number" && e.status >= 400 && e.status < 500) return json({ ok: true, result: "needs-manual-share", checkout: pay.checkoutId });
    return json({ error: "temporary failure" }, 500);
  }
}
