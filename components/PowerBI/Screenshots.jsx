import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Screenshots() {
  const data = [
    {
      step: "1. Open PowerBI Desktop",
      context: `PowerBI should be installed in your device in order to run this connector. Create a Blank Report.`,
      content: (
        <div className="my-2 flex-col flex gap-4">
          <img
            className="shadow-lg"
            src="/images/powerbi/powerbi1.png"
            width="700px"
          />
        </div>
      ),
    },

    {
      title: "Third Step",
      step: "2. Create Connection between Odoo & PowerBI",
      context: `Search & select Odoo Connector by TechFinna`,
      content: (
        <div className="my-2 flex flex-col gap-4">
          <img
            className="shadow-lg"
            src="/images/powerbi/powerbi3.png"
            width="700px"
          />
          <img
            className="shadow-lg"
            src="/images/powerbi/powerbi4.png"
            width="700px"
          />
        </div>
      ),
    },
    {
      title: "Final Step",
      step: "3. Select Tables",
      context: `Import multiple tables and fetch the data in PowerBI`,
      content: (
        <div className="my-2 flex flex-col gap-4">
          <img
            className="shadow-lg"
            src="/images/powerbi/powerbi5.png"
            width="700px"
          />
        </div>
      ),
    },
    {
      title: "Final Step",
      step: "4. Voila!🎉 Connection Successful",
      context: `Import multiple tables and fetch the data in PowerBI`,
      content: (
        <div className="my-2 flex flex-col gap-4">
          <img
            className="shadow-lg"
            src="/images/powerbi/exported.png"
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
              src="/images/powerbi/powerbi-logo.png"
              width={"60px"}
              alt="odoo tableau connector"
            />
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
              <h3 className="md:hidden block text-center text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {prod.step}
              </h3>
              <p className="md:hidden">{prod.context}</p>
              {prod.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
