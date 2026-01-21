import { Metadata } from "next";
import Byteloom from "@/components/Byteloom/Byteloom";

export const metadata: Metadata = {
  title: "Odoo AI Powered Dashboard - Byteloom ",
  description:
    "Build one clean dataset in Odoo, preview as you build, use AI automation to create datasets and view powereful insights dashboard. Supports Odoo 15-19.",
  openGraph: {
    title: "Odoo AI Powered Dashboard - Byteloom",
    description:
      "Build one clean dataset in Odoo, preview as you build, use AI automation to create datasets and view powereful insights dashboard. Supports Odoo 15-19.",
    url: "https://techfinna.com/byteloom/",
    images: [
      {
        // Replace this with your final OG image if needed
        url: "https://techfinna.com/images/aiPowered/banner.png",
        width: 1200,
        height: 630,
        alt: "Odoo → AI powered dashboards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odoo AI Powered Dashboard - Byteloom",
    description:
      "Build one clean dataset in Odoo, preview as you build, use AI automation to create datasets and view powereful insights dashboard. Supports Odoo 15-19.",
    images: ["https://techfinna.com/images/aiPowered/banner.png"],
  },
};

const AiPoweredDashboard = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 md:pt-24 md:px-24">
      <Byteloom />
    </div>
  );
};

export default AiPoweredDashboard;
