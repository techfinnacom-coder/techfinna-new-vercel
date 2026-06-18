import { Metadata } from "next";
import ExcelConnector from "@/components/Payment/ExcelConnector";

export const metadata: Metadata = {
  title: "Checkout Page - Odoo Excel Connector",
  description:
    "Secure checkout for purchase of Odoo Excel Connector by Techfinna. View ER diagram of your odoo tables. Connect your microsoft excel directly with odoo data model",
};

export default function paymentPage() {
  return (
    <main className="w-full mx-auto overflow-hidden  text-white text-center rounded-md pt-[80px] md:pt-[80px]">
      <ExcelConnector></ExcelConnector>
    </main>
  );
}
