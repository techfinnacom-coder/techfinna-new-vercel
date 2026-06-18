import { Metadata } from "next";
import SearchProducts from "@/components/SearchProducts/SearchProducts";

export const metadata: Metadata = {
  title: "Search Products",
  description:
    "The Odoo PowerBI Sql Connector by TechFinna provides a smooth, direct link between Odoo and PowerBI Sql, allowing quick, efficient data transfer for advanced analytics. This in-demand connector ensures seamless, secure integration of your Odoo data into Qlik, eliminating the need for any intermediate server or application",
};
const QlickDoc = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <SearchProducts />
    </div>
  );
};

export default QlickDoc;
