import React, { useState, useEffect } from "react";
import Snowfall from "react-snowfall";

const Hero = ({ amount, showModal }) => {
  const originalAmount = parseFloat(amount);
  const discountPercentage = 10;
  const discountedAmount = (originalAmount * (1 - discountPercentage / 100)).toFixed(0);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date("2025-12-25") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-red-950/90 to-green-950">
      {/* Snowfall Background */}
      <Snowfall
        color="#fff"
        snowflakeCount={300}
        speed={[0.5, 2]}
        wind={[-0.5, 1]}
        style={{ position: "fixed", width: "100%", height: "100%", top: 0, left: 0, zIndex: 1 }}
      />

      {/* Christmas Trees */}
      <img
        src="/images/sale/christmas-tree.png"
        alt="Tree Left"
        className="hidden lg:block absolute left-0 top-0 h-[400px] xl:h-[550px] opacity-30 z-10 pointer-events-none"
      />
      <img
        src="/images/sale/christmas-tree.png"
        alt="Tree Right"
        className="hidden lg:block absolute right-0 bottom-0 h-[400px] xl:h-[400px] opacity-40 z-10 pointer-events-none"
      />

      {/* Main Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT SIDE - Content (65% on large, full on mobile) */}
          <div className="lg:col-span-7 xl:col-span-8 text-center lg:text-left space-y-8">
            {/* Verified Banner */}
            <div className="flex flex-col justify-center lg:justify-start">
               <div className="bg-red-600 md:hidden text-white font-bold py-2 px-4 rounded-t-xl w-full max-w-[400px] text-center animate-pulse">
              🎄 Christmas Sale: {discountPercentage}% OFF! 🎅
            </div>
              <img
                src="/images/lookers/banner.gif"
                alt="Verified by Looker"
                className="w-full max-w-md lg:max-w-2xl md:rounded-xl shadow-2xl border-4 border-white/20"
                loading="lazy"
              />
            </div>

            {/* Title & Subtitle */}
             <div className="flex flex-col justify-start items-start mt-6 w-full text-white">
            <h1 className="text-3xl xl:text-5xl font-semibold text-white ">
              Odoo Looker Connector - First of it's kind
            </h1>
            <h2 className="text-xl text-white mt-2 mb-4">
              Odoo Connector Module to Fluid Connection with Google Looker Studio{" "}
            </h2>
            <div className="flex justify-center items-center py-1 text-lg">
              <span className="font-semibold mr-4">
                Odoo Versions:
              </span>
              <div className="flex gap-1 flex-wrap  ml-[6px] text-black">
                <p className="text-sm bg-[#EDF2F7] rounded-sm px-2 border font-medium">
                  12.0
                </p>

                <p className="text-sm bg-[#EDF2F7] rounded-sm px-2 border font-medium">
                  13.0
                </p>

                <p className="text-sm bg-[#EDF2F7] rounded-sm px-2 border font-medium">
                  14.0
                </p>

                <p className="text-sm bg-[#EDF2F7] rounded-sm px-2 border font-medium">
                  15.0
                </p>

                <p className="text-sm bg-[#EDF2F7] rounded-sm px-2 border font-medium">
                  16.0
                </p>

                <p className="text-sm bg-[#EDF2F7] rounded-sm px-2 border font-medium">
                  17.0
                </p>
                <p className="text-sm bg-[#EDF2F7] rounded-sm px-2 border font-medium">
                  18.0
                </p>
                <p className="text-sm bg-[#EDF2F7] rounded-sm px-2 border font-medium">
                  19.0
                </p>
              </div>
            </div>
            <div className="flex py-1 text-lg">
              <span className="font-semibold pr-2">
                Validity:{" "}
              </span>{" "}
              Lifetime
            </div>
            <div className="flex py-1 text-lg">
              <span className="font-semibold pr-2">
                Product Copyright:{" "}
              </span>{" "}
              <a
                className="underline font-gray-400 !font-light"
                href="/about"
              >
                TechFinna
              </a>
            </div>
            <div className="flex py-1 ">
              <span className="font-semibold pr-2">
                Disclaimer:{" "}
              </span>{" "}
              <p className="pt-[2px] text-sm">
                The Odoo Looker Connector complies
                with the{" "}
                <a
                  target="_blank"
                  className="text-blue-500"
                  href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes"
                >
                  Google API Services User Data
                  Policy
                </a>{" "}
                including its Limited Use
                requirements, ensuring the secure
                handling of user data.
              </p>
            </div>
            <a
              target=" _blank"
              className="border mt-10 text-medium duration-300 border-[#0969da]
               mx-auto flex items-center justify-center gap-3 w-[280px] rounded-md 
                text-transparent px-5 py-2 bg-white/80 text-[#0969da]"
              href="https://lookerstudio.google.com/u/0/datasources"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                baseProfile="tiny"
                id="Layer_1"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                overflow="visible"
              >
                <g transform="scale(0.889,0.889)">
                  <path
                    fill="#D2E3FC"
                    d="M7.4,1.5c-1.2,0-2.1,0.9-2.1,2.1c0,0.4,0.1,0.8,0.4,1.2l0.9-0.9c0-0.1,0-0.2,0-0.3c0-0.5,0.4-0.9,0.9-0.9   s0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9c-0.1,0-0.2,0-0.3,0L6.3,5.3c1,0.6,2.3,0.4,2.9-0.6c0.6-1,0.4-2.3-0.6-2.9   C8.3,1.6,7.9,1.5,7.4,1.5z"
                  />
                  <path
                    fill="#5E97F6"
                    d="M6.6,7.6c0-0.7-0.2-1.4-0.6-2L4.8,6.8C4.9,7.1,5,7.3,5,7.6c0,0.5-0.2,0.9-0.5,1.2l0.6,1.6   C6.1,9.8,6.6,8.7,6.6,7.6z"
                  />
                  <path
                    fill="#5E97F6"
                    d="M3.4,9.3L3.4,9.3c-0.9,0-1.7-0.7-1.7-1.6c0-0.9,0.7-1.7,1.6-1.7c0.3,0,0.7,0.1,1,0.3l1.2-1.1   C4.8,4.6,4.1,4.3,3.3,4.3C1.5,4.3,0,5.8,0,7.6c0,1.8,1.4,3.3,3.3,3.3c0.2,0,0.5,0,0.7-0.1L3.4,9.3z"
                  />
                  <path
                    fill="#4285F4"
                    d="M7.5,10.6c-0.7,0-1.4,0.1-2.1,0.3l0.9,2.2C6.7,13.1,7.1,13,7.5,13c2.8,0,5,2.3,5,5c0,2.8-2.3,5-5,5   c-2.8,0-5-2.3-5-5c0-1.9,1-3.6,2.7-4.4l-0.9-2.2c-3.7,1.8-5.2,6.3-3.4,9.9c1.8,3.7,6.3,5.2,9.9,3.4c3.7-1.8,5.2-6.3,3.4-9.9   C12.9,12.3,10.3,10.6,7.5,10.6z"
                  />
                </g>
              </svg>
              <span className="text-[#0969da]">
                Looker Data Sources
              </span>
            </a>
          </div>
          </div>

          {/* RIGHT SIDE - Sale Card (Compact & Beautiful) */}
          <div className="lg:col-span-5 xl:col-span-4">
             <div className="flex flex-col justify-center items-center">
            {/* Christmas Sale Banner */}
            {/* <div className="bg-red-600 hidden md:block text-white font-bold py-2 px-4 rounded-t-xl w-full max-w-[400px] text-center animate-pulse">
              🎄 Christmas Sale: {discountPercentage}% OFF! 🎅
            </div> */}
            <div className="p-8 z-[10] shadow-xl bg-white rounded-b-xl w-full max-w-[400px] drop-shadow-lg flex flex-col justify-center items-center gap-2 border-t-4 border-green-500">
              <div className="flex justify-between w-full border-b-2 border-gray-500 pb-4 gap-2 items-end">
                <div className="mt-1 inline-flex items-center justify-end">
                  <div className="-mt-px mr-1.5 flex-shrink-0 text-base font-bold">
                    4.9
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15px"
                    height="15px"
                    viewBox="0 -0.5 32 32"
                    fill="none"
                  >
                    <path
                      d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
                      fill="#FFCB45"
                    />
                  </svg>
                  <a
                    href="#reviews"
                    className="mx-3 flex-shrink-0 text-[0.8rem] font-medium text-gray-600"
                  >
                    (85 ratings)
                  </a>
                </div>
                <p className="font-semibold text-3xl">
                 
                  <span className="font-light text-lg pl-2">
                    USD
                  </span>
                   <span className="font-light text-lg px-2 line-through text-gray-500">
                     {amount}
                  </span>
                  {discountedAmount}
                </p>
              </div>
              {/* Countdown Timer */}
              {/* <div className="bg-green-100 p-3 rounded-lg my-4 w-full text-center">
                <p className="font-semibold text-red-600">Sale Ends In:</p>
                <div className="flex justify-center gap-2 mt-2">
                  <div className="bg-white p-2 rounded shadow">
                    <span className="text-2xl font-bold">{timeLeft.days || '0'}</span>
                    <p className="text-xs">Days</p>
                  </div>
                  <div className="bg-white p-2 rounded shadow">
                    <span className="text-2xl font-bold">{timeLeft.hours || '0'}</span>
                    <p className="text-xs">Hours</p>
                  </div>
                  <div className="bg-white p-2 rounded shadow">
                    <span className="text-2xl font-bold">{timeLeft.minutes || '0'}</span>
                    <p className="text-xs">Mins</p>
                  </div>
                  <div className="bg-white p-2 rounded shadow">
                    <span className="text-2xl font-bold">{timeLeft.seconds || '0'}</span>
                    <p className="text-xs">Secs</p>
                  </div>
                </div>
              </div> */}
              <div className="flex flex-col w-full justify-center items-center">
                <div className="w-full flex flex-col justify-start items-start gap-1 my-4">
                  <a
                    href="https://www.youtube.com/watch?v=q7y2wgLomTQ"
                    className="gap-2 flex justify-center items-center"
                  >
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        t="1569683915274"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        className="inline h-[20px] w-[20px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs></defs>
                        <path d="M368 724H252V608c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v116H72c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h116v116c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V788h116c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
                        <path d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v352h72V232h576v560H448v72h272c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM888 625l-104-59.8V458.9L888 399v226z"></path>
                        <path d="M320 360c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h112z"></path>
                      </svg>
                    </span>
                    {"  "}
                    Live Demo
                  </a>
                  <p className="gap-2 flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.9588 9.9552C23.2624 6.58863 19.7818 2.22411 15.9871 3.72081C14.7912 -0.179234 9.2088 -0.179235 8.01298 3.72081C4.21822 2.22411 0.737623 6.58863 3.04122 9.9552C-0.494948 11.9889 0.747257 17.4314 4.81562 17.7294C4.20085 21.762 9.23046 24.1842 12 21.1892C14.7696 24.1842 19.7992 21.762 19.1844 17.7294C23.2528 17.4314 24.495 11.9889 20.9588 9.9552ZM9.88784 4.44062C10.442 2.24749 13.558 2.24749 14.1122 4.44062C14.3862 5.525 15.5746 6.0973 16.5933 5.63543C18.6534 4.70131 20.5962 7.1375 19.2271 8.93817C18.5501 9.8285 18.8436 11.1144 19.8399 11.6229C21.8547 12.6512 21.1613 15.6891 18.8999 15.7413C17.7817 15.7672 16.9593 16.7984 17.1829 17.8943C17.6352 20.1107 14.8278 21.4627 13.3769 19.7272C12.6595 18.8691 11.3405 18.8691 10.6231 19.7272C9.17228 21.4627 6.36486 20.1107 6.81712 17.8943C7.04074 16.7984 6.21835 15.7672 5.10019 15.7413C2.83873 15.6891 2.14535 12.6512 4.16018 11.6229C5.1564 11.1144 5.44991 9.8285 4.77295 8.93817C3.40382 7.1375 5.34661 4.70131 7.40679 5.63543C8.42544 6.0973 9.61383 5.525 9.88784 4.44062ZM16.7572 9.65322C17.118 9.23506 17.0714 8.6036 16.6533 8.24283C16.2351 7.88206 15.6036 7.92859 15.2429 8.34676L10.7627 13.5396L8.70025 11.5168C8.30595 11.13 7.67282 11.1362 7.2861 11.5305C6.89938 11.9248 6.90552 12.5579 7.29981 12.9446L10.1233 15.7139C10.3206 15.9074 10.5891 16.0106 10.8652 15.9991C11.1412 15.9876 11.4002 15.8624 11.5807 15.6532L16.7572 9.65322Z"
                        fill="#000000"
                      />
                    </svg>
                    <div className="flex justify-center items-center">
                      <span className="text-sky-700 pr-1">
                        Looker{" "}
                      </span>{" "}
                      Verified
                    </div>
                  </p>
                  <p className="gap-2 flex justify-center items-center">
                    <svg
                      className="inline h-[20px] w-[20px]"
                      viewBox="-0.5 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M12.8702 16.97V18.0701C12.8702 18.2478 12.7995 18.4181 12.6739 18.5437C12.5482 18.6694 12.3778 18.74 12.2001 18.74C12.0224 18.74 11.852 18.6694 11.7264 18.5437C11.6007 18.4181 11.5302 18.2478 11.5302 18.0701V16.9399C11.0867 16.8668 10.6625 16.7051 10.2828 16.4646C9.90316 16.2241 9.57575 15.9097 9.32013 15.54C9.21763 15.428 9.16061 15.2817 9.16016 15.1299C9.16006 15.0433 9.17753 14.9576 9.21155 14.8779C9.24557 14.7983 9.29545 14.7263 9.35809 14.6665C9.42074 14.6067 9.49484 14.5601 9.57599 14.5298C9.65713 14.4994 9.7436 14.4859 9.83014 14.49C9.91602 14.4895 10.0009 14.5081 10.0787 14.5444C10.1566 14.5807 10.2254 14.6338 10.2802 14.7C10.6 15.1178 11.0342 15.4338 11.5302 15.6099V13.0701C10.2002 12.5401 9.53015 11.77 9.53015 10.76C9.55019 10.2193 9.7627 9.70353 10.1294 9.30566C10.4961 8.9078 10.9929 8.65407 11.5302 8.59009V7.47998C11.5302 7.30229 11.6007 7.13175 11.7264 7.0061C11.852 6.88045 12.0224 6.81006 12.2001 6.81006C12.3778 6.81006 12.5482 6.88045 12.6739 7.0061C12.7995 7.13175 12.8702 7.30229 12.8702 7.47998V8.58008C13.2439 8.63767 13.6021 8.76992 13.9234 8.96924C14.2447 9.16856 14.5226 9.43077 14.7402 9.73999C14.8284 9.85568 14.8805 9.99471 14.8901 10.1399C14.8928 10.2256 14.8783 10.3111 14.8473 10.3911C14.8163 10.4711 14.7696 10.5439 14.7099 10.6055C14.6502 10.667 14.5787 10.7161 14.4998 10.7495C14.4208 10.7829 14.3359 10.8001 14.2501 10.8C14.1607 10.7989 14.0725 10.7787 13.9915 10.7407C13.9104 10.7028 13.8384 10.648 13.7802 10.5801C13.5417 10.2822 13.2274 10.054 12.8702 9.91992V12.1699L13.1202 12.27C14.3902 12.76 15.1802 13.4799 15.1802 14.6299C15.163 15.2399 14.9149 15.8208 14.4862 16.2551C14.0575 16.6894 13.4799 16.9449 12.8702 16.97ZM11.5302 11.5901V9.96997C11.3688 10.0285 11.2298 10.1363 11.1329 10.2781C11.0361 10.4198 10.9862 10.5884 10.9902 10.76C10.9984 10.93 11.053 11.0945 11.1483 11.2356C11.2435 11.3767 11.3756 11.4889 11.5302 11.5601V11.5901ZM13.7302 14.6599C13.7302 14.1699 13.3902 13.8799 12.8702 13.6599V15.6599C13.1157 15.6254 13.3396 15.5009 13.4985 15.3105C13.6574 15.1202 13.74 14.8776 13.7302 14.6299V14.6599Z"
                        fill="#000000"
                      />
                      <path
                        d="M12.58 3.96997H6C4.93913 3.96997 3.92178 4.39146 3.17163 5.1416C2.42149 5.89175 2 6.9091 2 7.96997V17.97C2 19.0308 2.42149 20.0482 3.17163 20.7983C3.92178 21.5485 4.93913 21.97 6 21.97H18C19.0609 21.97 20.0783 21.5485 20.8284 20.7983C21.5786 20.0482 22 19.0308 22 17.97V11.8999"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.3398 8.57992L21.9998 2.91992"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.4805 2.91992H22.0005V7.44992"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    One Time Installation
                  </p>
                  <p className="gap-2 flex justify-center items-center">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        className="inline h-[20px] w-[20px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 0 0 308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 0 0-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                      </svg>
                    </span>{" "}
                    Automatic & Scheduled Data
                    Refresh
                  </p>
                  <p className="gap-2 flex justify-center items-center">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        className="inline h-[20px] w-[20px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"></path>
                        <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"></path>
                      </svg>
                    </span>{" "}
                    Odoo Expert help within 24 hrs
                  </p>
                </div>
              </div>
              <button
                onClick={showModal}
                className="text-gray-800 font-semibold w-[80%] text-center flex justify-center items-center border-indigo-700 border-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 disabled:cursor-wait disabled:opacity-50 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center "
              >
                Try for Free
              </button>
              <a
                href="/payment/odoo-looker-connector/"
                className="text-white w-[80%] text-center flex justify-center items-center bg-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 disabled:cursor-wait disabled:opacity-50 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center "
              >
                <svg
                  className="w-3.5 h-3.5 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                Buy now
              </a>

              <div className="flex  justify-center items-center">
                <a
                  href="https://wa.me/916230927667"
                  className="border-2 border-green-800 rounded-lg"
                >
                  <img
                    src="/images/chat-on-whatsapp.png"
                    width={"200"}
                  />
                </a>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex justify-center items-center gap-3">
                  <span className="bg-green-400 p-2 rounded-full">
                    <svg
                      width="15px"
                      height="15px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <p>Secure Checkout</p>
                </div>
                <div className="flex mt-4 justify-center items-center gap-2">
                  <div className="flex h-8 max-w-full items-center justify-center p-2 ">
                    <img
                      loading="lazy"
                      alt="Mastercard"
                      width="42"
                      height="22"
                      decoding="async"
                      data-nimg="1"
                      className="object-contain"
                      srcset="https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Fpayments%2Fmastercard.svg&amp;w=84&amp;q=70&amp;output=webp 1x, https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Fpayments%2Fmastercard.svg&amp;w=84&amp;q=70&amp;output=webp 2x"
                      src="https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Fpayments%2Fmastercard.svg&amp;w=84&amp;q=70&amp;output=webp"
                    />
                  </div>
                  <div className="flex h-8 max-w-full items-center justify-center p-2 ">
                    <img
                      loading="lazy"
                      alt="Discover Card"
                      width="56"
                      height="28"
                      decoding="async"
                      data-nimg="1"
                      className="object-contain"
                      src="/images/payment/discoveryCard.webp"
                    />
                  </div>
                  <div className="flex h-8 max-w-full items-center justify-center p-2 ">
                    <img
                      loading="lazy"
                      alt="Visa Payment Card"
                      width="56"
                      height="28"
                      decoding="async"
                      data-nimg="1"
                      className="object-contain"
                      src="/images/payment/visa-icon.svg"
                    />
                  </div>
                  <span className="text-gray-500 underline text-sm underline-offset-4">
                    & many more
                  </span>
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