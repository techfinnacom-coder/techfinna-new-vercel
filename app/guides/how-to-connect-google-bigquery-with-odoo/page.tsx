import BigQueryDoc from "@/components/BigQueryDoc";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google BigQuery Connector - Techfinna",
  description:
    "Learn how to seamlessly connect Google BigQuery with Odoo. Follow our step-by-step guide to integrate data, enabling advanced analytics and powerful business insights with ease.",
};
const BigqueryDocPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-4 md:p-24">
      <BigQueryDoc />
    </div>
  );
};

export default BigqueryDocPage;
