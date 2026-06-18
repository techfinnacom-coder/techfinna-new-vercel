import { Metadata } from "next";
import QlikConnector from "@/components/QlikConnector/QlikConnector";

export const metadata: Metadata = {
  title: "Odoo Qlik Connector",
  description:
    "The Odoo Qlik Connector by TechFinna provides a smooth, direct link between Odoo and Qlik, allowing quick, efficient data transfer for advanced analytics. This in-demand connector ensures seamless, secure integration of your Odoo data into Qlik, eliminating the need for any intermediate server or application",
};
const QlickDoc = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <QlikConnector />
    </div>
  );
};

export default QlickDoc;
