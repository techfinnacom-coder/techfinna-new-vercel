import React from "react";

const Features = () => {
  return (
    <div className="w-full flex flex-col md:flex-row text-justify gap-y-10 justify-between items-center !mt-4">
      <div className="w-full space-y-10">
        <h2 className="text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-10">
          Key Features:
        </h2>
        <p className="text-xl">
          <span className="font-bold">Effortless Data Synchronization:</span>{" "}
          Achieve seamless sync between Odoo and Google BigQuery.
        </p>
        <img src="\images\bigquery\2.png" alt="bigquery connector" />
        <p className="text-xl">
          <span className="font-bold">Table Selection to Export:</span> Select
          the table(s) you wish to export to BigQuery.
        </p>
        <img src="\images\bigquery\3.png" alt="bigquery connector" />
        <p className="text-xl">
          <span className="font-bold">Seamless Data Visualization:</span>{" "}
          Perform operations on the tables in BigQuery.
        </p>
        <img src="\images\bigquery\4.png" alt="bigquery connector" />
        <p className="text-xl">
          <span className="font-bold">Robust Security Measures:</span> Ensure
          secure data transfer with comprehensive authentication and
          authorization protocols.
        </p>
        <img src="\images\bigquery\5.png" alt="bigquery connector" />
      </div>
    </div>
  );
};

export default Features;
