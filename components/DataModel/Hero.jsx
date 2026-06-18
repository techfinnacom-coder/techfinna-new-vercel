import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full text-justify space-y-5">
      <h1 className="text-5xl text-center md:text-start md:text-7xl">
        Odoo Data Model
      </h1>
      <div className="w-full flex flex-col  md:flex-row gap-4 justify-between items-center">
        <p className="text-xl text-center md:text-start !font-semibold">
          Entity Relationship Diagram, Custom SQL Queries, Extract Excel Sheets
        </p>
        <a
          href="https://www.youtube.com/watch?v=fmaGUOkVyu4"
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
        <img
          width="800px"
          src="/images/er-diagram/banner.gif"
          alt="odoo data model"
        />
        <div className="flex gap-3 items-start w-[70%] flex-col md:flex-row">
          <p className="font-bold text-md">Disclaimer:</p>
          <p className="pt-[2px] text-sm">
            Intuitive <span className="font-bold ">Graphical Chart View</span> ,
            you can effortlessly visualize{" "}
            <span className="font-bold ">Table Relationships</span>, Execute{" "}
            <span className="font-bold ">Custom SQL Queries</span>, and{" "}
            <span className="font-bold ">Extract Excel Sheet</span>. Embrace the
            convenience of detailed data insights, all within your Odoo
            environment
          </p>
        </div>
      </div>
      {/* watch demo */}
      {/* <div className="flex justify-center items-center flex-col pb-10">
        <h2 className="text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#31E2BE] to-[#2F9B93] mb-5">
          Watch Demo
        </h2>
        <div className="flex items-center flex-col sm:h-[285px] sm:w-[450px] lg:h-[380px] lg:w-[600px] relative border-sm">
          <div className="flex items-center flex-row rounded-t-md border w-full bg-white min-h-[20px] py-1.5 px-3">
            <div className="w-[12px] mr-2 h-[12px] rounded-full bg-red-500"></div>
            <div className="w-[12px] mr-2 h-[12px] rounded-full bg-yellow-500"></div>
            <div className="w-[12px] h-[12px] rounded-full bg-green-500"></div>
            <div className="flex-1 place-delf-stretch"></div>
          </div>
          <div className="border border-t-0 border-gray-200 relative h-full w-full rounded-b-sm">
         
            <div className="h-full yt-vid">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/fRtjMXTZSwA?si=XUQ8S_M5GCXapjB8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
