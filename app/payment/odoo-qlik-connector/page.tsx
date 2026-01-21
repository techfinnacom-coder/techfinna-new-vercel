import { Metadata } from "next";
import Qlik from "@/components/Payment/Qlik";

export const metadata: Metadata = {
  title: "Checkout Page - Odoo Qlik Connector",
  description:
    "Secure checkout for purchase of Odoo Qlik Connecter by Techfinna. Connect your odoo data directly with odoo microsoft Qlik",
};

export default function paymentPage() {
  return (
    <main className="w-full mx-auto overflow-hidden  text-white text-center rounded-md pt-[80px] md:pt-[80px]">
      <Qlik></Qlik>
    </main>
  );
}
