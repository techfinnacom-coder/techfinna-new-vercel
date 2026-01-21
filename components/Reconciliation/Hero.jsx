import React from "react";

const Hero = () => {
  return (
    <div className="w-full text-justify space-y-5">
      <h1 className="text-5xl text-start md:text-7xl">
        Odoo Manual Reconciliation
      </h1>
      <p className="text-xl font-light">
        <b className="font-bold">
          Transform Odoo reconciliation with simplicity
        </b>{" "}
        – our Manual Reconciliation module offers a{" "}
        <b className="font-bold">Quickbooks-inspired, user-friendly view</b>,
        ensuring accuracy and efficiency in every transaction.
      </p>
      <div className="w-full flex justify-center md:justify-end">
        <a
          href="https://www.youtube.com/watch?v=3Svyo8L5bxE"
          className="card1  flex justify-end border-2 shadow-xl border-red-400 rounded-xl w-fit p-3 gap-3 items-center"
        >
          <div className=" play-btn"></div>
          <div className="flex ">
            <div className=" text-black">
              <p className="font-semibold text-xl">Live Demo</p>
            </div>
          </div>
        </a>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center pb-5 w-full">
        <div className="flex justify-between items-center">
          <img
            width={"45%"}
            className="border-4"
            src="\images\reconciliation\main1.jpg"
            alt="reconciliation odoo connector"
          />

          <svg
            className="group-hover:rotate-90 group-hover:scale-125 duration-200 ease-linear"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            height="50px"
            width="50px"
            id="Layer_1"
            viewBox="0 0 330 330"
          >
            <path
              id="XMLID_27_"
              d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
            />
          </svg>

          <img
            width={"45%"}
            className="border-4"
            src="\images\reconciliation\main2.png"
            alt="reconciliation odoo connector"
          />
        </div>
      </div>
      <p className="text-lg">
        <b>
          Join the waitlist for exclusive discounts:{" "}
          <a className="text-blue-500" href="mailto:info@techfinna.com">
            info@techfinna.com
          </a>
          .
        </b>
      </p>
      <p className="text-lg">
        Experience seamless reconciliation with Odoo's Manual Reconciliation
        module. Transforming complexity into simplicity, our Quickbooks-inspired
        interface ensures an intuitive and efficient reconciliation process.
        Boost productivity and accuracy effortlessly.
      </p>
    </div>
  );
};

export default Hero;
