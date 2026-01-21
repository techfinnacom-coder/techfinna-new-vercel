import { Metadata } from "next";
import Inventory from "@/components/Payment/Inventory";

export const metadata: Metadata = {
  title: "Checkout Page - Odoo Inventory Management",
  description:
    "Secure checkout for purchase of Odoo Inventory Management by Techfinna. Forecast sales data in odoo and create purchase orders automatically.",
};

export default function paymentPage() {
  return (
    <main className="w-full mx-auto overflow-hidden  text-white text-center rounded-md pt-[80px] md:pt-[80px]">
      <Inventory></Inventory>
    </main>
  );
}
