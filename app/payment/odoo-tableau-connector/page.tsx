import { Metadata } from "next";
import Tableau from "@/components/Payment/Tableau";

export const metadata: Metadata = {
  title: "Checkout Page - Odoo Tableau Connector",
  description:
    "Secure checkout for purchase of Odoo Tableau Connecter by Techfinna. Connect your odoo data directly with odoo looker. Ranked as the best product to connect with tableau",
};

export default function paymentPage() {
  return (
    <main className="w-full mx-auto overflow-hidden  text-white text-center rounded-md pt-[80px] md:pt-[80px]">
      <Tableau></Tableau>
    </main>
  );
}
