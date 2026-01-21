import { Metadata } from "next";
import AdvanceBI from "@/components/Payment/AdvanceBI";

export const metadata: Metadata = {
  title: "Checkout Page - Odoo PowerBI Advance Connector",
  description:
    "Secure checkout for purchase of Odoo PowerBI Advance Connecter by Techfinna. Connect your odoo data directly with odoo looker, verified by Google.",
};

export default function paymentPage() {
  return (
    <main className="w-full mx-auto overflow-hidden  text-white text-center rounded-md pt-[80px] md:pt-[80px]">
      <AdvanceBI></AdvanceBI>
    </main>
  );
}
