"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

const SearchProduct = () => {
  const [searchBar, setSearchBar] = useState("");
  const [filteredProducts, setFilteredProducts] =
    useState([]);

  const [active3, setActive3] = useState(false);

  var btnClass = `text-gray-900 border focus:text-white focus:bg-blue-500 border-gray-300 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 `;

  useEffect(() => {
    if (searchBar.length == 0) {
      setActive3(true);
    }
    const newProd = products.filter((prod) => {
      return prod.keywords
        .toLowerCase()
        .includes(searchBar.toLowerCase());
    });

    setFilteredProducts(newProd);
  }, [searchBar]);

  const products = [
    {
      name: "Profit Loss Dashboard PowerBI",
      price: "49.45",
      image: `
      <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60" data-name="pie chart" id="pie_chart"><defs></defs>
      <path fill="#9f4c4c" className="cls-1" d="M550,842c-0.474,6.588-4.111,13.6-7.5,18L524,842h26Z" id="pie-chart" transform="translate(-490 -810)"/>
      <path fill="#bf873e" className="cls-2" d="M538.432,863.732A30.047,30.047,0,0,1,490,839.92c0-15.7,11.48-28.536,28-29.92v32Z" data-name="pie-chart copy 2" id="pie-chart_copy_2" transform="translate(-490 -810)"/>
      <path fill="#5b75a0" className="cls-3" d="M522,810a30.058,30.058,0,0,1,28,28H522V810Z" data-name="pie-chart copy" id="pie-chart_copy" transform="translate(-490 -810)"/></svg>
      `,
      storeLink:
        "https://apps.odoo.com/apps/modules/17.0/profit-loss-dashboard-powerbi",
      websiteLink: "#",
      color: "#4285f4",
      specs: "Community + Enterprise",
      desc: "The dashboard is created using Odoo demo data and Odoo native tables in Power BI",

      keywords: "Profit Loss Dashboard PowerBI",
    },
    {
      name: "Sales Dashboard Looker",
      price: "FREE",
      image: `
      <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60" data-name="pie chart" id="pie_chart"><defs></defs>
      <path fill="#9f4c4c" className="cls-1" d="M550,842c-0.474,6.588-4.111,13.6-7.5,18L524,842h26Z" id="pie-chart" transform="translate(-490 -810)"/>
      <path fill="#bf873e" className="cls-2" d="M538.432,863.732A30.047,30.047,0,0,1,490,839.92c0-15.7,11.48-28.536,28-29.92v32Z" data-name="pie-chart copy 2" id="pie-chart_copy_2" transform="translate(-490 -810)"/>
      <path fill="#5b75a0" className="cls-3" d="M522,810a30.058,30.058,0,0,1,28,28H522V810Z" data-name="pie-chart copy" id="pie-chart_copy" transform="translate(-490 -810)"/></svg>
      `,
      storeLink:
        "https://apps.odoo.com/apps/modules/17.0/odoo-sales-looker-dashboard",
      websiteLink: "#",
      color: "#4285f4",
      specs: "Community + Enterprise",
      desc: "View top customers with their revenue using this free dashboard",

      keywords:
        "Profit Loss Dashboard Dashboard Looker",
    },
    {
      name: "PowerBI Dashboards",
      price: "FREE",
      image: `
      <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60" data-name="pie chart" id="pie_chart"><defs></defs>
      <path fill="#9f4c4c" className="cls-1" d="M550,842c-0.474,6.588-4.111,13.6-7.5,18L524,842h26Z" id="pie-chart" transform="translate(-490 -810)"/>
      <path fill="#bf873e" className="cls-2" d="M538.432,863.732A30.047,30.047,0,0,1,490,839.92c0-15.7,11.48-28.536,28-29.92v32Z" data-name="pie-chart copy 2" id="pie-chart_copy_2" transform="translate(-490 -810)"/>
      <path fill="#5b75a0" className="cls-3" d="M522,810a30.058,30.058,0,0,1,28,28H522V810Z" data-name="pie-chart copy" id="pie-chart_copy" transform="translate(-490 -810)"/></svg>
      `,
      storeLink:
        "https://apps.odoo.com/apps/modules/17.0/odoo-sales-dashboard-powerbi",
      websiteLink: "#",
      color: "#cf8408",
      specs: "Community + Enterprise",
      desc: "Unleash the power of Microsoft Power BI for free and view all profits and revenue",

      keywords: "Profit Loss Dashboard PowerBI",
    },
    {
      name: "Inventory Management Dashboard",
      price: "FREE",
      image: `
      <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60" data-name="pie chart" id="pie_chart"><defs></defs>
      <path fill="#9f4c4c" className="cls-1" d="M550,842c-0.474,6.588-4.111,13.6-7.5,18L524,842h26Z" id="pie-chart" transform="translate(-490 -810)"/>
      <path fill="#bf873e" className="cls-2" d="M538.432,863.732A30.047,30.047,0,0,1,490,839.92c0-15.7,11.48-28.536,28-29.92v32Z" data-name="pie-chart copy 2" id="pie-chart_copy_2" transform="translate(-490 -810)"/>
      <path fill="#5b75a0" className="cls-3" d="M522,810a30.058,30.058,0,0,1,28,28H522V810Z" data-name="pie-chart copy" id="pie-chart_copy" transform="translate(-490 -810)"/></svg>
      `,
      storeLink:
        "/odoo-analytics/odoo-inventory-management/",
      websiteLink:
        "/odoo-analytics/odoo-inventory-management/",
      color: "#4285f4",
      specs: "Community + Enterprise",
      desc: "Odoo Inventory Management made easy with this dashboard. Contact us to edit this module according to your data sets",

      keywords:
        "odoo inventory management dashboard sales",
    },
  ];

  return (
    <div
      id="searchProducts"
      className="flex flex-col justify-center items-start px-4 md:px-8 py-12 mb-12 w-[90%] md:w-[90%] mx-auto"
    >
      <div className="flex flex-col  w-[90%] mx-auto">
        <div className="flex flex-col justify-start items-start text-left">
          <p className="md:font-sans tracking-wider text-base md:text-lg text-black py-2">
            Category Overview
          </p>
          <h2 className="text-2xl md:text-3xl flex text-black justify-center items-end">
            All you need for{" "}
            <div className="flex justify-center items-center px-3">
              <img
                className="w-[80px] md:w-[150px]"
                src="/images/odoo_logo.png"
                width={150}
              />
            </div>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between items-center mt-6">
          <div className="flex flex-wrap">
            <button
              type="button"
              onClick={(e) => {
                setSearchBar("dashboard");
                setActive(false);
                setActive1(false);
                setActive2(false);
                setActive3(false);
                setActive4(true);
              }}
              className={
                active3
                  ? btnClass + "activeBtn"
                  : btnClass + "inactiveBtn"
              }
            >
              Dashboards
            </button>
          </div>

          <form className=" min-w-[350px] md:min-w-[500px]">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                onChange={(e) =>
                  setSearchBar(e.target.value)
                }
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="my-8 w-full">
        <div className="flex flex-col justify-center items-center px-4 gap-4">
          <div className="flex flex-wrap justify-center items-start gap-6 w-full">
            {/* mapping of prod cards */}
            {filteredProducts?.map(
              (prod, index) => (
                <>
                  <a href={prod.websiteLink}>
                    <div className="group relative cursor-pointer overflow-hidden bg-white px-5 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl  sm:max-w-sm sm:rounded-lg sm:px-8">
                      <span
                        className={
                          "absolute top-10 left-50 z-0 h-20 w-20 rounded-full bg-white transition-all duration-300 group-hover:scale-[13] " +
                          `group-hover:bg-[${prod?.color}]`
                        }
                      ></span>
                      <div className="relative z-10 mx-auto max-w-md">
                        <div className="flex justify-evenly items-center mb-6">
                          <span className="grid h-35 w-35 place-items-center shadow-md rounded-full bg-white border-2 transition-all duration-500 group-hover:shadow-xl">
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  prod?.image,
                              }}
                            ></div>
                          </span>
                          <h3 className="text-2xl text-right group-hover:text-white text-black">
                            {prod?.name}
                          </h3>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-gray-500 text-sm group-hover:text-white/90">
                            {prod?.specs}
                          </p>
                          <span className="text-xl text-gray-700  group-hover:text-white">
                            {prod?.price}
                          </span>
                        </div>
                        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: prod?.desc,
                            }}
                          ></div>
                        </div>
                        <div className="flex mt-4 flex-col md:flex-row gap-2">
                          <a
                            className="flex justify-center items-center gap-2 border-2 rounded-lg w-full text-center py-2 mx-1 text-gray-800 group-hover:bg-white"
                            href={prod?.storeLink}
                          >
                            Buy Now
                            <svg
                              width="20px"
                              height="20px"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <a
                            className="border-2 rounded-lg w-full text-center py-2 mx-1 text-gray-800 group-hover:bg-white"
                            href={
                              prod?.websiteLink
                            }
                          >
                            Know More
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="min-w-[350px] fadeAnimation mt-6 hover:scale-[105%] h-[350px] rounded-t-lg shadow-lg border">
                  <div key={index}>
                    <div className="h-[300px] flex flex-col justify-around items-center p-5 pt-8">
                      <div
                        dangerouslySetInnerHTML={{ __html: prod?.image }}
                      ></div>
                      <div>
                        <h5 className="text-2xl">{prod?.name}</h5>
                        <p className="text-md">{prod?.desc}</p>
                      </div>
                    </div>
                    <Link href={prod?.href}>
                      <button className="btn w-full h-[50px] bg-black text-white rounded-none hover:bg-black">
                        View Module
                      </button>
                    </Link>
                  </div>
                </div> */}
                  </a>
                </>
              )
            )}
          </div>
          <div className="flex flex-wrap hidden">
            <div className="group relative cursor-pointer overflow-hidden bg-white px-5 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl  sm:max-w-sm sm:rounded-lg sm:px-8">
              <span
                className={
                  "absolute top-10 left-50 z-0 h-20 w-20 rounded-full bg-white transition-all duration-300 group-hover:scale-[13] " +
                  `group-hover:bg-[#4285f4]`
                }
              ></span>
              <div className="relative z-10 mx-auto max-w-md">
                <div className="flex justify-evenly items-center mb-6">
                  <span className="grid h-35 w-35 place-items-center shadow-md rounded-full bg-white border-2 transition-all duration-500 group-hover:shadow-xl">
                    <div></div>
                  </span>
                  <h3 className="text-2xl text-right group-hover:text-white text-black">
                    Prod Name
                  </h3>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm group-hover:text-white/90"></p>
                  <span className="text-xl text-gray-700  group-hover:text-white"></span>
                </div>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <div>ddd</div>
                </div>
                <div className="flex mt-4">
                  <a
                    className="flex justify-center items-center gap-2 border-2 rounded-lg w-full text-center py-2 mx-1 text-gray-800 group-hover:bg-white"
                    href="#"
                  >
                    Buy Now
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    className="border-2 rounded-lg w-full text-center py-2 mx-1 text-gray-800 group-hover:bg-white"
                    href="#"
                  >
                    View Module
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative cursor-pointer overflow-hidden bg-white px-5 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl  sm:max-w-sm sm:rounded-lg sm:px-8">
              <span
                className={
                  "absolute top-10 left-50 z-0 h-20 w-20 rounded-full bg-white transition-all duration-300 group-hover:scale-[13] " +
                  `group-hover:bg-[#cf8408]`
                }
              ></span>
              <div className="relative z-10 mx-auto max-w-md">
                <div className="flex justify-evenly items-center mb-6">
                  <span className="grid h-35 w-35 place-items-center shadow-md rounded-full bg-white border-2 transition-all duration-500 group-hover:shadow-xl">
                    <div></div>
                  </span>
                  <h3 className="text-2xl text-right group-hover:text-white text-black">
                    Prod Name
                  </h3>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm group-hover:text-white/90"></p>
                  <span className="text-xl text-gray-700  group-hover:text-white"></span>
                </div>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <div>ddd</div>
                </div>
                <div className="flex mt-4">
                  <a
                    className="flex justify-center items-center gap-2 border-2 rounded-lg w-full text-center py-2 mx-1 text-gray-800 group-hover:bg-white"
                    href="#"
                  >
                    Buy Now
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    className="border-2 rounded-lg w-full text-center py-2 mx-1 text-gray-800 group-hover:bg-white"
                    href="#"
                  >
                    View Module
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative cursor-pointer overflow-hidden bg-white px-5 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl  sm:max-w-sm sm:rounded-lg sm:px-8">
              <span
                className={
                  "absolute top-10 left-50 z-0 h-20 w-20 rounded-full bg-white transition-all duration-300 group-hover:scale-[13] " +
                  `group-hover:bg-[#5865f2]`
                }
              ></span>
              <div className="relative z-10 mx-auto max-w-md">
                <div className="flex justify-evenly items-center mb-6">
                  <span className="grid h-35 w-35 place-items-center shadow-md rounded-full bg-white border-2 transition-all duration-500 group-hover:shadow-xl">
                    <div></div>
                  </span>
                  <h3 className="text-2xl text-right group-hover:text-white text-black">
                    Prod Name
                  </h3>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm group-hover:text-white/90"></p>
                  <span className="text-xl text-gray-700  group-hover:text-white"></span>
                </div>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <div>ddd</div>
                </div>
                <div className="flex mt-4">
                  <a
                    className="flex justify-center items-center gap-2 border-2 rounded-lg w-full text-center py-2 mx-1 text-gray-800 group-hover:bg-white"
                    href="#"
                  >
                    Buy Now
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    className="border-2 rounded-lg w-full text-center py-2 mx-1 text-gray-800 group-hover:bg-white"
                    href="#"
                  >
                    View Module
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative cursor-pointer overflow-hidden bg-white px-5 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl  sm:max-w-sm sm:rounded-lg sm:px-8">
              <span
                className={
                  "absolute top-10 left-50 z-0 h-20 w-20 rounded-full bg-white transition-all duration-300 group-hover:scale-[13] " +
                  `group-hover:bg-[#20a971]`
                }
              ></span>
              <div className="relative z-10 mx-auto max-w-md">
                <div className="flex justify-evenly items-center mb-6">
                  <span className="grid h-35 w-35 place-items-center shadow-md rounded-full bg-white border-2 transition-all duration-500 group-hover:shadow-xl">
                    <div></div>
                  </span>
                  <h3 className="text-2xl text-right group-hover:text-white text-black">
                    Prod Name
                  </h3>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm group-hover:text-white/90"></p>
                  <span className="text-xl text-gray-700  group-hover:text-white"></span>
                </div>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <div>ddd</div>
                </div>
                <div className="flex mt-4">
                  <a
                    className="flex justify-center items-center gap-2 border-2 rounded-lg w-full text-center py-2 mx-1 text-gray-800 group-hover:bg-white"
                    href="#"
                  >
                    Buy Now
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    className="border-2 rounded-lg w-full text-center py-2 mx-1 text-gray-800 group-hover:bg-white"
                    href="#"
                  >
                    View Module
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative cursor-pointer overflow-hidden bg-white px-5 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl  sm:max-w-sm sm:rounded-lg sm:px-8">
              <span
                className={
                  "absolute top-10 left-50 z-0 h-20 w-20 rounded-full bg-white transition-all duration-300 group-hover:scale-[13] " +
                  `group-hover:bg-[#4285f4]`
                }
              ></span>
              <div className="relative z-10 mx-auto max-w-md">
                <div className="flex justify-evenly items-center mb-6">
                  <span className="grid h-35 w-35 place-items-center shadow-md rounded-full bg-white border-2 transition-all duration-500 group-hover:shadow-xl">
                    <div></div>
                  </span>
                  <h3 className="text-2xl text-right group-hover:text-white text-black">
                    Prod Name
                  </h3>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm group-hover:text-white/90"></p>
                  <span className="text-xl text-gray-700  group-hover:text-white"></span>
                </div>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <div>ddd</div>
                </div>
                <div className="flex mt-4">
                  <a
                    className="flex justify-center items-center gap-2 border-2 rounded-lg w-full text-center py-2 mx-1 text-gray-800 group-hover:bg-white"
                    href="#"
                  >
                    Buy Now
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    className="border-2 rounded-lg w-full text-center py-2 mx-1 text-gray-800 group-hover:bg-white"
                    href="#"
                  >
                    View Module
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
