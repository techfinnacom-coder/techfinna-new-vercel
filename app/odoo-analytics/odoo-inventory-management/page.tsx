import Inventory from "@/components/Dashboards/inventory/Inventory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Odoo Inventory Management - Dashboard",
  description:
    "Optimize your inventory with Odoo's powerful management tools. Track stock, automate processes, and improve efficiency with seamless inventory control and real-time analytics",
};
const LookerPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <Inventory />
    </div>
  );
};

export default LookerPage;
