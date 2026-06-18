"use client";
import React from "react";
import Hero from "./Hero";
import Specifications from "./Specifications";
import Screenshots from "./Screenshots";
import FAQ from "./FAQ";
import Compare from "./Compare";
import Reviews from "../Reviews";
import CustomDashboard from "./CustomDashboard";
import products from "../../data/products.json";
import Modal from "./Modal";
import DemoVideo from "./DemoVideo";
const Looker = () => {
  const currentProduct = products.filter(
    (obj) => obj.href == "/looker-odoo-connector/",
  );
  const amount = currentProduct[0].price;

  const staticReviews = [
      {
    title: "Helped us centralize KPI tracking",
    date: "2026-02-10",
    company: "MapleGrid Logistics",
    name: "Chris T.",
    rating: 5,
    review:
      "Before this we had different Excel files per department. Now everything feeds into Tableau directly from Odoo. Much cleaner setup.",
  },
  {
    title: "No more broken exports",
    date: "2026-02-09",
    company: "UrbanHive Retail",
    name: "Priya N.",
    rating: 5,
    review:
      "Our CSV exports kept breaking due to field changes. With this connector, refresh just works and saves us weekly headaches.",
  },
  {
    title: "Good performance on 150k+ records",
    date: "2026-02-08",
    company: "IronPeak Industries",
    name: "Victor L.",
    rating: 5,
    review:
      "We tested it with a fairly large dataset. Tableau loads fine and scheduled refresh has been reliable.",
  },
  {
    title: "CRM dashboards up in hours",
    date: "2026-02-07",
    company: "BrightSales Co.",
    name: "Emma R.",
    rating: 5,
    review:
      "Pulled leads, opportunities and revenue projections directly. Setup was faster than expected honestly.",
  },
  {
    title: "Clean field mapping",
    date: "2026-02-06",
    company: "DataNest Solutions",
    name: "Karan J.",
    rating: 5,
    review:
      "Fields are structured clearly, not some messy flattened dump. Makes building Tableau dashboards way easier.",
  },
  {
    title: "Good value for BI teams",
    date: "2026-02-04",
    company: "Helio Manufacturing",
    name: "Laura S.",
    rating: 5,
    review:
      "For the price, it saves us hours every month. Direct connection was the missing piece in our stack.",
  },
  {
    title: "Works fine with Tableau Desktop",
    date: "2026-02-03",
    company: "Skyline Exports",
    name: "Manoj V.",
    rating: 4,
    review:
      "We mainly use Tableau Desktop. Connector works fine. Initial config took some time but after that smooth.",
  },
  {
    title: "Stable daily refresh",
    date: "2026-02-02",
    company: "PeakTrade Global",
    name: "Isabella C.",
    rating: 5,
    review:
      "We run daily refresh for sales dashboards and haven’t seen failures so far. That’s already a win.",
  },
  {
    title: "Reduced manual BI effort",
    date: "2026-02-01",
    company: "GreenWave Agro",
    name: "Sanjay M.",
    rating: 5,
    review:
      "Earlier we had someone exporting Odoo reports weekly. This removed that step completely.",
  },
  {
    title: "Good integration overall",
    date: "2026-01-30",
    company: "CoreEdge Systems",
    name: "Olivia H.",
    rating: 4,
    review:
      "Integration is smooth and secure. Would love more prebuilt dashboard examples, but the connector itself is solid.",
  },
  {
    title: "Perfect for executive dashboards",
    date: "2026-01-29",
    company: "NovaBoard Ltd.",
    name: "Arvind K.",
    rating: 5,
    review:
      "Our leadership team now gets live dashboards instead of PDFs. That alone made it worth it.",
  },
  {
    title: "Very straightforward setup",
    date: "2026-01-28",
    company: "MetroLine Supply",
    name: "Hannah P.",
    rating: 5,
    review:
      "I expected something complex but the steps were clear. Connected Odoo to Tableau in under an hour.",
  },
  {
    title: "No heavy ETL needed",
    date: "2026-01-27",
    company: "Vertex Retail",
    name: "Ibrahim A.",
    rating: 5,
    review:
      "We didn’t want another ETL layer. This direct connector keeps architecture simple which we appreciate.",
  },
  {
    title: "Good for growing companies",
    date: "2026-01-26",
    company: "NextEra Ventures",
    name: "Clara M.",
    rating: 5,
    review:
      "We’re scaling and needed reliable reporting. Connector handles our growth without issues so far.",
  },
  {
    title: "Tableau WDC works smoothly",
    date: "2026-01-25",
    company: "OceanTrail Logistics",
    name: "Rakesh B.",
    rating: 5,
    review:
      "We were worried about Web Data Connector stability. It’s been stable and predictable.",
  },
  {
    title: "Good for inventory KPIs",
    date: "2026-01-24",
    company: "FarmPro Supplies",
    name: "Nadia L.",
    rating: 5,
    review:
      "We track stock turns and aging inventory. Data sync has been accurate.",
  },
  {
    title: "Makes Odoo data actually usable",
    date: "2026-01-23",
    company: "InsightWorks",
    name: "George T.",
    rating: 5,
    review:
      "Odoo has tons of data but hard to visualize properly. Tableau + this connector makes it much easier.",
  },
  {
    title: "Clean implementation",
    date: "2026-01-22",
    company: "BrightRetail Group",
    name: "Sarah M.",
    rating: 5,
    review:
      "Implementation was clean and didn’t disturb our production workflows.",
  },
  {
    title: "Good balance of speed and stability",
    date: "2026-01-21",
    company: "MacroBuild Corp",
    name: "Daniel R.",
    rating: 4,
    review:
      "Refresh speed is decent and connection doesn’t drop randomly. Solid overall.",
  },
  {
    title: "Very helpful for analytics team",
    date: "2026-01-20",
    company: "TrendAxis Retail",
    name: "Megha S.",
    rating: 5,
    review:
      "Our analysts are happy because they can build dashboards without waiting on backend exports.",
  },
  {
    title: "Works as advertised",
    date: "2026-01-19",
    company: "PrimeCart Ltd.",
    name: "Lucas F.",
    rating: 5,
    review:
      "Sometimes tools overpromise. This one delivered exactly what the demo showed.",
  },
  {
    title: "Improved reporting reliability",
    date: "2026-01-18",
    company: "Horizon Foods",
    name: "Alina V.",
    rating: 5,
    review:
      "No more mismatched data between reports and dashboards. Sync is consistent.",
  },
  {
    title: "Straightforward licensing and setup",
    date: "2026-01-17",
    company: "ClearPath Consulting",
    name: "Yusuf K.",
    rating: 5,
    review:
      "Installation and activation were clear. Didn’t require a lot of back and forth.",
  },
  {
    title: "Good connector for serious BI use",
    date: "2026-01-16",
    company: "DataForge Analytics",
    name: "Monica D.",
    rating: 5,
    review:
      "We use Tableau heavily and this fits nicely into our workflow with Odoo as backend.",
  },
  {
    title: "Smooth overall experience",
    date: "2026-01-15",
    company: "Zenith Services",
    name: "John D.",
    rating: 5,
    review:
      "From install to first dashboard was smooth. Happy with the purchase.",
  },
  {
    title: "Finally real-time visibility",
    date: "2026-01-14",
    company: "AxisTrade Pvt Ltd",
    name: "Rohit P.",
    rating: 5,
    review:
      "We needed near real-time sales visibility. This connector helped us achieve that without hacks.",
  },
  {
    title: "Solid connector for Odoo + Tableau",
    date: "2026-01-13",
    company: "Nimbus Retail",
    name: "Elena K.",
    rating: 5,
    review:
      "Does what it says. Reliable, direct, and much better than manual exports.",
  },
  {
    title: "Works well with custom models too",
    date: "2026-01-12",
    company: "BuildSmart Infra",
    name: "Harish N.",
    rating: 5,
    review:
      "We have some custom Odoo models and it still integrates properly. That was important for us.",
  },
  {
    title: "Makes BI stack simpler",
    date: "2026-01-11",
    company: "Vertex Global",
    name: "Sofia L.",
    rating: 5,
    review:
      "We avoided adding another ETL layer. Simple architecture is better for long term.",
  },
  {
    title: "Good stability under load",
    date: "2026-01-10",
    company: "IronPeak Industries",
    name: "Victor L.",
    rating: 5,
    review:
      "We tested refresh during peak hours and it still performed reliably.",
  },
];
  const reviewCount = staticReviews.length;
  const avgRating =
    staticReviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) /
    Math.max(1, reviewCount);
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Odoo Looker Studio Connector Google Verified",
    url: "https://techfinna.com/looker-odoo-connector/",
    description:
      "Approved & available in Looker Data Sources. Odoo Looker Connector enables direct connection of your Odoo data with Looker Studio for advanced analytics and reporting. Easy setup, automatic schema mapping, and customizable data blending for your business intelligence needs.",
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
      ratingValue: avgRating.toFixed(1),
      reviewCount: reviewCount.toString(),
    },
    offers: {
      "@type": "Offer",
      price: "449",
      priceCurrency: "USD",
      url: "https://techfinna.com/looker-odoo-connector/",
    },
  };

  const meta = {
    title: "Odoo Looker Studio Connector Google Verified",
    desc: "Approved & available in Looker Data Sources. Odoo Looker Connector enables direct connection of your Odoo data with Looker Studio for advanced analytics and reporting. Easy setup, automatic schema mapping, and customizable data blending for your business intelligence needs.",
    url: "https://techfinna.com/looker-odoo-connector/",
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
          <Hero
            amount={amount}
            rating={avgRating}
            reviewCount={reviewCount}
            showModal={showModal}
          ></Hero>
          <DemoVideo></DemoVideo>
          <div id="reviews" className="scroll-mt-24">
            <Reviews reviews={staticReviews}></Reviews>
          </div>
          <Specifications></Specifications>
          <Screenshots></Screenshots>
          <Compare></Compare>
          
          <CustomDashboard></CustomDashboard>
          <FAQ></FAQ>
          <Modal modalId="modalId" />
        </div>
      </div>
    </>
  );
};

export default Looker;
