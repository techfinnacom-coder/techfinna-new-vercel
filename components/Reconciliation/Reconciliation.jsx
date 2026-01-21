"use client";
import React from "react";
import Hero from "./Hero";
import Head from "next/head";
import Connections from "./Connections";
import Customization from "./Customization";
import { useState } from "react";
import Link from "next/link";

const Reconciliation = () => {
  const meta = {
    title:
      "Odoo Manual Reconciliation | TechFinna",
    desc: "Simplify your Odoo reconciliation with Techfinna's Manual Reconciliation module. Inspired by QuickBooks, it offers a user-friendly interface to ensure accurate and efficient transaction matching. Boost productivity and streamline your accounting process today.",
    url: "https://techfinna.com/odoo-manual-reconciliation/",
  };
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Odoo Manual Reconciliation",
    url: "https://techfinna.com/odoo-manual-reconciliation/",
    description:
      "Simplify your Odoo reconciliation with Techfinna's Manual Reconciliation module. Inspired by QuickBooks, it offers a user-friendly interface to ensure accurate and efficient transaction matching. Boost productivity and streamline your accounting process today.",
    applicationCategory: "Data Analytics",
    operatingSystem: "All",
    softwareVersion: "17.0",
    author: {
      "@type": "Organization",
      name: "Techfinna",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "56",
    },
    offers: {
      "@type": "Offer",
      price: "249",
      priceCurrency: "USD",
      url: "https://techfinna.com/odoo-manual-reconciliation/",
    },
  };
  const [display, setDisplay] = useState(false);
  const [submitted, setSubmitted] =
    useState(false);
  function Submit(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    fetch(
      `https://script.google.com/macros/s/AKfycbzlZG_qPoNeRVfqFmzP8hGRKlSQVO_wEwjVziA2p1ZUAP98XhRf4NkWGzmNNjcx_WSu/exec?Email=${email}`,
      { method: "POST" }
    ).then((res) => res.json());
    setSubmitted(true);
  }
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
        <link rel="canonical" href={meta.url} />

        {/* <!-- Basic meta tags --> */}

        <meta
          name="robots"
          content="INDEX,FOLLOW"
        />

        {/* <!-- Facebook meta tags --> */}
        <meta
          name="og:title"
          content={meta.title}
        />
        <meta
          name="og:description"
          content={meta.desc}
        />

        <meta
          property="og:url"
          content={meta.url}
        />

        {/* <!-- Twtitter meta tags --> */}
        <meta
          name="twitter:title"
          content={meta.title}
        />
        <meta
          name="twitter:description"
          content={meta.desc}
        />
        <meta
          property="twitter:url"
          content={meta.url}
        />
      </head>

      <div className="md:mx-32 mx-5 text-black pt-20 space-y-48 mt-4 mb-12 w-full">
        <div className="flex h-full gap-32 w-full">
          <div className=" flex flex-col space-y-48">
            <Hero></Hero>
            <Connections></Connections>
            <Customization></Customization>
          </div>
          <div>
            <div className="border p-10 rounded-md drop-shadow-xl duration-300 sticky top-16 bottom-0 items-center flex flex-col gap-y-10 w-full md:w-[350px]">
              <div className="bg-transparent">
                <h4 className="text-xl bg-transparent">
                  <strong>
                    Supported Odoo versions:
                  </strong>
                </h4>
                <p className="text-lg mt-1 bg-transparent">
                  <span className="border rounded-md px-2 dhadow-md">
                    12.0
                  </span>{" "}
                  <span className="border rounded-md px-2 dhadow-md">
                    13.0
                  </span>{" "}
                  <span className="border rounded-md px-2 dhadow-md">
                    14.0
                  </span>{" "}
                  <span className="border rounded-md px-2 dhadow-md">
                    15.0
                  </span>{" "}
                  <span className="border rounded-md px-2 dhadow-md">
                    16.0
                  </span>{" "}
                  <span className="border rounded-md px-2 dhadow-md">
                    17.0
                  </span>{" "}
                  <span className="border rounded-md px-2 dhadow-md">
                    18.0
                  </span>{" "}
                </p>
                <p className="mt-2 bg-transparent mx-2 text-lg">
                  Works well on Odoo Sh and
                  on-premises server
                </p>
                <p className="mt-2 bg-transparent mx-2 font-bold">
                  Community + Enterprise
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  target="_blank"
                  href="/payment/odoo-manual-reconciliation/"
                >
                  <button className=" flex justify-center items-center gap-2 rounded-md shadow-lg bg-[#285a9b] text-white w-full px-6 py-2 text-center text-2xl font-bold">
                    Buy Module
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                    >
                      <path
                        d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H13M19 15.5H17"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M5 6H8M5.5 13H16.0218C16.9812 13 17.4609 13 17.8366 12.7523C18.2123 12.5045 18.4013 12.0636 18.7792 11.1818L19.2078 10.1818C20.0173 8.29294 20.4221 7.34853 19.9775 6.67426C19.5328 6 18.5054 6 16.4504 6H12"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </Link>
                <Link
                  target="_blank"
                  href="https://apps.odoo.com/apps/modules/17.0/quickbooks_manual_reconcile"
                >
                  <button className="p-1 bg-[#432c3d] rounded-md shadow-lg border-[#432c3d] border-2 text-white w-full px-6 py-2  text-center text-xl font-semibold">
                    Buy from Odoo Store
                  </button>
                </Link>

                <hr className="border-2 border-gray-300 mt-2 w-full rounded-xl"></hr>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <div className="flex justify-center items-center gap-3">
                    <p>Secure Checkout</p>
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
                  <div className="flex justify-center gap-2">
                    <div className="flex h-8 max-w-full items-center justify-center bg-gray-50 p-2 ">
                      <img
                        loading="lazy"
                        alt="Mastercard"
                        width="42"
                        height="22"
                        decoding="async"
                        data-nimg="1"
                        className="object-contain"
                        srcset="https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Fpayments%2Fmastercard.svg&amp;w=84&amp;q=70&amp;output=webp 1x, https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Fpayments%2Fmastercard.svg&amp;w=84&amp;q=70&amp;output=webp 2x"
                        src="https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Fpayments%2Fmastercard.svg&amp;w=84&amp;q=70&amp;output=webp"
                      />
                    </div>
                    <div className="flex h-8 max-w-full items-center justify-center bg-gray-50 p-2 ">
                      <img
                        loading="lazy"
                        alt="Stripe"
                        width="56"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        className="object-contain"
                        srcset="https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Fpayments%2Fstripe.png&amp;w=112&amp;q=70&amp;output=webp 1x, https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Fpayments%2Fstripe.png&amp;w=112&amp;q=70&amp;output=webp 2x"
                        src="https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Fpayments%2Fstripe.png&amp;w=112&amp;q=70&amp;output=webp"
                      />
                    </div>
                    <div className="flex h-8 max-w-full items-center justify-center bg-gray-50 p-2 ">
                      <img
                        loading="lazy"
                        alt="Stripe"
                        width="56"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        className="object-contain"
                        src="/images/payment/visa-icon.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reconciliation;
