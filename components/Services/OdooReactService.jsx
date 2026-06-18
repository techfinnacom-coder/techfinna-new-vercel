import React from "react";

const OdooReactService = () => {
  return (
    <div className="bg-[#020817] w-full flex flex-col justify-center items-center py-20">
      <div className=" w-[80%] mx-auto ">
        <div className="text-center py-4">
          <h2 className="text-3xl md:text-5xl font-extrabold my-4 text-white flex text-center justify-center items-center gap-4">
            Connect Odoo with React
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path
                d="M14 10C14 9.44771 13.5523 9 13 9H12.5C9.46243 9 7 11.4624 7 14.5C7 17.5376 9.46243 20 12.5 20H17.5C20.5376 20 23 17.5376 23 14.5C23 12.0091 21.3441 9.90488 19.073 9.22823C18.5098 9.06042 18 9.52887 18 10.1166V10.1683C18 10.6659 18.3745 11.0735 18.8345 11.2634C20.1055 11.788 21 13.0395 21 14.5C21 16.433 19.433 18 17.5 18H12.5C10.567 18 9 16.433 9 14.5C9 12.567 10.567 11 12.5 11H13C13.5523 11 14 10.5523 14 10Z"
                fill="#808080"
              />
              <path
                d="M11.5 4C14.5376 4 17 6.46243 17 9.5C17 12.5376 14.5376 15 11.5 15H11C10.4477 15 10 14.5523 10 14C10 13.4477 10.4477 13 11 13H11.5C13.433 13 15 11.433 15 9.5C15 7.567 13.433 6 11.5 6H6.5C4.567 6 3 7.567 3 9.5C3 10.9605 3.89451 12.212 5.16553 12.7366C5.62548 12.9264 6 13.3341 6 13.8317V13.8834C6 14.4711 5.49024 14.9396 4.92699 14.7718C2.65592 14.0951 1 11.9909 1 9.5C1 6.46243 3.46243 4 6.5 4H11.5Z"
                fill="#808080"
              />
            </svg>
          </h2>
          <p className="text-xl font-medium my-2 mb-12 text-white/90">
            First-time ever, create odoo cross platform modules
          </p>
        </div>
        {/* mac window animation */}
        <div className="relative mx-auto md:w-[80%] ">
          <div className="videocontainer flex justify-center items-center">
            <div className=" flex items-center flex-col relative border-sm md:w-[80%] mx-auto">
              <div className="flex items-center flex-row rounded-t-md  w-full bg-[#3b3b3b] min-h-[20px] py-1.5 px-3">
                <div className="w-[12px] mr-2 h-[12px] rounded-full bg-red-500"></div>
                <div className="w-[12px] mr-2 h-[12px] rounded-full bg-yellow-500"></div>
                <div className="w-[12px] h-[12px] rounded-full bg-green-500"></div>
                <div className="flex-1 place-delf-stretch"></div>
              </div>
              <div className=" w-full flex flex-col md:flex-row justify-evenly  text-white relative h-full w-full rounded-b-sm">
                <div className=" w-full md:w-2/5 bg-[#020817] firstDivAnim">
                  <div className=" flex justify-center items-center md:rounded-tr-[120px] w-full  bg-gray-200 h-[350px]">
                    <img src={"/images/odoo_logo.png"} width={200} />
                  </div>
                </div>
                <div className="w-full md:w-3/5 bg-gray-200 secondDivAnim">
                  <div className="flex justify-center items-center md:rounded-bl-[120px] w-full  bg-[#020817] h-[350px]">
                    <img src={"/images/react.png"} width={100} />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        {/* odoo/react points */}
        <div className="flex flex-col md:flex-row mx-auto w-[80%] justify-evenly items-center mt-12">
          <div className="text-center px-6 my-2">
            <h2 className="mb-4 text-6xl font-semibold text-white">Odoo</h2>
            <ul className="max-w-md space-y-4 text-gray-300 list-inside mt-8 text-xl text-left">
              <li className="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Integrated Solutions
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Customizability and Flexibility
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Scalability
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-red-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Appealing Interface
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-red-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                State Management
              </li>
            </ul>
          </div>
          <div className="text-center px-6 my-2">
            <h2 className="mb-4 text-6xl font-semibold text-white">React</h2>
            <ul className="max-w-md space-y-4 text-gray-300 list-inside mt-8 text-xl text-left">
              <li className="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Single Page Application
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Faster Rendering
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Strong Community
              </li>
              <li className="flex items-center font">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Most Appealing UI/UX
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                All Odoo Data Management
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdooReactService;
