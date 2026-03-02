"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  const Questions = [
    {
      que: "Does the connector ensure compatibility with Power BI for data exports?",
      ans: `  Yes, the data exported using the connector is formatted with the correct schema and data types, allowing it to function smoothly within Power BI’s environment.`,
    },
    {
      que: `  Can I pull information from multiple Odoo tables with this tool?`,
      ans: `  Definitely! The connector allows users to extract data from various Odoo tables and bring it together in Power BI effortlessly.`,
    },
    {
      que: `How can I refresh data within Power BI Desktop?`,
      ans: `Just hit the refresh button in Power BI Desktop, and all tables used in your report will be updated with the latest data.`,
    },
    {
      que: ` Is it possible to upload reports from Power BI Desktop to Power BI Service or the Cloud?`,
      ans: `Yes, reports created in Power BI Desktop can be easily published to Power BI Service or the Cloud, facilitating better sharing and collaboration.`,
    },
    {
      que: `Is a paid Power BI subscription required to use this connector?`,
      ans: `No, a paid subscription is not necessary. Our connector is fully functional with Power BI’s free version, making it accessible to all users.`,
    },
    {
      que: `Where can I find step-by-step installation instructions for this connector?`,
      ans: `Visit https://techfinna.com/powerbi-installation for detailed guidance on how to install the connector.`,
    },
    {
      que: `I have specific needs for my Power BI reports. How can I get help?`,
      ans: ` If you have particular requirements for your Power BI reports, feel free to reach out at info@techfinna.com. Our team is available to discuss your needs and offer customized solutions.`,
    },
  ];

  return (
    <div className="flex flex-col  my-12 w-[90%] mx-auto">
      <div className="max-w-7xl  px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          FAQ's
        </h2>
      </div>
      <div id="accordionFlushExample">
        {Questions.map((question, index) => (
          <div className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200 w-4/5 m-auto">
            <h2 className="mb-0" id="flush-headingOne">
              <button
                className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-lg font-bold transition hover:z-[2] focus:z-[3] focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                {question.que}
                <span
                  className={`ml-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out ${
                    openQuestion === index ? "rotate-180" : ""
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                </span>
              </button>
            </h2>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openQuestion === index ? "max-h-[200px]" : "max-h-0"
              }`}
            >
              <div className="py-4 px-5 text-base">{question.ans}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
