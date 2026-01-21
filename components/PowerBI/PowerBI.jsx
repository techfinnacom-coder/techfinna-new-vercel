import React from "react";
import Hero from "./Hero";
import Specifications from "./Specifications";
import Screenshots from "./Screenshots";
import FAQ from "./FAQ";
import Reviews from "./Reviews";
import CustomDashboard from "./CustomDashboard";
import PowerbiPricing from "./PowerbiPricing";
import products from "../../data/products.json";
import DemoVideo from "./DemoVideo";
const PowerBI = () => {
  const currentProduct = products.filter(
    (obj) => obj.href == "/odoo-powerbi-connector/"
  );
  const advanceConnector = products.filter(
    (obj) => obj.href == "/odoo-powerbi-advance-connector/"
  );
  const amount = currentProduct[0].price;
  const advanceConnectorAmount = advanceConnector[0].price;
  const advanceConnectorDiscountAmount = advanceConnector[0].offerPrice;

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Odoo PowerBI Direct Connector",
    url: "https://techfinna.com/odoo-powerbi-connector/",
    description:
      "One of it's kind. Directly connect Odoo with PowerBI. Secure Connection. All you need to connect odoo with tableau using TechFinna's Odoo Tableau Connector. Gain deeper insights, streamline reporting, and drive informed decisions effortlessly",
    applicationCategory: "Data Analytics",
    operatingSystem: "All",
    softwareVersion: "17.0",
    author: {
      "@type": "Organization",
      name: "Techfinna",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "112",
    },
    offers: {
      "@type": "Offer",
      price: "597",
      priceCurrency: "USD",
      url: "https://techfinna.com/odoo-powerbi-connector/",
    },
  };
  const meta = {
    title: "Odoo PowerBI Direct Connector - Techfinna",
    desc: "One of it's kind. Directly connect Odoo with PowerBI. Secure Connection. All you need to connect odoo with tableau using TechFinna's Odoo Tableau Connector. Gain deeper insights, streamline reporting, and drive informed decisions effortlessly",
    url: "https://techfinna.com/odoo-powerbi-connector/",
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
          <Hero amount={amount}></Hero>
          <DemoVideo></DemoVideo>
          <Specifications></Specifications>
          <Screenshots></Screenshots>
          <Reviews></Reviews>
          <PowerbiPricing
            powerbiPricing = {amount}
            advanceConnectorAmount={advanceConnectorAmount}
            advanceConnectorDiscountAmount={advanceConnectorDiscountAmount}
          ></PowerbiPricing>
          <CustomDashboard></CustomDashboard>
          <FAQ></FAQ>
        </div>
      </div>
    </>
  );
};

export default PowerBI;
