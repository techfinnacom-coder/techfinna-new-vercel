import React from "react";
import Head from "next/head";
import Details from "./Details";
import Infromation from "./Infromation";
import TeamMembers from "./TeamMembers";
import Contact from "../../components/Home/Contact";
import Differemt from "./Differemt";
import Services from "../Home/Services";
import CompanyMarquee from "./CompanyMarquee";

const About = () => {
  const meta = {
    title: "About Us - Techfinna",
    desc: "Learn about Techfinna, experts in Odoo Connectors, Odoo Analytics, and React Applications. We offer solutions like Odoo Looker Studio Connector, Odoo BigQuery Connector, Power BI Connector, and more to transform your Odoo experience.",
    url: "https://techfinna.com/about/",
  };
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechFinna",
    url: "https://techfinna.com/",
    logo: "https://techfinna.com/images/techfinna-logo.png",
    description:
      "Experts in Odoo Connectors, Analytics, and React Solutions. Offering Odoo Looker Studio Connector, Odoo BigQuery Connector, Power BI Connector, Spreadsheet Connector, and more.",
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

      <Details></Details>
      <CompanyMarquee></CompanyMarquee>
      <Services></Services>
      {/* <Infromation></Infromation> */}
      <Differemt></Differemt>
      {/* <TeamMembers></TeamMembers> */}
      <Contact></Contact>
    </>
  );
};

export default About;
