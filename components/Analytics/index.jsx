import React from "react";
import Hero from "./Hero";
import Dashboards from "./Dashboards";
import Features from "./Features";
import Contact from "../Home/Contact";
import SearchProduct from "./SearchProduct";
import Hero2 from "./Hero2";
const AnalyticsPage = () => {
  const meta = {
    title: "Odoo Analytics",
    desc: "Enhance your data analytics with Techfinna's Google BigQuery Odoo Connector. Seamlessly integrate Odoo with BigQuery for real-time data insights, improved reporting, and powerful analytics. Transform your business intelligence today",
    url: "https://techfinna.com/odoo-analytics/",
  };
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Techfinna",
    url: "https://techfinna.com/odoo-analytics/",
    logo: "https://techfinna.com/logo.png",
    // contactPoint: {
    //   "@type": "ContactPoint",
    //   telephone: "+91 98057 27667",
    //   contactType: "Customer Support",
    //   email: "info@techfinna.com",
    // },
    sameAs: [
      "https://www.linkedin.com/company/techfinna",
      "https://twitter.com/techfinna",
    ],
    description:
      "Techfinna provides comprehensive Odoo Analytics with powerful KPI dashboards. Increase productivity by 10x with our customizable charts and graphs, team collaboration, and self-hosting options. We prioritize data privacy and offer dedicated customer support.",
    foundingDate: "2020",
    founders: [
      {
        "@type": "Person",
        name: "Nikhil Agarwal",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "In the Clouds",
      addressCountry: "Global",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://techfinna.com/odoo-analytics/",
    },
    service: {
      "@type": "Service",
      name: "Odoo Analytics",
      url: "https://techfinna.com/odoo-analytics/",
      description:
        "Techfinna offers advanced Odoo Analytics solutions with customizable dashboards, extensive chart options, and robust team collaboration features.",
      provider: {
        "@type": "Organization",
        name: "Techfinna",
        url: "https://techfinna.com/",
      },
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
      <Hero />
      <div className="w-full">
        <Features />
        <SearchProduct />
        <Dashboards />
        <Contact />
        {/* <Hero2 /> */}
      </div>
    </>
  );
};

export default AnalyticsPage;
