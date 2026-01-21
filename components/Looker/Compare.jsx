"use client"
import React from "react";
import { useState } from "react";

const Compare = () => {

  return (
    <div className="flex flex-col w-full lg:w-[80%] mx-auto">
      {/* Mobile layout */}
      <section className="text-gray-700 lg:hidden overflow-hidden">
        <div className="text-center py-4 mt-8 px-4">
          <h2 className="text-2xl font-extrabold my-2 text-black flex text-center justify-center items-center gap-4">
            Why to use Power BI Advance Connector?
          </h2>
          <p className="text-base font-medium my-2 mb-4 text-neutral-800">
            Why people prefer Power BI Advance over Looker Studio
          </p>
        </div>

        <div className="px-4 pb-10 mx-auto flex flex-col gap-6">
          {/* Looker Studio - mobile card */}
          <div className="w-full border border-gray-300 rounded-lg shadow-sm">
            <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs inline-block rounded-bl rounded-tr">
              POPULAR
            </span>
            <div className="px-3 text-center py-6 flex flex-col items-center justify-center">
              <h3 className="text-2xl">
                Looker Studio
              </h3>
              <h2 className="text-xl text-gray-900 font-medium flex flex-col items-center justify-center leading-snug mt-2">
                <span className="text-gray-600 text-sm mt-1">
                  Powerful Google tool that transforms your data into beautiful, interactive dashboards
                </span>
              </h2>
            </div>
            <div className="text-xs text-gray-700">
              <p className="bg-gray-100 h-12 text-left flex items-center px-3 border-t border-gray-300">
                <b className="pr-4">No. of rows in query results:</b>Maximum of 75,000 rows 
              </p>
              <p className="h-12 text-left flex items-center px-3">
                <b className="pr-4">Character limit in short description</b>114 characters 
              </p>
              <p className="bg-gray-100 h-12 text-left flex items-center px-3">
                 <b className="pr-4">Query Timeout:</b>5 minutes 
              </p>
              <p className="h-12 text-left flex items-center px-3">
                  <b className="pr-4">Column limit for pivoted query result:</b>50
              </p>
              <p className="bg-gray-100 h-12 text-left flex items-center px-3">
                  <b className="pr-4">Maximum no. of column for pivoted :</b>50
              </p>
              <p className="bg-white h-12 text-left flex items-center px-3">
                  <b className="pr-4">Size limit per dataset :</b>100 MB
              </p>
              <p className="bg-gray-100 h-12 text-left flex items-center px-3">
                <b className="pr-4">Size per request limit:</b>50 MB 
              </p>
              <p className="bg-white h-12 text-left flex items-center px-3">
               <b className="pr-4">Total Storage Limit:</b>  2 GB total storage limit
              </p>
              <p className="bg-gray-100 h-12 text-left flex items-center px-3">
               <b className="pr-4">Blend data limit:</b>  5 sources maximum
              </p>
            </div>
          </div>

          {/* Power BI Advance - mobile card */}
          <div className="w-full border border-indigo-500 rounded-lg shadow-sm">
            <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs inline-block rounded-bl rounded-tr">
              POPULAR
            </span>
            <div className="px-3 text-center py-6 flex flex-col items-center justify-center">
              <h3 className="text-2xl">
                Power BI Advance
              </h3>
              <h2 className="text-xl text-gray-900 font-medium flex flex-col items-center justify-center leading-snug mt-2">
                <span className="text-gray-600 text-sm mt-1">
                  Powerful Google tool that transforms your data into beautiful, interactive dashboards
                </span>
              </h2>
            </div>
            <div className="text-xs text-gray-700">
              <p className="bg-gray-100 h-12 text-left flex items-center px-3 border-t border-gray-300">
                <b className="pr-4">No. of rows in query results:</b>Hundreds of thousands+
              </p>
              <p className="h-12 text-left flex items-center px-3">
                <b className="pr-4">Character limit </b>No strict 114-character connector limit
              </p>
              <p className="bg-gray-100 h-12 text-left flex items-center px-3">
                 <b className="pr-4">Query Timeout:</b>Handles long/complex SQL
              </p>
              <p className="h-12 text-left flex items-center px-3">
                  <b className="pr-4">Column limit for pivoted query result:</b>No such pivot limits
              </p>
              <p className="bg-gray-100 h-12 text-left flex items-center px-3">
                  <b className="pr-4">Maximum no. of column for pivoted :</b>Designed for wide models
              </p>
              <p className="bg-white h-12 text-left flex items-center px-3">
                  <b className="pr-4">Size limit per dataset :</b>Higher dataset sizes supported
              </p>
              <p className="bg-gray-100 h-12 text-left flex items-center px-3">
                <b className="pr-4">Size per request limit:</b>Optimized via gateway & incremental refresh
              </p>
              <p className="bg-white h-12 text-left flex items-center px-3">
               <b className="pr-4">Total Storage Limit:</b> Larger workspace storage
              </p>
              <p className="bg-gray-100 h-12 text-left flex items-center px-3">
               <b className="pr-4">Blend data limit:</b> Connect & combine multiple sources in one model
              </p>
            </div>

            <div className="p-4 text-center border-t border-gray-300">
              <a
                href="/odoo-powerbi-advance-connector/"
                className="flex items-center justify-center mt-auto text-white bg-indigo-500 border-0 py-2 px-6 w-fit mx-auto focus:outline-none hover:bg-indigo-600 rounded gap-4 text-sm"
              >
                Buy Now
                <svg
                  className="ml-auto"
                  height="20px"
                  width="20px"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"></path>
                </svg>
              </a>
              <p className="text-[10px] text-gray-500 mt-2">
                Boost productivity 100x
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop layout (your original section) */}
      <section className="text-gray-700 hidden lg:block overflow-hidden ">
        <div className="text-center py-4 mt-12">
          <h2 className="text-3xl md:text-5xl font-extrabold my-4 text-black flex text-center justify-center items-center gap-4">
            Why to use Power BI Advance Connector?
          </h2>
          <p className="text-xl font-medium my-2 mb-6 text-neutral-800">
            Why people prefer Power BI Advance over Looker Studio
          </p>
        </div>
        <div className="container px-5 pb-12 mx-auto flex flex-wrap ">
       
          <div className="flex justify-center w-full flex-wrap lg:border border-gray-300 rounded-lg">
            
            <div className="lg:w-1/2 min-w-[300px] lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
              <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                POPULAR
              </span>
              <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                <h3 className=" text-2xl">
                  Looker Studio
                </h3>
                <h2 className="text-5xl text-gray-900 font-medium flex flex-col items-center justify-center leading-none mb-4 mt-2">
                  <span className="text-gray-600 text-base  mt-1">
                    Powerful Google tool that transforms your data into beautiful, interactive dashboards
                  </span>
                </h2>
              </div>
              <p className="bg-gray-100 text-gray-600 h-12 text-left  flex items-center px-4 -mt-px  border-t border-gray-300">
                <b className="pr-8">No. of rows in query results:</b>Maximum of 75,000 rows 
              </p>
              <p className="text-gray-600 text-left h-12 flex items-center px-4">
                <b className="pr-8">Character limit in short description</b>114 characters 
              </p>
              <p className="bg-gray-100 text-left h-12 flex items-center px-4">
                 <b className="pr-8">Query Timeout:</b>5 minutes 
              </p>
              <p className="h-12  text-left h-12 flex items-center px-4">
                  <b className="pr-8">Column limit for pivoted query result:</b>50
              </p>
              <p className="bg-gray-100  text-left h-12 flex items-center px-4">
                  <b className="pr-8">Maximum no. of column for pivoted :</b>50
              </p>
              <p className="bg-white  text-left h-12 flex items-center px-4">
                  <b className="pr-8">Size limit per dataset :</b>100 MB
              </p>
              <p className="bg-gray-100 text-gray-600 text-left h-12 flex items-center px-4">
                <b className="pr-4">Size per request limit:</b>50 MB 
              </p>
              <p className="bg-white text-gray-600 text-left h-12 flex items-center px-4">
               <b className="pr-4">Total Storage Limit:</b>  2 GB total storage limit
              </p>
              <p className="bg-gray-100 text-gray-600 text-left h-12 flex items-center px-4">
               <b className="pr-4">Blend data limit:</b>  5 sources maximum
              </p>
             
            </div>
            <div className="lg:w-1/2 min-w-[300px] lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-indigo-500 relative">
              <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                POPULAR
              </span>
              <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                 <h3 className=" text-2xl">
                  Power BI Advance
                </h3>
                <h2 className="text-5xl text-gray-900 font-medium flex flex-col items-center justify-center leading-none mb-4 mt-2">
                  <span className="text-gray-600 text-base  mt-1">
                    Powerful Google tool that transforms your data into beautiful, interactive dashboards
                  </span>
                </h2>
              </div>
                   <p className="bg-gray-100 text-gray-600 h-12 text-left  flex items-center px-4 -mt-px  border-t border-gray-300">
                <b className="pr-8">No. of rows in query results:</b>Hundreds of thousands+
              </p>
              <p className="text-gray-600 text-left h-12 flex items-center px-4">
                <b className="pr-8">Character limit </b>No strict 114-character connector limit
              </p>
              <p className="bg-gray-100 text-left h-12 flex items-center px-4">
                 <b className="pr-8">Query Timeout:</b>Handles long/complex SQL
              </p>
              <p className="h-12 text-left flex items-center px-4">
                  <b className="pr-8">Column limit for pivoted query result:</b>No such pivot limits
              </p>
              <p className="bg-gray-100  text-left h-12 flex items-center px-4">
                  <b className="pr-8">Maximum no. of column for pivoted :</b>Designed for wide models
              </p>
              <p className="bg-white  text-left h-12 flex items-center px-4">
                  <b className="pr-8">Size limit per dataset :</b>Higher dataset sizes supported
              </p>
              <p className="bg-gray-100 text-gray-600 text-left h-12 flex items-center px-4">
                <b className="pr-4">Size per request limit:</b>Optimized via gateway & incremental refresh
              </p>
              <p className="bg-white text-gray-600 text-left h-12 flex items-center px-4">
               <b className="pr-4">Total Storage Limit:</b> Larger workspace storage
              </p>
              <p className="bg-gray-100 text-gray-600 text-left h-12 flex items-center px-4">
               <b className="pr-4">Blend data limit:</b> Connect & combine multiple sources in one model
              </p>
              <div className="p-6 text-center border-t border-gray-300">
                <a
                  href="/odoo-powerbi-connector/"
                  className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-6 w-fit focus:outline-none hover:bg-indigo-600 rounded mx-auto gap-4"
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
                  Boost productivity 100x
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
    </div>
  );
};

export default Compare;
