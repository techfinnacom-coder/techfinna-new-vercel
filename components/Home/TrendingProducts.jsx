"use client";
import React from "react";
import { useState, useEffect } from "react";
import products from "../../data/products.json";

const SearchProduct = () => {
   const [biPrice, setBiPrice] = useState(0)
    const [lookerPrice , setLookerPrice] = useState(0)
    const [dataModelPrice, setDataModelPrice] = useState(0)
    const [tableauPrice , setTableauPrice] = useState(0)
    const [bigqueryPrice, setBigqueryPrice] = useState(0)
    const [sheetsPrice , setSheetsPrice] = useState(0)
  
  useEffect(() => {
    const powerbi = products.filter(
      (obj) => obj.href == "/odoo-powerbi-connector/"
    );
    const looker = products.filter(
      (obj) => obj.href == "/looker-odoo-connector/"
    );
    const datamodel = products.filter(
      (obj) => obj.href == "/odoo-data-model/"
    );
    const tableau = products.filter(
      (obj) => obj.href == "/odoo-tableau-connector/"
    );
    const bigquery = products.filter(
      (obj) => obj.href == "/odoo-bigquery-connector/"
    );
    const sheets = products.filter(
      (obj) => obj.href == "/googlesheet-odoo-connector/"
    );
    setBiPrice(
      powerbi[0].price
    )
    setLookerPrice(
      looker[0].price
    )
    setDataModelPrice(
      datamodel[0].price
    )
    setTableauPrice(
      tableau[0].price
    )
    setBigqueryPrice(
      bigquery[0].price
    )
    setSheetsPrice(
      sheets[0].price
    )
  }, [])

  return (
    <div
      id="searchProduct"
      className="flex flex-col justify-center mt-[40px]  items-start px-4 md:px-8 py-12 mb-12 w-[90%] md:w-[90%] mx-auto"
    >
      <div className="flex flex-col w-[90%] mx-auto">
        <div className="flex  justify-between items-start text-left">
          {/* <p className="md:font-sans tracking-wider text-base md:text-lg text-black py-2">
            Category Overview
          </p> */}

          <div className="flex justify-start items-start  gap-4">
            <h2 className="text-2xl md:text-4xl flex text-black">
              Best Selling{" "}
            </h2>
            <img
              className="w-[60px] md:w-[120px] -mt-[3px]"
              src="/images/odoo_logo.png"
              alt="odoo with techfinna"
              width={100}
            />
            <h2 className="text-2xl md:text-4xl flex text-black">
              Apps
            </h2>
          </div>

          <div className="flex justify-center items-center gap-2">
            <a
              href="/odoo-products/"
              className="flex px-2 py-2 gap-2 text-xl justify-center items-center text-black"
            >
              View More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  width="24"
                  height="24"
                  fill="white"
                />
                <path
                  d="M6 12H18M18 12L13 7M18 12L13 17"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="my-8 w-[80%] mx-auto">
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-2 xl:grid-cols-3">
          <div class="rounded-lg  border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <a
              href="/odoo-powerbi-connector/"
              class="h-56 w-full flex justify-center items-center bg-gray-100 rounded-lg "
            >
              <div class="flex justify-center items-center w-full">
                <img
                  classname="p-2"
                  src="/images/powerbi/powerbi-logo.png"
                  alt="odoo powerbi connector"
                  width="100px"
                />
              </div>
            </a>
            <div class="pt-6 flex flex-col min-h-11">
              <a
                href="/odoo-powerbi-connector/"
                class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
              >
                Odoo Power BI Connector
              </a>
              <div class="mt-2 flex items-center gap-2">
                <div class="flex items-center">
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                </div>
                <p class="text-sm font-medium text-gray-900 dark:text-white">
                  4.9
                </p>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  (114)
                </p>
              </div>
              <ul class="mt-2 flex items-center gap-4">
                <li class="flex items-center gap-2">
                  <img
                    src="/images/demo-svg.svg"
                    alt="watch demo icon"
                    height="20px"
                    width="20px"
                  />
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Watch Demo
                  </p>
                </li>
              </ul>
              <div class="mt-4 flex items-center justify-between gap-2">
                <p class="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                  $ {biPrice}
                </p>
                <a
                  href="/odoo-powerbi-connector/"
                  class="flex text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  <svg
                    class="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    ></path>
                  </svg>
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div class="rounded-lg  border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <a
              href="/looker-odoo-connector/"
              class="h-56 w-full flex justify-center items-center bg-gray-100 rounded-lg "
            >
              <div class="flex justify-center items-center w-full">
                <svg
                  classname="p-2"
                  width="80px"
                  height="80px"
                  viewBox="-78.5 0 413 413"
                  version="1.1"
                  preserveAspectRatio="xMidYMid"
                >
                  <g>
                    <path
                      d="M127.128486,0 C113.797782,0.0058471726 101.556004,7.36006381 95.2905253,19.126605 C89.0250469,30.8931461 89.7564532,45.1553578 97.1927396,56.2192339 L112.606279,40.8274339 C112.096845,39.2920176 111.839876,37.6841242 111.845385,36.066411 C111.845385,27.6618072 118.658663,20.8485297 127.063267,20.8485297 C135.467871,20.8485297 142.281148,27.6618072 142.281148,36.066411 C142.281148,44.4710148 135.467871,51.2842924 127.063267,51.2842924 C125.452814,51.2878362 123.852389,51.0308872 122.323984,50.5233983 L106.932184,65.9151983 C119.749817,74.6084738 136.686605,74.1479499 149.012895,64.7709924 C161.339185,55.3940349 166.302744,39.1943452 161.345227,24.5216568 C156.387711,9.84896827 142.61604,-0.0205786569 127.128486,0 L127.128486,0 Z"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M112.780303,105.112113 C112.803794,92.9288201 108.858278,81.0693768 101.540706,71.3284161 L81.5400617,91.3073204 C87.7949796,102.747737 85.5440645,116.967804 76.0616244,125.917131 L86.9315396,152.483203 C103.037113,142.110661 112.772753,124.268811 112.780303,105.112113 Z"
                      fill="#FBBC04"
                    ></path>
                    <path
                      d="M56.8870939,133.786949 L56.3653379,133.786949 C44.0975407,133.788013 33.1858466,125.990585 29.2128405,114.383946 C25.2398344,102.777307 29.0843199,89.9287712 38.7794013,82.4118404 C48.4744826,74.8949096 61.8756692,74.3722813 72.126715,81.1113398 L91.9317006,61.3063543 C72.6737207,45.6936654 45.4778243,44.4893124 24.9151409,58.3385684 C4.35245741,72.1878245 -4.75374244,97.8421492 2.47549859,121.556363 C9.70473962,145.270576 31.5737,161.482171 56.3653379,161.50524 C60.1906548,161.507115 64.0066702,161.128427 67.7570091,160.374762 L56.8870939,133.786949 Z"
                      fill="#EA4335"
                    ></path>
                    <path
                      d="M127.88938,156.76595 C115.371706,156.753269 102.919887,158.577095 90.9316684,162.179168 L106.780005,200.897806 C113.678715,199.188192 120.760254,198.326726 127.86764,198.332506 C169.050784,198.344513 204.491034,227.444917 212.516351,267.838552 C220.541668,308.232187 198.917134,348.670095 160.866351,364.424121 C122.815568,380.178148 78.9350487,366.861058 56.0581359,332.616375 C33.1812232,298.371692 37.6787581,252.735993 66.8004566,223.615929 C72.8771111,217.558264 79.8143655,212.430409 87.3880761,208.398047 L71.7136583,169.788108 C13.2865745,198.402523 -14.3767247,266.297107 7.41546106,327.59645 C29.2076468,388.895793 93.5203541,424.092503 156.898395,409.404661 C220.276436,394.716818 262.550912,334.818559 255.157557,270.182291 C247.764201,205.546024 193.055814,156.741054 127.998079,156.74421 L127.88938,156.76595 Z"
                      fill="#4285F4"
                    ></path>
                  </g>{" "}
                </svg>
              </div>
            </a>
            <div class="pt-6 flex flex-col min-h-11">
              <a
                href="/looker-odoo-connector/"
                class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
              >
                Odoo Looker Connector
              </a>
              <div class="mt-2 flex items-center gap-2">
                <div class="flex items-center">
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                </div>
                <p class="text-sm font-medium text-gray-900 dark:text-white">
                  4.9
                </p>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  (85)
                </p>
              </div>
              <ul class="mt-2 flex items-center gap-4">
                <li class="flex items-center gap-2">
                  <img
                    src="/images/demo-svg.svg"
                    alt="watch demo icon"
                    height="20px"
                    width="20px"
                  />
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Watch Demo
                  </p>
                </li>
              </ul>
              <div class="mt-4 flex items-center justify-between gap-2">
                <p class="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                  $ {lookerPrice}
                </p>
                <a
                  href="/looker-odoo-connector/"
                  class="flex text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  <svg
                    class="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    ></path>
                  </svg>
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div class="rounded-lg  border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <a
              href="/odoo-data-model/"
              class="h-56 w-full flex justify-center items-center bg-gray-100 rounded-lg "
            >
              <div class="flex justify-center items-center w-full">
                <img
                  src="/images/er-diagram/table-data-model.svg"
                  alt="odoo data model"
                  width="70px"
                />
              </div>
            </a>
            <div class="pt-6 flex flex-col min-h-11">
              <a
                href="/odoo-data-model/"
                class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
              >
                Odoo Data Model
              </a>
              <div class="mt-2 flex items-center gap-2">
                <div class="flex items-center">
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                </div>
                <p class="text-sm font-medium text-gray-900 dark:text-white">
                  4.8
                </p>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  (62)
                </p>
              </div>
              <ul class="mt-2 flex items-center gap-4">
                <li class="flex items-center gap-2">
                  <img
                    src="/images/demo-svg.svg"
                    alt="watch demo icon"
                    height="20px"
                    width="20px"
                  />
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Watch Demo
                  </p>
                </li>
              </ul>
              <div class="mt-4 flex items-center justify-between gap-2">
                <p class="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                  $ {dataModelPrice}
                </p>
                <a
                  href="/odoo-data-model/"
                  class="flex text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  <svg
                    class="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    ></path>
                  </svg>
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[90%] mx-auto">
        <div className="flex  justify-between items-start text-left">
          {/* <p className="md:font-sans tracking-wider text-base md:text-lg text-black py-2">
            Category Overview
          </p> */}
          <div className="flex justify-start items-start  gap-4">
            <h2 className="text-2xl md:text-4xl flex text-black">
              Trending Apps{" "}
            </h2>
          </div>
          <div className="flex justify-center items-center gap-2">
            <a
              href="/odoo-products/"
              className="flex px-2 py-2 gap-2 text-xl justify-center items-center text-black"
            >
              View More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  width="24"
                  height="24"
                  fill="white"
                />
                <path
                  d="M6 12H18M18 12L13 7M18 12L13 17"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="my-8 w-[80%] mt-[20px] mx-auto">
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-2 xl:grid-cols-3">
          <div class="rounded-lg  border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <a
              href="/odoo-tableau-connector/"
              class="h-56 w-full flex justify-center items-center bg-gray-100 rounded-lg "
            >
              <div class="flex justify-center items-center w-full">
                <svg
                  width="60px"
                  height="60px"
                  viewBox="0 -2.5 256 256"
                  version="1.1"
                >
                  <g>
                    <polygon
                      fill="#7099A6"
                      points="123.929417 11.5932444 123.929417 23.2338083 103.108897 23.2338083 103.108897 30.8049067 123.929417 30.8049067 123.929417 53.9913956 132.068348 53.9913956 132.068348 30.8049067 153.409382 30.8049067 153.409382 23.2338083 132.068348 23.2338083 132.068348 0 123.929417 0"
                    ></polygon>
                    <polygon
                      fill="#EB912C"
                      points="55.8841702 41.1205283 55.8841702 58.0135416 24.369473 58.0135416 24.369473 68.6130794 55.8841702 68.6130794 55.8841702 102.919619 67.5720533 102.919619 67.5720533 68.6130794 99.5599441 68.6130794 99.5599441 58.0135416 67.5720533 58.0135416 67.5720533 24.2275149 55.8841702 24.2275149"
                    ></polygon>
                    <polygon
                      fill="#59879B"
                      points="187.952518 41.1205283 187.952518 58.0135416 156.437821 58.0135416 156.437821 69.1335924 187.952518 69.1335924 187.952518 102.919619 200.113595 102.919619 200.113595 69.1335924 231.628292 69.1335924 231.628292 58.0135416 200.113595 58.0135416 200.113595 24.2275149 187.952518 24.2275149"
                    ></polygon>
                    <polygon
                      fill="#E8762C"
                      points="120.900978 98.6608762 120.900978 117.588622 85.8373283 117.588622 85.8373283 131.689793 120.900978 131.689793 120.900978 169.545285 135.096787 169.545285 135.096787 131.689793 170.160437 131.689793 170.160437 117.588622 135.096787 117.588622 135.096787 79.7331302 120.900978 79.7331302"
                    ></polygon>
                    <polygon
                      fill="#5B6591"
                      points="224.009874 108.219388 224.009874 120.096549 202.668841 120.096549 202.668841 129.70238 224.009874 129.70238 224.009874 153.409382 234.656731 153.409382 234.656731 129.70238 255.997765 129.70238 255.997765 120.096549 234.656731 120.096549 234.656731 96.3895467 224.009874 96.3895467"
                    ></polygon>
                    <polygon
                      fill="#7099A6"
                      points="20.8205206 109.260414 20.8205206 120.617062 0 120.617062 0 128.661354 20.8205206 128.661354 20.8205206 151.374649 28.9594514 151.374649 28.9594514 128.661354 50.3004851 127.904244 50.3004851 120.617062 28.9594514 120.617062 28.9594514 97.9037663 20.8205206 97.9037663"
                    ></polygon>
                    <polygon
                      fill="#C72035"
                      points="55.8841702 162.731297 55.8841702 179.62431 24.369473 179.62431 24.369473 190.744361 55.8841702 190.744361 55.8841702 224.530387 68.045247 224.530387 68.045247 190.744361 99.5599441 190.744361 99.5599441 179.62431 68.045247 179.62431 68.045247 145.838283 55.8841702 145.838283"
                    ></polygon>
                    <polygon
                      fill="#1F447E"
                      points="187.952518 162.731297 187.952518 179.62431 156.437821 179.62431 156.437821 190.223848 187.952518 190.223848 187.952518 224.530387 200.113595 224.530387 200.113595 190.223848 231.628292 190.223848 231.628292 179.62431 200.113595 179.62431 200.113595 145.838283 187.952518 145.838283"
                    ></polygon>
                    <polygon
                      fill="#5B6591"
                      points="122.93571 205.649961 122.93571 217.479802 101.594677 217.479802 101.594677 227.085633 122.93571 227.085633 122.93571 250.792635 133.582568 250.792635 133.582568 227.085633 154.923601 227.085633 154.923601 217.479802 133.582568 217.479802 133.582568 193.7728 122.93571 193.7728"
                    ></polygon>
                  </g>
                </svg>
              </div>
            </a>
            <div class="pt-6 flex flex-col min-h-11">
              <a
                href="/odoo-tableau-connector/"
                class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
              >
                Odoo Tableau Connector
              </a>
              <div class="mt-2 flex items-center gap-2">
                <div class="flex items-center">
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                </div>
                <p class="text-sm font-medium text-gray-900 dark:text-white">
                  5
                </p>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  (12)
                </p>
              </div>
              <ul class="mt-2 flex items-center gap-4">
                <li class="flex items-center gap-2">
                  <img
                    src="/images/demo-svg.svg"
                    alt="watch demo icon"

                    height="20px"
                    width="20px"
                  />
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Watch Demo
                  </p>
                </li>
              </ul>
              <div class="mt-4 flex items-center justify-between gap-2">
                <p class="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                  $ {tableauPrice}
                </p>
                <a
                  href="/odoo-tableau-connector/"
                  class="flex text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  <svg
                    class="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    ></path>
                  </svg>
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div class="rounded-lg  border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <a
              href="/odoo-bigquery-connector/"
              class="h-56 w-full flex justify-center items-center bg-gray-100 rounded-lg "
            >
              <div class="flex justify-center items-center w-full">
                <svg
                  classname="p-2"
                  width="80px"
                  height="80px"
                  viewBox="0 0 24 24"
                  fill="#4a75c3"
                >
                  <title>
                    Icon_24px_BigQuery_Color
                  </title>
                  <g data-name="Product Icons">
                    <g>
                      <path
                        classname="cls-1"
                        d="M6.73,10.83v2.63A4.91,4.91,0,0,0,8.44,15.2V10.83Z"
                      ></path>
                      <path
                        classname="cls-2"
                        d="M9.89,8.41v7.53A7.62,7.62,0,0,0,11,16,8,8,0,0,0,12,16V8.41Z"
                      ></path>
                      <path
                        classname="cls-1"
                        d="M13.64,11.86v3.29a5,5,0,0,0,1.7-1.82V11.86Z"
                      ></path>
                      <path
                        classname="cls-3"
                        d="M17.74,16.32l-1.42,1.42a.42.42,0,0,0,0,.6l3.54,3.54a.42.42,0,0,0,.59,0l1.43-1.43a.42.42,0,0,0,0-.59l-3.54-3.54a.42.42,0,0,0-.6,0"
                      ></path>
                      <path
                        classname="cls-2"
                        d="M11,2a9,9,0,1,0,9,9,9,9,0,0,0-9-9m0,15.69A6.68,6.68,0,1,1,17.69,11,6.68,6.68,0,0,1,11,17.69"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </a>
            <div class="pt-6 flex flex-col min-h-11">
              <a
                href="/odoo-bigquery-connector/"
                class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
              >
                Odoo Bigquery Connector
              </a>
              <div class="mt-2 flex items-center gap-2">
                <div class="flex items-center">
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                </div>
                <p class="text-sm font-medium text-gray-900 dark:text-white">
                  5
                </p>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  (32)
                </p>
              </div>
              <ul class="mt-2 flex items-center gap-4">
                <li class="flex items-center gap-2">
                  <img
                    src="/images/demo-svg.svg"
                    alt="watch demo icon"

                    height="20px"
                    width="20px"
                  />
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Watch Demo
                  </p>
                </li>
              </ul>
              <div class="mt-4 flex items-center justify-between gap-2">
                <p class="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                  $ {bigqueryPrice}
                </p>
                <a
                  href="/odoo-bigquery-connector/"
                  class="flex text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  <svg
                    class="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    ></path>
                  </svg>
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div class="rounded-lg  border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <a
              href="/googlesheet-odoo-connector/"
              class="h-56 w-full flex justify-center items-center bg-gray-100 rounded-lg "
            >
              <div class="flex justify-center items-center w-full">
                <svg
                  classname="p-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="-4 0 64 64"
                >
                  <path
                    d="M5.131-.001c-2.801 0-5.072 2.272-5.072 5.074v53.841c0 2.803 2.271 5.074 5.072 5.074h45.775c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.904-20.31h-31.945z"
                    fillrule="evenodd"
                    cliprule="evenodd"
                    fill="#20A971"
                  ></path>
                  <path
                    d="M10.107 37.466v16.419h21.521v-16.419h-21.521zm6.458 15.078h-4.967v-3.58h4.967v3.58zm0-5.012h-4.967v-3.579h4.967v3.579zm0-5.011h-4.967v-3.58h4.967v3.58zm13.632 10.023h-12.155v-3.58h12.155v3.58zm0-5.012h-12.155v-3.579h12.155v3.579zm0-5.011h-12.155v-3.58h12.155v3.58z"
                    fill="#ffffff"
                  ></path>
                  <g
                    fillrule="evenodd"
                    cliprule="evenodd"
                  >
                    <path
                      d="M55.98 20.32v1h-12.801s-6.312-1.26-6.127-6.707c0 0 .207 5.707 6.002 5.707h12.926z"
                      fill="#189355"
                    ></path>
                    <path
                      d="M37.076-.031v14.561c0 1.656 1.104 5.791 6.104 5.791h12.801l-18.905-20.352z"
                      opacity=".5"
                      fill="#ffffff"
                    ></path>
                  </g>
                </svg>
              </div>
            </a>
            <div class="pt-6 flex flex-col min-h-11">
              <a
                href="/googlesheet-odoo-connector/"
                class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
              >
                Odoo Google Sheets Connector
              </a>
              <div class="mt-2 flex items-center gap-2">
                <div class="flex items-center">
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                  </svg>
                </div>
                <p class="text-sm font-medium text-gray-900 dark:text-white">
                  5
                </p>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  (22)
                </p>
              </div>
              <ul class="mt-2 flex items-center gap-4">
                <li class="flex items-center gap-2">
                  <img
                    src="/images/demo-svg.svg"
                    alt="watch demo icon"

                    height="20px"
                    width="20px"
                  />
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Watch Demo
                  </p>
                </li>
              </ul>
              <div class="mt-4 flex items-center justify-between gap-2">
                <p class="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                  $ {sheetsPrice}
                </p>
                <a
                  href="/googlesheet-odoo-connector/"
                  class="flex text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  <svg
                    class="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    ></path>
                  </svg>
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
