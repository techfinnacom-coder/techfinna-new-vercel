import React from "react";
import Hero from "./Hero";
import Specifications from "./Specifications";
import FAQ from "./FAQ";
import Compare from "./Compare"
import Reviews from "./Reviews"
import PowerbiPricing from "../PowerBI/PowerbiPricing";
import products from "../../data/products.json";

const AdvanceBI = () => {
   const currentProduct = products.filter(
     (obj) => obj.href == "/odoo-powerbi-advance-connector/"
   );
   const basicConnector = products.filter(
     (obj) => obj.href == "/odoo-powerbi-connector/"
   );
   const amount = currentProduct[0].price;
   const basicConnectorAmount = basicConnector[0].price;
   const advanceConnectorDiscountAmount = currentProduct[0].offerPrice;
 
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Odoo Tableau Connector",
    url: "https://techfinna.com/odoo-tableau-connector/",
    description:
      "The Odoo Tableau Connector by TechFinna provides a smooth, direct link between Odoo and Tableau, allowing quick, efficient data transfer for advanced analytics. This in-demand connector ensures seamless, secure integration of your Odoo data into Tableau, eliminating the need for any intermediate server or application",
    applicationCategory: "Data Analytics",
    operatingSystem: "All",
    softwareVersion: "17.0",
    author: {
      "@type": "Organization",
      name: "Techfinna",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "4",
    },
    offers: {
      "@type": "Offer",
      price: "1400",
      priceCurrency: "USD",
      url: "https://techfinna.com/odoo-tableau-connector/",
    },
  };
  const meta = {
    title: "Odoo PowerBI Advance Connector - Techfinna",
    desc: "Advance features PowerBI Odoo connector with basic connector with the seamless integration of TechFinna's Odoo PowerBI Connector. Gain deeper insights, streamline reporting, and drive informed decisions effortlessly",
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
      <div className="md:mx-32 mx-5 text-black pt-10  space-y-48 mt-4 mb-12 w-full">
        <div className="flex flex-col ">
          <Hero amount={amount}></Hero>
          <Compare></Compare>
          <Specifications></Specifications>
          <Reviews></Reviews>
          <PowerbiPricing
            powerbiPricing = {basicConnectorAmount}
            advanceConnectorAmount={amount}
            advanceConnectorDiscountAmount={advanceConnectorDiscountAmount}
          ></PowerbiPricing>
          <FAQ></FAQ>
        </div>
      </div>
    </>
  );
};

export default AdvanceBI;
