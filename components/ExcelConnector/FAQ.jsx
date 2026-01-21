"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  const Questions = [
    {
      que: "How do I set up the Excel Connector for Odoo?",
      ans: `  To start using the Excel Connector, input your Odoo Backend URL and Access Token in the taskpane interface. This will establish the connection between your Excel environment and Odoo.`,
    },
    {
      que: `  What methods can I use to fetch data from Odoo to Excel?`,
      ans: `  The Excel Connector allows you to retrieve data in two ways: by importing entire tables or by executing specific SQL queries. This offers versatility in how you handle data extraction based on your needs.`,
    },
    {
      que: `Is it possible to perform real-time data updates with the Excel Connector?`,
      ans: `It provides the latest data from your odoo tables at the time of connection creation. After connection, the updates in odoo database will need a fresh connection `,
    },
    {
      que: `I need help regarding the module. How can I get help?`,
      ans: ` Feel free to reach out at info@techfinna.com. Our team is available to discuss your needs and offer customized solutions.`,
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
