import React from "react";
import Hero from "./Hero";
import Specifications from "./Specifications";
import FAQ from "./FAQ";
import Compare from "./Compare"
import Reviews from "../Reviews"
import PowerbiPricing from "../PowerBI/PowerbiPricing";
import products from "../../data/products.json";

const AdvanceBI = () => {
   const currentProduct = products.filter(
     (obj) => obj.href == "/odoo-powerbi-advance-connector/"
   );
   const basicConnector = products.filter(
     (obj) => obj.href == "/odoo-powerbi-connector/"
   );

   const staticReviews = [
  {
    title: "Handled our complex reporting",
    date: "2026-02-22",
    company: "Apex Industrial Systems",
    name: "Marcus D.",
    rating: 5,
    review:
      "We needed more control over how data is pulled from Odoo, especially for complex joins. The advanced connector gave us that flexibility. Not super basic setup but works solid once configured.",
  },
  {
    title: "Good for heavy datasets",
    date: "2026-02-21",
    company: "MetroLine Distribution",
    name: "Harsh V.",
    rating: 5,
    review:
      "Our database is pretty large and the normal methods were slow. This handled large volume better than expected. Refresh times improved noticeably.",
  },
  {
    title: "Custom queries made life easier",
    date: "2026-02-20",
    company: "NorthBridge Retail",
    name: "Anita P.",
    rating: 4,
    review:
      "We needed specific fields that weren’t straightforward in standard reports. Being able to customize queries helped us shape the data exactly how we wanted in Power BI.",
  },
  {
    title: "Not for beginners but powerful",
    date: "2026-02-19",
    company: "Zenith Parts Co.",
    name: "Laura H.",
    rating: 4,
    review:
      "It’s definitely more advanced and took some time to understand. If you’re not familiar with data models it can feel overwhelming at first. After setup though, it performs well.",
  },
  {
    title: "Multi database reporting works",
    date: "2026-02-18",
    company: "BlueHarbor Group",
    name: "Ahmed K.",
    rating: 5,
    review:
      "We manage separate Odoo databases and needed consolidated reporting. This helped us combine data inside Power BI without manual exports.",
  },
  {
    title: "Improved performance for us",
    date: "2026-02-17",
    company: "TruAxis Industrial",
    name: "Monica L.",
    rating: 4,
    review:
      "Compared to our earlier setup, data loads are more stable. Some initial tuning was required but after that it runs fine.",
  },
  {
    title: "Better control over data structure",
    date: "2026-02-16",
    company: "Fusion Retail Group",
    name: "Ethan B.",
    rating: 5,
    review:
      "We wanted more granular control instead of default tables. This version gave us flexibility which we didn’t have before. Feels more suited for serious reporting teams.",
  },
];
  const reviewCount = staticReviews.length;
  const avgRating =
    staticReviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) /
    Math.max(1, reviewCount);
   const amount = currentProduct[0].price;
   const basicConnectorAmount = basicConnector[0].price;
   const advanceConnectorDiscountAmount = currentProduct[0].offerPrice;
 
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Odoo PowerBI Advance Connector",
    url: "https://techfinna.com/odoo-powerbi-advance-connector/",
    description:
      "The Odoo PowerBI Advance Connector by TechFinna provides a smooth, direct link between Odoo and PowerBI, allowing quick, efficient data transfer for advanced analytics. This in-demand connector ensures seamless, secure integration of your Odoo data into PowerBI, eliminating the need for any intermediate server or application",
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
      price: "1400",
      priceCurrency: "USD",
      url: "https://techfinna.com/odoo-powerbi-advance-connector/",
    },
  };
  const meta = {
    title: "Odoo PowerBI Advance Connector - Techfinna",
    desc: "Advance features PowerBI Odoo connector with basic connector with the seamless integration of TechFinna's Odoo PowerBI Connector. Gain deeper insights, streamline reporting, and drive informed decisions effortlessly",
    url: "https://techfinna.com/odoo-powerbi-advance-connector/",
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
          <Hero amount={amount}      rating={avgRating}
            reviewCount={reviewCount}></Hero>
          <Compare></Compare>
          <Specifications></Specifications>
           <div id="reviews" className="scroll-mt-24">
            <Reviews
              reviews={staticReviews}
              avgRating={avgRating}
              reviewCount={reviewCount}
            ></Reviews>
          </div>
          <PowerbiPricing
            powerbiPricing = {basicConnectorAmount}
            advanceConnectorAmount={amount}
            advanceConnectorDiscountAmount={advanceConnectorDiscountAmount}
          ></PowerbiPricing>
          <FAQ></FAQ>
        </div>
      </div>
    </>
  );
};

export default AdvanceBI;
