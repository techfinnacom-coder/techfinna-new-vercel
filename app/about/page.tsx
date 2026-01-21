import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Techfinna",
  description:
    "Learn about Techfinna, experts in Odoo Connectors, Odoo Analytics, and React Application. We offer solutions like Odoo Looker Studio Connector, Odoo BigQuery Connector, Power BI Connector, and more to transform your Odoo experience.",
};
const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <About />
    </div>
  );
};

export default AboutPage;
