import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Spreadsheet Odoo Connector Guide - Techfinna",
  description:
    "Discover a simple step-by-step guide to connect Google Sheets with Odoo. Sync your data effortlessly to enhance reporting, automate tasks, and boost productivity.",
};

const page = () => {
  const meta = {
    title: "Google Sheets Odoo Connector Guide - Techfinna",
    desc: "Discover a simple step-by-step guide to connect Google Sheets with Odoo. Sync your data effortlessly to enhance reporting, automate tasks, and boost productivity.",
    url: "https://techfinna.com/guides/how-to-connect-google-sheets-with-odoo/",
  };
  return (
    <>
      <head>
        <link rel="canonical" href={meta.url} />

        {/* <!-- Basic meta tags --> */}

        <meta name="robots" content="INDEX,FOLLOW" />

        {/* <!-- Facebook meta tags --> */}
        <meta name="og:title" content={meta.title} />
        <meta name="og:description" content={meta.desc} />

        <meta property="og:url" content={meta.url} />

        {/* <!-- Twtitter meta tags --> */}
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.desc} />
        <meta property="twitter:url" content={meta.url} />
      </head>
      <div className="px-3 text-black my-20 mt-24 w-full">
        <div className="w-full md:w-[780px] mx-auto space-y-10">
          <h2 className="text-xl text-gray-500 font-semibold">
            How to connect Odoo with Google Sheets
          </h2>
          <h1 className="text-5xl font-bold">
            Google Sheets Odoo connector Installation and Setup Guide
          </h1>
          <hr></hr>
          {/* table content */}
          {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
              <thead className="text-md text-gray-700 uppercase text-black ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-white bg-gray-800 border-b-2 border-gray-200"
                  >
                    S.No.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-gray-300 border-b-2 border-black"
                  >
                    Index
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-gray-300 border-b-2 border-black"
                  >
                    Section
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700 text-black text-md font-semibold">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                  >
                    1
                  </th>
                  <td className="px-6 py-4 bg-gray-300">Requirements</td>
                  <td className="px-6 py-4  bg-gray-300">
                    <a
                      href="#req"
                      className="bg-transparent text-blue-800 underline"
                    >
                      Go To Link
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 text-black text-md font-semibold">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                  >
                    2
                  </th>
                  <td className="px-6 py-4 bg-gray-300">Installation</td>
                  <td className="px-6 py-4  bg-gray-300">
                    <a
                      href="#install"
                      className="bg-transparent text-blue-800 underline"
                    >
                      Go To Link
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 text-black text-md font-semibold">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                  >
                    3
                  </th>
                  <td className="px-6 py-4 bg-gray-300">Configuration</td>
                  <td className="px-6 py-4  bg-gray-300">
                    <a
                      href="#config"
                      className="bg-transparent text-blue-800 underline"
                    >
                      Go To Link
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 text-black text-md font-semibold">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                  >
                    4
                  </th>
                  <td className="px-6 py-4 bg-gray-300">
                    <b className="bg-transparent">1.1</b> Click on Odoo
                    Connecter Menu
                  </td>
                  <td className="px-6 py-4  bg-gray-300">
                    <a
                      href="#1.1"
                      className="bg-transparent text-blue-800 underline"
                    >
                      Go To Link
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 text-black text-md font-semibold">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                  >
                    5
                  </th>
                  <td className="px-6 py-4 bg-gray-300">
                    <b className="bg-transparent">1.2</b> Enter URL and Access
                    Token
                  </td>
                  <td className="px-6 py-4  bg-gray-300">
                    <a
                      href="#1.2"
                      className="bg-transparent text-blue-800 underline"
                    >
                      Go To Link
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 text-black text-md font-semibold">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                  >
                    6
                  </th>
                  <td className="px-6 py-4 bg-gray-300">
                    <b className="bg-transparent">1.3</b> Click Select Tables
                    and Fetch Data
                  </td>
                  <td className="px-6 py-4  bg-gray-300">
                    <a
                      href="#1.3"
                      className="bg-transparent text-blue-800 underline"
                    >
                      Go To Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap text-white bg-gray-800"
                  >
                    7
                  </th>
                  <td className="px-6 py-4 bg-gray-300 text-black font-semibold">
                    <b className="bg-transparent">1.4</b> You will see Tables
                    populated as Sheets
                  </td>
                  <td className="px-6 py-4  bg-gray-300">
                    <a
                      href="#1.4"
                      className="bg-transparent text-blue-800 underline"
                    >
                      Go To Link
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}
          {/* requirements */}
          <div className="space-y-3" id="req">
            <h3 className=" font-bold text-3xl"> Requirements:</h3>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li>
                {" "}
                Odoo Versions Supported: 12, 13, 14, 15, 16, 17, 18 (Enterprise
                or Community)
              </li>
              <li> Google Sheets Account Login</li>
              <li>Downloaded Google SpreadSheet Odoo Connector by Techfinna</li>
              <li> Installed and correct URL and Access Token entered </li>
            </ul>
          </div>
          {/* installation */}
          <div className="space-y-3" id="install">
            <h3 className=" font-bold text-3xl"> Installation:</h3>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li> Download the Odoo to Spreadsheet Connector module from </li>
              <div className="border rounded-sm my-1 bg-[#F9F9F9] p-[22px]">
                <a
                  target="_blank"
                  className="font-sans break-words hover:text-[#2462D0]"
                  href="https://apps.odoo.com/apps/modules/17.0/spreadsheet_connector/"
                >
                  https://apps.odoo.com/apps/modules/17.0/spreadsheet_connector/
                </a>
              </div>
              <img
                className="img-fluid mx-auto img my-5"
                src="/images/guide/spread8.png"
                alt="google-spreadsheet-odoo-connector"
              />
              <p className="font-semibold text-3xl mx-auto text-center w-full my-6">
                OR
              </p>
              <li> Purchase it from the website directly </li>
              <div className="border rounded-sm my-1 bg-[#F9F9F9] p-[22px]">
                <a
                  target="_blank"
                  className="font-sans break-words hover:text-[#2462D0]"
                  href="https://techfinna.com/googlesheet-odoo-connector/"
                >
                  https://techfinna.com/googlesheet-odoo-connector/
                </a>
              </div>
              <img
                className="img-fluid mx-auto img my-5"
                src="/images/guide/sheetsWeb.png"
                alt="google-spreadsheet-odoo-connector"
              />
            </ul>
          </div>
          {/* config */}
          <div className="space-y-3" id="config">
            <h3 className=" font-bold text-3xl"> Configuration:</h3>
            <h4 className="font-bold text-xl pt-2" id="1.1">
              1.1. Open this link & make a copy:
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li> Open this Google Sheet by TechFinna </li>
              <div className="border rounded-sm my-1 bg-[#F9F9F9] p-[22px]">
                <a
                  target="_blank"
                  className="font-sans hover:text-[#2462D0]"
                  href="https://docs.google.com/spreadsheets/d/1EVx73AYMVXKEpRsWPwAAKEjcic0AZkn2WIs3Q_R6JOQ"
                >
                  https://docs.google.com/spreadsheets/d/1EVx73AYMVXK
                  EpRsWPwAAKEjcic0AZkn2WIs3Q_R6JOQ
                </a>
              </div>
              <li> Open File Menu and go to "Make a copy"</li>

              <img
                className="img-fluid mx-auto img my-5 shadow"
                src="/images/guide/makeCopy.png"
                alt="google-spreadsheet-odoo-connector"
              />
              <li> Click on "Make a copy", give required permissions </li>
              <img
                className="img-fluid mx-auto mx-auto img my-5 shadow"
                src="/images/guide/clickCopy.png"
                alt="google-spreadsheet-odoo-connector"
              />
            </ul>
            <h4 className="font-bold text-xl pt-2" id="1.1">
              1.2. Open the Copied Sheet:
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li>
                {" "}
                Wait for 5 seconds and "Odoo Connector" will appear in the Menu,
                Click on it{" "}
              </li>

              <img
                className="img-fluid mx-auto img my-5 shadow"
                src="/images/guide/spread1.png"
                alt="google-spreadsheet-odoo-connector"
              />
              <li>
                {" "}
                Click on "Set URL & Token", received after installing the module
                on your Odoo server{" "}
              </li>
              <img
                className="img-fluid mx-auto mx-auto img my-5 shadow"
                src="/images/guide/setUrl.png"
                alt="google-spreadsheet-odoo-connector"
              />

              <img
                className="img-fluid mx-auto mx-auto img my-5 shadow"
                src="/images/guide/odooUrlToken.png"
                alt="google-spreadsheet-odoo-connector"
              />

              <li>
                {" "}
                Copy and Paste the Odoo API URL from Odoo Connector Settings{" "}
              </li>
              <img
                className="img-fluid mx-auto img my-5 shadow"
                src="/images/guide/spread3.png"
                alt="google-spreadsheet-odoo-connector"
              />
              <li>
                {" "}
                Copy and Paste the Access Token from Odoo Connector Settings{" "}
              </li>
              <img
                className="img-fluid mx-auto img my-5 shadow"
                src="/images/guide/spread4.png"
                alt="google-spreadsheet-odoo-connector"
              />
            </ul>
            <h4 className="font-bold text-xl pt-2" id="1.3">
              1.3. Click Select Tables and Fetch Data:
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <ol>
                <li>1. Set URL & Token</li>
                <li>2. Select tables and fetch Odoo data in Google Sheets.</li>
                <li>
                  {" "}
                  3. For data refresh, you can schedule the data refresh hourly,
                  daily or weekly
                </li>
                <li> 4. Refresh data in realtime </li>
              </ol>
              <img
                className="img-fluid mx-auto img my-5 shadow"
                src="/images/guide/spread2.png"
                alt="google-spreadsheet-odoo-connector"
              />
              <li className="text-2xl py-3 font-semibold">
                Select Tables You want to fetch Data From{" "}
              </li>
              <p className="text-xl text-gray-600">
                <b className="underline text-black">Note:</b> (If you select
                multiple tables, the fetching can be slow. We suggest that you
                select a couple of tables if the data is less and if the data is
                big , select tables one by one to get data)
              </p>
              <img
                className="img-fluid mx-auto img my-5"
                src="/images/guide/spread6.png"
                alt="google-spreadsheet-odoo-connector"
              />
            </ul>
            <h4 className="font-bold text-xl pt-2" id="1.4">
              1.4. You will see Tables populated as Sheets:
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <img
                className="img-fluid mx-auto img my-5 shadow"
                src="/images/guide/spread7.png"
                alt="google-spreadsheet-odoo-connector"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
