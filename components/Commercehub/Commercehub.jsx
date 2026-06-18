"use client";
import Head from "next/head";
import Hero from "./Hero";
import Features from "./Features";
import Support from "./Support";
import Customization from "./Customization";
import { useState } from "react";

const Commercehub = () => {
  const [display, setDisplay] = useState(false);
  const [submitted, setSubmitted] =
    useState(false);
  function Submit(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    fetch(
      `https://script.google.com/macros/s/AKfycbwybfyLoavynHbnvpHz6o8jTAKJLpFrkibrgsCBuoTTcaYd0k_EXaClXGrcVDwHhpC4/exec?Email=${email}`,
      { method: "POST" }
    ).then((res) => res.json());
    setSubmitted(true);
  }
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="" />
      </Head>
      <div className="md:mx-32 mx-5 text-black space-y-48 my-28">
        <div className="flex flex-col md:flex-row h-full gap-32 w-full">
          <div className="space-y-48">
            <Hero></Hero>
            <Features></Features>
          </div>
          <div>
            {!display ? (
              <div className="border p-10 rounded-md drop-shadow-xl duration-300 sticky top-16 bottom-0 items-center flex flex-col gap-y-10 w-full md:w-[350px]">
                <div className="bg-transparent">
                  <h4 className="text-xl bg-transparent">
                    <strong>
                      Supported Odoo versions:
                    </strong>
                  </h4>
                  <p className="text-lg mt-1 bg-transparent">
                    <span className="border rounded-md px-2 dhadow-md">
                      12.0
                    </span>{" "}
                    <span className="border rounded-md px-2 dhadow-md">
                      13.0
                    </span>{" "}
                    <span className="border rounded-md px-2 dhadow-md">
                      14.0
                    </span>{" "}
                    <span className="border rounded-md px-2 dhadow-md">
                      15.0
                    </span>{" "}
                    <span className="border rounded-md px-2 dhadow-md">
                      16.0
                    </span>{" "}
                    <span className="border rounded-md px-2 dhadow-md">
                      17.0
                    </span>
                  </p>
                  <p className="mt-2 bg-transparent mx-2 text-lg">
                    Works well on Odoo Sh and
                    on-premises server
                  </p>
                  <p className="mt-2 bg-transparent mx-2 font-bold">
                    Community + Enterprise
                  </p>
                </div>
                <button
                  onClick={() => setDisplay(true)}
                  className="rounded-md shadow-lg bg-[#285a9b] text-white w-[250px] h-[50px] text-center text-2xl font-bold"
                >
                  Get Now
                </button>
              </div>
            ) : (
              <div className="border p-10 rounded-md duration-300 drop-shadow-xl sticky top-16 bottom-0 items-center flex-col space-y-5 w-full md:w-[350px]">
                <form
                  className="space-y-5"
                  onSubmit={Submit}
                >
                  {submitted ? (
                    <div className="space-y-2">
                      <p className="text-lg">
                        We will get back to you
                        with your request
                      </p>
                      <h4 className="text-lg">
                        Thankyou 🙌
                      </h4>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <label
                        className="text-lg font-sembild"
                        htmlhtmlFor="email"
                      >
                        Please enter your email
                      </label>
                      <input
                        placeholder="luffy@gmail.com"
                        className="border w-full px-3 py-1"
                        id="email"
                        name="email"
                        type="email"
                      />
                    </div>
                  )}
                  {submitted ? (
                    <button
                      onClick={() =>
                        setDisplay(false)
                      }
                      className="rounded-md shadow-lg bg-[#285a9b] text-white w-full h-[50px] text-center text-2xl font-bold"
                    >
                      Done
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="rounded-md shadow-lg bg-[#285a9b] text-white w-full h-[50px] text-center text-2xl font-bold"
                    >
                      Get Now
                    </button>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
        <Support></Support>
        <Customization></Customization>
      </div>
    </>
  );
};

export default Commercehub;
