"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  const Questions = [
    {
      que: "What makes the Odoo Power BI Advance Connector different from the standard connector?",
      ans: "The Advance Connector offers additional features like automatic scheduled refresh and the ability to execute complex SQL queries, providing more flexibility and efficiency for data analysis.",
    },
    {
      que: "Does the Advance Connector support automatic scheduled refresh?",
      ans: "Yes, the Advance Connector allows you to set up automatic scheduled refreshes, ensuring that your Power BI reports always display the latest data without manual intervention.",
    },
    {
      que: "Can I execute complex SQL queries directly using the connector?",
      ans: "Absolutely! The Advance Connector gives you the liberty to execute complex SQL queries, enabling more customized and in-depth data retrieval from Odoo.",
    },
    {
      que: "Is the Advance Connector compatible with Power BI's free version?",
      ans: "Yes, the Advance Connector is fully compatible with Power BI's free version, ensuring accessibility for all users without requiring a paid subscription.",
    },
    {
      que: "Where can I find more information about the Odoo Power BI Advance Connector?",
      ans: "You can visit https://techfinna.com/odoo-powerbi-advance-connector/ for detailed information about the product and its features.",
    },
    {
      que: "Can I combine data from multiple Odoo tables with the Advance Connector?",
      ans: "Yes, the Advance Connector allows you to pull data from various Odoo tables and seamlessly combine it in Power BI for a comprehensive view.",
    },
    {
      que: "How can I ensure my Power BI reports stay up-to-date with the latest Odoo data?",
      ans: "With the Advance Connector's automatic scheduled refresh feature, your Power BI reports are updated regularly without the need for manual refreshes.",
    },
    {
      que: "What should I do if I have unique data analysis requirements with the Advance Connector?",
      ans: "If you have specific requirements, reach out to our team at info@techfinna.com. We’ll help tailor the connector to your needs and provide expert support.",
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
                  className={`ml-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out ${openQuestion === index ? "rotate-180" : ""
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
              className={`transition-all duration-500 ease-in-out overflow-hidden ${openQuestion === index ? "max-h-[200px]" : "max-h-0"
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
