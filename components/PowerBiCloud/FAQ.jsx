"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

const Questions = [
  {
    que: "What does the PowerBI Cloud Connector with AI do?",
    ans: "It lets you build one clean dataset inside Odoo, preview rows as you pick fields, and push the result straight to Power BI Cloud. Power BI Desktop reads it as a semantic model, and AI can draft your first dashboard."
  },
  {
    que: "How do I set it up?",
    ans: "Install the module in Odoo, create your dataset by selecting fields (we follow foreign keys), then configure the Power BI connection and push. The dataset appears in your Power BI workspace."
  },
  {
    que: "Which Odoo versions and editions are supported?",
    ans: "Supported versions: 15.0 through 19.0. Works with both Community and Enterprise."
  },
  {
    que: "Is my data secure?",
    ans: "Your data stays in your Odoo and Power BI accounts. The connector uses your authenticated connections; no external data copies are required beyond the push you control."
  },
  {
    que: "Where can I get support?",
    ans: "Email us at info@techfinna.com and we’ll get back to you as soon as possible."
  }
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
