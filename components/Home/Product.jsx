import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Product = () => {
  return (
    <div className=" md:px-20  text-center">
      <div className="hero min-h-screen">
        <div className="hero-content p-0 md:p-4 flex-col lg:flex-row">
          <div className="md:w-2/3 bg-[#F2F2F2] px-8 py-14 rounded-xl">
            <div className="grid grid-cols-1 bg-[#F2F2F2] md:grid-cols-2 gap-5 items-center">
              <div className="text-left bg-[#F2F2F2]">
                <h1 className="text-3xl bg-[#F2F2F2] font-extrabold text-black">
                  Google Looker Connector{" "}
                  <span className="font-normal bg-[#F2F2F2]">+</span> Odoo
                </h1>
                <span className="font-normal text-md text-black">
                  (Verified by Looker)
                </span>
                <p className="py-6 text-[15px] font-thin text-[#464154] bg-[#F2F2F2]">
                  Discodoo bridges the gap between Discord and Odoo, empowering
                  you to optimize communication, automate tasks, and collaborate
                  seamlessly. Sync your server with Odoo, receive real
                  <span className="font-normal bg-[#F2F2F2]">-</span>time
                  notifications, and enjoy customizable commands for enhanced
                  productivity.
                </p>
                <button className="btn bg-black text-white rounded-none hover:bg-black">
                  <Link href="/discodoo" className="bg-black">
                    Go Product
                  </Link>{" "}
                  <FaArrowRight className="bg-black"></FaArrowRight>
                </button>
              </div>
              <div className="bg-[#F2F2F2]">
                <img
                  className="bg-[#F2F2F2]"
                  height={"200px"}
                  width={"374px"}
                  src="/images/lookers/lookerDash.png"
                  alt="odoo discord integration discodoo with many notification and analytics features"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-5 md:w-[280px] text-center justify-center mx-0">
            <div className="lg:w-[270px]">
              <img
                className="rounded"
                src="/images/lookers/looker-2.png"
                alt="discord connect with odoo with custom commands"
              />
            </div>
            <div className="lg:w-[270px]">
              <img
                className="rounded"
                src="/images/odoo-custom1.png"
                alt="odoo to discord for live notifications"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
