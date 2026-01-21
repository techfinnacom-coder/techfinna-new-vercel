import React from "react";

const Hero = ({ amount }) => {
  return (
    <div className="flex w-full justify-center items-center mt-10 md:mt-0">
      <div className="absolute hidden md:block w-full h-[500px] bg-gray-400 top-0 left-0 z-0"></div>
      <div className="flex flex-col md:flex-row justify-evenly items-start w-full z-[10] w-[80%] mx-auto">
        <div className="videocontainer flex flex-col justify-center items-center">
          <div className="drop-shadow-xl flex items-center flex-col relative w-100 ">
            <div className="flex items-center flex-row rounded-t-md  w-full bg-gray-900 min-h-[20px] py-1.5 px-3">
              <div className="w-[12px] mr-2 h-[12px] rounded-full bg-red-500"></div>
              <div className="w-[12px] mr-2 h-[12px] rounded-full bg-yellow-500"></div>
              <div className="w-[12px] h-[12px] rounded-full bg-green-500"></div>
              <div className="flex-1 place-delf-stretch"></div>
            </div>
            <div className=" relative h-full w-full rounded-b-sm">
              <img
                loading="lazy"
                className=""
                src="/images/tableau/odoo-tab.png"
                alt="best seller"
                width="700"
              />
              {/* <img className="absolute top-0 left-0 w-20 sm:w-24 md:w-32 lg:w-16"
                                src="/static/images/power_bi_connector/bestseller.png" alt="additional"
                                width="auto" height="auto" />  */}
              {/* <video w="full" h="full" autoplay="true" muted="muted" loop="loop" playsinline="" alt="power bi">
                                <source src="/static/images/power_bi_connector/powerbinew.mp4" type="video/mp4">
                              </video> */}
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mt-6 w-full">
            <h1 className="text-3xl xl:text-4xl font-semibold text-black">
              Odoo Tableau Direct Connector
            </h1>
            <p className="text-medium text-black mt-2 mb-4">
              Connect Odoo with Tableau directly
              with great ease.{" "}
            </p>
            <div className="flex justify-center items-center py-1">
              <span className="font-semibold mr-4">
                Odoo Versions:
              </span>
              <div className="flex gap-1 flex-wrap text-black ml-[6px]">
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
              </div>
            </div>
            <div className="flex py-1">
              <span className="font-semibold pr-2">
                Validity:{" "}
              </span>{" "}
              Lifetime
            </div>
            <div className="flex py-1">
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
            <a
              target=" _blank"
              className="border mt-10 duration-300 border-[#0969da] mx-auto flex items-center justify-center gap-3 w-[280px] rounded-md bg-clip-text text-transparent bg-gradient-to-l from-green-400 to-blue-800 hover:bg-gradient-to-r px-5 py-2"
              href="/guides/how-to-connect-odoo-tableau/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                width="20px"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 26 26"
              >
                <g>
                  <g>
                    <path
                      fill="#030104"
                      d="M22.934,11.19V8.705l-2.955-0.482c-0.176-0.699-0.45-1.357-0.813-1.961l1.723-2.456l-1.756-1.755    l-2.424,1.743c-0.604-0.366-1.267-0.646-1.971-0.82l-0.516-2.941h-2.484L11.26,2.965c-0.706,0.173-1.371,0.448-1.977,0.812    L6.866,2.051L5.11,3.806l1.7,2.431C6.442,6.846,6.163,7.51,5.985,8.22L3.066,8.705v2.484l2.916,0.516    c0.176,0.71,0.456,1.375,0.824,1.985l-1.723,2.409l1.756,1.757l2.434-1.704c0.608,0.365,1.271,0.642,1.977,0.815l0.488,2.934    h2.484l0.521-2.941c0.701-0.178,1.363-0.457,1.967-0.824l2.451,1.721l1.755-1.757l-1.749-2.429    c0.362-0.604,0.637-1.263,0.811-1.964L22.934,11.19z M13,13.431c-1.913,0-3.464-1.55-3.464-3.464c0-1.912,1.551-3.463,3.464-3.463    s3.463,1.551,3.463,3.463C16.464,11.881,14.913,13.431,13,13.431z"
                    />
                  </g>
                  <path
                    fill="#030104"
                    d="M24,18.967v4c0,0.551-0.448,1-1,1H3c-0.552,0-1-0.449-1-1v-4H0v4c0,1.656,1.344,3,3,3h20   c1.656,0,3-1.344,3-3v-4H24z"
                  />
                </g>
              </svg>
              <span>
                Connector Installation Guide
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-6 md:mt-0 text-center justify-center items-center relative">
          <div className=" p-8 z-[10] shadow-xl  bg-white rounded-xl w-full drop-shadow-lg flex flex-col justify-center items-center gap-2">
            <div className="flex justify-between w-full  border-b-2 border-gray-500 pb-4 gap-2 items-end">
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
                  (2 ratings)
                </a>
              </div>
              <p className="font-semibold text-3xl">
                <span className="font-light text-lg px-2">
                  USD
                </span>
                {amount}
              </p>
            </div>

            <div className="flex flex-col w-full justify-center items-center">
              <div className="w-full flex flex-col justify-start items-start my-4">
                <p>- Best Customer Support</p>
                <p>- Demo Video</p>
                <p>- Free Installation Support</p>
                <p>- Regular Feature Updates</p>
              </div>
              <div className="flex mt-2 gap-2 justify-center border-b-2 pb-2 border-gray-600 items-center">
                <a
                  href="https://youtu.be/uMDbeoHVRVQ"
                  target="_blank"
                  className=" bg-[#432c3d] w-fit flex text-white flex-1 py-2.5 px-4 rounded-lg"
                >
                  Live Demo
                </a>
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
            </div>
            <a
              href="/payment/odoo-tableau-connector/"
              className="text-white w-[80%] text-center flex justify-center items-center bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center "
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
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="flex justify-center items-center gap-3">
                <p>Secure Checkout</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15px"
                  height="15px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-center items-center gap-2">
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
          
          {/* <div className="flex justify-center items-center flex-col mt-10 ">
            <h2 className="text-3xl md:text-2xl text-black mb-5">
              Watch Demo
            </h2>
            <div className="flex items-center flex-col sm:h-[285px] sm:w-[450px] lg:h-[200px] lg:w-[300px] relative border-sm">
              <div className="border border-t-0 border-gray-200 flex justify-center items-center relative h-full w-full rounded-b-sm">
                <a
                  href="https://www.youtube.com/watch?v=uMDbeoHVRVQ"
                  className="relative flex justify-center items-center cursor-pointer yt-img"
                >
                  <img
                    className="absolute top-50 left-50"
                    width="75px"
                    height="75px"
                    alt="youtube-button"
                    src="\images\lookers\play.png"
                  />
                  <img
                    className="img-responsive"
                    alt="looker studio demo video"
                    width="500px"
                    height="450px"
                    src="\images\blogs\odoo-tableau-connect.jpg"
                  />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
