import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Screenshots() {
  const data = [
    {
      step: "1. Open Looker Studio Datasources",
      context: `Navigate & select Odoo Connecter by Techfinna`,
      content: (
        <div className="my-2 flex-col flex gap-4">
          <img
            className="shadow-lg"
            src="/images/lookers/main.png"
            width="700px"
            alt="find odoo in looker studio datasources"
          />
        </div>
      ),
    },

    {
      step: "2. Enter Credentials from Odoo",
      context: `On the connector setup screen, you’ll be prompted to enter the Connector URL and Token provided by Looker Connector Module installed on Odoo. `,
      content: (
        <div className="my-2 flex flex-col gap-4">
          <img
            className="shadow-lg"
            src="/images/lookers/selectconnector.png"
            width="700px"
          />
        </div>
      ),
    },
    {
      step: "3. Select Odoo Tables",
      context: `Select the Odoo tables you want to fetch in Google Looker Studio`,
      content: (
        <div className="my-2 flex flex-col gap-4">
          <img
            className="shadow-lg"
            src="/images/lookers/connectorurl.png"
            width="700px"
          />
        </div>
      ),
    },
    {
      step: "4. Verify Table Schema!🎉 Connection Successful",
      context: `Looker friendly schema, you can make tweaks for custom reportings`,
      content: (
        <div className="my-2 flex flex-col gap-4">
          <img
            className="shadow-lg"
            src="/images/lookers/connections.png"
            width="700px"
          />
          <img
            className="shadow-lg"
            src="/images/lookers/lookerDash.png"
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
              alt="odoo logo"
            />
            <span>with</span>
            <img
              src="/images/lookers/looker-logo.png"
              width={"40px"}
              alt="odoo looker connection"
            />
          </div>
        </div>
        <div className="hidden md:block">
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
    </div>
  );
}
