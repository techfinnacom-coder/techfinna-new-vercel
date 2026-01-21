import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Connect Odoo with Tableau - Guide",
  description:
    "Follow our detailed guide to connect Odoo with Tableau. Gain valuable insights by visualizing and analyzing your business data with seamless integration.",
};

const page = () => {
  const meta = {
    title: "How to Connect Odoo with Tableau - Guide",
    desc: "Follow our detailed guide to connect Odoo with Tableau. Gain valuable insights by visualizing and analyzing your business data with seamless integration.",
    url: "https://techfinna.com/guides/how-to-connect-odoo-tableau/",
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
      <div className="px-3 text-black  w-full mt-[120px]">
        <div className="w-full md:w-[780px] mx-auto space-y-10">
          <h2 className="text-xl text-gray-500 font-semibold">
            How to connect Odoo with Tableau
          </h2>
          <h1 className="text-5xl font-bold">
            Odoo to Tableau Connector Installation & Setup Guide
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
                  <b className="bg-transparent">1.1</b> Click on Odoo Connecter
                  Menu
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
                  <b className="bg-transparent">1.3</b> Click Select Tables and
                  Fetch Data
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
          {/* watch demo */}
          {/* <div className="flex justify-center items-center flex-col pb-10">
            <h2 className="text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#31E2BE] to-[#2F9B93] mb-5">
              Watch Demo
            </h2>
            <div className="flex items-center flex-col sm:h-[285px] sm:w-[450px] lg:h-[380px] lg:w-[600px] relative border-sm">
              <div className="flex items-center flex-row rounded-t-md border w-full bg-white min-h-[20px] py-1.5 px-3">
                <div className="w-[12px] mr-2 h-[12px] rounded-full bg-red-500"></div>
                <div className="w-[12px] mr-2 h-[12px] rounded-full bg-yellow-500"></div>
                <div className="w-[12px] h-[12px] rounded-full bg-green-500"></div>
                <div className="flex-1 place-delf-stretch"></div>
              </div>
              <div className="border border-t-0 border-gray-200 relative h-full w-full rounded-b-sm">
                <div className="relative flex justify-center items-center cursor-pointer yt-img" onclick={ytVid()}>
                      <img className="absolute top-50 left-50" width="75px" height="75px" alt="youtube-button" src="\images\lookers\play.png"/>
                      <img className="img-responsive" alt="looker studio demo video" width="500px" height="450px" src="\images\lookers\thumbnail.jpg"/>
                    </div>
                <div className="h-full yt-vid">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/XfjPP8LW0l4?si=EIPq6aaizm7zZrUD"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>
          </div> */}
          {/* requirements */}
          <div className="space-y-3" id="req">
            <h3 className=" font-bold text-2xl text-gray-700">
              {" "}
              Requirements:
            </h3>
            <ul className="leading-loose text-lg text-gray-500 list-disc ml-[30px]">
              <li>
                {" "}
                Odoo Versions Supported: 12, 13, 14, 15, 16, 17 (Enterprise or
                Community)
              </li>
              <li>Tableau installed on your desktop</li>
              <li>Bought the connector from Techfinna</li>
            </ul>
          </div>

          {/* installation */}
          <div className="space-y-3" id="install">
            <h3 className=" font-bold text-3xl"> Installation:</h3>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li>
                {" "}
                Download & install the Odoo to Tableau Connector by TechFinna{" "}
              </li>
              <div className="border rounded-sm my-1 bg-[#F9F9F9] p-[22px]">
                <a
                  target="_blank"
                  className="font-sans break-words hover:text-[#2462D0]"
                  href="https://apps.odoo.com/apps/modules/17.0/tableau_desktop_connector"
                >
                  https://apps.odoo.com/apps/modules/17.0/tableau_desktop_connector
                </a>
              </div>
              <img
                className="img-fluid img my-5"
                src="/images/tableau/buyOdoo.png"
                alt="odoo powerbi installation guide"
              />
              <span>OR</span>
              <div className="border rounded-sm my-1 bg-[#F9F9F9] p-[22px]">
                <a
                  target="_blank"
                  className="font-sans break-words hover:text-[#2462D0]"
                  href="https://techfinna.com/odoo-tableau-connector/"
                >
                  https://techfinna.com/odoo-tableau-connector/
                </a>
              </div>
              <img
                className="img-fluid img my-5"
                src="/images/tableau/buyWebsite.png"
                alt="odoo powerbi installation guide"
              />
            </ul>
          </div>
          {/* config */}
          {/* <div className="space-y-3" id="config">
            <h3 className=" font-bold text-3xl"> Configuration:</h3>
            <h4 className="font-bold text-xl pt-2" id="1.1">
              1. Download the PQX connector file
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li> Download the connector file by Techfinna </li>
              <div className="border rounded-sm my-1 bg-[#F9F9F9] p-[22px]">
                <a
                  target="_blank"
                  className="font-sans break-words hover:text-[#2462D0]"
                  href="https://www.dropbox.com/scl/fi/tlcjpnjtz599t3e05osv6/OdooConnectorTechFinna.pqx?rlkey=14xuomom4uwlzd01w53altjax&st=17y1hheq&dl=0"
                >
                  https://www.dropbox.com/scl/fi/tlcjpnjtz599t3e05osv6/OdooConnectorTechFinna.pqx?rlkey=14xuomom4uwlzd01w53altjax&st=17y1hheq&dl=0
                </a>
              </div>
              <li>
                {" "}
                After Downloading paste the PQX file in the PowerBI custom
                connectors directory
              </li>

              <div className="border rounded-sm my-1 bg-[#F9F9F9] p-[22px]">
                <p className="font-semibold">Default Location:</p>C:\Users\
                {"<User>"}\Documents\Power BI Desktop\Custom Connectors
              </div>
              <p>
                If cannot find this location,{" "}
                <a href="#troubleshoot">Click Here</a>
              </p>
            </ul>
          </div> */}
          {/* steps */}
          <div className="space-y-3" id="config">
            <h3 className=" font-bold text-3xl"> Steps:</h3>
            <h4 className="font-bold text-xl pt-2" id="1.1">
              1. Download & install 'odoo_tableau_connector.exe' from the
              installation folder
            </h4>
            <div className="border rounded-sm my-1 bg-[#F9F9F9] p-[22px]">
              <a
                target="_blank"
                className="font-sans break-words hover:text-[#2462D0]"
                href="https://www.dropbox.com/scl/fo/zwe5oq66le7xdbb9hxhbt/AJIbVUYutc1ctkajq7DaV_c?rlkey=kfk9rf8tu4872sw4jamtqg8pf&st=xuxr9tnb&dl=0"
              >
                https://www.dropbox.com/scl/fo/zwe5oq66le7xdbb9hxhbt/AJIbVUYutc1ctkajq7DaV_c?rlkey=kfk9rf8tu4872sw4jamtqg8pf&st=xuxr9tnb&dl=0
              </a>
            </div>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li>
                {" "}
                Complete the <b>Installation</b>{" "}
              </li>
              <img
                className="shadow-lg "
                src="/images/tableau/install1.png"
                width={700}
              />
              <img
                className="shadow-lg pt-2"
                src="/images/tableau/install2.png"
                width={700}
              />
              <li className="mt-6">
                {" "}
                Go to {"->"} <b>Desktop</b> {"->"}{" "}
                <b>and open 'Launch Tableau with Connector'</b>
              </li>
              <img
                className="shadow-lg "
                src="/images/tableau/shortcut.png"
                width={700}
              />
            </ul>
            <h4 className="font-bold text-xl pt-6" id="1.2">
              2. Search Odoo Connector:
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li> Click on more</li>
              <img
                className="img-fluid img my-5 shadow"
                src="/images/tableau/clickMore.png"
                width={700}
              />
              <li>
                {" "}
                Search for <b>'Odoo Tableau Connector by Techfinna'</b> and open
                it
              </li>
              <img
                className="img-fluid img my-5 shadow"
                src="/images/tableau/odooconn.png"
                width={700}
              />
              {/* <div className="border-2 border-green-600 p-4 bg-green-200 rounded-xl shadow-xl flex flex-col mb-6">
                <h3>URL & Token</h3>
                <p>
                  Open{" "}
                  <a className="underline" href="#troubleshoot">
                    troubleshoot options
                  </a>
                </p>
              </div> */}
              <li> Copy the URL & Token from your Odoo </li>
              <img
                className="img-fluid img my-5 shadow"
                src="/images/tableau/generate-token.jpg"
                width={700}
              />
              <li>
                {" "}
                Paste the Url & Token and click <b>Load</b>{" "}
              </li>
              <img
                className="img-fluid img my-5 shadow"
                src="/images/tableau/getdata.png"
                width={700}
              />
            </ul>
            <h4 className="font-bold text-xl pt-6" id="1.3">
              3. Search and select tables
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <img
                className="img-fluid img my-5 shadow"
                src="/images/tableau/details.png"
                width={700}
              />
            </ul>
            <h4 className="font-bold text-xl pt-6" id="1.3">
              4. Done! Connection created successfully
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <img
                className="img-fluid img my-5 shadow"
                src="/images/tableau/connectionSuccessful.png"
                width={700}
              />
            </ul>
          </div>
          {/* Troubleshoot */}
          <div className="space-y-3" id="troubleshoot">
            <h3 className=" font-bold text-3xl"> Troubleshoot Options:</h3>
            <h4 className="font-bold text-xl pt-2" id="1.1">
              1. The installation file 'odoo_tableau_connector.exe' and tableau
              file 'odoo_tableau_connector.taco' are not in the same directory
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li>
                {" "}
                To fix it, ensure that you do not change the directory of the
                files after extracting the zip. Both of these files should be in
                the same folder{" "}
              </li>
              <img
                src="/images/tableau/install1.png"
                width={700}
                className="shadow-xl"
              />
            </ul>
            <h4 className="font-bold text-xl pt-6" id="1.1">
              2. Security key credentials error
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li>
                {" "}
                You can fix this error by installing the .exe file again and
                start 'Launch Tableau with connector' shortcut created on the
                desktop.{" "}
              </li>
              <img
                src="/images/tableau/shortcut.png"
                width={700}
                className="shadow-xl"
              />
            </ul>
            <h4 className="font-bold text-xl pt-6" id="1.1">
              3. URL / Token is incorrect
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li>
                {" "}
                If facing this issue, connect us with at{" "}
                <a href="mailto:info@techfinna.com">info@techfinna.com</a>. We
                will reach you out within 24 hours
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
