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
import DemoVideo from "../LiveDemo/DemoVideo";
const PowerBiCloud = () => {
  const currentProduct = products.filter(
    (obj) => obj.href == "/odoo-powerbi-cloud-ai/"
  );
  const amount = currentProduct[0].price;
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PowerBI Cloud Connector with AI",
    url: "https://techfinna.com/odoo-powerbi-cloud-ai/",
    description:
     "Build one clean dataset inside Odoo, live-preview rows as you pick fields, and push to Power BI Cloud. AI drafts your first dashboard. Supports Odoo 15–19 (Community & Enterprise).",
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
      reviewCount: "15",
    },
    offers: {
      "@type": "Offer",
      price: "190",
      priceCurrency: "USD",
      url: "https://techfinna.com/odoo-powerbi-cloud-ai/",
    },
  };

  const meta = {
    title: "PowerBI Cloud Connector with AI",
    desc: "Build one clean dataset inside Odoo, live-preview rows as you pick fields, and push to Power BI Cloud. AI drafts your first dashboard. Supports Odoo 15–19 (Community & Enterprise).",
    url: "https://techfinna.com/odoo-powerbi-cloud-ai/",
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
          <DemoVideo youtubeLink={'https://www.youtube.com/watch?v=CV_P9oVIdno'} 
            bannerImage={`/images/pbi-cloud/videoThumbnail.jpg`}
            title={`Odoo Power BI Connector with AI Dataset Creation`}
            duration={`0:31`}
          ></DemoVideo>
          <Specifications></Specifications>
          <Screenshots></Screenshots>
          {/* <Reviews></Reviews> */}
          {/* <Compare></Compare> */}
          <CustomDashboard></CustomDashboard>
          <FAQ></FAQ>
          <Modal modalId="modalId" />
        </div>
      </div>
    </>
  );
};

export default PowerBiCloud;
