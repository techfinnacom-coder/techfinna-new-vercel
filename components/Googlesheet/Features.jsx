import React from "react";

const Features = () => {
  return (
    <div className="w-full flex flex-col md:flex-row text-justify gap-y-10 justify-between items-center">
      <div className="w-full space-y-10">
        <h2 className="text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-10">
          Key Features:
        </h2>
        <p className="text-xl">
          <span className="font-bold">Rapid Table Selection:</span> Transfer
          multiple tables swiftly.
        </p>
        <p className="text-xl">
          <span className="font-bold">One-Time Setup</span> Single setup and
          fetch tables flexibly.
        </p>
        <p className="text-xl">
          <span className="font-bold">Data Updates:</span> You can refresh the
          spreadsheet data manually .
        </p>
      </div>
    </div>
  );
};

export default Features;
