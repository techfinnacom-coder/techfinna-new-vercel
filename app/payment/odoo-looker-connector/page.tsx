import { Metadata } from "next";
import Looker from "@/components/Payment/Looker";

export const metadata: Metadata = {
  title: "Checkout Page - Odoo Looker Connector",
  description:
    "Secure checkout for purchase of Odoo Looker Connecter by Techfinna. Connect your odoo data directly with odoo looker, verified by Google.",
};

export default function paymentPage() {
  return (
    <main className="w-full mx-auto overflow-hidden  text-white text-center rounded-md pt-[80px] md:pt-[80px]">
      <Looker></Looker>
    </main>
  );
}
