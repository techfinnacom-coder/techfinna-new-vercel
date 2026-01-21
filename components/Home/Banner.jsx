import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="  text-center">
      <div className="hero flex flex-col gap-16 pb-[80px]">
        <div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-black">
            Odoo Connectors
          </h1>
          <p className="py-2 font-light text-[#464154]">
            Effortlessly integrate, sync, and
            streamline data with bespoke Odoo
            connectors.
          </p>
          <div className="flex justify-center flex-wrap gap-10 mt-10">
            {/* looker card */}
            <div className="w-[250px] hover:scale-[105%] duration-150 h-[350px] rounded-t-lg shadow-lg border">
              <div className="h-[300px] flex flex-col justify-around items-center p-5 pt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="100px"
                  height="100px"
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
                <div>
                  <h5 className="text-2xl">
                    Lookers Studio
                  </h5>
                  <p className="text-md">
                    Odoo - Looker studio connector
                  </p>
                </div>
              </div>
              <Link
                href={"/looker-odoo-connector"}
              >
                <button className="btn w-full h-[50px] bg-black text-white rounded-none hover:bg-black">
                  View Module
                </button>
              </Link>
            </div>
            {/* powerbi card */}
            <div className="w-[250px] hover:scale-[105%] duration-150 h-[350px] rounded-t-lg shadow-lg border">
              <div className="h-[300px] flex flex-col justify-around items-center p-5 pt-8">
                <img
                  src="/images/powerbi/powerbi-logo.png"
                  width="120px"
                />
                <div>
                  <h5 className="text-2xl">
                    {" "}
                    Power BI
                  </h5>
                  <p className="text-md">
                    Odoo - Microsoft Power BI
                    connector
                  </p>
                </div>
              </div>
              <Link href="/odoo-powerbi-connector">
                <button className="btn w-full h-[50px] bg-black text-white rounded-none hover:bg-black">
                  View Module
                </button>
              </Link>
            </div>
            {/* google bigquery card */}
            <div className="w-[250px] hover:scale-[105%] duration-150 h-[350px] rounded-t-lg shadow-lg border">
              <div className="h-[300px] flex flex-col justify-around items-center p-5 pt-8">
                <img
                  src="/images/google-bigquery-logo1.png"
                  width="120px"
                />
                <div>
                  <h5 className="text-2xl">
                    Google BigQuery
                  </h5>
                  <p className="text-md">
                    Odoo - Google Bigquery
                    connector
                  </p>
                </div>
              </div>
              <Link href="/guides/how-to-connect-google-bigquery-with-odoo">
                <button className="btn w-full h-[50px] bg-black text-white rounded-none hover:bg-black">
                  View Module
                </button>
              </Link>
            </div>
            {/* google sheet card */}
            <div className="w-[250px] hover:scale-[105%] duration-150 h-[350px] rounded-t-lg shadow-lg border">
              <div className="h-[300px] flex flex-col justify-around items-center p-5 pt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
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
                <div>
                  <h5 className="text-2xl">
                    Google Sheets
                  </h5>
                  <p className="text-md">
                    Odoo - Google Spreadsheets
                    connector
                  </p>
                </div>
              </div>
              <Link
                href={
                  "/googlesheet-odoo-connector"
                }
              >
                <button className="btn w-full h-[50px] bg-black text-white rounded-none hover:bg-black">
                  View Module
                </button>
              </Link>
            </div>
            {/* discodoo */}
            <div className="w-[250px] hover:scale-[105%] duration-150 h-[350px] rounded-t-lg shadow-lg border">
              <div className="h-[300px] flex flex-col justify-around items-center p-5 pt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="100px"
                  height="100px"
                  viewBox="0 -28.5 256 256"
                  version="1.1"
                  preserveAspectRatio="xMidYMid"
                >
                  <g>
                    <path
                      d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                      fill="#5865F2"
                      fillRule="nonzero"
                    ></path>
                  </g>
                </svg>
                <div>
                  <h5 className="text-2xl">
                    Discodoo
                  </h5>
                  <p className="text-md">
                    Odoo - Discord connector
                  </p>
                </div>
              </div>
              <Link href={"/discodoo"}>
                <button className="btn w-full h-[50px] bg-black text-white rounded-none hover:bg-black">
                  View Module
                </button>
              </Link>
            </div>
            {/* odoo manual reconciliation card */}
            <div className="w-[250px] hover:scale-[105%] duration-150 h-[350px] rounded-t-lg shadow-lg border">
              <div className="h-[300px] flex flex-col justify-around items-center p-5 pt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  height="100px"
                  width="100px"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <path
                    fill="#4A75C3"
                    d="M256,0C114.616,0,0.001,114.615,0.001,255.999c0,50.147,14.421,96.924,39.339,136.413  l472.599-141.118C509.429,112.083,395.812,0,256,0z"
                  />
                  <path
                    fill="#4F5AA8"
                    d="M511.999,255.999c0-1.573-0.031-3.138-0.06-4.705L320.93,60.286l-129.862,180.45l88.123,88.123  L129.468,478.582C166.791,499.844,209.975,511.999,256,512C397.385,511.999,511.999,397.385,511.999,255.999z"
                  />
                  <path
                    fill="#6FAEE8"
                    d="M437.129,205.913c-11.951-11.951-31.337-11.951-43.287,0l-125.03,125.031l30.618,55.956l137.7-137.7  C449.079,237.249,449.079,217.863,437.129,205.913z"
                  />
                  <path
                    fill="#BCDEF7"
                    d="M472.932,241.717c-11.951-11.951-31.335-11.951-43.287,0L328.564,342.798l-134.692-13.842  L63.8,367.955l-24.451,24.451c22.466,35.607,53.458,65.29,90.121,86.176l23.414-23.414l163.217-30.874  c12.013-2.365,28.925-11.384,37.582-20.041l119.25-119.25C484.884,273.052,484.884,253.667,472.932,241.717z"
                  />
                  <path
                    fill="#FFD652"
                    d="M347.825,125.217c0,50.716-41.11,91.826-91.826,91.826l-64.278-91.826l64.278-91.826  C306.715,33.391,347.825,74.501,347.825,125.217z"
                  />
                  <path
                    fill="#FBE287"
                    d="M164.173,125.217c0,50.716,41.11,91.826,91.826,91.826V33.391  C205.284,33.391,164.173,74.501,164.173,125.217z"
                  />
                  <path
                    fill="#F7EDBC"
                    d="M255.999,194.108l-43.479-69.565l43.479-69.565c38.359,0,69.565,31.206,69.565,69.565  S294.358,194.108,255.999,194.108z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M186.434,124.543c0,38.359,31.206,69.565,69.565,69.565V54.978  C217.641,54.978,186.434,86.184,186.434,124.543z"
                  />
                  <path
                    fill="#FDBA4C"
                    d="M347.826,175.804c0,50.716-41.11,91.826-91.826,91.826l-64.278-91.826L256,83.978  C306.716,83.978,347.826,125.088,347.826,175.804z"
                  />
                  <path
                    fill="#FFD652"
                    d="M164.174,175.804c0,50.716,41.11,91.826,91.826,91.826V83.978  C205.285,83.978,164.174,125.088,164.174,175.804z"
                  />
                  <path
                    fill="#FBE287"
                    d="M256,244.694l-43.479-69.565L256,105.564c38.359,0,69.565,31.206,69.565,69.565  S294.359,244.694,256,244.694z"
                  />
                  <path
                    fill="#F7EDBC"
                    d="M186.435,175.129c0,38.359,31.206,69.565,69.565,69.565v-139.13  C217.642,105.564,186.435,136.77,186.435,175.129z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M307.333,289.987l-131.918-0.096c-18.918,0-38.385,4.833-52.862,19.309L63.8,367.955  c31.296,31.297,82.038,31.297,113.333,0l16.739-16.739c-0.003-0.011,113.461-0.012,113.461-0.012  c16.9,0,30.609-13.707,30.609-30.609C337.942,303.694,324.234,289.987,307.333,289.987z"
                  />
                  <path
                    fill="#BCDEF7"
                    d="M307.731,301.117H282.29l6.36,19.478l-6.36,19.478h25.452c10.51,0,19.07-8.737,19.07-19.478  S318.252,301.117,307.731,301.117z"
                  />
                  <path
                    fill="#DDEFFB"
                    d="M282.29,301.117l0.011,38.956c10.73,0,19.467-8.737,19.467-19.478S293.031,301.117,282.29,301.117z"
                  />
                </svg>
                <div>
                  <h5 className="text-2xl">
                    Odoo manual Reconciliation
                  </h5>
                  <p className="text-md">
                    Quickbooks like Reconciliation
                  </p>
                </div>
              </div>
              <Link
                href={
                  "/odoo-manual-reconciliation"
                }
              >
                <button className="btn w-full h-[50px] bg-black text-white rounded-none hover:bg-black">
                  View Module
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Link
          target="_blank"
          href={
            "https://apps.odoo.com/apps/modules/browse?author=techfinna"
          }
        >
          <div className="h-[50px] cursor-pointer hover:scale-105 duration-150 shadow-xl border flex items-center text-xl font-semibold bg-[#714B67] text-white px-10">
            Trending Apps on Odoo App Store
          </div>
        </Link>
      </div>
    </div>
    // <div>
    //     <div className="px-3 md:px-20 py-10 md:py-20">
    //         <div className="px-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    //             <div className='order-2 md:order-1'>
    //                 <h6 className='text-[13px] text-[#464154] font-extrabold py-6'>Connect  Collaborate  Automate</h6>
    //                 <h1 className="text-2xl md:text-4xl font-extrabold text-black">Unlock Seamless Integration between Odoo and Discord with Discodoo</h1>
    //                 <p className="py-6 text-[11px] md:text-[15px] font-light text-[#464154]">At TechFinna, we specialize in empowering businesses with seamless integration and collaboration solutions. Our flagship product, Discodoo, revolutionizes the way you connect Odoo with Discord, streamlining workflows, enhancing communication, and automating tasks. Unlock the power of seamless integration with TechFinna.</p>
    //                 <button className="btn bg-black text-white rounded-none hover:bg-black"><Link to="/discodoo" className='bg-black' >See Products </Link><FaArrowRight className='bg-black text-white'></FaArrowRight></button>
    //             </div>
    //             <div className='order-1 md:order-2 p-3'>
    //                 <img className='' src="/images/banner.png" alt="discord cusom bots and integration with odoo" />
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
};

export default Banner;
