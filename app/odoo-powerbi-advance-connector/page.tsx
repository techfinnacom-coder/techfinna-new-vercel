import AdvanceBI from "@/components/AdvanceBI/AdvanceBI";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Odoo PowerBI Advance Connector - TechFinna",
  description:
    "Advance features PowerBI Odoo connector with basic connector with the seamless integration of TechFinna's Odoo PowerBI Connector. Gain deeper insights, streamline reporting, and drive informed decisions effortlessly",
};
const PowerBIDoc = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <AdvanceBI />
    </div>
  );
};

export default PowerBIDoc;
