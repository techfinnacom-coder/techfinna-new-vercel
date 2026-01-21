import { Metadata } from "next";
import DataModel from "@/components/Payment/DataModel";

export const metadata: Metadata = {
  title: "Checkout Page - Odoo Data Model",
  description:
    "Secure checkout for purchase of Odoo Data Model by Techfinna. View ER diagram of your odoo tables. Connect your odoo data directly with odoo data model",
};

export default function paymentPage() {
  return (
    <main className="w-full mx-auto overflow-hidden  text-white text-center rounded-md pt-[80px] md:pt-[80px]">
      <DataModel></DataModel>
    </main>
  );
}
