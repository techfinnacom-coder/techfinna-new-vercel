import GoogleSheet from "@/components/Googlesheet/Googlesheet";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spreadsheet Odoo Connector - TechFinna",
  description:
    "Effortlessly sync data between Odoo and Google Sheets with our powerful connector. Automate data flows, streamline reporting, and enhance productivity by integrating your business operations with ease",
};
const GoogleSheetPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <GoogleSheet />
    </div>
  );
};

export default GoogleSheetPage;
