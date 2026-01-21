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
          <hr className="h-[2px] bg-gray-300 rounded-lg w-[60%] mx-auto"></hr>
          {/* <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            Scroll to connect Odoo with Tableau
          </p> */}
        </div>
        <div className="mt-12 flex flex-col md:flex-row gap-4 lg:px-14">
          <ul className="space-y-3 ">
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
              Easy Direct Connection between{" "}
              <span className="px-2 font-semibold underline decoration-dotted underline-offset-4">
                Odoo
              </span>
              to
              <span className="px-2 font-semibold underline decoration-dotted underline-offset-4">
                Tableau
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
              One Click Installation
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
              One Click Data Refresh
            </li>
          </ul>
          <ul className="space-y-3 ">
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
              Fetch all Odoo Tables Data
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
              Token based Secure Connection
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
              Automatic Schema Mapping
            </li>
          </ul>
        </div>
        <div className=" mt-12 p-1 flex flex-wrap lg:px-4 gap-6 items-center justify-center my-6">
          <div className="h-full min-h-[220px] md:min-h-[280px] lg:max-w-[280px] xl:max-w-[330px] flex flex-col justify-center items-center p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 16 16"
              fill="#000000"
            >
              <path d="M10.875 7l2.008 5h-.711l-2.008-5h.711zm-5.125.594c-.276 0-.526.041-.75.125a1.542 1.542 0 0 0-.578.375c-.162.166-.287.37-.375.61a2.364 2.364 0 0 0-.133.827c0 .287.04.547.117.781.078.235.196.433.352.594.156.162.346.29.57.383.224.094.48.138.766.133a2.63 2.63 0 0 0 .992-.195l.125.484a1.998 1.998 0 0 1-.492.148 4.381 4.381 0 0 1-.75.07 2.61 2.61 0 0 1-.914-.156 2.207 2.207 0 0 1-.742-.453 1.878 1.878 0 0 1-.485-.742 3.204 3.204 0 0 1-.18-1.023c0-.365.06-.698.18-1 .12-.302.287-.563.5-.782.214-.218.471-.388.774-.507a2.69 2.69 0 0 1 1-.18c.296 0 .536.023.718.07.183.047.315.094.399.14l-.149.493a1.85 1.85 0 0 0-.406-.14 2.386 2.386 0 0 0-.539-.055zM8 8h1v1H8V8zm0 2h1v1H8v-1z" />
              <path d="M15.5 1H.5l-.5.5v13l.5.5h15l.5-.5v-13l-.5-.5zM15 14H1V5h14v9zm0-10H1V2h14v2z" />
            </svg>
            <div className="mt-4">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Easy Installation
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-500 text-center dark:text-gray-400">
              One click installation for setting up this connector in your
              desktop environment
            </p>
          </div>

          <div className="h-full min-h-[220px] md:min-h-[280px] lg:max-w-[280px] xl:max-w-[330px] flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="mt-4">
              <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                Search Tables
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-500 text-center dark:text-gray-400">
              Easily search all of your Odoo Tables Data
            </p>
          </div>

          <div className="h-full min-h-[220px] md:min-h-[280px] lg:max-w-[280px] xl:max-w-[330px] flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              version="1.1"
              id="Capa_1"
              width="40px"
              height="40px"
              viewBox="0 0 490.969 490.969"
            >
              <g>
                <path d="M366.093,124.285H20.418C9.143,124.285,0,133.418,0,144.699v321.172c0,11.275,9.137,20.417,20.418,20.417h345.671   c11.271,0,20.408-9.142,20.408-20.417V144.699C386.508,133.418,377.369,124.285,366.093,124.285z M72.815,461.795H16.338v-47.984   h56.477V461.795z M72.815,401.559H16.338v-61.247h56.477V401.559z M72.815,328.076H16.338v-57.161h56.477V328.076z M72.815,258.669   H16.338v-50.003h56.477V258.669z M152.434,461.795H85.065v-47.984h67.362v47.984H152.434z M152.434,401.559H85.065v-61.247h67.362   v61.247H152.434z M152.434,328.076H85.065v-57.161h67.362v57.161H152.434z M152.434,258.669H85.065v-50.003h67.362v50.003H152.434z    M225.918,461.795h-61.243v-47.984h61.243V461.795z M225.918,401.559h-61.243v-61.247h61.243V401.559z M225.918,328.076h-61.243   v-57.161h61.243V328.076z M225.918,258.669h-61.243v-50.003h61.243V258.669z M295.323,461.795h-57.16v-47.984h57.16V461.795z    M295.323,401.559h-57.16v-61.247h57.16V401.559z M295.323,328.076h-57.16v-57.161h57.16V328.076z M295.323,258.669h-57.16v-50.003   h57.16V258.669z M370.18,461.795h-62.6v-47.984h62.6V461.795z M370.18,401.559h-62.6v-61.247h62.6V401.559z M370.18,328.076h-62.6   v-57.161h62.6V328.076z M370.18,258.669h-62.6v-50.003h62.6V258.669z M470.547,4.681H124.87c-11.274,0-20.413,9.135-20.413,20.418   v87.958h16.334v-24h56.476v24h12.256v-24h67.354v24h12.257v-24h61.242v24h12.246v-24h57.163v50.014h-2.287   c1.042,3.393,1.606,6.994,1.606,10.726v1.519h0.681v57.16h-0.681v12.25h0.681v61.245h-0.681v12.246h0.681v47.979h-0.681v24.494   h71.455c11.272,0,20.409-9.141,20.409-20.413V25.099C490.957,13.816,481.818,4.681,470.547,4.681z M474.629,342.185h-62.605V294.21   h62.6v47.975H474.629z M474.629,281.969h-62.605v-61.245h62.6v61.245H474.629z M474.629,208.48h-62.605v-57.166h62.6v57.166   H474.629z M474.629,139.07h-62.605V89.057h62.6v50.014H474.629z" />
              </g>
            </svg>
            <div className="mt-4">
              <h5 className="mb-2 text-2xl font-semibold text-center tracking-tight text-gray-900 dark:text-white">
                Import Multiple Tables
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-500 text-center dark:text-gray-400">
              Analyze and compare data by importing multiple tables at one time
            </p>
          </div>

          <div className="h-full min-h-[250px] md:min-h-[280px] lg:max-w-[280px] xl:max-w-[330px] flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              width="40px"
              version="1.1"
              id="_x32_"
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  className="st0"
                  d="M324.708,174.596c-12.583-2.092-41.546-2.322-65.932,2.992c-1.562-1.032-3.128-2.099-4.672-3.048   c-4.714-2.887-9.337-5.328-13.929-7.168c-4.452-1.771-8.891-2.991-13.535-3.236v-0.02c-6.956-0.565-13.709-0.816-19.918-0.816   c-9.453,0.014-17.517,0.537-23.493,1.534h0.024c-0.826,0.126-1.732,0.203-2.716,0.203c-5.164,0.062-12.312-2.392-18.797-5.935   c-4.372-2.343-9.79-1.102-12.705,2.915L77.86,260.171c-2.424,3.34-2.511,7.866-0.227,11.311c1.806,2.706,3.316,5.515,4.313,8.326   c1.433,3.968,3.508,7.573,5.903,11.081c2.398,3.493,5.136,6.882,7.994,10.118l1.12,1.073c0,0,5.125,4.226,13.291,10.948   c-2.131,3.055-3.302,6.681-3.344,10.502c-0.052,5.035,1.855,9.805,5.384,13.41c3.584,3.661,8.375,5.676,13.497,5.676   c3.588,0,7.018-1.032,10.006-2.922c-1.997,3.012-3.106,6.52-3.148,10.209c-0.056,5.035,1.858,9.798,5.383,13.396   c3.577,3.668,8.372,5.683,13.497,5.683c4.026,0,7.837-1.311,11.052-3.654c-5.85,7.336-5.533,18.039,1.192,24.922   c3.578,3.654,8.368,5.669,13.486,5.669h0.004c4.965,0,9.658-1.917,13.228-5.411l3.49-3.466c-1.461,2.678-2.333,5.648-2.368,8.78   c-0.052,5.041,1.855,9.804,5.383,13.409c3.581,3.654,8.375,5.669,13.497,5.669c4.961,0,9.65-1.91,13.252-5.425l2.124-2.155   c1.063,0.837,2.033,1.59,2.824,2.204c0.648,0.488,1.2,0.907,1.705,1.27l0.75,0.53l1.063,0.656c3.992,2.189,7.81,3.138,10.846,3.807   c1.513,0.314,2.81,0.53,3.772,0.662l1.172,0.154l0.366,0.035l0.139,0.014l0.087,0.014l0.094,0.007l0.126,0.007   c0.115,0,0.059,0.014,0.665,0.028l0.715-0.028c6.65-0.488,12.946-2.776,18.114-6.722c2.056-1.576,3.856-3.48,5.467-5.564   c3.183,1.032,6.554,1.645,10.062,1.645c14.228-0.006,26.202-9.079,30.839-21.7c0.516-0.035,1.029-0.056,1.537-0.188   c1.806,0.328,3.637,0.565,5.533,0.565c14.118-0.014,26.066-8.911,30.78-21.366c0.032-0.028,0.063-0.041,0.094-0.063l1.108,0.105   c18.238,0,33.001-14.777,33.008-33.004c0.011-5.063-0.69-10.662-2.618-16.485c12.517-11.059,30.86-28.144,34.176-37.418   c1.597-4.463,10.575-15.166,13.183-18.814l-70.621-97.394C351.848,165.377,334.369,176.214,324.708,174.596z M366.923,330.384   c-0.01,7.287-5.906,13.186-13.194,13.2c-1.806,0-3.493-0.362-5.065-1.018c-0.157-0.07-0.321-0.084-0.478-0.133l-12.238-14.888   c-3.096-3.584-8.518-3.988-12.106-0.893c-3.591,3.096-3.988,8.522-0.889,12.113l11.837,14.427   c-0.757,6.562-6.272,11.701-13.044,11.708c-3.215-0.007-6.066-1.15-8.399-3.068l-11.746-14.324   c-3.1-3.584-8.522-3.981-12.109-0.885c-3.592,3.096-3.986,8.522-0.89,12.105l8.183,10.196c-0.014,0.634-0.076,1.269,0.035,1.904   c0.143,0.802,0.209,1.526,0.209,2.196c-0.01,7.294-5.909,13.186-13.193,13.2c-1.904,0-3.657-0.439-5.275-1.15l-14.316-15.048   c-3.455-3.25-8.887-3.082-12.137,0.376c-3.253,3.452-3.085,8.891,0.366,12.133l6.718,7.88c-0.673,1.444-1.569,2.748-2.932,3.807   c-1.747,1.339-4.149,2.259-6.882,2.566c-0.798-0.118-1.883-0.3-3.173-0.606c-1.6-0.362-3.288-0.955-4.163-1.416   c-0.303-0.222-1.077-0.794-2.196-1.674c-0.635-0.488-1.356-1.045-2.158-1.687c1.45-6.094-0.112-12.775-4.815-17.586   c-3.581-3.661-8.375-5.676-13.497-5.676c-2.88,0-5.641,0.711-8.18,1.946l-0.076-0.063l0.087-0.098   c3.602-3.528,5.617-8.242,5.672-13.29c0.052-5.042-1.862-9.805-5.39-13.403c-3.578-3.654-8.374-5.676-13.493-5.676   c-4.003,0-7.796,1.296-10.997,3.612c2.59-3.264,4.094-7.225,4.139-11.457c0.056-5.042-1.858-9.805-5.384-13.403   c-3.58-3.668-8.374-5.683-13.496-5.683c-4.961,0-9.651,1.911-13.221,5.411l-3.183,3.166c3.926-7.113,3.02-16.22-2.943-22.314   c-3.584-3.661-8.378-5.676-13.5-5.676c-4.961,0-9.651,1.91-13.228,5.411l-2.106,2.113c-1.496-1.235-2.964-2.441-4.261-3.508   c-4.874-4.003-8.232-6.778-9.581-7.894c-2.28-2.601-4.39-5.216-6.039-7.642c-1.771-2.566-3.026-4.944-3.591-6.555   c-0.83-2.329-1.82-4.518-2.897-6.596l62.57-86.279c6.186,2.587,12.953,4.532,20.258,4.582c1.945,0,3.936-0.14,5.954-0.474h0.025   c4.166-0.711,11.592-1.27,20.205-1.255c5.68-0.014,11.928,0.223,18.315,0.739l0.436,0.028c1.569,0.042,4.181,0.6,7.353,1.883   l0.718,0.328c-26.728,12.07-64.606,35.292-77.054,39.447c-14.215,4.735-15.404,23.695,16.579,27.244   c31.989,3.563,60.419-16.589,67.525-20.131c5.101-2.552,37.508,0.565,55.458,2.531c7.915,7.817,14.853,15.069,19.912,20.55   l39.423,48.198l0.174,0.196c5.052,5.85,7.793,10.598,9.348,14.671C366.446,322.874,366.913,326.388,366.923,330.384z"
                />
                <path
                  className="st0"
                  d="M510.641,229.622L415.374,98.233c-2.305-3.187-6.747-3.884-9.927-1.583l-42.198,30.599   c-3.18,2.301-3.888,6.75-1.58,9.93l95.268,131.389c2.304,3.18,6.746,3.891,9.926,1.59l42.205-30.605   C512.242,237.243,512.953,232.801,510.641,229.622z M478.226,241.427c-5.293,3.835-12.705,2.65-16.548-2.643   c-3.839-5.292-2.656-12.698,2.643-16.54c5.296-3.842,12.702-2.657,16.544,2.628C484.704,230.172,483.522,237.585,478.226,241.427z"
                />
                <path
                  className="st0"
                  d="M148.757,127.248l-42.206-30.599c-3.173-2.301-7.618-1.604-9.926,1.583L1.354,229.622   c-2.308,3.18-1.59,7.622,1.583,9.93l42.198,30.605c3.18,2.301,7.621,1.59,9.922-1.59l95.272-131.389   C152.637,133.998,151.929,129.549,148.757,127.248z M120.554,141.92c-3.839,5.293-11.248,6.478-16.544,2.636   c-5.3-3.835-6.481-11.255-2.64-16.54c3.838-5.3,11.248-6.485,16.544-2.642C123.217,129.215,124.389,136.62,120.554,141.92z"
                />
              </g>
            </svg>
            <div className="mt-4">
              <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                Long-Term Support with WDC 3.0
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-500 text-center dark:text-gray-400">
              Created using reliable and latest Web Data Connector(WDC) 3.0
            </p>
          </div>

          <div className="h-full min-h-[250px] md:min-h-[280px] lg:max-w-[280px] xl:max-w-[330px] flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="#000000"
                d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
              />
            </svg>
            <div className="mt-4">
              <h5 className="mb-2 text-2xl font-semibold text-center tracking-tight text-gray-900 dark:text-white">
                Automatic Schema Mapping
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-500 text-center dark:text-gray-400">
              Consistent schema to make connecit
            </p>
          </div>
        </div>

        <div className="mt-6 w-full md:w-[80%] mx-auto">
          <div className="flex flex-col md:flex-row gap-2 justify-center items-center py-2 px-3  mx-auto my-6">
            <p className="text-xl md:text-3xl w-full md:w-1/2 px-4 font-semibold text-center md:text-right">
              Why Tableau with Odoo?
            </p>
            <div className="flex  w-full md:w-1/2 gap-2 text-center md:text-left bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              <FlipWords
                className="text-xl md:text-4xl flex justify-center items-center md:items-start mx-auto md:mx-0 md:justify-start  text-blue-500"
                words={words}
              />
            </div>
          </div>
          <p className="text-xl text-center">
            Tableau transforms data into easy-to-understand visual insights. Its
            intuitive interface, real-time analytics, and ability to handle
            diverse data sources make it a powerful tool for data-driven
            decision-making.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
