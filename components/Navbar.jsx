"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import products from "../data/products.json";

const Navbar = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const searchProductsRef = useRef(null);

  const [modal, setModal] = useState(false);
  const [productsList, setProductsList] = useState(products);
  const [searchBar, setSearchBar] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModuleOpen, setIsModuleOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);

  const adminLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    window.location.reload();
  };

  useEffect(() => {
    const handleAdminChange = () => {
      setIsAdmin(!!localStorage.getItem("isAdmin"));
    };

    window.addEventListener("isAdminChange", handleAdminChange);

    setIsAdmin(!!localStorage.getItem("isAdmin"));

    return () => {
      window.removeEventListener("isAdminChange", handleAdminChange);
    };
  }, []);

  useEffect(() => {
    if (searchBar.length == 0) {
      setProductsList(products);
      console.log("prodlist updated", products);
    } else {
      const newProd = productsList.filter((prod) => {
        return prod.keywords.toLowerCase().includes(searchBar.toLowerCase());
      });
      setProductsList(newProd);
      console.log(productsList, "prodlist");
    }
  }, [searchBar]);

  // useEffect to handle clicks anywhere on the screen
  useEffect(() => {
    if (modal) {
      const handleClick = () => {
        setModal((prevState) => !prevState);
      };

      // Add event listener to the document body
      document.addEventListener("click", handleClick);

      // Cleanup the event listener when the component unmounts
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, []);

  function toggleButton() {
    setModal((prevState) => !prevState);
    setTimeout(() => searchProductsRef.current?.focus(), 0); // Delay to ensure modal renders before focus
    console.log("toggle button used", modal);
  }

  // useEffect to close odoo connectors list on window click
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      const handleOutSideClick = (event) => {
        if (!ref.current?.contains(event.target)) {
          setIsModuleOpen(false);
        }
      };
      window.addEventListener("mousedown", handleOutSideClick);
      return () => {
        window.removeEventListener("mousedown", handleOutSideClick);
      };
    }
  });

  // useEffect for Demo list view to close on window click
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      const handleOutSideClick = (event) => {
        if (!ref2.current?.contains(event.target)) {
          setIsDemoOpen(false);
        }
      };
      window.addEventListener("mousedown", handleOutSideClick);
      return () => {
        window.removeEventListener("mousedown", handleOutSideClick);
      };
    }
  });

  // useEffect for Guide list view to close on window click
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      const handleOutSideClick = (event) => {
        if (!ref3.current?.contains(event.target)) {
          setIsGuideOpen(false);
        }
      };
      window.addEventListener("mousedown", handleOutSideClick);
      return () => {
        window.removeEventListener("mousedown", handleOutSideClick);
      };
    }
  });

  return (
    //navbar 2
    <div className="fixed bg-white w-full mx-auto top-0 z-[1000]">
      <nav className=" bg-white w-[90%] mx-auto z-[1000]">
        <div className="container px-6 mx-auto lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center text-black justify-between flex-grow">
              <div className="flex justify-center items-center gap-2">
                <Link
                  href="/"
                  className="flex justify-center items-center gap-3 logo-container"
                >
                  <img
                    className="logo  tracking-wider"
                    src="/images/techfinna-logo.png"
                    alt="Techfinna logo"
                    width="50px"
                  />
                  <h2 className="text-black">TECHFINNA</h2>
                </Link>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents the document click from firing when clicking on the button
                    toggleButton();
                    searchProductsRef.current?.focus();
                  }}
                  className="flex hidden sm:flex ml-4 relative justify-start items-center text-sm text-muted-foreground dark:border-white/[0.2] py-2 w-fit border border-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-4 rounded-xl bg-white dark:bg-brand"
                >
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
                    className="h-4 w-4 text-neutral-500"
                  >
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                    <path d="M21 21l-6 -6"></path>
                  </svg>
                  <span className="transition-colors hover:text-foreground/80 text-foreground/60 text-xs sm:text-sm font-medium pl-2 pr-4">
                    Search Odoo...
                  </span>
                  <kbd className="pointer-events-none  hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    ↵<span className="text-xs">Enter</span>
                  </kbd>
                </button>
                <div
                  onClick={(e) => setModal(false)}
                  data-state="open"
                  className={`fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out
          data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 pointer-events-auto ${
            modal ? `block` : `hidden`
          }`}
                  data-aria-hidden="true"
                  aria-hidden="true"
                ></div>
                <div
                  role="dialog"
                  id="radix-:r0:"
                  aria-describedby="radix-:r2:"
                  aria-labelledby="radix-:r1:"
                  data-state="open"
                  className={`fixed bg-white left-[50%] top-[50%] z-50 grid w-[90%] sm:w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background duration-200
                    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95
                    data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2
                    data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg overflow-hidden p-0 shadow-lg ${
                      modal ? `block` : `hidden`
                    }`}
                  tabIndex="-1"
                >
                  <div
                    className="flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground [&amp;_[cmdk-group-heading]]:px-2 [&amp;_[cmdk-group-heading]]:font-medium [&amp;_[cmdk-group-heading]]:text-muted-foreground [&amp;_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&amp;_[cmdk-group]]:px-2 [&amp;_[cmdk-input-wrapper]_svg]:h-5 [&amp;_[cmdk-input-wrapper]_svg]:w-5 [&amp;_[cmdk-input]]:h-12 [&amp;_[cmdk-item]]:px-2 [&amp;_[cmdk-item]]:py-3 [&amp;_[cmdk-item]_svg]:h-5 [&amp;_[cmdk-item]_svg]:w-5"
                    cmdk-root=""
                  >
                    <label
                      cmdk-label=""
                      htmlFor=":rpk:"
                      id=":rpj:"
                      className="absolute w-px h-px p-0 m-[-1px] overflow-hidden clip-rect whitespace-nowrap border-0"
                    ></label>
                    <div
                      className="flex items-center border-b px-3"
                      cmdk-input-wrapper=""
                    >
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
                        className="lucide lucide-search mr-2 h-4 w-4 shrink-0 opacity-50"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                      <input
                        className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:ring-0 outline-none focus:outline-none border-none"
                        ref={searchProductsRef}
                        placeholder="Search products & demo ..."
                        type="text"
                        onChange={(e) => setSearchBar(e.target.value)}
                      />
                    </div>
                    <div className="max-h-[300px] p-4 overflow-y-auto overflow-x-hidden">
                      <div cmdk-list-sizer="">
                        <div className="overflow-hidden p-1 text-foreground ">
                          {searchBar.length == 0 ? (
                            <div className="font-semibold">Demo</div>
                          ) : (
                            <></>
                          )}
                          <div>
                            {productsList.map((prod, index) =>
                              prod.demo == true ? (
                                <a
                                  key={index}
                                  href={`${prod.href}`}
                                  className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                                >
                                  <div className="mr-2 flex h-4 w-4 items-center justify-center">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="lucide lucide-circle h-3 w-3"
                                    >
                                      <circle cx="12" cy="12" r="10"></circle>
                                    </svg>
                                  </div>
                                  {prod.name}
                                </a>
                              ) : (
                                <></>
                              )
                            )}
                          </div>
                        </div>
                        <div
                          className="overflow-hidden p-1 "
                          role="presentation"
                        >
                          {searchBar.length == 0 ? (
                            <div className="font-semibold">
                              All Applications
                            </div>
                          ) : (
                            <></>
                          )}
                          <div>
                            {productsList.map((prod, index) =>
                              prod.demo == false ? (
                                <a
                                  key={index}
                                  className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                                  role="option"
                                  data-value="3d card effect"
                                  href={`${prod.href}`}
                                >
                                  <div className="mr-2 flex h-4 w-4 items-center justify-center">
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
                                      className="lucide lucide-circle h-3 w-3"
                                    >
                                      <circle cx="12" cy="12" r="10"></circle>
                                    </svg>
                                  </div>
                                  {prod.name}
                                </a>
                              ) : (
                                <></>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      setModal(false);
                    }}
                    type="button"
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                  >
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
                      className="lucide lucide-x h-4 w-4"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                    <span className="sr-only">Close</span>
                  </button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="flex items-center text-black font-semibold">
                  {/* Odoo Modules */}
                  <div className="relative">
                    <button
                      onClick={() => setIsModuleOpen(!isModuleOpen)}
                      className="flex flex-row items-center duration-300 px-3 py-2 text-sm rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      <span className="mx-2">Odoo Modules</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 mt-1 transform duration-300 ${
                          isModuleOpen ? "rotate-180" : "rotate-0"
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    {isModuleOpen && (
                      <div
                        ref={ref}
                        className="absolute right-0 w-[300px] mt-2 origin-top-right rounded-md shadow-lg"
                      >
                        <div className="py-1 bg-white rounded-md shadow-xs">
                          <ul>
                            <div className="p-4 flex flex-col gap-3 text-sm">
                              <li className="block px-4 py-2">
                                <Link
                                  className="flex gap-4 w-full"
                                  onClick={() => setIsModuleOpen(false)}
                                  href="/looker-odoo-connector/"
                                >
                                  <svg
                                    className="w-[20%]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="25px"
                                    height="25px"
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
                                    </g>
                                  </svg>
                                  <p className="w-[80%]">
                                    Odoo Looker Studio Connector
                                  </p>
                                </Link>
                              </li>
                              <li className="block px-4 py-2">
                                <Link
                                  className="flex gap-4"
                                  onClick={() => setIsModuleOpen(false)}
                                  href="/odoo-powerbi-connector/"
                                >
                                  <div className="w-[20%] flex justify-center items-center">
                                    <img
                    alt="Power BI icon"

                                      src="/images/powerbi/powerbi-logo.png"
                                      width="25px"
                                    />
                                  </div>
                                  <p className="w-[80%]">
                                    Odoo Power BI Connector
                                  </p>
                                </Link>
                              </li>{" "}
                              <li className="block px-4 py-2">
                                <Link
                                  className="flex gap-4"
                                  onClick={() => setIsModuleOpen(false)}
                                  href="/odoo-bigquery-connector/"
                                >
                                  <div className="w-[20%] flex justify-center items-center">
                                    <img
                    alt="google bigquery logo"

                                      src="/images/google-bigquery-logo1.png"
                                      width="20px"
                                    />
                                  </div>
                                  <p className="w-[80%]">
                                    Google&nbsp;BigQuery Connector
                                  </p>
                                </Link>
                              </li>{" "}
                              <li className="block px-4 py-2">
                                <Link
                                  className="flex w-full gap-4"
                                  onClick={() => setIsModuleOpen(false)}
                                  href="/googlesheet-odoo-connector/"
                                >
                                  <svg
                                    className="w-[20%]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="-4 0 64 64"
                                  >
                                    <path
                                      d="M5.131-.001c-2.801 0-5.072 2.272-5.072 5.074v53.841c0 2.803 2.271 5.074 5.072 5.074h45.775c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.904-20.31h-31.945z"
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      fill="#20A971"
                                    />

                                    <path
                                      d="M10.107 37.466v16.419h21.521v-16.419h-21.521zm6.458 15.078h-4.967v-3.58h4.967v3.58zm0-5.012h-4.967v-3.579h4.967v3.579zm0-5.011h-4.967v-3.58h4.967v3.58zm13.632 10.023h-12.155v-3.58h12.155v3.58zm0-5.012h-12.155v-3.579h12.155v3.579zm0-5.011h-12.155v-3.58h12.155v3.58z"
                                      fill="#ffffff"
                                    />

                                    <g fillRule="evenodd" clipRule="evenodd">
                                      <path
                                        d="M55.98 20.32v1h-12.801s-6.312-1.26-6.127-6.707c0 0 .207 5.707 6.002 5.707h12.926z"
                                        fill="#189355"
                                      />

                                      <path
                                        d="M37.076-.031v14.561c0 1.656 1.104 5.791 6.104 5.791h12.801l-18.905-20.352z"
                                        opacity=".5"
                                        fill="#ffffff"
                                      />
                                    </g>
                                  </svg>
                                  <p className="w-[80%]">
                                    Google Sheets Connector
                                  </p>
                                </Link>
                              </li>
                              <li className="block px-4 py-2">
                                <Link
                                  className="flex gap-4"
                                  onClick={() => setIsModuleOpen(false)}
                                  href="/odoo-data-model/"
                                >
                                  <div className="w-[20%] flex justify-center items-center">
                                    <img
                    alt="odoo data model logo"

                                      src="/images/er-diagram/table-data-model.svg"
                                      width="20px"
                                    />
                                  </div>
                                  <p>Odoo Data Model</p>
                                </Link>
                              </li>
                              <li className="block px-4 py-2">
                                <Link
                                  className="flex gap-4"
                                  onClick={() => setIsModuleOpen(false)}
                                  href="/odoo-tableau-connector/"
                                >
                                  <svg
                                    className="w-[20%]"
                                    width="20"
                                    height="20"
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
                                  <p className="w-[80%]">
                                    Odoo Tableau Connector
                                  </p>
                                </Link>
                              </li>
                              <li className="flex justify-center items-center text-gray-600 text-base px-4 py-2 w-full ">
                                <Link
                                  className="text-center w-full "
                                  onClick={() => setIsModuleOpen(false)}
                                  href="/odoo-products/"
                                >
                                  See all ...
                                </Link>
                              </li>
                            </div>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                  <Link
                    href="/create-dashboard/"
                    className="flex flex-row items-center px-3 py-2 text-sm rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    <span className="mr-2">Dashboards</span>
                  </Link>
                  {/* Demo */}
                  {/* <div className="relative">
                    <button
                      onClick={() =>
                        setIsDemoOpen(!isDemoOpen)
                      }
                      className="flex flex-row items-center duration-300 px-3 py-2 text-sm rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      <span className="mx-2">
                        Free Demo
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 mt-1 transform duration-300 ${isDemoOpen
                          ? "rotate-180"
                          : "rotate-0"
                          }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    {isDemoOpen && (
                      <div
                        ref={ref2}
                        className="absolute right-0 w-[300px] mt-2 origin-top-right rounded-md shadow-lg"
                      >
                        <div className="py-1 bg-white rounded-md shadow-xs">
                          <ul>
                            <div className="p-4 flex flex-col gap-3 text-sm">
                              <li className="block px-4 py-2">
                                <Link
                                  className="flex gap-4 w-full"
                                  onClick={() =>
                                    setIsDemoOpen(
                                      !isDemoOpen
                                    )
                                  }
                                  href="/looker-odoo-connector/"
                                >
                                  <svg
                                    className="w-[20%]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="25px"
                                    height="25px"
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
                                    </g>
                                  </svg>
                                  <p className="w-[80%]">
                                    Odoo Looker
                                    Studio
                                    Connector Demo
                                  </p>
                                </Link>
                              </li>
                              <li className="block px-4 py-2">
                                <Link
                                  className="flex gap-4"
                                  onClick={() =>
                                    setIsDemoOpen(
                                      !isDemoOpen
                                    )
                                  }
                                  href="https://www.youtube.com/watch?v=XfjPP8LW0l4&t=1s"
                                >
                                  <div className="w-[20%] flex justify-center items-center">
                                    <img
                                      src="/images/powerbi/powerbi-logo.png"
                                      width="25px"
                                    />
                                  </div>
                                  <p className="w-[80%]">
                                    Odoo Power BI
                                    Connector
                                  </p>
                                </Link>
                              </li>{" "}
                              <li className="block px-4 py-2">
                                <Link
                                  className="flex w-full gap-4"
                                  onClick={() =>
                                    setIsDemoOpen(
                                      !isDemoOpen
                                    )
                                  }
                                  href="/demo/odoo-google-sheets-connector/"
                                >
                                  <svg
                                    className="w-[20%]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="-4 0 64 64"
                                  >
                                    <path
                                      d="M5.131-.001c-2.801 0-5.072 2.272-5.072 5.074v53.841c0 2.803 2.271 5.074 5.072 5.074h45.775c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.904-20.31h-31.945z"
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      fill="#20A971"
                                    />

                                    <path
                                      d="M10.107 37.466v16.419h21.521v-16.419h-21.521zm6.458 15.078h-4.967v-3.58h4.967v3.58zm0-5.012h-4.967v-3.579h4.967v3.579zm0-5.011h-4.967v-3.58h4.967v3.58zm13.632 10.023h-12.155v-3.58h12.155v3.58zm0-5.012h-12.155v-3.579h12.155v3.579zm0-5.011h-12.155v-3.58h12.155v3.58z"
                                      fill="#ffffff"
                                    />

                                    <g
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                    >
                                      <path
                                        d="M55.98 20.32v1h-12.801s-6.312-1.26-6.127-6.707c0 0 .207 5.707 6.002 5.707h12.926z"
                                        fill="#189355"
                                      />

                                      <path
                                        d="M37.076-.031v14.561c0 1.656 1.104 5.791 6.104 5.791h12.801l-18.905-20.352z"
                                        opacity=".5"
                                        fill="#ffffff"
                                      />
                                    </g>
                                  </svg>
                                  <p className="w-[80%]">
                                    Google Sheets
                                    Connector Demo
                                  </p>
                                </Link>
                              </li>
                            </div>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div> */}
                  {/* Guides */}
                  <div className="relative">
                    <button
                      onClick={() => setIsGuideOpen(!isGuideOpen)}
                      className="flex flex-row items-center duration-300 px-3 py-2 text-sm rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      <span className="mx-2">Odoo Guides</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 mt-1 transform duration-300 ${
                          isGuideOpen ? "rotate-180" : "rotate-0"
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    {isGuideOpen && (
                      <div
                        ref={ref3}
                        className="absolute right-0 w-[300px] mt-2 origin-top-right rounded-md shadow-lg"
                      >
                        <div className="py-1 bg-white rounded-md shadow-xs">
                          <ul>
                            <div className="p-4 flex flex-col gap-3 text-sm">
                              <li className="block px-4 py-2">
                                <Link
                                  className="flex gap-4"
                                  onClick={() => setIsGuideOpen(!isGuideOpen)}
                                  href="/guides/how-to-connect-odoo-powerbi/"
                                >
                                  <div className="w-[20%] flex justify-center items-center">
                                    <img
                                      src="/images/powerbi/powerbi-logo.png"
                    alt="power bi logo"

                                      width="25px"
                                    />
                                  </div>
                                  <p className="w-[80%]">
                                    Odoo Power BI Connector Guide
                                  </p>
                                </Link>
                              </li>{" "}
                              <li className="block px-4 py-2">
                                <Link
                                  className="flex w-full gap-4"
                                  onClick={() => setIsGuideOpen(!isGuideOpen)}
                                  href="/guides/how-to-connect-google-sheets-with-odoo/"
                                >
                                  <svg
                                    className="w-[20%]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="-4 0 64 64"
                                  >
                                    <path
                                      d="M5.131-.001c-2.801 0-5.072 2.272-5.072 5.074v53.841c0 2.803 2.271 5.074 5.072 5.074h45.775c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.904-20.31h-31.945z"
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      fill="#20A971"
                                    />

                                    <path
                                      d="M10.107 37.466v16.419h21.521v-16.419h-21.521zm6.458 15.078h-4.967v-3.58h4.967v3.58zm0-5.012h-4.967v-3.579h4.967v3.579zm0-5.011h-4.967v-3.58h4.967v3.58zm13.632 10.023h-12.155v-3.58h12.155v3.58zm0-5.012h-12.155v-3.579h12.155v3.579zm0-5.011h-12.155v-3.58h12.155v3.58z"
                                      fill="#ffffff"
                                    />

                                    <g fillRule="evenodd" clipRule="evenodd">
                                      <path
                                        d="M55.98 20.32v1h-12.801s-6.312-1.26-6.127-6.707c0 0 .207 5.707 6.002 5.707h12.926z"
                                        fill="#189355"
                                      />

                                      <path
                                        d="M37.076-.031v14.561c0 1.656 1.104 5.791 6.104 5.791h12.801l-18.905-20.352z"
                                        opacity=".5"
                                        fill="#ffffff"
                                      />
                                    </g>
                                  </svg>
                                  <p className="w-[80%]">
                                    Google Sheets Connector Guide
                                  </p>
                                </Link>
                              </li>
                              <li className="block px-4 py-2">
                                <Link
                                  className="flex gap-4"
                                  onClick={() => setIsGuideOpen(!isGuideOpen)}
                                  href="/guides/how-to-connect-google-bigquery-with-odoo/"
                                >
                                  <div className="w-[20%] flex justify-center items-center">
                                    <img
                                      src="/images/google-bigquery-logo1.png"
                    alt="bigquery logo"

                                      width="20px"
                                    />
                                  </div>
                                  <p className="w-[80%]">
                                    Google&nbsp;BigQuery Connector Guide
                                  </p>
                                </Link>
                              </li>{" "}
                              <li className="block px-4 py-2">
                                <Link
                                  className="flex w-full gap-4"
                                  onClick={() => setIsGuideOpen(!isGuideOpen)}
                                  href="/guides/how-to-connect-excel-odoo/"
                                >
                                  <svg
                                    className="w-[20%]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="-4 0 64 64"
                                  >
                                    <path
                                      d="M5.131-.001c-2.801 0-5.072 2.272-5.072 5.074v53.841c0 2.803 2.271 5.074 5.072 5.074h45.775c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.904-20.31h-31.945z"
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      fill="#20A971"
                                    />

                                    <path
                                      d="M10.107 37.466v16.419h21.521v-16.419h-21.521zm6.458 15.078h-4.967v-3.58h4.967v3.58zm0-5.012h-4.967v-3.579h4.967v3.579zm0-5.011h-4.967v-3.58h4.967v3.58zm13.632 10.023h-12.155v-3.58h12.155v3.58zm0-5.012h-12.155v-3.579h12.155v3.579zm0-5.011h-12.155v-3.58h12.155v3.58z"
                                      fill="#ffffff"
                                    />

                                    <g fillRule="evenodd" clipRule="evenodd">
                                      <path
                                        d="M55.98 20.32v1h-12.801s-6.312-1.26-6.127-6.707c0 0 .207 5.707 6.002 5.707h12.926z"
                                        fill="#189355"
                                      />

                                      <path
                                        d="M37.076-.031v14.561c0 1.656 1.104 5.791 6.104 5.791h12.801l-18.905-20.352z"
                                        opacity=".5"
                                        fill="#ffffff"
                                      />
                                    </g>
                                  </svg>
                                  <p className="w-[80%]">
                                    Odoo Excel Connector Guide
                                  </p>
                                </Link>
                              </li>
                              <li className="block px-4 py-2">
                                <Link
                                  className="flex gap-4"
                                  onClick={() => setIsGuideOpen(!isGuideOpen)}
                                  href="/guides/how-to-connect-odoo-tableau/"
                                >
                                  <svg
                                    className="w-[20%]"
                                    width="20"
                                    height="20"
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
                                  <p className="w-[80%]">
                                    Odoo Tableau Connector Guide
                                  </p>
                                </Link>
                              </li>
                              <li className="block px-4 py-2">
                                <Link
                                  className="flex gap-4"
                                  onClick={() => setIsGuideOpen(!isGuideOpen)}
                                  href="/guides/inventory-forecasting/"
                                >
                                  <svg
                                    className="w-[20%]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                  >
                                    <rect
                                      width="48"
                                      height="48"
                                      fill="white"
                                      fill-opacity="0.01"
                                    />
                                    <rect
                                      x="9"
                                      y="18"
                                      width="30"
                                      height="24"
                                      rx="2"
                                      fill="#2F88FF"
                                      stroke="#000000"
                                      stroke-width="4"
                                    />
                                    <circle
                                      cx="17"
                                      cy="26"
                                      r="2"
                                      fill="white"
                                    />
                                    <circle
                                      cx="31"
                                      cy="26"
                                      r="2"
                                      fill="white"
                                    />
                                    <path
                                      d="M20 32C18.8954 32 18 32.8954 18 34C18 35.1046 18.8954 36 20 36V32ZM28 36C29.1046 36 30 35.1046 30 34C30 32.8954 29.1046 32 28 32V36ZM20 36H28V32H20V36Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M24 10V18"
                                      stroke="#000000"
                                      stroke-width="4"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M4 26V34"
                                      stroke="#000000"
                                      stroke-width="4"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M44 26V34"
                                      stroke="#000000"
                                      stroke-width="4"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <circle
                                      cx="24"
                                      cy="8"
                                      r="2"
                                      stroke="#000000"
                                      stroke-width="4"
                                    />
                                  </svg>
                                  <p className="w-[80%]">
                                    Odoo Inventory Forecasting Guide
                                  </p>
                                </Link>
                              </li>
                            </div>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Blogs */}
                  <Link
                    href="/blogs/"
                    className="flex flex-row items-center px-3 py-2 text-sm rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    <span className="mr-2">Blogs</span>
                  </Link>

                  {/* Abouts */}
                  <Link
                    href="/about/"
                    className="flex flex-row items-center px-3 py-2 text-sm rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    <span className="mr-2">About Us</span>
                  </Link>

                  {/* Contact Us */}
                  {!isAdmin ? (
                    <Link
                      href="/contact/"
                      className="flex flex-row items-center px-3 py-2 ml-2 text-sm font-medium text-white bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="ml-2">Contact Us</span>
                    </Link>
                  ) : (
                    <button
                      onClick={adminLogout}
                      className="flex flex-row items-center px-3 py-2 ml-2 text-sm font-medium text-white bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="ml-2">Logout</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* User Menu -  use it after implementing admin sign in  */}
            {/* <div className="hidden lg:block">
          <div className="flex items-center ml-4 md:ml-6">
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center max-w-xs text-sm text-white rounded-full focus:outline-none focus:shadow-solid"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                />
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg">
                  <div className="py-1 bg-white rounded-md shadow-xs">
                    <a
                      href="#"
                      className="flex flex-row items-center px-4 py-2 text-sm text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="flex flex-row items-center px-4 py-2 text-sm text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="flex flex-row items-center px-4 py-2 text-sm text-red-500 hover:text-red-700 hover:bg-red-100 focus:outline-none focus:text-red-700 focus:bg-red-100"
                    >
                      Sign Out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div> */}

            {/* Mobile Menu */}
            <div className="flex -mr-2 lg:hidden">
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="inline-flex duration-300 items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              >
                <svg
                  className="w-6 h-6 "
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isNavOpen ? (
                    <path
                      className="inline-flex "
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      className="inline-flex "
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isNavOpen && (
          <div className="lg:hidden h-[100vh] duration-300">
            <div className="container px-6 mx-auto text-black">
              <div className="pt-2 pb-3">
                {/* search button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents the document click from firing when clicking on the button
                    toggleButton();
                  }}
                  className="flex w-full my-4 relative justify-between items-center text-sm text-muted-foreground dark:border-white/[0.2] py-2 w-fit border border-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-4 rounded-xl bg-white dark:bg-brand"
                >
                  <div className="flex items-center">
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
                      className="h-4 w-4 text-neutral-500"
                    >
                      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                      <path d="M21 21l-6 -6"></path>
                    </svg>
                    <span className="transition-colors hover:text-foreground/80 text-foreground/60 text-xs sm:text-sm font-medium pl-2">
                      Search Odoo...
                    </span>
                  </div>
                  <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    ↵<span className="text-xs">Enter</span>
                  </kbd>
                </button>
                {/* Odoo Modules */}
                <div className="relative">
                  <button
                    onClick={() => setIsModuleOpen(!isModuleOpen)}
                    className="flex flex-row items-center w-full px-3 py-2 mt-1 text-base text-black font-semibold text-left rounded-md hover:text-white hover:bg-gray-700 "
                  >
                    Odoo Modules
                  </button>
                  {isModuleOpen && (
                    <div className="p-4 flex flex-col gap-3 text-sm text-black">
                      <li className="block px-4 py-2">
                        <Link
                          className="flex gap-4 w-full"
                          onClick={() => {
                            setIsModuleOpen(false);
                            setIsNavOpen(!isNavOpen);
                          }}
                          href="/looker-odoo-connector/"
                        >
                          <svg
                            className="w-[20%]"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="25px"
                            height="25px"
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
                            </g>
                          </svg>
                          <p className="w-[80%]">
                            Odoo Looker Studio Connector
                          </p>
                        </Link>
                      </li>
                      <li className="block px-4 py-2">
                        <Link
                          className="flex gap-4"
                          onClick={() => {
                            setIsModuleOpen(false);
                            setIsNavOpen(!isNavOpen);
                          }}
                          href="/odoo-powerbi-connector/"
                        >
                          <div className="w-[20%] flex justify-center items-center">
                            <img
                              src="/images/powerbi/powerbi-logo.png"
                    alt="power bi logo"

                              width="25px"
                            />
                          </div>
                          <p className="w-[80%]">Odoo Power BI Connector</p>
                        </Link>
                      </li>{" "}
                      <li className="block px-4 py-2">
                        <Link
                          className="flex gap-4"
                          onClick={() => {
                            setIsModuleOpen(false);
                            setIsNavOpen(!isNavOpen);
                          }}
                          href="/odoo-bigquery-connector/"
                        >
                          <div className="w-[20%] flex justify-center items-center">
                            <img
                              src="/images/google-bigquery-logo1.png"
                    alt="bigquery logo"

                              width="20px"
                            />
                          </div>
                          <p className="w-[80%]">
                            Google&nbsp;BigQuery Connector
                          </p>
                        </Link>
                      </li>{" "}
                      <li className="block px-4 py-2">
                        <Link
                          className="flex w-full gap-4"
                          onClick={() => {
                            setIsModuleOpen(false);
                            setIsNavOpen(!isNavOpen);
                          }}
                          href="/googlesheet-odoo-connector/"
                        >
                          <svg
                            className="w-[20%]"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="-4 0 64 64"
                          >
                            <path
                              d="M5.131-.001c-2.801 0-5.072 2.272-5.072 5.074v53.841c0 2.803 2.271 5.074 5.072 5.074h45.775c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.904-20.31h-31.945z"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              fill="#20A971"
                            />

                            <path
                              d="M10.107 37.466v16.419h21.521v-16.419h-21.521zm6.458 15.078h-4.967v-3.58h4.967v3.58zm0-5.012h-4.967v-3.579h4.967v3.579zm0-5.011h-4.967v-3.58h4.967v3.58zm13.632 10.023h-12.155v-3.58h12.155v3.58zm0-5.012h-12.155v-3.579h12.155v3.579zm0-5.011h-12.155v-3.58h12.155v3.58z"
                              fill="#ffffff"
                            />

                            <g fillRule="evenodd" clipRule="evenodd">
                              <path
                                d="M55.98 20.32v1h-12.801s-6.312-1.26-6.127-6.707c0 0 .207 5.707 6.002 5.707h12.926z"
                                fill="#189355"
                              />

                              <path
                                d="M37.076-.031v14.561c0 1.656 1.104 5.791 6.104 5.791h12.801l-18.905-20.352z"
                                opacity=".5"
                                fill="#ffffff"
                              />
                            </g>
                          </svg>
                          <p className="w-[80%]">Google Sheets Connector</p>
                        </Link>
                      </li>
                      <li className="block px-4 py-2">
                        <Link
                          className="flex gap-4"
                          onClick={() => {
                            setIsModuleOpen(false);
                            setIsNavOpen(!isNavOpen);
                          }}
                          href="/odoo-data-model/"
                        >
                          <div className="w-[20%] flex justify-center items-center">
                            <img
                              src="/images/er-diagram/table-data-model.svg"
                    alt="odoo data model"

                              width="20px"
                            />
                          </div>
                          <p>Odoo Data Model</p>
                        </Link>
                      </li>
                      <li className="block px-4 py-2">
                        <Link
                          className="flex gap-4"
                          onClick={() => {
                            setIsModuleOpen(false);
                            setIsNavOpen(!isNavOpen);
                          }}
                          href="/odoo-tableau-connector/"
                        >
                          <svg
                            className="w-[20%]"
                            width="20"
                            height="20"
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
                          <p className="w-[80%]">Odoo Tableau Connector</p>
                        </Link>
                      </li>
                      <li className="flex justify-center items-center text-gray-600 text-base px-4 py-2 w-full ">
                        <Link
                          className="text-center w-full "
                          onClick={() => {
                            setIsModuleOpen(false);
                            setIsNavOpen(!isNavOpen);
                          }}
                          href="/odoo-products/"
                        >
                          See all ...
                        </Link>
                      </li>
                    </div>
                  )}
                </div>
                <Link
                  href="/create-dashboards/"
                  className="flex flex-row items-center px-3 py-2 text-sm rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <span className="mr-2">Dashboards</span>
                </Link>
                {/* Free Demo */}
                {/* <div className="relative">
                  <button
                    onClick={() =>
                      setIsDemoOpen(!isDemoOpen)
                    }
                    className="flex flex-row items-center w-full px-3 py-2 mt-1 text-base text-black font-semibold text-left rounded-md hover:text-white hover:bg-gray-700 "
                  >
                    Free Demo
                  </button>
                  {isDemoOpen && (
                    <div className="p-4 flex flex-col gap-3 text-sm text-black">
                      <li className="block px-4 py-2">
                        <Link
                          className="flex gap-4 w-full"
                          onClick={() =>{
                            
                            setIsDemoOpen(
                              !isDemoOpen
                            )
                            setIsNavOpen(!isNavOpen)

                          }
                          }
                          href="/looker-odoo-connector/"
                        >
                          <svg
                            className="w-[20%]"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="25px"
                            height="25px"
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
                            </g>
                          </svg>
                          <p className="w-[80%]">
                            Odoo Looker Studio
                            Connector Demo
                          </p>
                        </Link>
                      </li>
                      <li className="block px-4 py-2">
                        <Link
                          className="flex gap-4"
                          onClick={() =>{

                            setIsDemoOpen(
                              !isDemoOpen
                            )
                            setIsNavOpen(!isNavOpen)

                          }
                          }
                          href="https://www.youtube.com/watch?v=XfjPP8LW0l4&t=1s"
                        >
                          <div className="w-[20%] flex justify-center items-center">
                            <img
                              src="/images/powerbi/powerbi-logo.png"
                              width="25px"
                            />
                          </div>
                          <p className="w-[80%]">
                            Odoo Power BI
                            Connector Demo
                          </p>
                        </Link>
                      </li>{" "}
                      <li className="block px-4 py-2">
                        <Link
                          className="flex w-full gap-4"
                          onClick={() =>{

                            setIsDemoOpen(
                              !isDemoOpen
                            )
                            setIsNavOpen(!isNavOpen)

                          }
                          }
                          href="/demo/odoo-google-sheets-connector/"
                        >
                          <svg
                            className="w-[20%]"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="-4 0 64 64"
                          >
                            <path
                              d="M5.131-.001c-2.801 0-5.072 2.272-5.072 5.074v53.841c0 2.803 2.271 5.074 5.072 5.074h45.775c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.904-20.31h-31.945z"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              fill="#20A971"
                            />

                            <path
                              d="M10.107 37.466v16.419h21.521v-16.419h-21.521zm6.458 15.078h-4.967v-3.58h4.967v3.58zm0-5.012h-4.967v-3.579h4.967v3.579zm0-5.011h-4.967v-3.58h4.967v3.58zm13.632 10.023h-12.155v-3.58h12.155v3.58zm0-5.012h-12.155v-3.579h12.155v3.579zm0-5.011h-12.155v-3.58h12.155v3.58z"
                              fill="#ffffff"
                            />

                            <g
                              fillRule="evenodd"
                              clipRule="evenodd"
                            >
                              <path
                                d="M55.98 20.32v1h-12.801s-6.312-1.26-6.127-6.707c0 0 .207 5.707 6.002 5.707h12.926z"
                                fill="#189355"
                              />

                              <path
                                d="M37.076-.031v14.561c0 1.656 1.104 5.791 6.104 5.791h12.801l-18.905-20.352z"
                                opacity=".5"
                                fill="#ffffff"
                              />
                            </g>
                          </svg>
                          <p className="w-[80%]">
                            Google Sheets
                            Connector Demo
                          </p>
                        </Link>
                      </li>
                    </div>
                  )}
                </div> */}
                {/* Odoo Guides */}
                <div className="relative">
                  <button
                    onClick={() => setIsGuideOpen(!isGuideOpen)}
                    className="flex flex-row items-center w-full px-3 py-2 mt-1 text-base text-black font-semibold text-left rounded-md hover:text-white hover:bg-gray-700 "
                  >
                    Odoo Guides
                  </button>
                  {isGuideOpen && (
                    <div className="p-4 flex flex-col gap-3 text-sm text-black">
                      <li className="block px-4 py-2">
                        <Link
                          className="flex gap-4"
                          onClick={() => {
                            setIsGuideOpen(!isGuideOpen);
                            setIsNavOpen(!isNavOpen);
                          }}
                          href="/guides/how-to-connect-odoo-powerbi/"
                        >
                          <div className="w-[20%] flex justify-center items-center">
                            <img
                              src="/images/powerbi/powerbi-logo.png"
                    alt="power bi logo"

                              width="25px"
                            />
                          </div>
                          <p className="w-[80%]">
                            Odoo Power BI Connector Guide
                          </p>
                        </Link>
                      </li>{" "}
                      <li className="block px-4 py-2">
                        <Link
                          className="flex w-full gap-4"
                          onClick={() => {
                            setIsGuideOpen(!isGuideOpen);
                            setIsNavOpen(!isNavOpen);
                          }}
                          href="/guides/how-to-connect-google-sheets-with-odoo/"
                        >
                          <svg
                            className="w-[20%]"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="-4 0 64 64"
                          >
                            <path
                              d="M5.131-.001c-2.801 0-5.072 2.272-5.072 5.074v53.841c0 2.803 2.271 5.074 5.072 5.074h45.775c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.904-20.31h-31.945z"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              fill="#20A971"
                            />

                            <path
                              d="M10.107 37.466v16.419h21.521v-16.419h-21.521zm6.458 15.078h-4.967v-3.58h4.967v3.58zm0-5.012h-4.967v-3.579h4.967v3.579zm0-5.011h-4.967v-3.58h4.967v3.58zm13.632 10.023h-12.155v-3.58h12.155v3.58zm0-5.012h-12.155v-3.579h12.155v3.579zm0-5.011h-12.155v-3.58h12.155v3.58z"
                              fill="#ffffff"
                            />

                            <g fillRule="evenodd" clipRule="evenodd">
                              <path
                                d="M55.98 20.32v1h-12.801s-6.312-1.26-6.127-6.707c0 0 .207 5.707 6.002 5.707h12.926z"
                                fill="#189355"
                              />

                              <path
                                d="M37.076-.031v14.561c0 1.656 1.104 5.791 6.104 5.791h12.801l-18.905-20.352z"
                                opacity=".5"
                                fill="#ffffff"
                              />
                            </g>
                          </svg>
                          <p className="w-[80%]">
                            Google Sheets Connector Guide
                          </p>
                        </Link>
                      </li>
                      <li className="block px-4 py-2">
                        <Link
                          className="flex gap-4"
                          onClick={() => {
                            setIsGuideOpen(!isGuideOpen);
                            setIsNavOpen(!isNavOpen);
                          }}
                          href="/guides/how-to-connect-google-bigquery-with-odoo/"
                        >
                          <div className="w-[20%] flex justify-center items-center">
                            <img
                              src="/images/google-bigquery-logo1.png"
                              alt="bigquery logo"
                              width="20px"
                            />
                          </div>
                          <p className="w-[80%]">
                            Google&nbsp;BigQuery Connector Guide
                          </p>
                        </Link>
                      </li>{" "}
                      <li className="block px-4 py-2">
                        <Link
                          className="flex w-full gap-4"
                          onClick={() => {
                            setIsGuideOpen(!isGuideOpen);
                            setIsNavOpen(!isNavOpen);
                          }}
                          href="/guides/how-to-connect-excel-odoo/"
                        >
                          <svg
                            className="w-[20%]"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="-4 0 64 64"
                          >
                            <path
                              d="M5.131-.001c-2.801 0-5.072 2.272-5.072 5.074v53.841c0 2.803 2.271 5.074 5.072 5.074h45.775c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.904-20.31h-31.945z"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              fill="#20A971"
                            />

                            <path
                              d="M10.107 37.466v16.419h21.521v-16.419h-21.521zm6.458 15.078h-4.967v-3.58h4.967v3.58zm0-5.012h-4.967v-3.579h4.967v3.579zm0-5.011h-4.967v-3.58h4.967v3.58zm13.632 10.023h-12.155v-3.58h12.155v3.58zm0-5.012h-12.155v-3.579h12.155v3.579zm0-5.011h-12.155v-3.58h12.155v3.58z"
                              fill="#ffffff"
                            />

                            <g fillRule="evenodd" clipRule="evenodd">
                              <path
                                d="M55.98 20.32v1h-12.801s-6.312-1.26-6.127-6.707c0 0 .207 5.707 6.002 5.707h12.926z"
                                fill="#189355"
                              />

                              <path
                                d="M37.076-.031v14.561c0 1.656 1.104 5.791 6.104 5.791h12.801l-18.905-20.352z"
                                opacity=".5"
                                fill="#ffffff"
                              />
                            </g>
                          </svg>
                          <p className="w-[80%]">Odoo Excel Connector Guide</p>
                        </Link>
                      </li>
                      <li className="block px-4 py-2">
                        <Link
                          className="flex gap-4"
                          onClick={() => {
                            setIsGuideOpen(!isGuideOpen);
                            setIsNavOpen(!isNavOpen);
                          }}
                          href="/guides/how-to-connect-odoo-tableau/"
                        >
                          <svg
                            className="w-[20%]"
                            width="20"
                            height="20"
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
                          <p className="w-[80%]">
                            Odoo Tableau Connector Guide
                          </p>
                        </Link>
                      </li>
                      <li className="block px-4 py-2">
                        <Link
                          className="flex gap-4"
                          onClick={() => setIsGuideOpen(!isGuideOpen)}
                          href="/guides/inventory-forecasting/"
                        >
                          <svg
                            className="w-[20%]"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20px"
                            height="20px"
                            viewBox="0 0 48 48"
                            fill="none"
                          >
                            <rect
                              width="48"
                              height="48"
                              fill="white"
                              fill-opacity="0.01"
                            />
                            <rect
                              x="9"
                              y="18"
                              width="30"
                              height="24"
                              rx="2"
                              fill="#2F88FF"
                              stroke="#000000"
                              stroke-width="4"
                            />
                            <circle cx="17" cy="26" r="2" fill="white" />
                            <circle cx="31" cy="26" r="2" fill="white" />
                            <path
                              d="M20 32C18.8954 32 18 32.8954 18 34C18 35.1046 18.8954 36 20 36V32ZM28 36C29.1046 36 30 35.1046 30 34C30 32.8954 29.1046 32 28 32V36ZM20 36H28V32H20V36Z"
                              fill="white"
                            />
                            <path
                              d="M24 10V18"
                              stroke="#000000"
                              stroke-width="4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M4 26V34"
                              stroke="#000000"
                              stroke-width="4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M44 26V34"
                              stroke="#000000"
                              stroke-width="4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <circle
                              cx="24"
                              cy="8"
                              r="2"
                              stroke="#000000"
                              stroke-width="4"
                            />
                          </svg>
                          <p className="w-[80%]">
                            Odoo Inventory Forecasting Guide
                          </p>
                        </Link>
                      </li>
                    </div>
                  )}
                </div>
                {/* Blogs */}
                <a
                  href="/blogs/"
                  className="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Blogs
                </a>
                {/* About Us */}
                <a
                  href="/about/"
                  className="flex flex-row items-center px-3 py-2 mt-1 text-base rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  About Us
                </a>
                {/* Contact Us */}
                {!isAdmin ? (
                  <a
                    href="/contact/"
                    className="flex flex-row items-center px-3 py-2 mt-1 text-base rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    Contact Us
                  </a>
                ) : (
                  <button
                    onClick={adminLogout}
                    className="flex flex-row items-center px-3 py-2 mt-1 text-base rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
