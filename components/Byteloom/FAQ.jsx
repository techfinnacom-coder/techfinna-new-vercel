"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

const Questions = [
  {
    que: "What is the Byteloom Generative Dashboard for Odoo?",
    ans: `It's an AI-powered dashboard builder inside Odoo. You pick (or auto-generate) a dataset and the app drafts a complete dashboard with charts and KPIs that you can keep, tweak, or rebuild—no SQL needed.`,
  },
  {
    que: "How does it work end-to-end?",
    ans: `1) Start a dataset from the app. 2) Or let AI/templates select the right fields for you. 3) Instantly view an AI-generated dashboard. 4) Add or edit charts. 5) Drag to re-arrange the layout. 6) Apply advanced/global filters. 7) Use AI again to create new charts or whole dashboards.`,
  },
  {
    que: "Do I need to write SQL or create joins manually?",
    ans: `No. The dataset builder lets you click through Odoo models/fields; joins and schema are handled for you.`,
  },
  {
    que: "Can I start from templates?",
    ans: `Yes. Pick a ready-made template (e.g., Sales, Inventory, Finance). The app auto-selects fields and drafts an initial dashboard you can customize.`,
  },
  {
    que: "What can I customize in the dashboard?",
    ans: `Add/edit charts and KPIs, change measures/dimensions, rename tiles, drag-drop to reflow the layout, and save multiple versions per dataset.`,
  },
  {
    que: "How are filters handled?",
    ans: `Use quick filters and advanced/global filters (date ranges, companies, products, partners, etc.). Filters can be saved with the dashboard.`,
  },
  {
    que: "Where does my data live? Is it secure?",
    ans: `Everything runs inside your Odoo instance; no external warehouse is required. The module respects Odoo access rights (companies, record rules, user permissions). Your data never leaves Odoo unless you export it.`,
  },
  {
    que: "Which Odoo versions are supported?",
    ans: `Odoo 15.0 through 19.0, Community and Enterprise, on Odoo Online, Odoo.sh, or On-Premise.`,
  },
  {
    que: "What are the prerequisites?",
    ans: `An Odoo instance with the business apps you want to analyze (e.g., Sales, Invoicing, Inventory) and a user with access to those models. No BI tooling is required.`,
  },
  {
    que: "Can I reuse a dataset for multiple dashboards?",
    ans: `Yes. Build once and create as many dashboards as you like from the same dataset.`,
  },
  {
    que: "Does it work with multi-company setups?",
    ans: `Yes. It respects your allowed companies; you can also filter and compare across companies if you have permission.`,
  },
  {
    que: "Is there support or a demo available?",
    ans: `Absolutely. Reach us at info@techfinna.com for support or a guided demo.`,
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
