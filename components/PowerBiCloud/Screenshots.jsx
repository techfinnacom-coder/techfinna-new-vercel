import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Screenshots() {
  const data = [
    {
      step: "1. Open PowerBI Cloud (AI) in Odoo and start building Dataset",
      context:
        "Go to Apps → PowerBI Cloud (AI). Start a new dataset and pick the Odoo models/fields you want.",
      content: (
        <div className="my-2 flex flex-col gap-4">
          <img
            className="shadow-lg"
            src="/images/pbi-cloud/1.png"
            width="700px"
            alt="Open PowerBI Cloud AI and start dataset builder"
          />
        </div>
      ),
    },
    {
      step: "2. Preview & Validate Rows",
      context:
        "Use the live preview to validate joins and filters before creating a dataset. Adjust selections as needed.",
      content: (
        <div className="my-2 flex flex-col gap-4">
          <img
            className="shadow-lg"
            src="/images/pbi-cloud/2.jpg"
            width="700px"
            alt="Live row preview while building dataset"
          />
        </div>
      ),
    },
    {
      step: "3. Configure Power BI Export",
      context:
        "Choose your Power BI Workspace, dataset name, and export options. Authenticate if prompted.",
      content: (
        <div className="my-2 flex flex-col gap-4">
          <img
            className="shadow-lg"
            src="/images/pbi-cloud/3.webp"
            width="700px"
            alt="Configure workspace and dataset for Power BI export"
          />
        </div>
      ),
    },
    {
      step: "4. Simply generate and export for analysis",
      context:
        "Publish the dataset to Power BI Cloud. You’ll see a success message once rows are pushed.",
      content: (
        <div className="my-2 flex flex-col gap-4">
          <img
            className="shadow-lg"
            src="/images/pbi-cloud/4.jpeg"
            width="700px"
            alt="Dataset export success screen"
          />
        </div>
      ),
    },
    {
      step: "5. AI creates a dashboard using the dataset you built",
      context:
        " The published dataset is ready—start building visuals.",
      content: (
        <div className="my-2 flex flex-col gap-4">
          <img
            className="shadow-lg"
            src="/images/pbi-cloud/5.jpg"
            width="700px"
            alt="Dataset visible in Power BI workspace with starter report"
          />
        </div>
      ),
    },
    {
      step: "6. Apply advance filters and use AI to create new charts/dashboards",
      context:
        "Use the AI starter to auto-generate an initial dashboard you can tweak further.",
      content: (
        <div className="my-2 flex flex-col gap-4">
          <img
            className="shadow-lg"
            src="/images/pbi-cloud/6.png"
            width="700px"
            alt="AI-generated first dashboard"
          />
        </div>
      ),
    },
    
  ];

  return (
    <div className="flex justify-evenly items-center my-20 w-[90%] mx-auto">
      <div className="w-full flex flex-col text-left justify-start items-start">
        <div className="max-w-7xl px-4 md:px-8 lg:px-10">
          <div className="flex flex-col w-fit">
            <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
              Screenshots
            </h2>
            <hr className="h-[2px] bg-gray-300 rounded-lg w-[60%] mx-auto" />
          </div>

          <div className="flex flex-wrap gap-4 md:justify-center md:items-center md:pl-2 mt-4 text-xl">
            <span>Scroll down to create AI powered dashboards with </span>
            <img
              src="/images/odoo_logo.png"
              width={"100px"}
              height={"30px"}
              alt="Odoo logo"
            />
          
          </div>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:block">
          <Timeline data={data} />
        </div>

        {/* Mobile stacked view */}
        <div className="md:hidden w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative pr-4 md:pl-4 my-4 flex flex-col justify-center items-center text-center"
            >
              <h3 className="md:hidden block text-2xl mb-2 font-bold text-neutral-600 dark:text-neutral-400 w-full text-left">
                {item.step}
              </h3>
              <p className="md:hidden mb-2 text-neutral-700 dark:text-neutral-300">
                {item.context}
              </p>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
