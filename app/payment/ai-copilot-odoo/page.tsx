import { Metadata } from "next";
import Copilot from "@/components/Payment/Copilot";

export const metadata: Metadata = {
  title: "Checkout Page - AI Copilot for Odoo",
  description:
    "Secure checkout for purchase of AI Copilot for Odoo by Techfinna. Complete your purchase with confidence and enjoy the benefits of our powerful AI Copilot for Odoo.",
};

export default function paymentPage() {
  return (
    <main className="w-full mx-auto overflow-hidden  text-white text-center rounded-md pt-[80px] md:pt-[80px]">
      <Copilot></Copilot>
    </main>
  );
}
