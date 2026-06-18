import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full text-justify space-y-5">
      <h1 className="text-5xl text-center md:text-start md:text-7xl">
        Odoo to Qlik Connector
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-4 justify-between items-center">
        <h2 className="text-xl text-center md:text-start">
          Integrate Odoo data with Qlik
        </h2>
        <a
          href="https://www.youtube.com/watch?v=5mG0ThvM9Q8"
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
          width={"70%"}
          src="/images/powerbi/banner.gif"
          alt="odoo looker connector"
        />
        <div className="flex gap-3 items-start w-[70%] flex-col md:flex-row">
          <p className="font-bold text-md">Disclaimer:</p>
          <p className="pt-[2px] text-sm">
            Odoo Qlik Connector provides a direct and seamless connection
            between Odoo and Qlik, enabling quick and efficient data transfer
            for advanced analytics. This popular connector ensures you can
            securely and easily integrate your Odoo data into Qlik without
            needing an intermediate server or application
          </p>
        </div>
        {/* <Link
          target="_blank"
          href={"https://lookerstudio.google.com/datasources"}
        >
          <div className="inline-flex px-8 p-2 ml-0 rounded-full hover:border-[#3b44f6] border-[#3B82F6] border-2 ">
            <p
              id="demo"
              className="text-xl font-extralight text-[#3B82F6]  hover:text-[#3b44f6]"
            >
              Looker Studio data sources
            </p>
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default Hero;
