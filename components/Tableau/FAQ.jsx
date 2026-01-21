"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <div className="flex flex-col  my-12 w-[90%] mx-auto">
      <div className="max-w-7xl  px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          FAQ's
        </h2>
        {/* <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            Scroll to connect Odoo with Tableau
          </p> */}
      </div>
      <div id="accordionFlushExample">
        {/* Question 1 */}
        <div className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200 w-4/5 m-auto">
          <h2 className="mb-0" id="flush-headingOne">
            <button
              className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-lg font-bold transition hover:z-[2] focus:z-[3] focus:outline-none"
              onClick={() => toggleQuestion(1)}
            >
              What is the benefit of using this Odoo-Tableau connector?
              <span
                className={`ml-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out ${
                  openQuestion === 1 ? "rotate-180" : ""
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
              openQuestion === 1 ? "max-h-[200px]" : "max-h-0"
            }`}
          >
            <div className="py-4 px-5 text-base">
              This connector allows you to seamlessly integrate Odoo’s ERP data
              with Tableau’s powerful data visualization and analytics tools. By
              using this integration, you can easily create dynamic dashboards,
              perform real-time data analysis, and make more informed business
              decisions based on Odoo's comprehensive operational data.
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200 w-4/5 m-auto">
          <h2 className="mb-0" id="flush-headingTwo">
            <button
              className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-lg font-bold transition hover:z-[2] focus:z-[3] focus:outline-none"
              onClick={() => toggleQuestion(2)}
            >
              Is this connector compatible with all versions of Odoo and
              Tableau?
              <span
                className={`ml-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out ${
                  openQuestion === 2 ? "rotate-180" : ""
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
              openQuestion === 2 ? "max-h-[200px]" : "max-h-0"
            }`}
          >
            <div className="py-4 px-5 text-base">
              The connector is designed to be compatible with most versions of
              Odoo and Tableau. However, it is recommended to check the specific
              version compatibility for both platforms to ensure optimal
              performance. We offer support to help guide you through the setup
              for your specific version.
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200 w-4/5 m-auto">
          <h2 className="mb-0" id="flush-headingTwo">
            <button
              className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-lg font-bold transition hover:z-[2] focus:z-[3] focus:outline-none"
              onClick={() => toggleQuestion(3)}
            >
              Do I need technical expertise to use the Odoo-Tableau connector?
              <span
                className={`ml-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out ${
                  openQuestion === 3 ? "rotate-180" : ""
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
              openQuestion === 3 ? "max-h-[200px]" : "max-h-0"
            }`}
          >
            <div className="py-4 px-5 text-base">
              No, the connector is designed for ease of use and can be set up
              with zero technical knowledge. A simple installation process
              ensures that you can quickly connect your Odoo database to
              Tableau. For advanced users, additional customization options are
              available to meet more specific needs, and our support team is
              always here to assist you.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
