"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "@/components/CheckoutPage";

type Props = {
  amount: number;
  productName: string;
  prodVersion: string;
  href?: string; // optional, if you want to pass product href
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

export default function StripeCheckoutWrapper({
  amount,
  productName,
  prodVersion,
  href,
}: Props) {
  const [clientSecret, setClientSecret] = useState<string>("");
  const [loadingIntent, setLoadingIntent] = useState<boolean>(true);
  const [intentError, setIntentError] = useState<string>("");
  const [hrefState, setHrefState] = useState<string>(href || "");

 console.log(` 
  clientSecret,
 `,
  clientSecret,
)
  useEffect(() => {
    let isMounted = true;

    async function createIntent() {
      try {
        setLoadingIntent(true);
        setIntentError("");

        const res = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productName,
            prodVersion,
            href,
            // NOTE: we are NOT trusting amount from client; server will compute price.
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.error || "Failed to create payment intent");
        }

        if (isMounted) {
          setClientSecret(data.clientSecret);
        }
      } catch (e: any) {
        if (isMounted) setIntentError(e?.message || "Something went wrong");
      } finally {
        if (isMounted) setLoadingIntent(false);
      }
    }

    createIntent();
    return () => {
      isMounted = false;
    };
  }, [productName, prodVersion, href]);

  const options = useMemo(() => {
    if (!clientSecret) return undefined;
    return {
      clientSecret,
      // You can add appearance here later if needed
    };
  }, [clientSecret]);

  if (loadingIntent) {
    return (
      <div className="w-full flex items-center justify-center">
        <div className="text-black">Preparing secure checkout…</div>
      </div>
    );
  }

  if (intentError) {
    return (
      <div className="w-full p-4 rounded bg-white text-red-600">
        {intentError}
      </div>
    );
  }

  if (!options) return null;

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutPage
        amount={amount}
        productName={productName}
        clientSecret={clientSecret}
        prodVersion={prodVersion}
        productHref={hrefState}
      />
    </Elements>
  );
}
