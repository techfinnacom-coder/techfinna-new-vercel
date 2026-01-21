import { Metadata } from "next";
import Bigquery from "@/components/Payment/Bigquery";

export const metadata: Metadata = {
  title: "Checkout Page - Odoo Google Bigquery Connector",
  description:
    "Secure checkout for purchase of Odoo Google Bigquery Connecter by Techfinna. Connect your odoo data directly with google bigquery, verified by Google.",
};

export default function paymentPage() {
  return (
    <main className="w-full mx-auto overflow-hidden  text-white text-center rounded-md pt-[80px] md:pt-[0px]">
      <Bigquery></Bigquery>
    </main>
  );
}
