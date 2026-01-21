import React from "react";
import products from "../../data/products.json";

const Hero = () => {
  const currentProduct = products.filter(
    (obj) => obj.href == "/looker-odoo-connector/"
  );
  const amount = parseFloat(
    currentProduct[0].price
  );
  return (
    <div className="w-full">
      <div className="  bg-[#e7e8e9] text-black md:px-20 pt-[50px] pb-[100px]">
        <div className="mx-auto  pt-16 sm:pt-24">
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                    <a
                      href="/about/"
                      className="rounded-full w-fit font-sans mb-4 uppercase bg-gray-800 px-4 tracking-wide py-2 text-sm font-semibold leading-5 text-white"
                    >
                      Introducing Best Odoo
                      Company →
                    </a>
                    <h1 className="text-4xl font-bold tracking-tight text-center md:text-left sm:text-5xl md:text-6xl">
                      <span className="sm:text-6xl"></span>{" "}
                      Make your
                      <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
                        {" "}
                        Odoo
                      </span>{" "}
                      10x better with TechFinna
                    </h1>
                  </div>
                  {/* odoo insights, remove ratings, odoo analytics clone card, best selling change button tag symbol */}
                  <p className="text-base  sm:mt-5 sm:text-xl text-center md:text-left lg:text-lg xl:text-xl">
                    The best Odoo company excels
                    in customization, support, and
                    integration, enhancing
                    business efficiency
                  </p>
                </div>

                <div className="border-t border-gray-700"></div>

                <div>
                  <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center mb-4 overflow-x-auto relative z-20 no-visible-scrollbar ">
                    <div className="flex items-center space-x-2 mr-4">
                      <span>
                        <svg
                          className="grayscale"
                          fill="gray"
                          width="25px"
                          height="25px"
                          viewBox="0 0 32 32"
                          version="1.1"
                        >
                          <title>powerbi</title>
                          <path d="M13.501 16h-7.498c0 0-0 0-0 0-0.69 0-1.25 0.559-1.25 1.25 0 0 0 0 0 0v0 12.496c0 0 0 0 0 0 0 0.69 0.559 1.25 1.25 1.25 0 0 0 0 0 0h8.747v-13.746c0-0.69-0.559-1.25-1.25-1.25v0zM19.749 8.502h-7.498c0 0-0 0-0 0-0.69 0-1.25 0.559-1.25 1.25 0 0 0 0 0 0v0 5.623h2.499c1.035 0.001 1.873 0.84 1.874 1.874v13.746h5.623v-21.244c0-0.69-0.559-1.25-1.25-1.25v0zM27.247 2.254v27.492c0 0 0 0 0 0 0 0.69-0.559 1.25-1.25 1.25 0 0-0 0-0 0h-4.374v-21.244c-0.001-1.035-0.84-1.873-1.874-1.874h-2.499v-5.623c0-0 0-0 0-0 0-0.69 0.559-1.25 1.25-1.25h7.498c0.69 0 1.25 0.559 1.25 1.25 0 0 0 0 0 0v0z" />
                        </svg>
                      </span>
                      <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
                        PowerBI
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mr-4">
                      <span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-1"
                        >
                          <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
                          <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
                          <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
                          <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
                          <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
                          <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
                          <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
                        </svg>
                      </span>
                      <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
                        React
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mr-4 pl-3">
                      <span>
                        <svg
                          className="grayscale"
                          width="25"
                          height="25"
                          viewBox="-4 0 64 64"
                        >
                          <path
                            d="M5.131-.001c-2.801 0-5.072 2.272-5.072 5.074v53.841c0 2.803 2.271 5.074 5.072 5.074h45.775c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.904-20.31h-31.945z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="#20A971"
                          ></path>
                          <path
                            d="M10.107 37.466v16.419h21.521v-16.419h-21.521zm6.458 15.078h-4.967v-3.58h4.967v3.58zm0-5.012h-4.967v-3.579h4.967v3.579zm0-5.011h-4.967v-3.58h4.967v3.58zm13.632 10.023h-12.155v-3.58h12.155v3.58zm0-5.012h-12.155v-3.579h12.155v3.579zm0-5.011h-12.155v-3.58h12.155v3.58z"
                            fill="#ffffff"
                          ></path>
                          <g
                            fillRule="evenodd"
                            clipRule="evenodd"
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
                      </span>
                      <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
                        Excel
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mr-4">
                      <span>
                        <svg
                          className="grayscale"
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
                      </span>
                      <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
                        Looker
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mr-4">
                      <span>
                        <svg
                          className="p-2 grayscale"
                          width="40px"
                          height="40px"
                          viewBox="0 0 24 24"
                        >
                          <defs></defs>

                          <g data-name="Product Icons">
                            <g>
                              <path
                                className="cls-1"
                                d="M6.73,10.83v2.63A4.91,4.91,0,0,0,8.44,15.2V10.83Z"
                              />

                              <path
                                className="cls-2"
                                d="M9.89,8.41v7.53A7.62,7.62,0,0,0,11,16,8,8,0,0,0,12,16V8.41Z"
                              />

                              <path
                                className="cls-1"
                                d="M13.64,11.86v3.29a5,5,0,0,0,1.7-1.82V11.86Z"
                              />

                              <path
                                className="cls-3"
                                d="M17.74,16.32l-1.42,1.42a.42.42,0,0,0,0,.6l3.54,3.54a.42.42,0,0,0,.59,0l1.43-1.43a.42.42,0,0,0,0-.59l-3.54-3.54a.42.42,0,0,0-.6,0"
                              />

                              <path
                                className="cls-2"
                                d="M11,2a9,9,0,1,0,9,9,9,9,0,0,0-9-9m0,15.69A6.68,6.68,0,1,1,17.69,11,6.68,6.68,0,0,1,11,17.69"
                              />
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
                        BigQuery
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center md:justify-start md:items-start space-x-4 items-center text-white">
                  <div className="relative">
                    <div className="absolute -inset-5">
                      <div className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
                    </div>
                    <a
                      href="/odoo-products/"
                      title=""
                      className="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      role="button"
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
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 flex flex-col gap-3 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              {/* mac window */}
              <div className="relative">
                <div className="videocontainer flex justify-center items-center">
                  <div className="drop-shadow-xl flex items-center flex-col relative border-sm">
                    <div className="flex items-center flex-row rounded-t-md border-[#3b3b3b] w-full bg-[#3b3b3b] min-h-[20px] py-1.5 px-3">
                      <div className="w-[12px] mr-2 h-[12px] rounded-full bg-red-500"></div>
                      <div className="w-[12px] mr-2 h-[12px] rounded-full bg-yellow-500"></div>
                      <div className="w-[12px] h-[12px] rounded-full bg-green-500"></div>
                      <div className="flex-1 place-delf-stretch"></div>
                    </div>
                    <div className="border max-w-[330px] md:max-w-[800px] shadow-xl flex flex-col md:flex-row justify-evenly border-t-0 border-gray-200 bg-[#020817] p-4 py-8 text-white relative h-full w-full rounded-b-sm">
                      <div className="flex flex-col justify-center items-center gap-2 text-center">
                        <h3 className="text-3xl md:text-4xl mb-4 font-sans font-semibold tracking-wider">
                          Odoo Analytics
                        </h3>

                        <div className="relative inline-flex  group">
                          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                          <a
                            href="/odoo-analytics/"
                            title="Get quote now"
                            className="relative inline-flex items-center justify-center px-4 py-2 text-md font-sans font-semibold tracking-wider text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                          >
                            View Dashboards
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
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="rounded-lg mt-6 md:mt-0 border bg-card text-card-foreground shadow-sm flex flex-col justify-evenly items-center">
                        <div className="p-6 flex flex-col items-start justify-start pb-2 w-full">
                          <h3 className="tracking-tight text-base text-left font-sans">
                            Total Revenue
                          </h3>
                          <div className="text-2xl font-bold mt-2">
                            $15,231.89
                          </div>
                          <p className="text-xs text-muted-foreground">
                            <span className="text-green-500">
                              {" "}
                              +20.1%
                            </span>{" "}
                            from last month
                          </p>
                        </div>
                        <div className="p-6 pt-0 flex justify-center items-center flex-col">
                          <div className="h-[80px]">
                            <div
                              className="recharts-responsive-container w-[100%] h-[100%]"
                              width="302.71875"
                              height="80"
                            >
                              <div
                                className="recharts-wrapper relative "
                                role="region"
                              >
                                <svg
                                  className="recharts-surface"
                                  width="280"
                                  height="80"
                                  viewBox="0 0 303 80"
                                >
                                  <title></title>
                                  <desc></desc>
                                  <defs>
                                    <clipPath id="recharts1-clip">
                                      <rect
                                        x="10"
                                        y="5"
                                        height="75"
                                        width="283"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                  <g className="recharts-layer recharts-line">
                                    <path
                                      strokeWidth="2"
                                      stroke="#3182bd"
                                      fill="none"
                                      width="283"
                                      height="75"
                                      className="recharts-curve recharts-line-curve"
                                      strokeDasharray="306.34661865234375px 0px"
                                      d="M10,52.143C23.476,46.779,36.952,41.415,50.429,41.415C63.905,41.415,77.381,52.679,90.857,54.821C104.333,56.964,117.81,56.964,131.286,58.036C144.762,59.107,158.238,61.25,171.714,61.25C185.19,61.25,198.667,56.18,212.143,54.286C225.619,52.391,239.095,52.818,252.571,49.882C266.048,46.946,279.524,28.016,293,9.085"
                                    ></path>
                                    <g className="recharts-layer"></g>
                                    <g
                                      className="recharts-layer recharts-line-dots"
                                      role="img"
                                    >
                                      <circle
                                        r="3"
                                        strokeWidth="2"
                                        stroke="#3182bd"
                                        fill="#fff"
                                        width="283"
                                        height="75"
                                        cx="10"
                                        cy="52.14285714285714"
                                        className="recharts-dot recharts-line-dot"
                                      ></circle>
                                      <circle
                                        r="3"
                                        strokeWidth="2"
                                        stroke="#3182bd"
                                        fill="#fff"
                                        width="283"
                                        height="75"
                                        cx="50.42857142857143"
                                        cy="41.41517857142857"
                                        className="recharts-dot recharts-line-dot"
                                      ></circle>
                                      <circle
                                        r="3"
                                        strokeWidth="2"
                                        stroke="#3182bd"
                                        fill="#fff"
                                        width="283"
                                        height="75"
                                        cx="90.85714285714286"
                                        cy="54.821428571428584"
                                        className="recharts-dot recharts-line-dot"
                                      ></circle>
                                      <circle
                                        r="3"
                                        strokeWidth="2"
                                        stroke="#3182bd"
                                        fill="#fff"
                                        width="283"
                                        height="75"
                                        cx="131.28571428571428"
                                        cy="58.035714285714285"
                                        className="recharts-dot recharts-line-dot"
                                      ></circle>
                                      <circle
                                        r="3"
                                        strokeWidth="2"
                                        stroke="#3182bd"
                                        fill="#fff"
                                        width="283"
                                        height="75"
                                        cx="171.71428571428572"
                                        cy="61.25"
                                        className="recharts-dot recharts-line-dot"
                                      ></circle>
                                      <circle
                                        r="3"
                                        strokeWidth="2"
                                        stroke="#3182bd"
                                        fill="#fff"
                                        width="283"
                                        height="75"
                                        cx="212.14285714285717"
                                        cy="54.285714285714285"
                                        className="recharts-dot recharts-line-dot"
                                      ></circle>
                                      <circle
                                        r="3"
                                        strokeWidth="2"
                                        stroke="#3182bd"
                                        fill="#fff"
                                        width="283"
                                        height="75"
                                        cx="252.57142857142858"
                                        cy="49.88214285714285"
                                        className="recharts-dot recharts-line-dot"
                                      ></circle>
                                      <circle
                                        r="3"
                                        strokeWidth="2"
                                        stroke="#3182bd"
                                        fill="#fff"
                                        width="283"
                                        height="75"
                                        cx="293"
                                        cy="9.08482142857143"
                                        className="recharts-dot recharts-line-dot"
                                      ></circle>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* best selling & blog*/}
              <div className="flex gap-4">
                <div className="max-w-[400px] bg-[#020817] p-6  border border-gray-200 rounded-lg shadow-2xl ">
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
                      ${amount}
                    </p>
                    <p className="text-lg text-gray-400 font-sans line-through">
                      ${amount + 120}
                    </p>
                  </div>

                  <p className="mb-12 text-lg text-gray-400">
                    Only Odoo to Looker Connector
                    on Odoo App Store
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
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="hidden md:block max-w-[450px] w-[300px] bg-white border border-gray-200 rounded-lg shadow-lg ">
                  <a
                    href="/blog/odoo-powerbi-connector/"
                    className=" min-w-[300px] flex"
                  >
                    <img
                      className="rounded-t-lg"
                      src="/images/blogs/pbi_connector.png"
                      alt="techfinna-blog"
                      width={310}
                    />
                  </a>

                  <div className="p-5">
                    <a href="/blogs/how-to-connect-odoo-with-power-bi-desktop/">
                      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
                        How to connect Odoo with
                        Power BI Desktop
                      </h5>
                    </a>
                    {/* <div className="flex gap-2">
                      <span className="text-sm px-2 rounded-lg py-2 text-white bg-gray-700 flex gap-1">
                        Microsoft
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path
                            d="M7.0498 7.0498H7.0598M10.5118 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10.5118C3 11.2455 3 11.6124 3.08289 11.9577C3.15638 12.2638 3.27759 12.5564 3.44208 12.8249C3.6276 13.1276 3.88703 13.387 4.40589 13.9059L9.10589 18.6059C10.2939 19.7939 10.888 20.388 11.5729 20.6105C12.1755 20.8063 12.8245 20.8063 13.4271 20.6105C14.112 20.388 14.7061 19.7939 15.8941 18.6059L18.6059 15.8941C19.7939 14.7061 20.388 14.112 20.6105 13.4271C20.8063 12.8245 20.8063 12.1755 20.6105 11.5729C20.388 10.888 19.7939 10.2939 18.6059 9.10589L13.9059 4.40589C13.387 3.88703 13.1276 3.6276 12.8249 3.44208C12.5564 3.27759 12.2638 3.15638 11.9577 3.08289C11.6124 3 11.2455 3 10.5118 3ZM7.5498 7.0498C7.5498 7.32595 7.32595 7.5498 7.0498 7.5498C6.77366 7.5498 6.5498 7.32595 6.5498 7.0498C6.5498 6.77366 6.77366 6.5498 7.0498 6.5498C7.32595 6.5498 7.5498 6.77366 7.5498 7.0498Z"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-sm px-2 rounded-lg py-2 text-white bg-gray-700 flex gap-1">
                        Odoo
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path
                            d="M7.0498 7.0498H7.0598M10.5118 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10.5118C3 11.2455 3 11.6124 3.08289 11.9577C3.15638 12.2638 3.27759 12.5564 3.44208 12.8249C3.6276 13.1276 3.88703 13.387 4.40589 13.9059L9.10589 18.6059C10.2939 19.7939 10.888 20.388 11.5729 20.6105C12.1755 20.8063 12.8245 20.8063 13.4271 20.6105C14.112 20.388 14.7061 19.7939 15.8941 18.6059L18.6059 15.8941C19.7939 14.7061 20.388 14.112 20.6105 13.4271C20.8063 12.8245 20.8063 12.1755 20.6105 11.5729C20.388 10.888 19.7939 10.2939 18.6059 9.10589L13.9059 4.40589C13.387 3.88703 13.1276 3.6276 12.8249 3.44208C12.5564 3.27759 12.2638 3.15638 11.9577 3.08289C11.6124 3 11.2455 3 10.5118 3ZM7.5498 7.0498C7.5498 7.32595 7.32595 7.5498 7.0498 7.5498C6.77366 7.5498 6.5498 7.32595 6.5498 7.0498C6.5498 6.77366 6.77366 6.5498 7.0498 6.5498C7.32595 6.5498 7.5498 6.77366 7.5498 7.0498Z"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div> */}
                    <div className="px-2 my-2">
                      <p className="text-sm text-gray-700">
                        With its intuitive
                        interface and scalability,
                        Power BI has over 5
                        million users globa..
                      </p>
                    </div>
                    <div className="flex flex-row justify-end items-center pt-4">
                      <a
                        href="/blogs/how-to-connect-odoo-with-power-bi-desktop/"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Read more
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
