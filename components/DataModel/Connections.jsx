import React from "react";
import Link from "next/link";

const Connections = () => {
  return (
    <div className="w-full flex flex-col md:flex-row text-justify gap-y-10 justify-between items-center !mt-4">
      <div className="w-full space-y-10">
        <div>
          <h1 className="text-3xl md:text-5xl leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#32C2C8] to-[#2E0965] mb-5">
            Overview
          </h1>
          <h2 className="font-sans font-[300] leading-none text-3xl">
            Fetch all tables and view your data in tabular/graphical chart view
          </h2>
        </div>
        <div>
          <img src="/images/er-diagram/main.png" alt="odoo data model" />
        </div>
      </div>
    </div>
  );
};

export default Connections;
