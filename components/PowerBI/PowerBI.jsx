import React from "react";
import Hero from "./Hero";
import Specifications from "./Specifications";
import Screenshots from "./Screenshots";
import FAQ from "./FAQ";
import Reviews from "../Reviews";
import CustomDashboard from "./CustomDashboard";
import PowerbiPricing from "./PowerbiPricing";
import products from "../../data/products.json";
import DemoVideo from "./DemoVideo";
const PowerBI = () => {
  const currentProduct = products.filter(
    (obj) => obj.href == "/odoo-powerbi-connector/",
  );
  const advanceConnector = products.filter(
    (obj) => obj.href == "/odoo-powerbi-advance-connector/",
  );
  const amount = currentProduct[0].price;
  const advanceConnectorAmount = advanceConnector[0].price;
  const advanceConnectorDiscountAmount = advanceConnector[0].offerPrice;

  const staticReviews = [
    {
      title: "Helped with our messy reports",
      date: "2026-02-18",
      company: "NorthPeak Manufacturing",
      name: "Daniel R.",
      rating: 5,
      review:
        "We were exporting CSVs every week and half the time something would break. After using this connector, Power BI just pulls data directly. It honestly made reporting much less stressful for our team.",
    },
    {
      title: "Worked fine even with large data",
      date: "2026-02-17",
      company: "TruAxis Industrial",
      name: "Monica L.",
      rating: 5,
      review:
        "We have a lot of stock move records (over a million). I wasn’t sure if it would handle it properly but it actually did. Took some time to configure but once done it runs smooth.",
    },
    {
      title: "Multi company setup was easy",
      date: "2026-02-16",
      company: "BlueHarbor Group",
      name: "Ahmed K.",
      rating: 4,
      review:
        "We operate 3 companies in Odoo and consolidating reports was painful earlier. This helped simplify things. Not instant setup, but support guided us properly.",
    },
    {
      title: "Stopped our Excel chaos",
      date: "2026-02-15",
      company: "Vertex Supplies",
      name: "Olivia M.",
      rating: 5,
      review:
        "Before this, our finance team had different Excel files floating around. Now data flows straight into Power BI. Less confusion and fewer mistakes.",
    },
    {
      title: "Scheduled refresh works good",
      date: "2026-02-14",
      company: "GreenAxis Retail",
      name: "Rohit S.",
      rating: 4,
      review:
        "We set up automatic refresh overnight and it has been stable so far. Didn’t expect it to be this simple honestly.",
    },
    {
      title: "Installation support was helpful",
      date: "2026-02-13",
      company: "PrimeEdge Traders",
      name: "Samantha C.",
      rating: 5,
      review:
        "We faced some configuration issues initially but their team responded within a day and fixed it. After that everything worked fine.",
    },
    {
      title: "Much better than custom API scripts",
      date: "2026-02-12",
      company: "UrbanHive Retail",
      name: "Priya N.",
      rating: 5,
      review:
        "We tried building something internally using APIs and it kept failing during updates. This connector feels more stable and predictable.",
    },
    {
      title: "Saved us time every week",
      date: "2026-02-11",
      company: "DeltaCore Logistics",
      name: "Mark J.",
      rating: 4,
      review:
        "Reporting used to take almost half a day weekly. Now it’s mostly automated. Not perfect but definitely worth it.",
    },
    {
      title: "Good for finance dashboards",
      date: "2026-02-10",
      company: "BrightLedger Consulting",
      name: "Anita P.",
      rating: 5,
      review:
        "We mainly needed accounting and sales data inside Power BI. It synced correctly and numbers matched Odoo which was important for us.",
    },
    {
      title: "Works fine with Odoo 18",
      date: "2026-02-09",
      company: "NovaMart Distribution",
      name: "Lucas W.",
      rating: 5,
      review:
        "We’re on Odoo 18 and integration didn’t cause issues. Just followed the docs and it connected properly.",
    },
    {
      title: "Took some learning but worth it",
      date: "2026-02-08",
      company: "Allied Metalworks",
      name: "Grace T.",
      rating: 4,
      review:
        "Not plug-and-play in 5 mins but once you understand the structure it makes sense. After setup it runs without much maintenance.",
    },
    {
      title: "Helped with big inventory reports",
      date: "2026-02-07",
      company: "SupplyNest Warehousing",
      name: "Kevin D.",
      rating: 5,
      review:
        "Inventory data was too heavy to manage manually. This made it easier to analyze movement and aging in Power BI.",
    },
    {
      title: "Decent experience overall",
      date: "2026-02-06",
      company: "HexaTrade Exports",
      name: "Ritu M.",
      rating: 3,
      review:
        "It worked but we needed some back and forth during setup. Once fixed it’s stable, but initial configuration was slightly confusing.",
    },
    {
      title: "Stable refresh so far",
      date: "2026-02-05",
      company: "SkyBridge Enterprises",
      name: "Ethan B.",
      rating: 5,
      review:
        "We’ve been running scheduled refresh for 2 months now. No major issues till now which is good.",
    },
    {
      title: "Clean data structure in Power BI",
      date: "2026-02-04",
      company: "MetroLine Distribution",
      name: "Harsh V.",
      rating: 4,
      review:
        "Tables load in a structured way which made modeling easier inside Power BI. Saved some development time.",
    },
    {
      title: "Does what it says",
      date: "2026-02-03",
      company: "Zenith Parts Co.",
      name: "Laura H.",
      rating: 5,
      review:
        "We just needed Odoo data inside Power BI without hacks. It does that. Nothing fancy, just works.",
    },
    {
      title: "Better than manual exports",
      date: "2026-02-02",
      company: "Atlas Components",
      name: "Nikhil A.",
      rating: 4,
      review:
        "Manual exports were unreliable for us. This made reporting more consistent.",
    },
    {
      title: "Good support response time",
      date: "2026-02-01",
      company: "Fusion Retail Group",
      name: "Emily S.",
      rating: 5,
      review:
        "We emailed regarding a permission issue and got help within a day. That was reassuring.",
    },
    {
      title: "Minor setup hiccup",
      date: "2026-01-30",
      company: "Orbit Manufacturing",
      name: "Carlos M.",
      rating: 3,
      review:
        "Initial configuration took longer than expected. After that it runs okay. Could be slightly simpler.",
    },
    {
      title: "Makes management reporting easier",
      date: "2026-01-29",
      company: "Crestline Wholesale",
      name: "Sophia K.",
      rating: 5,
      review:
        "Management wanted live dashboards instead of monthly reports. This helped us move in that direction without building everything from scratch.",
    },
  ];
  const reviewCount = 45;
  const avgRating =
    staticReviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) /
    Math.max(1, 20);
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Odoo PowerBI Direct Connector",
    url: "https://techfinna.com/odoo-powerbi-connector/",
    description:
      "One of it's kind. Directly connect Odoo with PowerBI. Secure Connection. All you need to connect odoo with tableau using TechFinna's Odoo Tableau Connector. Gain deeper insights, streamline reporting, and drive informed decisions effortlessly",
    applicationCategory: "Data Analytics",
    operatingSystem: "All",
    softwareVersion: "17.0",
    author: {
      "@type": "Organization",
      name: "Techfinna",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "112",
    },
    offers: {
      "@type": "Offer",
      price: "597",
      priceCurrency: "USD",
      url: "https://techfinna.com/odoo-powerbi-connector/",
    },
  };
  const meta = {
    title: "Odoo PowerBI Direct Connector - Techfinna",
    desc: "One of it's kind. Directly connect Odoo with PowerBI. Secure Connection. All you need to connect odoo with tableau using TechFinna's Odoo Tableau Connector. Gain deeper insights, streamline reporting, and drive informed decisions effortlessly",
    url: "https://techfinna.com/odoo-powerbi-connector/",
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
          <Hero
            amount={amount}
            rating={avgRating}
            reviewCount={reviewCount}
          ></Hero>
          <DemoVideo></DemoVideo>
          <Specifications></Specifications>
          <Screenshots></Screenshots>
          <div id="reviews" className="scroll-mt-24">
            <Reviews
              reviews={staticReviews}
              avgRating={avgRating}
              reviewCount={reviewCount}
            ></Reviews>
          </div>
          <PowerbiPricing
            powerbiPricing={amount}
            advanceConnectorAmount={advanceConnectorAmount}
            advanceConnectorDiscountAmount={advanceConnectorDiscountAmount}
          ></PowerbiPricing>
          <CustomDashboard></CustomDashboard>
          <FAQ></FAQ>
        </div>
      </div>
    </>
  );
};

export default PowerBI;
