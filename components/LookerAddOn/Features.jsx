import React from "react";

const Features = () => {
  return (
    <div className="w-full flex flex-col  text-justify justify-center items-center !mt-12">
      <div className="w-full space-y-5">
        <h2 className="text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-10">
          Key Features:
        </h2>
        <p className="text-xl">
          <span className="font-bold">Custom SQL Query:</span>Execute SQL query
          with Odoo Looker Connector by Techfinna
        </p>
        <p className="text-xl">
          <span className="font-bold">Insatllation Support</span>
        </p>
        <p className="text-xl">
          <span className="font-bold">Free Demo</span>
        </p>
      </div>
    </div>
  );
};

export default Features;
