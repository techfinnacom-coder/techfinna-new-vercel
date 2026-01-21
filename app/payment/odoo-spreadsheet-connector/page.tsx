import { Metadata } from "next";
import Spreadsheet from "@/components/Payment/Spreadsheet";

export const metadata: Metadata = {
  title: "Checkout Page - Odoo Spreadsheet Connector",
  description:
    "Secure checkout for purchase of Odoo Spreadsheet Connecter by Techfinna. Connect your odoo data directly with odoo Spreadsheet, verified by Google.",
};

export default function paymentPage() {
  return (
    <main className="w-full mx-auto overflow-hidden  text-white text-center rounded-md pt-[80px] md:pt-[80px]">
      <Spreadsheet></Spreadsheet>
    </main>
  );
}
