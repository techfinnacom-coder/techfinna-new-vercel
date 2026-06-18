"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div
      id="reviews"
      className="flex flex-col justify-center items-center w-full"
    >
      <div className="text-center py-4">
        <h2 className="text-3xl md:text-5xl font-extrabold my-4 text-black flex text-center justify-center items-center gap-4">
          See what happy customers say about us!
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
      <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="flex text-gray-900 gap-2 text-xl mt-6 justify-center items-center mx-auto">
        {" "}
        Bought this module?
        <a
          className="text-gray-400 text-lg hover:underline"
          href="/contact/"
        >
          Write your review to us
        </a>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Helps to have a better Dashboard. Easy to use. Excellent in support to make it happen customer service",
    name: "Cam Truong Du",
    review: 5,
  },
  {
    quote:
      "Works good on my data sets and good team support",
    name: "Gurad El",
    review: 5,
  },
  {
    quote:
      "Easy to integrate. Works good for my dataset. Hope to see more modules like this",
    name: "Kuroshio Kyurail",
    review: 5,
  },
  {
    quote:
      "It is kinda fascinating to see React Js on Odoo. Please check your inbox I want to discuss an opportunity for collaboration.",
    name: "Terracube",
    review: 4,
  },
  {
    quote:
      "My sale order line model has around 100k records, all fetched correctly in Looker. Nice. Schema of columns is also correct. So far, fully satisfied.",
    name: "BinaryERP EU",
    review: 5,
  },
  {
    quote:
      "I recommend this module for those who want to connect their Odoo to Looker Studio.",
    name: "Farma Go",
    review: 4,
  },
  {
    quote:
      "TechFinna work with us to help install and troubleshoot the module. Highly recommended!",
    name: "Hemp Flower Prime",
    review: 5,
  },
  {
    quote:
      "Works good on my data sets and good team support",
    name: "Gurad El",
    review: 5,
  },
];
