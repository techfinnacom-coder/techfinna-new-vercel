import { Metadata } from "next";
import Looker from "@/components/Looker/Looker";
export const metadata = {
  title: "Odoo Looker Studio Connector Google Verified",
  description:
    "Approved & available in Looker Data Sources. Odoo Looker Connector enables direct connection of your Odoo data with Looker Studio for advanced analytics and reporting. Easy setup, automatic schema mapping, and customizable data blending for your business intelligence needs.",
  openGraph: {
    title: "Odoo Looker Connector Google Verified",
    description:
      "Approved & available in Looker Data Sources. Odoo Looker Connector enables direct connection of your Odoo data with Looker Studio for advanced analytics and reporting. Easy setup, automatic schema mapping, and customizable data blending for your business intelligence needs.",
    url: "https://techfinna.com/looker-odoo-connector/",
    images: [
      {
        url: "https://techfinna.com/images/blogs/odoo-looker-connector.jpeg",
        width: 1200,
        height: 630,
        alt: "Odoo Looker Connector - Direct connection of Odoo data with Looker Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odoo Looker Connector Google Verified",
    description:
      "Approved & available in Looker Data Sources. Odoo Looker Connector enables direct connection of your Odoo data with Looker Studio for advanced analytics and reporting. Easy setup, automatic schema mapping, and customizable data blending for your business intelligence needs.",
    images: ["https://techfinna.com/images/blogs/odoo-looker-connector.jpeg"],
  },
};

const LookerPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between ">
      <Looker />
    </div>
  );
};

export default LookerPage;
