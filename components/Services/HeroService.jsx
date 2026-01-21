import React from "react";

const HeroService = () => {
  return (
    <div className="px-3 mb-20 w-full  ">
      <div className="hero-service w-full flex flex-col lg:flex-row pt-[120px] lg:pt-20">
        <div className=" w-full lg:w-[40%] px-12 flex flex-col items-end justify-center">
          <div className="w-full lg:pl-12 xl:pl-24 flex flex-col flex-wrap justify-center items-center text-center lg:text-left lg:justify-evenly lg:items-start">
            <div className=" flex justify-center items-center">
              <span className="rounded-full w-fit font-sans mb-4 uppercase bg-gray-800 px-4 tracking-wide py-2 text-sm font-semibold leading-5 text-white">
                Odoo Company →
              </span>
            </div>
            <div className="my-4 mb-8">
              <h2 className="text-black text-5xl lg:w-[80%] font-sans">
                Unlock the future of{" "}
                <span className="font-semiboold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
                  Odoo Services
                </span>{" "}
              </h2>
            </div>
            <p className="text-gray-600 mt-8">
              100+ Happy Companies
            </p>
            <div className="flex justify-center items-center">
              <img
                src="/images/company/1.png"
                width="100px"
                className="px-2"
              />
              <img
                src="/images/company/2.png"
                width="100px"
                className="px-2"
              />
              <img
                src="/images/company/3.png"
                width="100px"
                className="px-2"
              />
              <img
                src="/images/company/4.png"
                width="100px"
                className="px-2"
              />
            </div>
            <div className="mt-8 flex flex-col lg:flex-row gap-4">
              <a
                href="/contact/"
                type="button"
                className="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Get Started
                <svg
                  className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </a>
              <a
                href="/contact/"
                type="button"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-[60%] gap-6 p-4">
          <div className="hidden lg:block">
            <div className="max-w-[350px] bg-[#020817] p-6  border border-gray-200 rounded-lg shadow-2xl ">
              <p className="font-sans w-fit rounded-lg flex gap-2 mb-4 uppercase bg-[#2254d1] text-white px-4 tracking-wide py-2 text-sm font-semibold leading-5 text-black">
                Best Selling
              </p>
              <a href="/looker-odoo-connector/">
                <h5 className="mt-2 mb-4 text-2xl font-sans tracking-tight text-white ">
                  Odoo Looker Connector
                </h5>
              </a>
              <div className="flex gap-2 justify-start items-center mb-2">
                <p className="text-2xl pt-2 text-white font-bold tracking-wide">
                  $285
                </p>
                <p className="text-lg text-gray-400 font-sans line-through">
                  $380
                </p>
              </div>
              <p className="mb-12 text-lg text-gray-400">
                Only Odoo to Looker Connector on
                Odoo App Store
              </p>
              <div className="flex">
                <div className="flex justify-center items-center  rounded-lg shadow-xl w-fit ">
                  <div className="flex items-center justify-center">
                    <p className="text-white px-2 text-sm text-center">
                      4.9
                    </p>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                  </div>
                </div>
                <a
                  href="/looker-odoo-connector/"
                  className="relative inline-flex items-end justify-end flex w-full px-2  me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg "
                >
                  <span className="relative flex gap-1 font-semibold px-3 py-2 transition-all ease-in duration-75 bg-white  rounded-md ">
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
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="max-w-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow  flex flex-col shadow-xl">
              <img
                src="/images/graph-business.svg"
                className="w-[40px] mx-auto"
              />
              <a href="#">
                <h5 className="mt-2 text-2xl font-semibold tracking-wide text-gray-800 text-center ">
                  Odoo Analytics
                </h5>
              </a>
              <p className="mb-3 text-gray-800 text-center">
                Dashboards
              </p>
              <p className="text-3xl text-black font-semibold text-left">
                $1429
              </p>
              <div className="flex justify-start py-2 w-full">
                <p className="text-md text-green-400">
                  Ongoing 45%
                </p>
                <img
                  src="/images/up-arrow.png"
                  className="mx-4 w-[20px] h-[20px]"
                />
              </div>

              <img src="/images/graph1.png" />
              {/* <a
                href="#"
                className="inline-flex font-medium items-center text-blue-600 hover:underline"
              >
                See our guideline
                <svg
                  className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </a> */}
            </div>
            <div className="max-w-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow-xl">
              <p className="mt-3 text-gray-800 ">
                Customization
              </p>
              <a href="#">
                <h5 className="mb-3 text-2xl font-semibold tracking-wide text-gray-800 ">
                  Need help in Odoo
                  Implementation?
                </h5>
              </a>

              <a
                href="/contact/"
                className="inline-flex font-medium items-center text-blue-600 hover:underline"
              >
                Contact Us
                <svg
                  className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroService;
