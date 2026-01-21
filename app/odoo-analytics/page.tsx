import { Metadata } from "next";
import AnalyticsPage from "@/components/Analytics";

export const metadata: Metadata = {
  title: "Odoo Analytics",
  description:
    "Enhance your data analytics with Techfinna's Google BigQuery Odoo Connector. Seamlessly integrate Odoo with BigQuery for real-time data insights, improved reporting, and powerful analytics. Transform your business intelligence today.",
};

const Analytics = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <AnalyticsPage />
    </div>
  );
};

export default Analytics;
