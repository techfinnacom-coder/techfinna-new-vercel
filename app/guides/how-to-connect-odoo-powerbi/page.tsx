import React from "react";
import { Metadata } from "next";
import PowerBiGuide from "@/components/PowerBiGuide/PowerBiGuide"

export const metadata: Metadata = {
  title: "How to Connect Odoo to PowerBI Guide",
  description:
    "Learn how to connect Odoo with Power BI in this comprehensive guide. Unlock powerful analytics and reporting capabilities by integrating your business data seamlessly",
};

const page = () => {
  const meta = {
    title: "How to Connect Odoo to PowerBI Guide",
    desc: "Learn how to connect Odoo with Power BI in this comprehensive guide. Unlock powerful analytics and reporting capabilities by integrating your business data seamlessly",
    url: "https://techfinna.com/guides/how-to-connect-odoo-powerbi/",
  };
  return (
    <>
      <head>
        <link rel="canonical" href={meta.url} />
        {/* <!-- Basic meta tags --> */}
        <meta name="robots" content="INDEX,FOLLOW" />n
        {/* <!-- Facebook meta tags --> */}
        <meta name="og:title" content={meta.title} />
        <meta name="og:description" content={meta.desc} />
        <meta property="og:url" content={meta.url} />
        {/* <!-- Twtitter meta tags --> */}
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.desc} />
        <meta property="twitter:url" content={meta.url} />
      </head>
      <PowerBiGuide></PowerBiGuide>
    </>
  );
};

export default page;
