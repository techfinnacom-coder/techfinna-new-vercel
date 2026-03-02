"use client";
import Link from "next/link";
import React from "react";

const Hero = ({ amount, rating = 0, reviewCount = 0 }) => {
  const scrollToReviews = (e) => {
    if (e?.preventDefault) e.preventDefault();
    const el = document.getElementById("reviews");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex w-full justify-center items-center mt-10 md:mt-0">
        <div className="absolute hidden md:block w-full h-[500px] bg-gray-400 top-0 left-0 z-0"></div>
        <div className="flex flex-col lg:flex-row justify-evenly items-start z-[10] w-full lg:w-[85%] mx-auto">
          <div className="videocontainer flex flex-col justify-start items-start w-full lg:w-[60%]">
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
                  src="/images/ai-copilot/banner-copilot.png"
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
                Odoo PowerBI Direct Connector
              </h1>
              <h2 className="text-medium text-black mt-2 mb-4">
                Integrate Odoo data with Microsoft Power BI{" "}
              </h2>
              <div className="flex justify-center items-center py-1">
                <span className="font-semibold mr-4">Odoo Versions:</span>
                <div className="flex gap-1 flex-wrap text-black ml-[6px]">
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
              <div className="flex py-1">
                <span className="font-semibold pr-2">Validity: </span> Lifetime
              </div>
              <div className="flex py-1">
                <span className="font-semibold pr-2">Product Copyright: </span>{" "}
                <a
                  className="underline font-gray-400 !font-light"
                  href="/about"
                >
                  TechFinna
                </a>
              </div>
              <div className="flex py-1 ">
                <span className="font-semibold pr-2">Disclaimer: </span>{" "}
                <span>
                  AI copilot for odoo helps you automate tasks and lets you read
                  and approve CRUD operations in Odoo using natural language. It
                  is powered by <a href="https://openai.com/">OpenAI's GPT-4</a>{" "}
                  and can be easily integrated into your Odoo instance.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-6 md:mt-0 text-center justify-center items-center lg:justify-end lg:items-end w-full lg:w-[40%] relative">
            <div className="flex flex-col justify-center items-center">
              <div className=" p-8 z-[10] shadow-xl  bg-white rounded-xl w-full max-w-[400px] drop-shadow-lg flex flex-col justify-center items-center gap-2">
                <div className="flex justify-between w-full  border-b-2 border-gray-500 pb-4 gap-2 items-start">
                  <div className="flex items-start flex-col gap-1">
                    <div className="inline-flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2">
                      <span className="text-lg font-extrabold">
                        {Number(rating || 0).toFixed(1)}
                      </span>
                      <span className="text-yellow-500">★★★★★</span>
                    </div>
                    {/* <span className="text-gray-400"> • </span> */}

                    <div className="text-sm text-gray-700">
                      <span className="font-bold">{reviewCount}</span>{" "}
                      <a
                        href="#reviews"
                        onClick={scrollToReviews}
                        className="font-light hover:underline"
                      >
                        Ratings & Reviews
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end items-end">
                    <p className="font-semibold text-3xl">
                      <span className="font-light text-lg px-2">USD</span>
                      {amount}
                    </p>
                    <div className=" flex items-center justify-end gap-2 py-2 px-3 rounded-xl bg-slate-100 w-fit">
                      <span className="inline-flex items-center justify-center h-4 w-4  text-indigo-700">
                        {/* Cart Icon */}
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M6 6H21L20 12H7L6 6Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 6L5 3H2"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 12L6.5 14.5C6.3 15.6 7.1 16.6 8.2 16.6H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z"
                            fill="currentColor"
                          />
                          <path
                            d="M18 20C18.5523 20 19 19.5523 19 19C19 18.4477 18.5523 18 18 18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>

                      <p className="text-sm text-gray-700">
                        <span className="font-extrabold text-gray-900">2</span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full justify-center items-center">
                  <div className="w-full flex flex-col justify-start items-start gap-1 my-4">
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
                      Full audit logs & governance
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
                      Works on Odoo permissions only
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
                      Privacy of data
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
                <div>
                  <Link
                    href={"/refund-policy"}
                    className=" underline text-gray-600"
                  >
                    Return & Refund Policy
                  </Link>
                </div>
                <a
                  href="/payment/ai-copilot-odoo/"
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
                    <img src="/images/chat-on-whatsapp.png" width={"200"} />
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

              {/* <div className="flex justify-center items-center flex-col mt-10 ">
              <h2 className="text-3xl md:text-2xl text-black mb-5">
                Watch Demo
              </h2>
              <div className="flex items-center flex-col sm:h-[285px] sm:w-[450px] lg:h-[200px] lg:w-[300px] relative border-sm">
                <div className="border border-t-0 border-gray-200 flex justify-center items-center relative h-full w-full rounded-b-sm">
                  <a
                    href="https://www.youtube.com/watch?v=34x3d7EbQqo"
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
                      src="\images\powerbi\powerbi-yt-demo.png"
                    />
                  </a>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
        <div className="rounded-2xl mx-auto border border-gray-200 bg-white overflow-hidden shadow-sm">
          <div className="px-4 py-2 border-b border-gray-100 text-xs text-gray-600"></div>
          <img
            className="w-[800px] lg:w-[1000px] h-auto"
            src={`/images/ai-copilot/first-image.jpeg`}
            alt={`Odoo AI Copilot Demo`}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
