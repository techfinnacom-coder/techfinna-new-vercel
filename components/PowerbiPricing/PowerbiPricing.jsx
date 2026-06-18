import React from "react";
import products from "../../data/products.json";


const PowerbiPricing = () => {
  const powerBi = products.filter(
    (obj) => obj.href == "/odoo-powerbi-connector/"
  );
  const amountPowerBi = powerBi[0].price;
  const advanceBi = products.filter(
    (obj) => obj.href == "/odoo-powerbi-advance-connector/"
  );
  const amountAdvancePowerBi = advanceBi[0].price;
  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden ">
        <div className="text-center py-4 mt-12">
          <h2 className="text-3xl md:text-5xl font-extrabold my-4 text-black flex text-center justify-center items-center gap-4">
            Odoo Power BI Connector Pricing
          </h2>
          <p className="text-xl font-medium my-2 mb-6 text-neutral-800">
            Get started with our most loved plans
          </p>
        </div>
        <div className="container px-5 pb-12 mx-auto flex flex-wrap ">
          <div className="lg:w-1/4 mt-48 hidden lg:block">
            <div className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
              <p className="bg-gray-100 text-gray-900 h-12 px-4 flex items-center justify-start -mt-px">
                Lifetime Access
              </p>
              <p className="text-gray-900 text-left h-12 px-4 flex items-center justify-start">
                One Click Setup
              </p>
              <p className="bg-gray-100 text-left text-gray-900 h-12 px-4 flex items-center justify-start">
                Multiple Tables Import
              </p>
              <p className="text-gray-900 text-left h-12 px-4 flex items-center justify-start">
                One Click Data Refresh
              </p>
              <p className="bg-gray-100 text-left text-gray-900 h-12 px-4 flex items-center justify-start">
                Secure Token Based Connection
              </p>
              <p className="text-gray-900 text-left h-12 px-4 flex items-center justify-start">
                Auto Scheduled Refresh
              </p>
              <p className="bg-gray-100 text-left text-gray-900 h-12 px-4 flex items-center justify-start">
                Custom SQL Query Execution
              </p>
              <p className="text-gray-900 text-left h-12 px-4 flex items-center justify-start">
                Configure Gateway & Publish
                Dashboards
              </p>
            </div>
          </div>
          <div className="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg">
            <div className="lg:w-1/2 min-w-[380px] lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-indigo-500 relative">
              <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                POPULAR
              </span>
              <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                <h3 className="tracking-widest">
                  BASIC
                </h3>
                <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
                  ${amountPowerBi}
                  {/* <span className="text-gray-600 text-base ml-1">/mo</span> */}
                </h2>
                <span className="text-sm text-gray-600">
                  Odoo PowerBI Direct Connector
                </span>
              </div>
              <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>

              <div className="p-6 text-center border-t border-gray-300">
                <a
                  href="/odoo-powerbi-connector/"
                  className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Buy Now
                  <svg
                    className="ml-auto"
                    height="25px"
                    width="25px"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"></path>
                  </svg>
                </a>
                <p className="text-xs text-gray-500 mt-3">
                  Value for money deal
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 min-w-[380px] lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
              <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                POPULAR
              </span>
              <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                <h3 className="tracking-widest">
                  ADVANCE
                </h3>
                <h2 className="text-5xl text-gray-900 font-medium flex flex-col items-center justify-center leading-none mb-4 mt-2">
                  ${amountAdvancePowerBi}<br></br>
                  <span className="text-gray-600 text-base  mt-1">
                    $ {amountAdvancePowerBi - amountPowerBi}, if already purchased
                    basic plan
                  </span>
                  <a
                    href="#"
                    className="text-base underline text-gray-600"
                  >
                    Click Here
                  </a>
                </h2>
              </div>
              <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-white text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-white text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>

              <div className="p-6 text-center border-t border-gray-300">
                <a
                  href="/odoo-powerbi-advance-connector/"
                  className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Buy Now
                  <svg
                    className="ml-auto"
                    height="25px"
                    width="25px"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"></path>
                  </svg>
                </a>
                <p className="text-xs text-gray-500 mt-3">
                  Boost productivity 100x more
                  times
                </p>
                <p className="text-base text-gray-500 mt-1">
                  <span className="font-semibold">
                    Note:
                  </span>{" "}
                  You can buy it for $1400, if
                  basic plan is purchased
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PowerbiPricing;
