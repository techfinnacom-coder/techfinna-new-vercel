import PowerBI from "@/components/PowerBI/PowerBI";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Odoo PowerBI Direct Connector - TechFinna",
  description:
    "Unlock the full potential of your Odoo data with the seamless integration of TechFinna's Odoo PowerBI Connector. Gain deeper insights, streamline reporting, and drive informed decisions effortlessly",
};
const PowerBIDoc = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden p-6 md:p-24">
      <PowerBI />
    </div>
  );
};

export default PowerBIDoc;
