import { Metadata } from "next";
import PowerBI from "@/components/Payment/PowerBi";

export const metadata: Metadata = {
  title: "Checkout Page - Odoo PowerBI Connector",
  description:
    "Secure checkout for purchase of Odoo PowerBI Connecter by Techfinna. Connect your odoo data directly with odoo microsoft powerbi",
};

export default function paymentPage() {
  return (
    <main className="w-full mx-auto overflow-hidden  text-white text-center rounded-md pt-[80px] md:pt-[80px]">
      <PowerBI></PowerBI>
    </main>
  );
}
