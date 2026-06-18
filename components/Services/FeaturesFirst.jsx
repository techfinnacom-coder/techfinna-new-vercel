import React from "react";

const FeaturesFirst = () => {
  return (
    <div className="px-3 md:px-20 lg:my-20 mx-auto">
      <div className="flex justify-center items-center gap-8 flex-wrap">
        <div className=" p-5 shadow-xl max-w-[300px] min-h-[250px] rounded-3xl bg-[#020817]">
          <div className="text-center space-y-3 p-5">
            <h4 className="text-2xl font-bold text-white">
              Odoo Implementation
            </h4>
            <div className="flex items-end justify-end">
              <p className="font-light text-left text-gray-200 flex ">
                Simplified Odoo integration made easy by us. Effortless
                implementation for seamless operations
              </p>
              <img
                src="/images/up-arrow.png"
                className="h-[20px] w-[20px] rotate-45"
              />
            </div>
          </div>
        </div>
        <div className=" p-5 shadow-xl max-w-[300px] min-h-[250px] rounded-3xl">
          <div className="text-center space-y-3 p-5">
            <h4 className="text-2xl font-bold text-black">
              Odoo Customization
            </h4>
            <div className="flex items-end justify-end">
              <p className="font-light text-left text-black">
                Streamlined Odoo customization by us: Tailored solutions,
                seamless integration, ease-of-use
              </p>
              <img
                src="/images/up-arrow.png"
                className="h-[20px] w-[20px] rotate-45"
              />
            </div>
          </div>
        </div>
        <div className=" p-5 shadow-xl max-w-[300px] min-h-[250px] rounded-3xl">
          <div className="text-center flex flex-col justify-evenly p-5">
            <h4 className="text-2xl font-bold text-black mb-6">
              Odoo Analytics
            </h4>
            <div className="flex items-end justify-end">
              <p className="font-light text-left text-black">
                Streamline Odoo analytics with our user-friendly dashboards and
                tools
              </p>
              <img
                src="/images/up-arrow.png"
                className="h-[20px] w-[20px] rotate-45"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesFirst;
