import { NextResponse } from "next/server";
import Stripe from "stripe";
import products from "../../../data/products.json";

export const runtime = "nodejs"; // important for stripe sdk in some deployments

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  // apiVersion can be omitted; Stripe SDK defaults safely
});

function toCents(amountDollars: number | string) {
  const n =
    typeof amountDollars === "string"
      ? Number.parseFloat(amountDollars)
      : amountDollars;

  if (!Number.isFinite(n)) return 0;

  return Math.round(n * 100);
}


export async function POST(req: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Missing STRIPE_SECRET_KEY" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { productName, prodVersion, href } = body || {};

    if (!productName) {
      return NextResponse.json(
        { error: "Missing productName" },
        { status: 400 }
      );
    }

    // IMPORTANT: Don’t trust amount from client.
    // Derive price server-side from your products.json
    const product = Array.isArray(products)
      ? products.find((p: any) => p?.href === href) || products.find((p: any) => p?.productName === productName)
      : null;

    // Fallback: if your JSON doesn't have productName, href match will work.
    if (!product?.price) {
      return NextResponse.json(
        { error: "Invalid product / price not found" },
        { status: 400 }
      );
    }

    const amountInCents = toCents(product.price);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      metadata: {
        productName: String(productName),
        prodVersion: String(prodVersion || ""),
        href: String(href || ""),
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Server error" },
      { status: 500 }
    );
  }
}
