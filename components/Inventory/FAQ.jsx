"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  const Questions = [
    {
      que: "What unique features does Odoo Inventory Management & Forecasting offer?",
      ans: `This module lets you choose marketplace(s), change vendor, set forecasting months, edit seasonality & buffer, and define lead times. You can review History, Inventory (main), and Forecast tables, and fine-tune results by editing the override run-rate. Auto-generated SQL means no writing required. Extras include Excel export, filters, and row highlighting.`,
    },
    {
      que: `How do I install and configure it?`,
      ans: `Install the module from the Odoo Apps menu. Open the module → choose marketplace and (optionally) change vendor → pick the forecasting months → set seasonality, buffer, and lead time → save. When reviewing results, adjust the override run-rate to update the forecast—no SQL needed.`,
    },
    {
      que: `What are the prerequisites and supported versions?`,
      ans: `Works with Odoo v12.0 through v18.0 (Community & Enterprise). Ensure the user has appropriate access rights to Inventory/Sales/Purchase models to view data. Manager/Administrator rights are recommended for initial setup.`,
    },
    {
      que: `How is my data kept secure?`,
      ans: `Everything runs inside your Odoo instance—data stays in your database. The module respects Odoo’s access control (users, groups, record rules). Any exposed actions use token-based protection (where applicable). No third-party data sharing is required.`,
    },
    {
      que: `Where can I get help or see a demo?`,
      ans: `Reach out at info@techfinna.com (or WhatsApp +91 62309 27667). For a quick look, use the “Live Demo” button on this page.`,
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
      {/* <p className="text-center">
        <a className="text-blue-500" href="/looker-odoo-connector/privacy/">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a className="text-blue-500" href="/looker-odoo-connector/terms/">
          Terms &amp; Condition
        </a>
      </p> */}
    </div>
  );
};

export default FAQ;
