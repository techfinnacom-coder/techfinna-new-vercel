import { Metadata } from "next";
import Reconciliation from "@/components/Payment/Reconciliation";

export const metadata: Metadata = {
  title: "Checkout Page - Odoo Manual Reconciliation Connector",
  description:
    "Secure checkout for purchase of Odoo Manual Reconciliation Connecter by Techfinna. Connect your odoo data directly with odoo looker, verified by Google.",
};

export default function paymentPage() {
  return (
    <main className="w-full mx-auto overflow-hidden  text-white text-center rounded-md pt-[80px] md:pt-[80px]">
      <Reconciliation></Reconciliation>
    </main>
  );
}
