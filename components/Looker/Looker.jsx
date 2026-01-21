"use client";
import React from "react";
import Hero from "./Hero";
import Specifications from "./Specifications";
import Screenshots from "./Screenshots";
import FAQ from "./FAQ";
import Compare from "./Compare";
import Reviews from "./Reviews";
import CustomDashboard from "./CustomDashboard";
import products from "../../data/products.json";
import Modal from "./Modal";
import DemoVideo from "./DemoVideo";
const Looker = () => {
  const currentProduct = products.filter(
    (obj) => obj.href == "/looker-odoo-connector/"
  );
  const amount = currentProduct[0].price;
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Odoo Looker Studio Connector Google Verified",
    url: "https://techfinna.com/looker-odoo-connector/",
    description:
      "Approved & available in Looker Data Sources. Odoo Looker Connector enables direct connection of your Odoo data with Looker Studio for advanced analytics and reporting. Easy setup, automatic schema mapping, and customizable data blending for your business intelligence needs.",
    applicationCategory: "Data Analytics",
    operatingSystem: "All",
    softwareVersion: "1.0",
    author: {
      "@type": "Organization",
      name: "TechFinna",
      url: "https://techfinna.com/",
      logo: "https://techfinna.com/images/techfinna-logo.png",
    },
    image: "https://techfinna.com/images/blogs/odoo-looker-connector.jpeg",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "85",
    },
    offers: {
      "@type": "Offer",
      price: "449",
      priceCurrency: "USD",
      url: "https://techfinna.com/looker-odoo-connector/",
    },
  };

  const meta = {
    title: "Odoo Looker Studio Connector Google Verified",
    desc: "Approved & available in Looker Data Sources. Odoo Looker Connector enables direct connection of your Odoo data with Looker Studio for advanced analytics and reporting. Easy setup, automatic schema mapping, and customizable data blending for your business intelligence needs.",
    url: "https://techfinna.com/looker-odoo-connector/",
    img: "https://techfinna.com/images/blogs/odoo-looker-connector.jpeg",
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

        {/* <!-- Twtitter meta tags --> */}
        <meta name="twitter:title" content={meta.title} />
        <meta property="twitter:url" content={meta.url} />
        <meta name="twitter:description" content={meta.desc} />
      </head>
      <div className="md:mx-32 mx-5 text-black pt-10 space-y-48 mt-4 mb-12 w-full">
        <div className="flex flex-col ">
          <Hero amount={amount} showModal={showModal}></Hero>
          <DemoVideo></DemoVideo>
          <Specifications></Specifications>
          <Screenshots></Screenshots>
          <Compare></Compare>
          <Reviews></Reviews>
          <CustomDashboard></CustomDashboard>
          <FAQ></FAQ>
          <Modal modalId="modalId" />
        </div>
      </div>
    </>
  );
};

export default Looker;
