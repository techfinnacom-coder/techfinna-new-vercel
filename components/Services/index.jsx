import React from "react";
import Head from "next/head";
import HeroService from "./HeroService";
import OdooReactService from "./OdooReactService";
import ThirdService from "./ThirdService";
import FeaturesSecond from "./FeaturesSecond";
import FeaturesFirst from "./FeaturesFirst";
import FeaturesThird from "./FeaturesThird";
import Contact from "../Home/Contact";

const ServicePage = () => {
  const meta = {
    title: "Odoo Services Analytics",
    desc: "Explore Techfinna's services in Odoo Connectors, Odoo Analytics, and React Applications. We provide top-tier solutions including Odoo Looker Studio Connector, Odoo BigQuery Connector, Power BI Connector, Spreadsheet Connector, and more to enhance your business efficiency.",
    url: "https://techfinna.com/odoo-services/",
  };
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechFinna",
    url: "https://techfinna.com/",
    logo: "https://techfinna.com/images/techfinna-logo.png",
    description:
      "Explore Techfinna's services in Odoo Connectors, Odoo Analytics, and React Applications. We provide top-tier solutions including Odoo Looker Studio Connector, Odoo BigQuery Connector, Power BI Connector, Spreadsheet Connector, and more to enhance your business efficiency.",
    sameAs: [
      "https://www.linkedin.com/company/techfinna",
      "https://www.youtube.com/@tech-finna",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "info@techfinna.com",
    },
  };
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <link rel="canonical" href={meta.url} />

        {/* <!-- Basic meta tags --> */}
        <meta name="robots" content="INDEX,FOLLOW" />

        {/* <!-- Facebook meta tags --> */}
        <meta name="og:title" content={meta.title} />
        <meta name="og:description" content={meta.desc} />

        <meta property="og:url" content={meta.url} />

        {/* <!-- Twtitter meta tags --> */}
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.desc} />
        <meta property="twitter:url" content={meta.url} />
      </head>

      <HeroService></HeroService>
      <FeaturesFirst></FeaturesFirst>
      <OdooReactService></OdooReactService>
      <ThirdService></ThirdService>
      {/* lets get started section */}
      <div className="text-center pt-20 px-28">
        <h1 className="text-4xl font-extrabold text-black">
          Let<span className="font-normal">'</span>s Get Started
          <span className="font-normal">!</span>
        </h1>
        <p className="py-5 text-[15px] font-light text-[#464154]">
          Enhance your company's performance with Techfinna's modules and
          services. Let's embark on a journey towards greater success together
        </p>
      </div>
      <Contact></Contact>
    </>
  );
};

export default ServicePage;
