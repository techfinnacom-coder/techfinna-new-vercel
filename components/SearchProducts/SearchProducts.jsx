"use client";

import SearchProduct from "./SearchProduct";
const SearchProducts = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechFinna",
    url: "https://techfinna.com",
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
    // potentialAction: {
    //   "@type": "SearchAction",
    //   target: "https://techfinna.com/?s={search_term_string}",
    //   "query-input": "required name=search_term_string",
    // },
    product: [
      {
        "@type": "Product",
        name: "Odoo Looker Studio Connector",
        description:
          "Connect your Odoo data with Looker Studio for advanced analytics and visualization.",
        url: "https://techfinna.com/odoo-looker-studio-connector",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 5,
          reviewCount: 85,
        },
      },
      {
        "@type": "Product",
        name: "Odoo BigQuery Connector",
        description:
          "Seamlessly integrate Odoo with Google BigQuery for powerful data analytics.",
        url: "https://techfinna.com/odoo-bigquery-connector",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 4.8,
          reviewCount: 56,
        },
      },
      {
        "@type": "Product",
        name: "Odoo Power BI Connector",
        description:
          "Bring your Odoo data into Power BI for comprehensive business intelligence reporting.",
        url: "https://techfinna.com/odoo-power-bi-connector",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 4.9,
          reviewCount: 66,
        },
      },
      {
        "@type": "Product",
        name: "Odoo Spreadsheet Connector",
        description:
          "Easily transfer Odoo data to spreadsheets for flexible analysis and reporting.",
        url: "https://techfinna.com/odoo-spreadsheet-connector",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 5,
          reviewCount: 25,
        },
      },
    ],
  };
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <title>TechFinna | Odoo Connectors, Analytics & React Solutions</title>

        <link rel="canonical" href="https://techfinna.com/" />
        {/* <!-- Basic meta tags --> */}
        <meta
          name="title"
          content="TechFinna | Odoo Connectors, Analytics & React Solutions"
        />
        {/* <meta
          name="description"
          content="TechFinna excels in Odoo Connectors, Analytics, and React on Odoo. We offer Looker Studio, BigQuery, Power BI, and Spreadsheet connectors. Transform with TechFinna"
        /> */}
        <meta name="author" content="TechFinna" />
        <meta name="robots" content="INDEX,FOLLOW" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        {/* <!-- Social Media meta tags --> */}
        <meta
          name="og:title"
          property="og:title"
          content="TechFinna | Odoo Connectors, Analytics & React Solutions"
        />
        <meta property="og:url" content="https://techfinna.com/" />
        <meta
          name="og:description"
          property="og:description"
          content="TechFinna excels in Odoo Connectors, Analytics, and React on Odoo. We offer Looker Studio, BigQuery, Power BI, and Spreadsheet connectors. Transform with TechFinna"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://techfinna.com/images/techfinna-logo.png"
        />

        {/* <!-- Twtitter meta tags --> */}
        <meta
          name="twitter:title"
          content="TechFinna | Experts in Odoo Connectors, Analytics & React Solutions"
        />
        <meta property="twitter:url" content="https://techfinna.com/" />
        <meta
          property="twitter:image"
          content="https://techfinna.com/images/techfinna-logo.png"
        />

        <meta
          name="twitter:description"
          content="TechFinna excels in Odoo Connectors, Analytics, and React on Odoo. We offer Looker Studio, BigQuery, Power BI, and Spreadsheet connectors. Transform with TechFinna"
        />
      </head>

      <div className="w-full">
        <SearchProduct></SearchProduct>
      </div>
    </>
  );
};

export default SearchProducts;
