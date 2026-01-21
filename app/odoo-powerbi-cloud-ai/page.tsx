import { Metadata } from "next";
import PowerBiCloud from "@/components/PowerBiCloud/PowerBiCloud";

export const metadata: Metadata = {
  title: "PowerBI Cloud Connector with AI ",
  description:
    "Build one clean dataset inside Odoo, live-preview rows as you pick fields, and push to Power BI Cloud. AI drafts your first dashboard. Supports Odoo 15–19 (Community & Enterprise).",
  openGraph: {
    title: "PowerBI Cloud Connector with AI",
    description:
      "Build one clean dataset inside Odoo, live-preview rows as you pick fields, and push to Power BI Cloud. AI drafts your first dashboard. Supports Odoo 15–19.",
    url: "https://techfinna.com/byteloom/",
    images: [
      {
        // Replace this with your final OG image if needed
        url: "https://techfinna.com/images/powerbi/powerbi-cloud-ai-og.jpg",
        width: 1200,
        height: 630,
        alt: "Odoo → Power BI Cloud Connector with AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PowerBI Cloud Connector with AI",
    description:
      "Build one clean dataset in Odoo, preview as you build, and export to Power BI Cloud. AI drafts your first dashboard.",
    images: ["https://techfinna.com/images/powerbi/powerbi-cloud-ai-og.jpg"],
  },
};

const PowerBiCloudPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 md:pt-24 md:px-24">
      <PowerBiCloud />
    </div>
  );
};

export default PowerBiCloudPage;
