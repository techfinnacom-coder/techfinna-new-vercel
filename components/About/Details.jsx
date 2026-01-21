import React from "react";
import { FaArrowRight, FaCheck, FaPhone } from "react-icons/fa";
import Link from "next/link";

const Details = () => {
  return (
    <div>
      <div className="text-center py-10">
        <h1 className="text-4xl font-extrabold text-black">About</h1>
        <h6 className="text-[13px] text-[#464154] font-bold">
          <Link className="font-medium" href="/">
            Home
          </Link>{" "}
          | About
        </h6>
        <div className="px-3 md:px-20 py-10 md:py-20">
          <div className="px-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="p-3">
              <img
                className="rounded"
                src="/images/coding-people1.png"
                alt="tech finna team writing software code"
              />
            </div>
            <div className="text-left">
              <h6 className="text-[13px] text-[#464154] font-extrabold py-6">
                About TechFinna
              </h6>
              <h1 className="text-4xl font-extrabold text-black">
                Unraveling Techfinna: Where Magic Meets Code
              </h1>
              <p className="py-6 text-[15px] font-light text-[#464154]">
                We are a passionate team of tech enthusiasts, weaving dreams
                into reality through cutting
                <span className="font-normal">-</span>edge website development
                and custom Discord bot solutions. At Techfinna, we believe in
                transforming ideas into digital masterpieces, fueling growth and
                empowering your online presence. Join us on this exciting
                journey.
              </p>
              <div className="bg-white rounded-xl shadow-xl p-10 space-y-2">
                <div className="md:flex gap-5">
                  {/* <FaCheck className='bg-base-200 rounded-full p-3 text-5xl'></FaCheck> */}
                  <div className="text-left">
                    <h1 className="text-2xl font-extrabold text-black">
                      Unlocking Digital Potential
                    </h1>
                    <p className="pt-2 text-[15px] font-light text-[#464154]">
                      Crafting digital magic with code and design to elevate
                      your business beyond the ordinary.
                    </p>
                  </div>
                </div>
                {/* <div className='lg:flex space-y-2 lg:text-left gap-5 items-center text-center'>
                                <button className='btn bg-black text-white rounded-full hover:bg-black'>Learn More</button>
                                   <div className='flex justify-center items-center'>
                                   <FaPhone className='bg-black text-white r rounded-full p-3 text-5xl'></FaPhone>
                                   </div>
                                    <div className='text-center lg:text-left'>
                                        <p className="pt-2 text-[15px] font-light text-[#464154]">Call Us<span className='font-normal text-[#464154]'> 24/7</span></p>
                                        <h1 className="text-xl font-bold"><span className='font-normal'>+</span>91 908057 27667</h1>
                                    </div>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
