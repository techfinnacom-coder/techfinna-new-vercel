import React from "react";
import Hero from "./Hero";
import Specifications from "./Specifications";
import Screenshots from "./Screenshots";
import FAQ from "./FAQ";
import products from "../../data/products.json";
import DemoVideo from "../LiveDemo/DemoVideo";

const Tableau = () => {
  const currentProduct = products.filter(
    (obj) => obj.href == "/odoo-tableau-connector/"
  );
  const amount = currentProduct[0].price;
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
      reviewCount: "12",
    },
    image: "https://techfinna.com/images/blogs/odoo-tableau-connect.jpg",
    offers: {
      "@type": "Offer",
      price: "1395",
      priceCurrency: "USD",
      url: "https://techfinna.com/odoo-tableau-connector/",
    },
  };
  const meta = {
    title: "Odoo Tableau Direct Connector - Techfinna",
    desc: "One of it's kind. Directly connect Odoo with Tableau. Secure Connection. All you need to connect odoo with tableau using TechFinna's Odoo Tableau Connector. Gain deeper insights, streamline reporting, and drive informed decisions effortlessly",
    url: "https://techfinna.com/odoo-tableau-connector/",
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
          <DemoVideo title={`Odoo to Tableau Connector with WDC 3.0 | Easy Odoo Data Integration for Tableau`}
          youtubeLink={`https://www.youtube.com/watch?v=uMDbeoHVRVQ`}
          bannerImage={`/images/blogs/odoo-tableau-connect.jpg`}
          duration={`1:38`}
          ></DemoVideo>
          <Specifications></Specifications>
          <Screenshots></Screenshots>
          <FAQ></FAQ>
        </div>
      </div>
    </>
  );
};

export default Tableau;
