"use client";
import React, { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import the navigation styles

// Import required modules

const Testimony = () => {
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
  // const reviewUrl = "https://techfinna.com/review.json";

  // useEffect(() => {
  //   fetch(reviewUrl)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, "data for slider");
  //       setReviews(data);
  //     });
  // }, []);

  return (
    <div
      className="flex flex-col justify-center items-center mx-auto my-24 py-[60px] bg-[#020817] "
      id="testimony"
    >
      <div className="w-[80%] mx-auto">
        <div className="text-center py-4">
          <h2 className="text-3xl md:text-5xl font-extrabold my-4 text-white flex text-center justify-center items-center gap-4">
            Loved by hundreds of companies
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
          <p className="text-xl font-medium my-2 mb-12 text-white/90">
            Here's what some of our customers say
            about us
          </p>
        </div>
        <div className="flex justify-evenly items-center">
          <div className="logo-slider flex-col flex">
            <div className="flex flex-col gap-2 mb-1 mt-1">
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt1.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt2.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt3.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt4.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt5.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt6.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt7.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
            </div>

            <div className="flex flex-col gap-2 mb-1">
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt1.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt2.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt3.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt4.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt5.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt6.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt7.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
            </div>
          </div>
          <div className="logo-slider1 flex-col hidden md:flex md:block">
            <div className="flex flex-col gap-2 mt-1 mb-1">
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt1.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt2.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt3.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt4.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt5.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt6.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt7.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt1.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
            </div>

            <div className="flex flex-col gap-2 mb-1">
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt1.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt2.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt3.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt4.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt5.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt6.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt7.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt1.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
            </div>
          </div>
          <div className="logo-slider2 flex-col hidden md:flex md:block">
            <div className="flex flex-col gap-2 mt-1 mb-1">
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt1.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt2.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt3.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt4.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt5.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt6.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt7.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt1.png"
                alt="techfinna happy customers testimonial"
                width={"380px"}
              />
            </div>

            <div className="flex flex-col gap-2 mb-1">
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt1.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt2.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt3.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt4.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt5.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt6.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt7.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
              <img
                className="boxShadow rounded-lg"
                src="/images/home/tt8.png"
                alt="techfinna happy customers testimonial"
                height={"100px"}
                width={"380px"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
