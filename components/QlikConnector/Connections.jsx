import Link from "next/link";
const Connections = () => {
  return (
    <div className="w-full flex flex-col  text-justify gap-y-10 justify-between items-center">
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
            🔹 Install the Connector: Install the Odoo Qlik Connector on your
            Odoo instance.
          </h3>

          <img
            loading="lazy"
            className="px-5"
            src="/images/qlik/chosetable.png"
            alt="Odoo Qlik Connector"
          />
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-2">
            🔹 Generate URL: Generate the URL for the tables you want to connect
          </h3>

          <img
            className="px-5 mt-5"
            src="/images/qlik/copy.png"
            alt="Odoo Qlik Connector"
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-2">
            🔹 Open Qlik: Open Qlik and add a REST connection
          </h3>

          <img
            loading="lazy"
            className="px-5 mt-5"
            src="/images/qlik/pestro.png"
            alt="Odoo Qlik Connector"
          />
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-2">
            🔹 Enter URL: Put the generated URL in Qlik and assign a name for
            the table.
          </h3>

          <img
            loading="lazy"
            className="px-5 mt-5"
            src="/images/qlik/urlrest.png"
            alt="Odoo Qlik Connector"
          />
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-2">
            🔹 Now you have your data in Qlik. You can add multiple tables and
            create reports with ease.
          </h3>

          <img
            loading="lazy"
            className="px-5 mt-5"
            src="/images/qlik/insight.png"
            alt="Odoo Qlik Connector"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl md:text-5xl leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#32C2C8] to-[#2E0965] mb-5">
          Why to choose Odoo Qlik Connector
        </h2>
        <p className="text-xl">
          <span className="font-bold"> Exclusive Offering:</span>The ONLY
          connector available for integrating Odoo with Qlik.
        </p>
        <p className="text-xl">
          <span className="font-bold">High Demand:</span> Fulfills the need for
          direct, efficient data integration between Odoo and Qlik.
        </p>
        <p className="text-xl">
          <span className="font-bold">User-Friendly: </span> Easy installation
          and setup, crafted for user convenience.
        </p>
        <p className="text-xl">
          <span className="font-bold">Comprehensive Support:</span>TechFinna
          provides strong support and updates to keep your connector reliable
          and efficient.
        </p>
      </div>
    </div>
  );
};

export default Connections;
