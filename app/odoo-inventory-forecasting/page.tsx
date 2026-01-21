
import Inventory from "@/components/Inventory/Inventory";
export const metadata = {
  title: "Inventory Forecasting",
  description:
    "Approved & available in Looker Data Sources. Odoo Looker Connector enables direct connection of your Odoo data with Looker Studio for advanced analytics and reporting. Easy setup, automatic schema mapping, and customizable data blending for your business intelligence needs.",
  openGraph: {
    title: "Inventory Forecasting",
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
    title: "Inventory Forecasting",
    description:
      "Approved & available in Looker Data Sources. Odoo Looker Connector enables direct connection of your Odoo data with Looker Studio for advanced analytics and reporting. Easy setup, automatic schema mapping, and customizable data blending for your business intelligence needs.",
    images: ["https://techfinna.com/images/blogs/odoo-looker-connector.jpeg"],
  },
};

const InventoryPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 md:pt-24 md:px-24">
      <Inventory />
    </div>
  );
};

export default InventoryPage;
