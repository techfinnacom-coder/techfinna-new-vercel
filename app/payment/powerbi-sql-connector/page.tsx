import { Metadata } from "next";
import PowerBISql from "@/components/Payment/PowerBISql";

export const metadata: Metadata = {
  title: "Checkout Page - Odoo PowerBI SQL Connector",
  description:
    "Secure checkout for purchase of Odoo PowerBI SQL Connecter by Techfinna. Execute complex SQL queries. Connect your odoo data directly with odoo PowerBISql",
};

export default function paymentPage() {
  return (
    <main className="w-full mx-auto overflow-hidden  text-white text-center rounded-md pt-[80px] md:pt-[80px]">
      <PowerBISql></PowerBISql>
    </main>
  );
}
