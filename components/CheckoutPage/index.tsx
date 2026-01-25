"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

const CheckoutPage = ({
  amount,
  productName,
  clientSecret,
  prodVersion,
  productHref,
}: {
  amount: number;
  productName: string;
  clientSecret: string;
  prodVersion: string;
  productHref:string
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  // const [clientSecret, setClientSecret] =
  //   useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [version, setVersion] = useState("12");
  const [prodName, setProdName] = useState(productName);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    try {
      const { error: submitError } = await elements.submit();

      if (submitError) {
        setErrorMessage(submitError.message);
        setLoading(false);
        return;
      }

      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret: clientSecret,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: name,
              email: email,
            },
          },
          return_url: `https://techfinna.com/payment-success/`,
        },
      });

      if (error) {
        setErrorMessage(error.message);
      }
    } catch (e: any) {
      setErrorMessage(e?.message || "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  if (!stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full md:w-[75%] px-8">
      <form onSubmit={handleSubmit} className="bg-gray-100 p-2 rounded-md">
        {stripe && (
          <div className="space-y-2">
            <div className=" pb-4">
              <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label className="block text-sm text-left leading-6 text-[#30313D] text-[15px] font-medium">
                    Email address
                  </label>
                  <div className="mt-[4px]">
                    <input
                      id="email"
                      name="email"
                      placeholder="example@email.com"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label className="block text-sm text-left leading-6 text-[#30313D] text-[15px] font-medium">
                    Full Name
                  </label>
                  <div className="mt-[4px]">
                    <input
                      type="text"
                      placeholder="John Doe"
                      name="first-name"
                      id="first-name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label className="block text-sm text-left leading-6 text-[#30313D] text-[15px] font-medium">
                    Company Name
                  </label>
                  <div className="mt-[4px]">
                    <input
                      type="text"
                      placeholder="Tesla"
                      name="first-name"
                      id="first-name"
                      onChange={(e) => {
                        setCompanyName(e.target.value);
                      }}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label className="block text-sm text-left leading-6 text-[#30313D] text-[15px] font-medium">
                    Odoo Version
                  </label>
                  <div className="mt-[4px]">
                    <select
                      id="version"
                      name="version"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                      onChange={(e) => {
                        setVersion(e.target.value);
                      }}
                    >
                      <option value={12.0}>12.0</option>
                      <option value={13.0}>13.0</option>
                      <option value={14.0}>14.0</option>
                      <option value={15.0}>15.0</option>
                      <option value={16.0}>16.0</option>
                      <option value={17.0}>17.0</option>
                      <option value={18.0}>18.0</option>
                      <option value={19.0}>19.0</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {stripe && <PaymentElement />}

        {errorMessage && <div>{errorMessage}</div>}

        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="flex justify-center items-center gap-3 my-4">
            <p className="text-black">Secure Checkout</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="15px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <button
          disabled={!stripe || loading}
          className="text-white w-1/2 mt-4 p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
        >
          {!loading ? `Pay $${amount}` : "Processing..."}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
