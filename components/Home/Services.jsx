"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services);
  return (
    // <div className="flex flex-col justify-center items-center mx-auto my-24">
    //   <h2 className="text-5xl font-extrabold my-4 text-black">Odoo Services</h2>
    //   <p className="text-xl font-medium my-2 mb-12">
    //     Explore the services provided by Techfinna
    //   </p>
    //   <section className="flex flex-wrap justify-center align-center w-[80%] mx-auto gap-4">
    //     <div className="max-w-sm flex flex-col justify-center p-6 bg-white border border-gray-200 rounded-lg shadow ">
    //       <img
    //         className="m-auto md:mx-auto"
    //         src="/images/home/globe.png"
    //         role="presentation"
    //         width="216"
    //         height="216"
    //       />
    //       <h2 className="font-space text-xl font-semibold text-black py-2">
    //         Odoo Customization
    //       </h2>
    //       <p className="text-neutrals-dark-grey-8 font-subtitle-1-sm md:font-subtitle-1-md xl:font-subtitle-1-lg mt-1">
    //         .NET is a free and open-source project, developed and maintained on
    //         GitHub, the home for millions of developers who want to build great
    //         things together.
    //       </p>
    //     </div>

    //     <div className="max-w-sm flex flex-col justify-center p-6 bg-white border border-gray-200 rounded-lg shadow ">
    //       <img
    //         className="m-auto md:mx-auto "
    //         src="/images/home/dashboard.svg"
    //         role="presentation"
    //         width="216"
    //         height="216"
    //       />
    //       <h2 className="font-space text-xl font-semibold text-black py-2">
    //         Odoo Analytics Dashboards
    //       </h2>
    //       <p className="text-neutrals-dark-grey-8 font-subtitle-1-sm md:font-subtitle-1-md xl:font-subtitle-1-lg mt-1">
    //         .NET is a free and open-source project, developed and maintained on
    //         GitHub, the home for millions of developers who want to build great
    //         things together.
    //       </p>
    //     </div>
    //     <div className="max-w-sm flex flex-col justify-center p-6 bg-white border border-gray-200 rounded-lg shadow ">
    //       <img
    //         className="m-auto md:mx-auto my-4"
    //         src="/images/home/react.png"
    //         role="presentation"
    //         width="216"
    //         height="216"
    //       />
    //       <h2 className="font-space text-xl font-semibold text-black py-2">
    //         Odoo with React
    //       </h2>
    //       <p className="text-neutrals-dark-grey-8 font-subtitle-1-sm md:font-subtitle-1-md xl:font-subtitle-1-lg mt-1">
    //         .NET is a free and open-source project, developed and maintained on
    //         GitHub, the home for millions of developers who want to build great
    //         things together.
    //       </p>
    //     </div>
    //     <div className="max-w-sm flex flex-col justify-center p-6 bg-white border border-gray-200 rounded-lg shadow ">
    //       <img
    //         className="m-auto md:mx-auto my-4"
    //         src="/images/home/cable-connector.png"
    //         role="presentation"
    //         width="150"
    //       />
    //       <h2 className="font-space text-xl font-semibold text-black py-2">
    //         Odoo Connectors
    //       </h2>
    //       <p className="text-neutrals-dark-grey-8 font-subtitle-1-sm md:font-subtitle-1-md xl:font-subtitle-1-lg mt-1">
    //         .NET is a free and open-source project, developed and maintained on
    //         GitHub, the home for millions of developers who want to build great
    //         things together.
    //       </p>
    //     </div>
    //   </section>
    // </div>
    <div className="px-3 md:px-20 py-10 md:py-20 text-center">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold my-4 text-black">
          Services Provided
        </h2>
        <p className="text-xl font-medium my-2 mb-12">
          Elevate Your Digital Presence with Our Innovative Solutions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-2">
        <div className="border p-5 shadow-xl">
          <div className="text-left space-y-3 p-5">
            <div className="w-[180px] p-2 rounded ">
              <img
                className=""
                src="/images/home/globe.png"
                alt="Techfinna service for IT solutions"
              />
            </div>
            <h4 className="text-2xl font-bold text-black">
              Odoo Customization & Implementation
            </h4>
            <p className="font-light text-black">
              We provide the best team for odoo module's customization and
              implementation
            </p>
            <a href="/service#customBot">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="mt-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="border p-5 shadow-xl">
          <div className="text-left space-y-3 p-5">
            <div className="w-[180px] p-2 rounded ">
              <img
                className=""
                src="/images/home/dashboard.svg"
                alt="Techfinna service for IT solutions"
              />
            </div>
            <h4 className="text-2xl font-bold text-black">
              Analytics Reports & Dashboards
            </h4>
            <p className="font-light text-black">
              Visually descriptive analytical dashboards for Odoo
            </p>
            <a href="/service#webService">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="mt-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="border p-5 shadow-xl">
          <div className="text-left space-y-3 p-5">
            <div className="w-[120px] p-2 rounded ">
              <img
                className=""
                src="/images/home/react.png"
                alt="Techfinna service for IT solutions"
              />
            </div>
            <h4 className="text-2xl font-bold text-black">
              Odoo React Applications
            </h4>
            <p className="font-light text-black">
              Ever first integration of Odoo and React UI, contact us for custom
              modules
            </p>
            <a href="/service#softService">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="mt-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
