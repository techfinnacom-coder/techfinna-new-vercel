const Hero = () => {
  return (
    <div className="w-full text-justify space-y-5">
      <h1 className="text-5xl text-start md:text-7xl">
        Odoo Looker SQL Connector - Module (Add On)
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-4 justify-between items-center">
        <h2 className="text-xl">
          Execute Custom SQL query with your Odoo Looker Connector
        </h2>
        <a
          href="https://youtu.be/qBrZlSS4aIk"
          className="card1  flex justify-end border-2 shadow-xl border-red-400 rounded-xl w-fit p-3 gap-3 items-center"
        >
          <div className=" play-btn"></div>
          <div className="flex ">
            <div className=" text-black">
              <p className="font-semibold text-xl">Live Demo</p>
            </div>
          </div>
        </a>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center pb-5 w-full">
        <img
          width={"700px"}
          src="/images/looker-sql/banner.gif"
          alt="googlesheets odoo connector"
        />
      </div>
      <div className="flex gap-3 items-start w-[70%] flex-col md:flex-row">
        <p className="font-bold text-md">Disclaimer:</p>
        <p className="pt-[2px] text-sm">
          This is not the module to connect Odoo with Google Looker, it is an
          add on module which helps your odoo looker connector to execute custom
          SQL queries
        </p>
      </div>
      <div className="space-y-3" id="req">
        <h3 className=" font-bold text-2xl text-gray-700">Pre Requisites:</h3>
        <ul className="leading-loose text-lg text-gray-500 list-disc ml-[30px]">
          <li> Odoo Looker Connector by Techfinna must be installed</li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
