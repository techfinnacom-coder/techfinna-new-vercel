import React from "react";
import SpreadsheetDemo from "@/components/SpreadsheetDemo/SpreadsheetDemo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo - Odoo Googlesheets Connector",
  description:
    "View/Edit a demo connection between odoo and google sheets made by Techfinna, access all odoo data using this connector into google sheets",
};

const GoogleSpreadsheet = () => {
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-between pt-[30px]">
      <SpreadsheetDemo></SpreadsheetDemo>
    </div>
  );
};

export default GoogleSpreadsheet;
