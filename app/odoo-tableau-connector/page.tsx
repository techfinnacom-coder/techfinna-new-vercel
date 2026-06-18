import { Metadata } from "next";
import Tableau from "@/components/Tableau/Tableau";

export const metadata: Metadata = {
  title: "Odoo Tableau Connector",
  description:
    "The Odoo Tableau Connector by TechFinna provides a smooth, direct link between Odoo and Tableau, allowing quick, efficient data transfer for advanced analytics. This in-demand connector ensures seamless, secure integration of your Odoo data into Tableau, eliminating the need for any intermediate server or application",
  openGraph: {
    title: "Odoo Looker Connector Google Verified",
    description:
      "The Odoo Tableau Connector by TechFinna provides a smooth, direct link between Odoo and Tableau, allowing quick, efficient data transfer for advanced analytics. This in-demand connector ensures seamless, secure integration of your Odoo data into Tableau, eliminating the need for any intermediate server or application",
    url: "https://techfinna.com/odoo-tableau-connector/",
    images: [
      {
        url: "https://techfinna.com/images/blogs/odoo-tableau-connect.jpg",
        width: 1200,
        height: 630,
        alt: "Odoo Tableau Connector - Directly connect Odoo with Tableau",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odoo Looker Connector Google Verified",
    description:
      "The Odoo Tableau Connector by TechFinna provides a smooth, direct link between Odoo and Tableau, allowing quick, efficient data transfer for advanced analytics. This in-demand connector ensures seamless, secure integration of your Odoo data into Tableau, eliminating the need for any intermediate server or application",
    images: ["https://techfinna.com/images/blogs/odoo-tableau-connect.jpg"],
  },
};
const TableauDoc = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <Tableau />
    </div>
  );
};

export default TableauDoc;
