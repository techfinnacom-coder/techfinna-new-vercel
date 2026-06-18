import Stripe from "stripe";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(req: Request) {
  try {
    const sig = req.headers.get("stripe-signature");
    if (!sig) {
      return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });
    }

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      return NextResponse.json({ error: "Missing STRIPE_WEBHOOK_SECRET" }, { status: 500 });
    }

    // IMPORTANT: raw body is required for signature verification
    const rawBody = await req.text();

    const event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);

    // Handle events you care about
    if (event.type === "payment_intent.succeeded") {
      const pi = event.data.object as Stripe.PaymentIntent;

      // Call Firebase to prepare fulfillment (you keep heavy Dropbox/GitHub logic there)
      const fulfillmentUrl = process.env.FIREBASE_FULFILLMENT_URL;
      const fulfillmentToken = process.env.FIREBASE_FULFILLMENT_TOKEN;

      if (fulfillmentUrl && fulfillmentToken) {
        await fetch(fulfillmentUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${fulfillmentToken}`,
          },
          body: JSON.stringify({
            payment_intent_id: pi.id,
            amount: pi.amount,
            currency: pi.currency,
            metadata: pi.metadata,
            receipt_email: pi.receipt_email,
          }),
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    // Signature verification errors happen if body isn't raw or secrets mismatch
    return NextResponse.json(
      { error: err?.message || "Webhook error" },
      { status: 400 }
    );
  }
}
