import React from "react";
import { Timeline } from "@/components/ui/timeline";
 
export default function Screenshots() {
    const data = [
    {
      step: "1. Choose Marketplace",
      context: `Pick the marketplace you want to forecast on.`,
      content: (
        <div className="my-2 flex-col flex gap-4 items-center">
          <img
            className="shadow-lg w-[100%]"
            src="/images/inventory/marketplaces1.png"
            alt="choose marketplace for inventory forecasting"
          />
        </div>
      ),
    },
    {
      step: "2. Change Vendor & Forecasting months",
      context: `Switch to a vendor & select the forecasting window (e.g., for next 6 months).`,
      content: (
        <div className="my-2 flex flex-col  gap-4 items-center">
          <video
            className="shadow-lg w-[100%]"
            src="/images/inventory/change-vendor.mp4"
            
             autoPlay
            loop
            muted
          />
        </div>
      ),
    },
  
    {
      step: "3. View History, Inventory (main) & Forecast Tables",
      context: `Review History, Inventory (main), and Forecast tables. Tip: edit override run-rate to play around with the forecasting.`,
      content: (
       <div className="my-2 flex flex-col  gap-4 items-center">
          <video
            className="shadow-lg w-[100%]"
            src="/images/inventory/main-table.mp4"
            autoPlay
            loop
            muted
          />
        </div>
      ),
    },

    {
      step: "4. Create RFQ in an instant",
      context: `Once satisfied with the forecast, select the products you want to create RFQ for from the forecast screen to streamline your procurement process.`,
      content: (
        <div className="my-2 flex flex-col  gap-4 items-center">
          <video
            className="shadow-lg w-[100%]"
            src="/images/inventory/create-rfq.mp4"
            
             autoPlay
            loop
            muted
          />
        </div>
      ),
    },
    {
      step: "5. Exciting Features",
      context: `Edit Override Run-Rate, Customize Row Colors, Drag & Drop Columns, Advanced Search etc`,
      content: (
        <div className="my-2 flex flex-col  gap-4 items-center">
          <video
            className="shadow-lg w-[100%]"
            src="/images/inventory/exciting-features.mp4"
            
             autoPlay
            loop
            muted
          />
        </div>
      ),
    },
     {
      step: "6. Export Excel Report",
      context: `Export your forecast data to Excel for further analysis and reporting.`,
      content: (
        <div className="my-2 flex-col flex gap-4 items-center">
          <img
            className="shadow-lg w-[100%] mx-auto"
            src="/images/inventory/export-data.png"
            alt="choose marketplace for inventory forecasting"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col justify-evenly items-center my-20 w-[90%] mx-auto">
      <div className="w-full flex flex-col w-full text-left justify-start items-start">
        <div className="max-w-7xl  px-4 md:px-8 lg:px-10">
          <div className=" flex flex-col w-fit">
            <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
              Screenshots
            </h2>
            <hr className="h-[2px] bg-gray-300 rounded-lg w-[60%] mx-auto"></hr>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-center md:items-center md:pl-2 mt-4 text-xl">
            <span>Scroll down to explore the forecasting flow</span>
            <img
              src="/images/odoo_logo.png"
              width={"100px"}
              height={"30px"}
              alt="odoo logo"
            />
            <span>— Inventory Forecasting</span>
            {/* <img
              src="/images/lookers/looker-logo.png"
              width={"40px"}
              alt="inventory forecasting visual"
            /> */}
          </div>
        </div>
        <div className="hidden md:block w-full mx-auto">
          <Timeline data={data} />
        </div>
        <div className="md:hidden">
          {data.map((prod, index) => (
            <div
              key={index}
              className="relative  pr-4 md:pl-4 my-4 flex flex-col justify-center items-center text-center"
            >
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {prod.step}
              </h3>
              <p className="md:hidden">{prod.context}</p>
              {prod.content}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full text-left justify-center items-center">
        <div className="max-w-7xl  px-4 md:px-8 lg:px-2">
          <div className=" flex flex-col w-fit">
            <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
              Advanced Filters
            </h2>
            <hr className="h-[2px] bg-gray-300 rounded-lg w-[60%] mx-auto"></hr>
          </div>
        </div>
 
        <div className="flex flex-col justify-center items-center mt-6">
          <p className="font-semibold text-xl">
            Quickly locate specific products using advanced filtering options by
            category, vendor, and more.
          </p>
          <ul className="mb-4 list-disc text-lg mt-4 space-y-1">
            <li>View/Hide History, Center, Forecast table columns</li>
            <li>Filter inventory by categories or vendors</li>
            <li>Search any specific product using global search option.</li>
          </ul>
          <img
            alt="advance filters in inventory forecasting"
            src="/images/inventory/advanceFilters.jpg"
            width="700px"
          />
        </div>
      </div>
    </div>
  );
}