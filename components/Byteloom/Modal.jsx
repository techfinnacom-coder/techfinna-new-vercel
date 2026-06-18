"use client";
import React from "react";
import copy from "copy-to-clipboard";
import Link from "next/link";

const Modal = (props) => {
  const hideModal = () => {
    document.getElementById("modalId").classList.add("-z-50");
    document.getElementById("modalId").classList.add("opacity-0");
    document.getElementById("modalId").classList.add("scale-50");
    document.getElementById("modalId").classList.remove("z-[99999]");
    document.getElementById("modalId").classList.remove("opacity-100");
    document.getElementById("modalId").classList.remove("scale-100");
  };


  const copyToClipboardDemo = (e) => {
    const copytext = "http://demo.techfinna.com";
    copy(copytext);
    document.getElementById("snackbar").classList.add("left-5");
    document.getElementById("snackbar").classList.remove("left-[-300px]");
    setTimeout(closeSnackBar, 3000);
  };
  const copyToClipboardToken = (e) => {
    const copytext = "_650b9d8270b3b3cbe47ee480e9b1b078c877736d";
    copy(copytext);
    document.getElementById("snackbar").classList.add("left-5");
    document.getElementById("snackbar").classList.remove("left-[-300px]");
    setTimeout(closeSnackBar, 3000);
  };

  const closeSnackBar = () => {
    document.getElementById("snackbar").classList.add("left-[-300px]");
    document.getElementById("snackbar").classList.remove("left-5");
  };

  return (
    <div
      id="modalId"
      className="fixed flex -z-50 opacity-0 justify-center duration-500 mt-0 bg-black ease-in-out scale-50 items-center inset-0 backdrop-blur-sm bg-opacity-30 "
    >
      <div className="flex flex-col w-full sm:w-[750px] text-gray-800 bg-white rounded-lg gap-4 p-6">
        <div className="flex flex-col h-full max-h-[600px] relative gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[#1a3454] drop-shadow-sm flex font-semibold text-2xl">
              Experience Odoo to Looker data connection
            </h2>
            <div
              onClick={hideModal}
              className=" group mr-1 cursor-pointer border-white rounded-sm "
            >
              <svg
                className="group-hover:rotate-90 group-hover:scale-125 duration-200 ease-linear"
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                height="24"
                viewBox="0 96 960 960"
                width="24"
              >
                <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-[450px] scrollsettings overflow-auto">
          <div>
            <p className="text-xl text-left px-5 text-gray-500">
              🔹 Navigate to the data sources in Looker Studio{" "}
              <Link
                className="text-[#3B82F6] hover:underline"
                href={"https://lookerstudio.google.com/datasources"}
              >
                "https://lookerstudio.google.com/datasources"
              </Link>
              . Search and select the 'Odoo Connector by TechFinna'.
            </p>
            <img
              className="px-5"
              src="\images\lookers\main.png"
              alt="lookers connector"
            />
          </div>
          <p className="text-xl text-left mt-3 px-5 text-gray-500">
            🔹 Paste connector url and access token.
          </p>
          <p className="text-xl mt-2 text-left px-16 text-gray-500">
            Connector url
          </p>
          <div
            onClick={(e) => copyToClipboardDemo(e)}
            className="border w-min mx-20 rounded-md p-1.5 px-3"
          >
            <h5 className="cursor-pointer gap-1 flex">
              http://demo.techfinna.com
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
                height="15px"
                width="15px"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 352.804 352.804"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M318.54,57.282h-47.652V15c0-8.284-6.716-15-15-15H34.264c-8.284,0-15,6.716-15,15v265.522c0,8.284,6.716,15,15,15h47.651   v42.281c0,8.284,6.716,15,15,15H318.54c8.284,0,15-6.716,15-15V72.282C333.54,63.998,326.824,57.282,318.54,57.282z    M49.264,265.522V30h191.623v27.282H96.916c-8.284,0-15,6.716-15,15v193.24H49.264z M303.54,322.804H111.916V87.282H303.54V322.804   z" />
                </g>
              </svg>
            </h5>
          </div>
          <p className="text-xl mt-2 text-left px-16 text-gray-500">
            Access token
          </p>
          <div
            onClick={(e) => copyToClipboardToken(e)}
            className="border w-min rounded-md p-1.5 mx-20 px-3"
          >
            <h5 className="cursor-pointer gap-1 flex">
              _650b9d8270b3b3cbe47ee480e9b1b078c877736d
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
                height="15px"
                width="15px"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 352.804 352.804"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M318.54,57.282h-47.652V15c0-8.284-6.716-15-15-15H34.264c-8.284,0-15,6.716-15,15v265.522c0,8.284,6.716,15,15,15h47.651   v42.281c0,8.284,6.716,15,15,15H318.54c8.284,0,15-6.716,15-15V72.282C333.54,63.998,326.824,57.282,318.54,57.282z    M49.264,265.522V30h191.623v27.282H96.916c-8.284,0-15,6.716-15,15v193.24H49.264z M303.54,322.804H111.916V87.282H303.54V322.804   z" />
                </g>
              </svg>
            </h5>
          </div>
          <p className="text-xl text-left mt-3 px-5 text-gray-500">
            🔹 You are all set.
          </p>
        </div>
      </div>
      <div
        id="snackbar"
        className="absolute duration-300 flex ease-in items-center gap-5 bottom-5 left-[-300px] w-[250px] justify-between px-3 p-2.5 border-[#F0FDF4] bg-[#F0FDF4] rounded-sm"
      >
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#4ADE80"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
          >
            <path d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Z" />
          </svg>
          <h4 className="text-[#166534] font-semibold">Copied!</h4>
        </div>
        <div
          onClick={closeSnackBar}
          className=" group mr-1 cursor-pointer border-white rounded-sm "
        >
          <svg
            className="group-hover:rotate-90 group-hover:scale-125 duration-200 ease-linear"
            xmlns="http://www.w3.org/2000/svg"
            fill="#22C55E"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Modal;
