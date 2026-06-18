import React from "react";
import Link from "next/link";

const Details = () => {
  return (
    <div>
      <div className="text-center py-10">
        <h1 className="text-4xl font-extrabold text-black">Contact</h1>
        <h6 className="text-[13px] text-[#464154] font-bold">
          <Link className="font-medium" href="/">
            Home
          </Link>{" "}
          | Contact
        </h6>
      </div>
      <div className="px-3 md:px-20 md:py-10">
        <div className="px-2 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="">
            <img
              className="rounded items-center"
              src="/images/contact-chat.png"
              alt="contact us to chat with TechFinna and discuss your project"
            />
          </div>
          <div className="text-left">
            <h6 className="text-[13px] text-[#464154] font-extrabold py-6">
              Let<span className="font-normal">'</span>s Connect and Explore
              Possibilities
            </h6>
            <h1 className="text-4xl font-extrabold text-black">
              Unleash the Possibilities Together
            </h1>
            <p className="py-6 text-[15px] font-light text-[#464154]">
              At TechFinna, we love to hear from you
              <span className="font-normal">!</span> Whether you want to discuss
              your project, inquire about our services, or simply have a tech
              <span className="font-normal">-</span>related chat, we
              <span className="font-normal">'</span>re all ears. Our team of
              experts is ready to guide you through the digital landscape and
              find tailored solutions for your unique needs. Reach out to us
              today and let<span className="font-normal">'</span>s embark on an
              exciting digital journey together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
