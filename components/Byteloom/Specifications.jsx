import React from "react";
import { FlipWords } from "../ui/flip-words";
const Specifications = () => {
  const words = [
    "Powerful Data Visualization",
    "Real-Time Data Analysis",
    "User Friendly",
  ];
  return (
    <div className="flex justify-evenly items-center my-20 w-[90%] mx-auto">
      <div className="flex flex-col w-full text-left justify-start items-start">
        <div className="max-w-7xl flex flex-col px-4 md:px-8 lg:px-10">
          <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            Product Features
          </h2>
          <hr className="h-[2px] bg-gray-300 rounded-lg w-[60%] mx-auto" />
        </div>

        {/* Bulleted feature highlights */}
        <div className="mt-12 flex flex-col md:flex-row gap-4 lg:px-14">
          <ul className="space-y-3">
            <li className="text-body-color dark:text-dark-6 flex flex-wrap text-base">
              <span className="text-primary mr-2.5 mt-0.5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3438 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2812 11.0312 17.2812C11.2187 17.2812 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Build one clean dataset inside{" "}
              <span className="px-1 font-semibold underline decoration-dotted underline-offset-4">
                Odoo
              </span>
            </li>

            <li className="text-body-color dark:text-dark-6 flex text-base">
              <span className="text-primary mr-2.5 mt-0.5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3438 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2812 11.0312 17.2812C11.2187 17.2812 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              One-step, easy installation
            </li>

            <li className="text-body-color dark:text-dark-6 flex text-base">
              <span className="text-primary mr-2.5 mt-0.5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3438 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2812 11.0312 17.2812C11.2187 17.2812 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Interactive dataset builder (no SQL) — pick fields, we handle
              joins
            </li>
          </ul>

          <ul className="space-y-3">
            <li className="text-body-color dark:text-dark-6 flex text-base">
              <span className="text-primary mr-2.5 mt-0.5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3438 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2812 11.0312 17.2812C11.2187 17.2812 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Live row preview while you build — catch bad joins early
            </li>

            <li className="text-body-color dark:text-dark-6 flex text-base">
              <span className="text-primary mr-2.5 mt-0.5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3438 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2812 11.0312 17.2812C11.2187 17.2812 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              AI Automation and Chatbot
            </li>

            <li className="text-body-color dark:text-dark-6 flex text-base">
              <span className="text-primary mr-2.5 mt-0.5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3438 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2812 11.0312 17.2812C11.2187 17.2812 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Token-based, secure connection
            </li>
          </ul>
        </div>

        {/* Feature cards */}
        <div className="mt-12 p-1 flex flex-wrap lg:px-4 gap-6 items-center justify-center my-6">
          <div className="h-full min-h-[220px] md:minh-[280px] lg:max-w-[280px] xl:max-w-[330px] flex flex-col justify-center items-center p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="#000000"
                d="m665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216zM832 192H192v512h640V192zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32z"
              />
            </svg>
            <div className="mt-4">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Clean Dataset Builder
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-500 text-center dark:text-gray-400">
              Install once and start building datasets in minutes
            </p>
          </div>

          <div className="h-full min-h-[220px] md:minh-[280px] lg:max-w-[280px] xl:max-w-[330px] flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10 12L10 7H10.8102L14 9.01428V9.98571L10.8102 12H10Z"
                fill="#1F2328"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 12L10 7H10.8102L14 9.01428V9.98571L10.8102 12H10Z"
                fill="#1F2328"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.75 18.5V15H19V5.5H20V4H19H5H4V5.5H5V15H11.25V18.5H8V20H16V18.5H12.75ZM6.5 5.5V13.5H17.5V5.5H6.5Z"
                fill="#1F2328"
              />
            </svg>
            <div className="mt-4">
              <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                Live Preview
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-500 text-center dark:text-gray-400">
              Preview rows as you pick fields; get a tidy semantic dataset
            </p>
          </div>

          <div className="h-full min-h-[220px] md:minh-[280px] lg:max-w-[280px] xl:max-w-[330px] flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="#000000"
                d="m665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216zM832 192H192v512h640V192zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32z"
              />
            </svg>
            <div className="mt-4">
              <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                AI Built Dashboard
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-500 text-center dark:text-gray-400">
              AI handles chart recommendations and first draft
            </p>
          </div>

          <div className="h-full min-h-[250px] md:minh-[280px] lg:max-w-[280px] xl:max-w-[330px] flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="40px"
              height="40px"
              viewBox="0 0 56 56"
            >
              <path d="M 34.1876 51.4141 L 34.1876 12.2032 L 22.6095 5.1250 C 22.2110 4.8672 21.7422 4.7032 21.2969 4.5859 L 21.2969 44.3360 L 33.1095 50.9453 C 33.4844 51.1563 33.8360 51.2969 34.1876 51.4141 Z M 6.2735 50.7110 C 6.8829 50.7110 7.4688 50.5235 8.2422 50.1016 L 18.0860 44.8047 L 18.0860 5.0078 C 17.6641 5.2188 17.2188 5.4532 16.7735 5.7110 L 5.6641 12.0625 C 4.2579 12.8594 3.6016 13.9844 3.6016 15.5547 L 3.6016 48.0156 C 3.6016 49.7500 4.6095 50.7110 6.2735 50.7110 Z M 37.3985 51.3672 C 37.6329 51.2969 37.8673 51.2032 38.1016 51.0391 L 50.3593 44.0781 C 51.7422 43.3047 52.3984 42.1797 52.3984 40.6094 L 52.3984 8.1016 C 52.3984 6.3672 51.4144 5.4297 49.7267 5.4297 C 49.1406 5.4297 48.5315 5.5938 47.7812 6.0157 L 37.3985 11.7813 Z" />
            </svg>

            <div className="mt-4">
              <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                Interactive Dashboard Editing
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-500 text-center dark:text-gray-400">
              Edit charts, apply filters, and explore insights
            </p>
          </div>

          <div className="h-full min-h-[250px] md:minh-[280px] lg:max-w-[280px] xl:max-w-[330px] flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 512 512"
              version="1.1"
            >
              <title>AI</title>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="icon"
                  fill="#000000"
                  transform="translate(64.000000, 64.000000)"
                >
                  <path
                    d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z"
                    id="Combined-Shape"
                  ></path>
                </g>
              </g>
            </svg>
            <div className="mt-4">
              <h5 className="mb-2 text-2xl font-semibold text-center tracking-tight text-gray-900 dark:text-white">
                AI Chatbot Assistance
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-500 text-center dark:text-gray-400">
              Create and view insights of the charts in your dashboard
            </p>
          </div>
          <div className="h-full min-h-[250px] md:minh-[280px] lg:max-w-[280px] xl:max-w-[330px] flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 5L10 5M10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5M14 5L20 5M4 12H16M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM8 19H20M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <div className="mt-4">
              <h5 className="mb-2 text-2xl font-semibold text-center tracking-tight text-gray-900 dark:text-white">
                Advance Filters
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-500 text-center dark:text-gray-400">
              Apply advanced filters on charts to analyze data
            </p>
          </div>
        </div>

        {/* Product summary */}
        <div className="mt-6 w-full md:w-[80%] mx-auto">
          <p className="text-xl text-center">
            Techfinna’s <b>AI-Powered Odoo Dashboards</b> let you pick fields,
            preview data live, and combine them into a single clean dataset—then
            instantly generate smart KPI-driven dashboards. Customize charts,
            apply filters, and chat with your data to get back to analysis
            faster.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
