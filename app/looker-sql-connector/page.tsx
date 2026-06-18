import LookerAddOn from "@/components/LookerAddOn/LookerAddOn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Odoo Looker SQL Connector - Add On Module",
  description:
    "Integrate Looker with Odoo using our SQL connector for real-time data insights. Streamline reporting, optimize decision-making, and enhance your business analytics effortlessly",
};
const LookerSql = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <LookerAddOn />
    </div>
  );
};

export default LookerSql;
