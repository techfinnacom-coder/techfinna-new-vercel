import React from "react";
import Hero from "./Hero";
import Specifications from "./Specifications";
import Screenshots from "./Screenshots";
import FAQ from "./FAQ";
import Compare from "./Compare";
import Reviews from "./Reviews";
import CustomDashboard from "./CustomDashboard";
import products from "../../data/products.json";

const ExcelConnector = () => {
  const currentProduct = products.filter(
    (obj) => obj.href == "/odoo-excel-connector/"
  );
  const amount = currentProduct[0].price;
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
          <Specifications></Specifications>
          <Screenshots></Screenshots>
          {/* <Reviews></Reviews> */}
          {/* <Compare></Compare> */}
          <CustomDashboard></CustomDashboard>
          <FAQ></FAQ>
        </div>
      </div>
    </>
  );
};

export default ExcelConnector;
