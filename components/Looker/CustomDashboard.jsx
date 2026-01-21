import React from "react";

const CustomDashboard = () => {
  return (
    <section className="bg-gray-100 py-16 mt-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl flex text-center justify-center gap-3 items-center font-bold text-gray-800">
            Custom Dashboards
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-black"
              viewBox="0 0 24 24"
              id="dashboard-alt-3"
              data-name="Flat Line"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="14"
                rx="1"
                className="fill-[#2ca9bc] stroke-2"
              />
              <path
                d="M10,14a2,2,0,0,1,4,0"
                className="fill-none stroke-current stroke-2 strokeLinecap-round strokeLinejoin-round"
              />
              <path
                d="M17,7l-3.84,5.37M21,16V4a1,1,0,0,0-1-1H4A1,1,0,0,0,3,4V16a1,1,0,0,0,1,1H20A1,1,0,0,0,21,16Zm-7,5H10l1-4h2ZM8,21h8"
                className="fill-none stroke-current stroke-2 strokeLinecap-round strokeLinejoin-round"
              />
            </svg>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Unlock the power of data with
            personalized dashboards. We create
            customized Power BI dashboards that
            cater to your specific business needs,
            helping you track performance,
            visualize key metrics, and make
            data-driven decisions with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/images/powerbi/dash.png"
              alt="Dashboard Preview"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="flex justify-center items-center w-full flex-col md:justify-start md:items-start">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Tailored for Your Needs
            </h3>

            <ul className="list-disc list-inside text-lg text-gray-600">
              <li>
                Interactive charts and graphs
              </li>
              <li>Real-time data updates</li>
              <li>
                Fully customizable to your KPIs
              </li>
              <li>Accessible on any device</li>
            </ul>
            <a
              href="/contact/"
              className="mt-6 text-neutral-800 w-fit text-center flex justify-center items-center border-neutral-700 shadow-lg border-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 disabled:cursor-wait disabled:opacity-50 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center "
            >
              Request a Custom Dashboard
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDashboard;
