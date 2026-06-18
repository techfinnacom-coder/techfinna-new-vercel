import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Connect Odoo with Tableau - Guide",
  description:
    "Follow our detailed guide to connect Odoo with Tableau. Gain valuable insights by visualizing and analyzing your business data with seamless integration.",
};

const page = () => {
  const meta = {
    title: "Odoo Inventory Forecasting - User Guide",
    desc: "Learn how to use the Odoo Inventory Forecasting module with this comprehensive user guide. Step-by-step instructions to optimize your inventory management using AI-powered forecasting.",
    url: "https://techfinna.com/guides/inventory-forecasting/",
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
        <div className="w-full md:w-[80%] mx-auto space-y-10">
         <div className="flex flex-col w-[80%] justify-center mx-auto space-y-10">
          <h2 className="text-xl text-gray-500 font-semibold">
            How to use Inventory Forecasting with AI
          </h2>
          <h1 className="text-5xl font-bold">
            Odoo Inventory Forecasting - User Guide
          </h1>
          <hr></hr>
          {/* requirements */}
          <div className="space-y-3" id="req">
            <h3 className=" font-bold text-2xl text-gray-700">
              {" "}
              Requirements:
            </h3>
            <ul className="leading-loose text-lg text-gray-500 list-disc ml-[30px]">
              <li>
                {" "}
                Odoo Versions Supported: 12, 13, 14, 15, 16, 17, 18, 19
                (Enterprise or Community)
              </li>
              <li>Inventory forecasting module installed in your Odoo</li>
              <li>Sales history data should be present</li>
            </ul>
          </div>
         </div>
         

          {/* installation */}
          {/* <div className="space-y-3" id="install">
            <h3 className=" font-bold text-3xl"> Installation:</h3>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li>
                {" "}
                Download & install the Odoo Inventory Forecasting by TechFinna{" "}
              </li>
              <div className="border rounded-sm my-1 bg-[#F9F9F9] p-[22px]">
                <a
                  target="_blank"
                  className="font-sans break-words hover:text-[#2462D0]"
                  href="https://apps.odoo.com/apps/modules/19.0/inventory_forecasting_techfinna"
                >
                  https://apps.odoo.com/apps/modules/19.0/inventory_forecasting_techfinna
                </a>
              </div>
              <img
                className="img-fluid img my-5"
                src="/images/guide/odooInventory.png"
                alt="odoo inventory forecasting user guide"
              />
              <span>OR</span>
              <div className="border rounded-sm my-1 bg-[#F9F9F9] p-[22px]">
                <a
                  target="_blank"
                  className="font-sans break-words hover:text-[#2462D0]"
                  href="https://techfinna.com/odoo-inventory-forecasting/"
                >
                  https://techfinna.com/odoo-inventory-forecasting/
                </a>
              </div>
              <img
                className="img-fluid img my-5"
                src="/images/guide/websiteInventory.png"
                alt="odoo inventory forecasting user guide"
              />
            </ul>
          </div> */}
          
          {/* steps */}
          <div className="space-y-3" id="config">
            <div className="flex flex-col w-[80%] justify-center mx-auto ">

            <h3 className=" font-semibold text-3xl text-center"> Steps:</h3>
            <h4 className="font-bold text-xl pt-2 mt-4" id="1.1">
              1. Choose Marketplace
            </h4>
            <div className="border rounded-sm my-1 w-[80%] mx-auto bg-[#F9F9F9] p-[22px]">
              <img
                className="shadow-lg mx-auto"
                src="/images/inventory/marketplaces1.png"
                width={700}
              />
            </div>
            <h4 className="font-bold text-xl pt-2" id="1.1">
              2. Set up analytics setting
            </h4>
            </div>
            <div className="mt-4 w-[80%] mx-auto">
              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
                <table className="w-full text-left text-[15px]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-gray-700 w-[180px]">
                        Setting
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700">
                        What to do
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700 w-[520px]">
                        Example
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {/* Vendor */}
                    <tr className="align-top">
                      <td className="px-4 py-4">
                        <div className="font-semibold text-gray-900">
                          Select Vendor
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          Creates vendor-specific report
                        </div>
                      </td>

                      <td className="px-4 py-4 text-gray-700 leading-relaxed">
                        Open the vendor dropdown and pick the vendor you want to
                        analyze.<br></br>
                        <b>Note:</b> Choosing multiple vendors prevents RFQ
                        creation
                        <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700 border border-emerald-100">
                          Tip: Choose the vendor you purchase from most
                          frequently
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-2">
                          <img
                            className="shadow-md rounded-md w-full"
                            src="/images/guide/ss1.png"
                            alt="Select vendor dropdown"
                          />
                        </div>
                      </td>
                    </tr>

                    {/* Forecast Month */}
                    <tr className="align-top">
                      <td className="px-4 py-4">
                        <div className="font-semibold text-gray-900">
                          Forecast Month
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          Defines the forecasting window
                        </div>
                      </td>

                      <td className="px-4 py-4 text-gray-700 leading-relaxed">
                        Choose the month range you want to forecast.
                        <div className="mt-2 text-sm text-gray-600">
                          <span className="font-semibold text-gray-800">
                            Example:
                          </span>{" "}
                          Dec 2025 → May 2026
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-2">
                          <img
                            className="shadow-md rounded-md w-full"
                            src="/images/guide/ss2.png"
                            alt="Select forecasting month dropdown"
                          />
                        </div>
                      </td>
                    </tr>

                    {/* Buffer & Seasonality */}
                    <tr className="align-top">
                      <td className="px-4 py-4">
                        <div className="font-semibold text-gray-900">
                          Buffer
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          Safety multiplier
                        </div>

                      
                      </td>

                      <td className="px-4 py-4 text-gray-700 leading-relaxed">
                        <div>
                          <span className="font-semibold text-gray-900">
                            Buffer
                          </span>{" "}
                          slightly inflates demand to protect against stockouts.
                        </div>
                       

                        <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
                          Keep Buffer small unless you have frequent stockouts.
                          Use Seasonality for predictable peaks (festivals,
                          summer, etc.).
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-2">
                          <img
                            className="shadow-md rounded-md w-full"
                            src="/images/guide/update-buffer.png"
                            alt="Buffer and seasonality table"
                          />
                        </div>
                      </td>
                    </tr>

                     <tr className="align-top">
                      <td className="px-4 py-4">
                     
                        <div className="font-semibold text-gray-900 mt-4">
                          Seasonality
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          Month-wise adjustment
                        </div>
                      </td>

                      <td className="px-4 py-4 text-gray-700 leading-relaxed">
                     
                        <div className="mt-2">
                          <span className="font-semibold text-gray-900">
                            Seasonality
                          </span>{" "}
                          increases or decreases demand for a category in
                          specific months.
                        </div>

                       
                      </td>

                      <td className="px-4 py-4">
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-2">
                          <img
                            className="shadow-md rounded-md w-full"
                            src="/images/guide/homeInventory.png"
                            alt="Buffer and seasonality table"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            
            <div className="mt-4 space-y-6">
              {/* 3-panels overview */}
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900">
                   3. Analytics Screen Layout (3 Sections)
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    The screen is divided into History (left), Main Table
                    (center), and Forecasted Table (right).
                  </p>
                </div>

                <div className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* History */}
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Section 1</p>
                        <h6 className="text-base font-semibold text-gray-900">
                          History
                        </h6>
                      </div>
                      <span className="text-xs font-semibold text-gray-600 bg-white border border-gray-200 px-2 py-1 rounded-full">
                        Left Panel
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                      Shows historical sales context that feeds forecasting.
                    </p>
                    <div className="mt-3 rounded-lg border border-gray-200 bg-white p-2">
                      <img
                        className="rounded-md shadow-sm w-full"
                        src="/images/guide/history-table.png"
                        alt="History section"
                      />
                    </div>
                  </div>

                  {/* Main Table */}
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Section 2</p>
                        <h6 className="text-base font-semibold text-gray-900">
                          Main Table
                        </h6>
                      </div>
                      <span className="text-xs font-semibold text-gray-600 bg-white border border-gray-200 px-2 py-1 rounded-full">
                        Center Panel
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                      Lists products (Name, Category, Last 4 Weeks Avg, PID,
                      Override Run Rate, SKU, etc.).
                    </p>
                    <div className="mt-3 rounded-lg border border-gray-200 bg-white p-2">
                      <img
                        className="rounded-md shadow-sm w-full"
                        src="/images/guide/main-table.png"
                        alt="Main table section"
                      />
                    </div>
                  </div>

                  {/* Forecast */}
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Section 3</p>
                        <h6 className="text-base font-semibold text-gray-900">
                          Forecasted Table
                        </h6>
                      </div>
                      <span className="text-xs font-semibold text-gray-600 bg-white border border-gray-200 px-2 py-1 rounded-full">
                        Right Panel
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                      Shows month-wise forecasting result including Demand,
                      Supply, and Stock calculations.
                    </p>
                    <div className="mt-3 rounded-lg border border-gray-200 bg-white p-2">
                      <img
                        className="rounded-md shadow-sm w-full"
                        src="/images/guide/forecasted-table.png"
                        alt="Forecasted table section"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Key columns glossary */}
              <div className="rounded-xl border border-gray-200 w-[80%] mx-auto bg-white shadow-sm overflow-hidden">
                <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
                  <h5 className="text-lg font-semibold text-gray-900">
                    Main Table — Column Meaning
                  </h5>
                  <p className="text-sm text-gray-600 mt-1">
                    Quick reference for the key fields you’ll see in the center
                    table.
                  </p>
                </div>

                <div className="p-5 overflow-x-auto">
                  <table className="w-full text-left text-[15px]">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-gray-700 w-[220px]">
                          Column
                        </th>
                        <th className="px-4 py-3 font-semibold text-gray-700">
                          Meaning
                        </th>
                        <th className="px-4 py-3 font-semibold text-gray-700 w-[260px]">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">
                          Product Name
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          The product being forecasted.
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          Helps identify the SKU quickly.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">
                          Category
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          Product category used for grouping & filters.
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          Useful for seasonal patterns.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">
                          Last 4 Weeks Avg
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          Recent sales average used as a baseline.
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          Feeds forecasting logic.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">
                          PID
                        </td>
                        <td className="px-4 py-3 text-gray-700">Product ID.</td>
                        <td className="px-4 py-3 text-gray-600">
                          Internal identifier.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">
                          Override Run Rate
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          A manual value you can change to override the system’s
                          sales average.
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          Use this to “play around” and see how forecast
                          changes.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">
                          SKU
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          Stock Keeping Unit code.
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          Matches your inventory label.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">
                          Opening Stock
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          Imported directly from Odoo Inventory.
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          Starting stock for the month.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">
                          Supply
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          Imported from Odoo (incoming supply).
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          Used to compute projected stock.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-5 grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Override Runrate highlight */}
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
                  <h5 className="text-lg font-semibold text-gray-900">
                    Editing Override Run Rate
                  </h5>
                  <p className="text-sm text-gray-600 mt-1">
                    Changing Override Run Rate updates forecasting calculations
                    for that product.
                  </p>
                </div>
                <div className="p-5">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-2 w-full flex justify-center items-center">
                    <img
                      className="rounded-md shadow-md mx-auto"
                      src="/images/guide/edit-override-runrate.png"
                      alt="Edit Override Runrate"
                      width={"400px"}
                    />
                  </div>
                </div>
              </div>

              {/* Demand total formula */}
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
                  <h5 className="text-lg font-semibold text-gray-900">
                    How Demand Total is Calculated
                  </h5>
                  <p className="text-sm text-gray-600 mt-1">
                    Demand Total depends on Override Run Rate, Days Left,
                    Seasonality, and Buffer.
                  </p>
                </div>
                <div className="p-5">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-2">
                    <img
                      className="rounded-md shadow-md w-full"
                      src="/images/guide/demand-total.png"
                      alt="Demand Total calculation"
                    />
                  </div>
                </div>
              </div>

