import React from "react";

const Features = () => {
  return (
    <div className="w-full flex flex-col md:flex-row text-justify gap-y-10 justify-between items-center !mt-4">
      <div className="w-full space-y-10">
        <div>
          <h2 className="text-3xl md:text-5xl leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#32C2C8] to-[#2E0965] mb-5">
            Screenshots
          </h2>
          {/* <h2 className="font-sans font-[300] leading-none text-3xl">
            Easy 5 steps to connect Odoo data to Looker studio for next gen
            analytics
          </h2> */}
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-2">
            🔹 Nested Table Relationships
          </h3>

          <img
            loading="lazy"
            className="px-5"
            src="/images/er-diagram/odoo-tables-er.png"
            alt="Odoo data model"
          />
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-2">
            🔹 Search and Fetch Odoo tables
          </h3>

          <img
            className="px-5 mt-5"
            src="/images/er-diagram/fields1.png"
            alt="Odoo data model"
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-2">🔹 SQL Query Execution</h3>

          <img
            loading="lazy"
            className="px-5 mt-5"
            src="/images/er-diagram/custom-sql.png"
            alt="Odoo data model"
          />
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-2">
            🔹 Download Data in Excel Sheets
          </h3>

          <img
            loading="lazy"
            className="px-5 mt-5"
            src="/images/er-diagram/exportdata.png"
            alt="Odoo data model"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
