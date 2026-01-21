import ContactPage from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Techfinna",
  description:
    "Get in touch with us to learn more about our Odoo connectors, custom dashboards, and React integrations. Our team is ready to help you streamline data connections with Power BI, Tableau, Looker, and Google Sheets",
};

const ContacePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <ContactPage />
    </div>
  );
};

export default ContacePage;
