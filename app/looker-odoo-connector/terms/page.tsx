import Terms from "@/components/Terms/Terms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms Conditions - Looker Studio",
  description:
    "Terms & Conditions for Looker Stuido verified by Google to connect with Odoo. It contains all of the required details for you to abide by, while using this connector. Kindly, read this document carefully.",
};
const TermsPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Terms />
    </div>
  );
};

export default TermsPage;
