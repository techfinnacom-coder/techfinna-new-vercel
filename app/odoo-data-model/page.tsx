import React from "react";
import DataModel from "@/components/DataModel/DataModel";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Odoo Data Model",
  description:
    "Intuitive Graphical Chart View , you can effortlessly visualize Table Relationships, Execute Custom SQL Queries, and Extract Excel Sheet.Embrace the convenience of detailed data insights, all within your Odoo environment.",
};

const OdooDataModel = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-12">
      <DataModel></DataModel>
    </div>
  );
};

export default OdooDataModel;
