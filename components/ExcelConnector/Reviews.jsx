"use client";
import React, {
  useEffect,
  useState,
} from "react";
// Import Swiper React components
import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import the navigation styles

export default function Reviews() {
  const [reviews, setReviews] = useState([
    {
      id: "1",
      image: "clients/askai.png",
      name: "Abhishek",
      position: "Founder, AskAI",
      description:
        "Techfinna transformed our business with their exceptional website development. Their team's attention to detail and innovative solutions exceeded our expectations.",
    },
    {
      id: "2",
      image: "clients/designlab.jpeg",
      name: "RK",
      position: "Designer, Design Drift Labs",
      description:
        "We entrusted Techfinna with our project, and they delivered beyond our hopes. Their commitment to excellence and prompt support make them a top choice.",
    },
    {
      id: "3",
      image: "clients/billsfly.jpeg",
      name: "Ayush",
      position: "Founder, BillsFly",
      description:
        "Working with Techfinna was a pleasure. Their dedication to understanding our needs and delivering a tailored solution was commendable.",
    },
    {
      id: "4",
      image: "clients/client.png",
      name: "Jane",
      position: "Client",
      description:
        "Techfinna's website development skills are unmatched. They captured our brand essence perfectly, creating a site that's both user-friendly and visually stunning. Highly recommended!",
    },
  ]);
  return (
    <div className="flex flex-col justify-center items-center my-12 w-full relative">
      <div
        className="flex flex-col justify-center items-center  w-full py-10 "
        id="reviews"
      >
        <div className="w-[80%]">
          <div className="text-center py-4">
            <h2 className="text-3xl md:text-5xl font-extrabold my-4 text-black flex text-center justify-center items-center gap-4">
              See what happy customers say about
              us!
              <svg
                width="60px"
                height="60px"
                viewBox="0 0 24 24"
                fill="#cb3636"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </h2>
            <p className="text-xl font-medium my-2 mb-12 text-neutral-800">
              Best sellers and customer support
            </p>
          </div>
          <div className="reviewSlider">
            <div>
              <div className="flex w-full p-4 max-w-lg flex-col rounded-lg bg-white shadow-sm border border-slate-200 my-6">
                <div className="flex items-center gap-4 text-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                    alt="Tania Andrew"
                    className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
                  />
                  <div className="flex w-full flex-col">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xl font-semibold text-slate-800">
                        Tania Andrew
                      </h5>
                      <div className="flex items-center gap-0 5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-yellow-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-yellow-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-yellow-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-yellow-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-yellow-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs uppercase font-bold text-slate-500 mt-0.5">
                      Designer @ Google
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-base text-slate-600 font-light leading-normal">
                    &quot;I found solution to all
                    my design needs from Creative
                    Tim. I use them as a
                    freelancer in my hobby
                    projects for fun! And its
                    really affordable, very humble
                    guys !!!&quot;
                  </p>
                </div>
              </div>
              <img
                className="rounded-lg"
                src="/images/home/tt2.png"
                width={400}
              />
              <img
                className="rounded-lg"
                src="/images/home/tt3.png"
                width={400}
              />
              <img
                className="rounded-lg"
                src="/images/home/tt4.png"
                width={400}
              />
              <img
                className="rounded-lg"
                src="/images/home/tt5.png"
                width={400}
              />
              <img
                className="rounded-lg"
                src="/images/home/tt6.png"
                width={400}
              />

              <img
                className="rounded-lg"
                src="/images/home/tt1.png"
                width={400}
              />
              <img
                className="rounded-lg"
                src="/images/home/tt2.png"
                width={400}
              />
              <img
                className="rounded-lg"
                src="/images/home/tt3.png"
                width={400}
              />
              <img
                className="rounded-lg"
                src="/images/home/tt4.png"
                width={400}
              />
              <img
                className="rounded-lg"
                src="/images/home/tt5.png"
                width={400}
              />
              <img
                className="rounded-lg"
                src="/images/home/tt6.png"
                width={400}
              />
            </div>
            <div>
              <img
                className="rounded-lg"
                src="/images/home/tt1.png"
                width={400}
              />
              <img
                className="rounded-lg"
                src="/images/home/tt2.png"
                width={400}
              />
              <img
                className="rounded-lg"
                src="/images/home/tt3.png"
                width={400}
              />
              <img
                className="rounded-lg"
                src="/images/home/tt4.png"
                width={400}
              />
              <img
                className="rounded-lg"
                src="/images/home/tt5.png"
                width={400}
              />
              <img
                className="rounded-lg"
                src="/images/home/tt6.png"
                width={400}
              />

              <img
                className="rounded-lg"
                src="/images/home/tt1.png"
                width={400}
              />
              <img
                className="rounded-lg"
                src="/images/home/tt2.png"
                width={400}
              />
              <img
                className="rounded-lg"
                src="/images/home/tt3.png"
                width={400}
              />
              <img
                className="rounded-lg"
                src="/images/home/tt4.png"
                width={400}
              />
              <img
                className="rounded-lg"
                src="/images/home/tt5.png"
                width={400}
              />
              <img
                className="rounded-lg"
                src="/images/home/tt6.png"
                width={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
