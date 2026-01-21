import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Screenshots() {
  const data = [
    {
      step: "1. Open Tableau",
      context: `After installation, open the shorcut created on the desktop.Search for "Odoo Connector by Techfinna"`,
      content: (
        <div className="my-2 flex-col flex gap-4">
          <img
            className="shadow-lg"
            src="/images/tableau/shortcut.png"
            width="700px"
          />
          <img
            className="shadow-lg"
            src="/images/tableau/odooconn.jpg"
            width="700px"
          />
        </div>
      ),
    },
    {
      step: "2. URL & Token",
      context: `Generate URL & Token from your Odoo and paste it in Odoo Tableau Connector by Techfinna`,
      content: (
        <div className="my-2 flex flex-col gap-4">
          <img
            className="shadow-lg"
            src="/images/tableau/odooinst.jpg"
            width="700px"
          />
          <img
            className="shadow-lg"
            src="/images/tableau/getdata.jpg"
            width="700px"
          />
        </div>
      ),
    },
    {
      title: "Third Step",
      step: "3. Select Tables",
      context: `Search & select multiple tables to load data in Tableau`,
      content: (
        <div className="my-2">
          <img
            className="shadow-lg"
            src="/images/tableau/details.jpg"
            width="700px"
          />
        </div>
      ),
    },
    {
      title: "Final Step",
      step: "4. Congratulations ! 🎉 Analyze Odoo data in Tableau",
      context: `By using this connector, you can fetch all your Odoo data in Tableau`,
      content: (
        <div className="my-2">
          <img
            className="shadow-lg"
            src="/images/tableau/tables.jpg"
            width="700px"
          />
        </div>
      ),
    },
  ];
  return (
    <div className="flex justify-evenly items-center my-20 w-[90%] mx-auto">
      <div className="w-full flex flex-col w-full text-left justify-start items-start">
        <div className="max-w-7xl  px-4 md:px-8 lg:px-10">
          <div className=" flex flex-col w-fit">
            <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
              Screenshots
            </h2>
            <hr className="h-[2px] bg-gray-300 rounded-lg w-[60%] mx-auto"></hr>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-center md:items-center md:pl-2 mt-4 text-xl">
            <span>Scroll down to connect</span>
            <img
              src="/images/odoo_logo.png"
              width={"100px"}
              height={"30px"}
              alt="odoo tableau connector"
            />
            <span>with</span>
            <img
              src="/images/tableau/tableau-icon.svg"
              width={"60px"}
              alt="odoo tableau connector"
            />
          </div>
        </div>
        <Timeline data={data} />
      </div>
    </div>
  );
}
