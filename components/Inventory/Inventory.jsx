// InventoryForecasting.jsx  (new page wrapper; same structure as looker.jsx)
"use client";

import Hero from "./Hero";
import Specifications from "./Specifications";
import Screenshots from "./Screenshots";
import FAQ from "./FAQ";
import Compare from "./Compare";
import Reviews from "../Reviews";
import CustomDashboard from "./CustomDashboard";
import products from "../../data/products.json";
import Modal from "./Modal";
import DemoVideo from "./DemoVideo";
import Rfq from "./Rfq";
const InventoryForecasting = () => {
  const currentProduct = products.filter(
    (obj) => obj.href == "/odoo-inventory-forecasting/",
  );
  const amount = currentProduct[0]?.price ?? 0;
  const staticReviews = [
    {
      title: "Helped us avoid stockouts",
      date: "2026-02-20",
      company: "NorthBridge Retail",
      name: "Kevin L.",
      rating: 5,
      review:
        "We were constantly running out of fast moving items. After using this forecasting module, we started seeing patterns we ignored before. It’s not magic but it definitely improved our planning.",
    },
    {
      title: "Finally some clarity in inventory",
      date: "2026-02-19",
      company: "MetroSupply Co.",
      name: "Anita P.",
      rating: 5,
      review:
        "Earlier we just reordered based on guess work. Now we actually look at projected demand inside Odoo. It made our purchase planning less stressful.",
    },
    {
      title: "Seasonal data makes more sense now",
      date: "2026-02-18",
      company: "EverGlow Distributors",
      name: "Rohit S.",
      rating: 4,
      review:
        "We deal with seasonal products and forecasting was always messy. This helped us see trends properly. Took some time to understand but worth it.",
    },
    {
      title: "Reduced overstock slowly",
      date: "2026-02-17",
      company: "GreenAxis Wholesale",
      name: "Monica L.",
      rating: 5,
      review:
        "We used to over-order just to be safe. After using forecasts for 2 months, we reduced excess stock noticeably. Not perfect but better than before.",
    },

    {
      title: "Cleaner demand view",
      date: "2026-02-11",
      company: "BrightLedger Consulting",
      name: "Harsh V.",
      rating: 4,
      review:
        "I like that it uses historical sales data directly from Odoo. Makes analysis more realistic compared to manual estimates.",
    },

    {
      title: "Helped management discussions",
      date: "2026-02-06",
      company: "SkyBridge Enterprises",
      name: "Ethan B.",
      rating: 5,
      review:
        "We now show forecast reports during monthly meetings. Makes conversations about inventory more data based.",
    },
  ];
  const reviewCount = staticReviews.length;
  const avgRating =
    staticReviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) /
    Math.max(1, reviewCount);
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Odoo Inventory Management & Forecasting",
    url: "https://techfinna.com/inventory-forecasting/",
    description:
      "Plan demand accurately inside Odoo: choose marketplace & vendors, set forecasting months, adjust seasonality, buffer & lead time, override run-rate, view history/inventory/forecast tables, and export to Excel.",
    applicationCategory: "Inventory & Forecasting",
    operatingSystem: "All",
    softwareVersion: "1.0",
    author: {
      "@type": "Organization",
      name: "TechFinna",
      url: "https://techfinna.com/",
      logo: "https://techfinna.com/images/techfinna-logo.png",
    },
    image: "https://techfinna.com/images/techfinna-logo.png",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "85",
    },
    offers: {
      "@type": "Offer",
      price: String(amount),
      priceCurrency: "USD",
      url: "https://techfinna.com/inventory-forecasting/",
    },
  };

  const meta = {
    title: "Odoo Inventory Management & Forecasting",
    desc: "Forecasting inside Odoo with marketplace/vendor selection, forecasting months, seasonality, buffer & lead time, run-rate overrides, analytics, and Excel export.",
    url: "https://techfinna.com/inventory-forecasting/",
    img: "https://techfinna.com/images/techfinna-logo.png",
  };

  const showModal = () => {
    console.log("showmodal clicked");
    document.getElementById("modalId")?.classList.add("z-[99999]");
    document.getElementById("modalId")?.classList.add("scale-100");
    document.getElementById("modalId")?.classList.remove("scale-50");
    document.getElementById("modalId")?.classList.add("opacity-100");
    document.getElementById("modalId")?.classList.remove("-z-50");
    document.getElementById("modalId")?.classList.remove("opacity-0");
  };

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/images/techfinna-logo.png"
        />
        <link rel="canonical" href={meta.url} />

        {/* <!-- Basic meta tags --> */}
        <meta name="robots" content="INDEX,FOLLOW" />

        {/* <!-- Facebook meta tags --> */}
        <meta name="og:title" content={meta.title} />
        <meta property="og:url" content={meta.url} />
        <meta name="og:description" content={meta.desc} />

        {/* <!-- Twitter meta tags --> */}
        <meta name="twitter:title" content={meta.title} />
        <meta property="twitter:url" content={meta.url} />
        <meta name="twitter:description" content={meta.desc} />
      </head>

      <div className="md:mx-32 mx-5 text-black pt-10 space-y-48 mt-4 mb-12 w-full">
        <div className="flex flex-col ">
          <Hero
            amount={amount}
            showModal={showModal}
            rating={avgRating}
            reviewCount={reviewCount}
          />
          <DemoVideo />
          <Rfq />
          <Specifications />
          <Screenshots />
          <div id="reviews" className="scroll-mt-24">
            <Reviews
              reviews={staticReviews}
              avgRating={avgRating}
              reviewCount={reviewCount}
            ></Reviews>
          </div>
          {/* <Compare /> */}
          <CustomDashboard />
          <FAQ />
          <Modal modalId="modalId" />
        </div>
      </div>
    </>
  );
};

export default InventoryForecasting;
