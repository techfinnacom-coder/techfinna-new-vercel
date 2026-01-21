import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(
  "i"
);

// export async function POST(request: Request) {
//   try {
//     const { amount, prodVersion, prodName, name, email } = await request.json();

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount,
//       currency: "usd",
//       automatic_payment_methods: { enabled: true },
//       metadata: {
//         customer_name: `${name}`,
//         product_name: `${prodName}`,
//         customer_email: `${email}`,
//         odoo_version: `${prodVersion}`,
//       },
//     });

//     return NextResponse.json({
//       clientSecret: paymentIntent.client_secret,
//       paymentIntentId: paymentIntent.id,
//     });
//   } catch (error) {
//     console.error("Internal Error:", error);
//     // Handle other errors (e.g., network issues, parsing errors)
//     return NextResponse.json(
//       { error: `Internal Server Error: ${error}` },
//       { status: 500 }
//     );
//   }
// }
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const amount = url.searchParams.get("amount");
    const currency = url.searchParams.get("currency");
    const productId = url.searchParams.get("productId");
    const prodName = url.searchParams.get("prodName");
    const prodVersion = url.searchParams.get("prodVersion");
    const name = url.searchParams.get("name");
    const email = url.searchParams.get("email");

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      metadata: {
        customer_name: `${name}`,
        product_name: `${prodName}`,
        customer_email: `${email}`,
        odoo_version: `${prodVersion}`,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error("Internal Error:", error);
    // Handle other errors (e.g., network issues, parsing errors)
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
