import React from "react";
import Hero from "./Hero";
import Specifications from "./Specifications";
import Screenshots from "./Screenshots";
import FAQ from "./FAQ";
import Reviews from "../Reviews";
import CustomDashboard from "./CustomDashboard";
import products from "../../data/products.json";
import DemoVideo from "./DemoVideo";
const Copilot = () => {
  const currentProduct = products.filter(
    (obj) => obj.href == "/ai-copilot-odoo/",
  );
 
  const amount = currentProduct[0].price;
  const staticReviews = [
    {
      title: "helped me do CRUD operations using gpt chatbot",
      date: "2026-02-27",
      company: "NorthPeak Manufacturing",
      name: "Daniel R.",
      rating: 5,
      review:
        "I wanted to understand some sales data from last year and create new orders, this module helped me do that easily. Thanks Chandan, for setting it up personally on my Odoo.",
    },
  ];
  const reviewCount = 1;
  const avgRating =
    staticReviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) /
    Math.max(1, reviewCount);
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AI Copilot for Odoo",
    url: "https://techfinna.com/ai-copilot-odoo/",
    description:
      "AI copilot for odoo helps you automate tasks and lets you read and approve CRUD operations in Odoo using natural language. It is powered by OpenAI's GPT-4 and can be easily integrated into your Odoo instance.",
    applicationCategory: "Data Analytics",
    operatingSystem: "All",
    softwareVersion: "17.0",
    author: {
      "@type": "Organization",
      name: "Techfinna",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: reviewCount,
    },
    offers: {
      "@type": "Offer",
      price: "270",
      priceCurrency: "USD",
      url: "https://techfinna.com/ai-copilot-odoo/",
    },
  };
  const meta = {
    title: "AI Copilot for Odoo - Techfinna",
    desc: "AI copilot for odoo helps you automate tasks and lets you read and approve CRUD operations in Odoo using natural language. It is powered by OpenAI's GPT-4 and can be easily integrated into your Odoo instance.",
    url: "https://techfinna.com/ai-copilot-odoo/",
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

        {/* <!-- Twtitter meta tags --> */}
        <meta name="twitter:title" content={meta.title} />
        <meta property="twitter:url" content={meta.url} />
        <meta name="twitter:description" content={meta.desc} />
      </head>
      <div className="md:mx-32 mx-5 text-black pt-10 space-y-48 mt-4 mb-12 w-full">
        <div className="flex flex-col ">
          <Hero
            amount={amount}
            rating={avgRating}
            reviewCount={reviewCount}
          ></Hero>
          {/* <DemoVideo></DemoVideo> */}
          <Specifications></Specifications>
          <Screenshots></Screenshots>
          <div id="reviews" className="scroll-mt-24">
            <Reviews
              reviews={staticReviews}
              avgRating={avgRating}
              reviewCount={reviewCount}
            ></Reviews>
          </div>
        
          {/* <CustomDashboard></CustomDashboard>
          <FAQ></FAQ> */}
        </div>
      </div>
    </>
  );
};

export default Copilot;
