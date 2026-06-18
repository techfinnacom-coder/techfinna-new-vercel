import React from "react";
import { FaCode, FaRobot } from "react-icons/fa";
import Link from "next/link";

const YoutubeGallery = () => {
  return (
    <div className="mx-auto w-[80%]">
      <div className="flex flex-col justify-center items-center">
        <div className="flex w-full my-4 justify-center items-center text-center text-black">
          <h2 className="text-3xl md:text-4xl flex justify-center items-center gap-3">
            Youtube Gallery
            <svg
              width="60px"
              height="60px"
              viewBox="0 -7 48 48"
              version="1.1"
            >
              <title>Youtube-color</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Icons"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Color-"
                  transform="translate(-200.000000, -368.000000)"
                  fill="#CE1312"
                >
                  <path
                    d="M219.044,391.269916 L219.0425,377.687742 L232.0115,384.502244 L219.044,391.269916 Z M247.52,375.334163 C247.52,375.334163 247.0505,372.003199 245.612,370.536366 C243.7865,368.610299 241.7405,368.601235 240.803,368.489448 C234.086,368 224.0105,368 224.0105,368 L223.9895,368 C223.9895,368 213.914,368 207.197,368.489448 C206.258,368.601235 204.2135,368.610299 202.3865,370.536366 C200.948,372.003199 200.48,375.334163 200.48,375.334163 C200.48,375.334163 200,379.246723 200,383.157773 L200,386.82561 C200,390.73817 200.48,394.64922 200.48,394.64922 C200.48,394.64922 200.948,397.980184 202.3865,399.447016 C204.2135,401.373084 206.612,401.312658 207.68,401.513574 C211.52,401.885191 224,402 224,402 C224,402 234.086,401.984894 240.803,401.495446 C241.7405,401.382148 243.7865,401.373084 245.612,399.447016 C247.0505,397.980184 247.52,394.64922 247.52,394.64922 C247.52,394.64922 248,390.73817 248,386.82561 L248,383.157773 C248,379.246723 247.52,375.334163 247.52,375.334163 L247.52,375.334163 Z"
                    id="Youtube"
                  ></path>
                </g>
              </g>
            </svg>
          </h2>
        </div>
        <div className="flex justify-center mb-[60px] items-center w-full">
          <h3 className="text-gray-800  text-2xl font-sans">
            "{" "}
            <span className="font-semibold text-3xl">
              How to{" "}
            </span>
            " section for all connectors{" "}
          </h3>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col justify-center gap-2">
              <div className="flex justify-between w-full">
                <p className="text-gray-700 font-semibold text-lg w-[60%]">
                  How to connect Odoo with Looker
                  Studio
                </p>
                <p className="text-sm w-[40%] flex justify-end items-center gap-2 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  4:04 mins
                </p>
              </div>
              <div className=" relative">
                <div className="h-full w-full absolute inset-0 bg-black rounded-2xl opacity-20 "></div>
                <Link
                  href={
                    "https://www.youtube.com/watch?v=tauMW2vFcP8&t=10s"
                  }
                >
                  <img
                    className="w-full h-full rounded-xl shadow-lg"
                    alt="youtube video demo techfinna"
                    src="/images/youtube/looker-thumbnail.png"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto "
                  >
                    <path
                      d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
                      fill="currentColor"
                      strokeWidth="0"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <div className="flex justify-between w-full">
                <p className="text-gray-700 font-semibold text-lg w-[60%]">
                  How to connect Odoo with Google
                  BigQuery
                </p>
                <p className="text-sm w-[40%] flex justify-end items-center gap-2 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  1:27 mins
                </p>
              </div>
              <div className=" relative">
                <div className="h-full w-full absolute inset-0 bg-black rounded-2xl opacity-20 "></div>
                <Link
                  href={
                    "https://www.youtube.com/watch?v=fRtjMXTZSwA"
                  }
                >
                  <img
                    className="w-full h-full rounded-xl shadow-lg"
                    alt="youtube video demo techfinna"
                    src="/images/youtube/bigquery-thumbnail.png"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto "
                  >
                    <path
                      d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
                      fill="currentColor"
                      strokeWidth="0"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <div className="flex justify-between w-full">
                <p className="text-gray-700 font-semibold text-lg w-[60%]">
                  How to connect Odoo with PowerBI
                </p>
                <p className="text-sm w-[40%] flex justify-end items-center gap-2 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  1:03 mins
                </p>
              </div>
              <div className=" relative">
                <div className="h-full w-full absolute inset-0 bg-black rounded-2xl opacity-20 "></div>
                <Link
                  href={
                    "https://www.youtube.com/watch?v=XfjPP8LW0l4"
                  }
                >
                  <img
                    className="w-full h-full rounded-xl shadow-lg"
                    src="/images/youtube/powerbi-thumbnail.png"
                    alt="youtube video demo techfinna"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto "
                  >
                    <path
                      d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
                      fill="currentColor"
                      strokeWidth="0"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <div className="flex justify-between w-full">
                <p className="text-gray-700 font-semibold text-lg w-[60%]">
                  How to connect Odoo with Google
                  Spreadsheet
                </p>
                <p className="text-sm w-[40%] flex justify-end items-center gap-2 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  1:29 mins
                </p>
              </div>
              <div className=" relative">
                <div className="h-full w-full absolute inset-0 bg-black rounded-2xl opacity-20 "></div>
                <Link
                  href={
                    "https://www.youtube.com/watch?v=Soc4hAvT8-I&t=2s"
                  }
                >
                  <img
                    className="w-full h-full rounded-xl shadow-lg"
                    src="/images/youtube/spreadsheet-thumbnail.png"
                    alt="youtube video demo techfinna"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto "
                  >
                    <path
                      d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
                      fill="currentColor"
                      strokeWidth="0"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeGallery;