</div>

              {/* Filters & controls */}
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden  mx-auto">
                <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
                  <h5 className="text-lg font-semibold text-gray-900">
                    Filters & Controls
                  </h5>
                  <p className="text-sm text-gray-600 mt-1">
                    Use visibility, filters, search, and pagination to quickly
                    focus on the right products.
                  </p>
                </div>

                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <h6 className="font-semibold text-gray-900">
                      Column Visibility
                    </h6>
                    <p className="text-sm text-gray-700 mt-1">
                      Choose which columns you want to show/hide in the table.
                    </p>
                    <div className="mt-3 rounded-lg border border-gray-200 bg-white p-2">
                      <img
                        className="rounded-md shadow-sm w-full"
                        src="/images/guide/column-visibility.png"
                        alt="Column visibility"
                      />
                    </div>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <h6 className="font-semibold text-gray-900">
                      Global Search
                    </h6>
                    <p className="text-sm text-gray-700 mt-1">
                      Search by product name, SKU, etc. (example search:
                      “yamaha”).
                    </p>
                    <div className="mt-3 rounded-lg border border-gray-200 bg-white p-2">
                      <img
                        className="rounded-md shadow-sm w-full"
                        src="/images/guide/global-search.png"
                        alt="Global search"
                      />
                    </div>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <h6 className="font-semibold text-gray-900">
                      Filter by Category
                    </h6>
                    <p className="text-sm text-gray-700 mt-1">
                      Narrow down the table by selecting specific categories.
                    </p>
                    <div className="mt-3 rounded-lg border border-gray-200 bg-white p-2">
                      <img
                        className="rounded-md shadow-sm w-full"
                        src="/images/guide/filter-category.png"
                        alt="Filter by category"
                      />
                    </div>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <h6 className="font-semibold text-gray-900">
                      Filter by Vendors
                    </h6>
                    <p className="text-sm text-gray-700 mt-1">
                      Focus on products from selected vendors only.
                    </p>
                    <div className="mt-3 rounded-lg border border-gray-200 bg-white p-2">
                      <img
                        className="rounded-md shadow-sm w-full"
                        src="/images/guide/filter-vendors.png"
                        alt="Filter by vendors"
                      />
                    </div>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 ">
                    <h6 className="font-semibold text-gray-900">
                      Pagination Controls
                    </h6>
                    <p className="text-sm text-gray-700 mt-1">
                      Navigate pages and control how many rows are shown per
                      page.
                    </p>
                    <div className="mt-3 rounded-lg border border-gray-200 bg-white p-2">
                      <img
                        className="rounded-md shadow-sm w-[400px]"
                        src="/images/guide/pagination-controls.png"
                        alt="Pagination controls"
                      />
                    </div>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <h6 className="font-semibold text-gray-900">
                      Change Row Color
                    </h6>
                    <p className="text-sm text-gray-700 mt-1">
                      You can change the row color to easily identify products.
                    </p>
                    <div className="mt-3 rounded-lg border border-gray-200 bg-white p-2">
                      <img
                        className="rounded-md shadow-sm w-[500px]"
                        src="/images/guide/change-row-color.png"
                        alt="Change row color"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions (RFQ) */}
              {/* <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
    <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
      <h5 className="text-lg font-semibold text-gray-900">Create RFQ (Single Click)</h5>
      <p className="text-sm text-gray-600 mt-1">
        Select vendor and products, then create RFQ instantly.
      </p>
    </div>
    <div className="p-5">
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img
          className="rounded-md shadow-md w-full"
          src="/images/guide/create-rfq.png"
          alt="Create RFQ"
        />
      </div>
    </div>
  </div> */}
            </div>

            <h4 className="font-bold text-xl w-[80%] mx-auto mt-4 pt-6" id="1.3">
              4. Create RFQ in an instant
            </h4>
            <ul className="leading-loose text-xl list-disc w-[80%] mx-auto">
              <div className="my-2 flex flex-col  gap-4 items-center">
                <video
                  className="shadow-lg w-[100%]"
                  src="/images/inventory/single-click-rfq.mp4"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
