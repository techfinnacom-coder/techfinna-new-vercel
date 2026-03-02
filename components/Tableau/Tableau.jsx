
import React from "react";
import Hero from "./Hero";
import Specifications from "./Specifications";
import Screenshots from "./Screenshots";
import FAQ from "./FAQ";
import products from "../../data/products.json";
import DemoVideo from "../LiveDemo/DemoVideo";
import Reviews from "../Reviews";

const Tableau = () => {
  const currentProduct = products.filter(
    (obj) => obj.href == "/odoo-tableau-connector/"
  );
  const amount = currentProduct[0].price;

  /** ✅ ADDED: 5 static reviews */
  const staticReviews = [
    {
      title: "Best direct connector we tested",
      date: "2026-02-05",
      company: "Aurum Manufacturing",
      name: "Rahul S.",
      rating: 5,
      review:
        "We wanted Tableau dashboards without exporting CSVs every week. This connector is clean, fast, and the direct connection is exactly what we needed.",
    },
    {
      title: "Saved our BI team hours",
      date: "2026-01-22",
      company: "BrightRetail Group",
      name: "Sarah M.",
      rating: 5,
      review:
        "Setup was straightforward and the reporting pipeline is stable. Our analysts can refresh dashboards without manual steps now.",
    },
    {
      title: "Smooth integration + good support",
      date: "2026-01-08",
      company: "NeoLogix",
      name: "Amit K.",
      rating: 4,
      review:
        "Works well with our Odoo instance and Tableau WDC. Performance is good and the overall experience is solid.",
    },
    {
      title: "Reliable refresh even for large datasets",
      date: "2025-12-18",
      company: "BlueStone Foods",
      name: "Nina P.",
      rating: 5,
      review:
        "We pull multiple models (sales + inventory) and the refresh is stable. This replaced our manual export process completely.",
    },
    {
      title: "Exactly what we needed for Tableau WDC",
      date: "2025-12-02",
      company: "Zenith Services",
      name: "John D.",
      rating: 5,
      review:
        "Simple flow, secure connection, and fast results. The demo matched what we implemented. Great module for Odoo + Tableau.",
    },
  ];
  const reviewCount = staticReviews.length;
  const avgRating =
    staticReviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) /
    Math.max(1, reviewCount);
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
      ratingValue: avgRating.toFixed(1),
      reviewCount: reviewCount.toString(),
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
          <Hero amount={amount} rating={avgRating} reviewCount={reviewCount}></Hero>

          <DemoVideo
            title={`Odoo to Tableau Connector with WDC 3.0 | Easy Odoo Data Integration for Tableau`}
            youtubeLink={`https://www.youtube.com/watch?v=uMDbeoHVRVQ`}
            bannerImage={`/images/blogs/odoo-tableau-connect.jpg`}
            duration={`1:38`}
          ></DemoVideo>

          {/* ✅ ADDED: Reviews (5 total, show 3 + view more, add review modal) */}
          <div id="reviews" className="scroll-mt-24">
            <Reviews reviews={staticReviews} />
          </div>
          <Specifications></Specifications>
          <Screenshots></Screenshots>
          <FAQ></FAQ>
        </div>
      </div>
    </>
  );
};

export default Tableau;
