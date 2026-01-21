import React from "react";
import ExcelConnector from "@/components/ExcelConnector/ExcelConnector";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Odoo Excel Connector",
  description:
    "Intuitive Graphical Chart View , you can effortlessly visualize Table Relationships, Execute Custom SQL Queries, and Extract Excel Sheet.Embrace the convenience of detailed data insights, all within your Odoo environment.",
};

const OdooDataModel = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <ExcelConnector />
    </div>
  );
};

export default OdooDataModel;
