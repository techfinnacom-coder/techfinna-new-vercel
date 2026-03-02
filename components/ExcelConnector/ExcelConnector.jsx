import React from "react";
import Hero from "./Hero";
import Specifications from "./Specifications";
import Screenshots from "./Screenshots";
import FAQ from "./FAQ";
import Compare from "./Compare";
import Reviews from "../Reviews";
import CustomDashboard from "./CustomDashboard";
import products from "../../data/products.json";

const ExcelConnector = () => {
  const currentProduct = products.filter(
    (obj) => obj.href == "/odoo-excel-connector/"
  );
  const amount = currentProduct[0].price;
  const staticReviews = [
  {
    title: "No more downloading Excel files daily",
    date: "2026-02-24",
    company: "UrbanHive Retail",
    name: "Priya N.",
    rating: 5,
    review:
      "Earlier I had to export data from Odoo almost every morning. Now Excel pulls it directly and refresh works fine. Made my routine much easier honestly.",
  },
  {
    title: "Finance team loves it",
    date: "2026-02-23",
    company: "BrightLedger Consulting",
    name: "Anita P.",
    rating: 5,
    review:
      "Our finance team is very comfortable in Excel, not so much in Odoo reporting. This connector helped bridge that gap without changing their workflow.",
  },
  {
    title: "Works well for inventory sheets",
    date: "2026-02-22",
    company: "SupplyNest Warehousing",
    name: "Kevin D.",
    rating: 4,
    review:
      "We use Excel heavily for stock analysis. Being able to connect live to Odoo reduced errors from manual copy paste. Setup was straightforward.",
  },
  {
    title: "Took some setup but stable after",
    date: "2026-02-21",
    company: "NovaMart Distribution",
    name: "Lucas W.",
    rating: 4,
    review:
      "Initial configuration needed a bit of reading but once connected, refresh has been consistent. No major issues so far.",
  },
  {
    title: "Helpful for monthly reporting",
    date: "2026-02-20",
    company: "Crestline Wholesale",
    name: "Sophia K.",
    rating: 5,
    review:
      "We prepare monthly management reports in Excel. This saved us from rebuilding sheets every time new data comes in.",
  },
  {
    title: "Not fully plug and play",
    date: "2026-02-19",
    company: "Atlas Components",
    name: "Nikhil A.",
    rating: 5,
    review:
      "It worked but we needed some help during the first connection. I got stuck in the beginning but after the support team helped, it’s been smooth sailing.",
  },
  {
    title: "Good option if your team lives in Excel",
    date: "2026-02-18",
    company: "NorthPeak Manufacturing",
    name: "Daniel R.",
    rating: 5,
    review:
      "Most of our analysts prefer Excel over dashboards. This lets them keep working the way they’re used to while still pulling real Odoo data.",
  },
];
  const reviewCount = staticReviews.length;
  const avgRating =
    staticReviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) /
    Math.max(1, reviewCount);
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Odoo Excel Connector",
    url: "https://techfinna.com/odoo-excel-connector/",
    description:
      "One of it's kind. Directly connect Odoo with Excel. Secure Connection. All you need to connect odoo with Excel using TechFinna's Odoo Excel Connector. Gain deeper insights, streamline reporting, and drive informed decisions effortlessly",
    applicationCategory: "Data Analytics",
    operatingSystem: "All",
    softwareVersion: "17.0",
    author: {
      "@type": "Organization",
      name: "Techfinna",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: reviewCount,
    },
    offers: {
      "@type": "Offer",
      price: "597",
      priceCurrency: "USD",
      url: "https://techfinna.com/odoo-excel-connector/",
    },
  };
  const meta = {
    title: "Odoo Excel Direct Connector - Techfinna",
    desc: "One of it's kind. Directly connect Odoo with Excel. Secure Connection. All you need to connect odoo with Excel using TechFinna's Odoo Excel Connector. Gain deeper insights, streamline reporting, and drive informed decisions effortlessly",
    url: "https://techfinna.com/odoo-excel-connector/",
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
          <Hero amount={amount} rating={avgRating}
            reviewCount={reviewCount}></Hero>
          <Specifications></Specifications>
          <Screenshots></Screenshots>
           <div id="reviews" className="scroll-mt-24">
                      <Reviews
                        reviews={staticReviews}
                        avgRating={avgRating}
                        reviewCount={reviewCount}
                      ></Reviews>
                    </div>
          {/* <Compare></Compare> */}
          <CustomDashboard></CustomDashboard>
          <FAQ></FAQ>
        </div>
      </div>
    </>
  );
};

export default ExcelConnector;
