import React from "react";

const ThirdService = () => {
  return (
    <div>
      <div className="px-3 md:px-20 pt-10 md:py-10">
        <div
          id="softService"
          className="px-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div className="order-2 md:order-1">
            <h1 className="text-4xl font-extrabold text-black">
              Unleash the Full Potential of Your Business with ODOO solutions
            </h1>
            <p className="py-6 text-[15px] font-light text-[#464154]">
              Unlock your company's full potential with Techfinna's tailored
              solutions. From seamless Odoo integration to cutting-edge
              analytics, we empower businesses to thrive in today's dynamic
              landscape. Let's collaborate and elevate your success story
              together.
            </p>
          </div>
          <div className="order-1 md:order-2 p-3">
            <img
              className="rounded"
              src="/images/team-goal.avif"
              alt="software development for business growth and automation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdService;
