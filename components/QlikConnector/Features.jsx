import Link from "next/link";
const Features = () => {
  return (
    <div>
      {/* additional feature  */}
      {/* <div className="shadow-xl flex items-center 
      mx-auto mb-[40px] text-left border-2 border-[#ffaf00] justify-center">
    <div className="flex items-center w-1/2">
      <img className="fluid" width="100%" src="/images/speaker.avif" frameborder="0"/>
    </div>
    <div className=" w-1/2" >
      <h1 className="text-[28px] font-semibold text-[#1D2B53]" >Additional Feature Update !</h1>
      <p className="text-[18px] text-[#0d31a8] pt-4" >➢ &nbsp;Custom SQL Query Execution </p>
      <p className="text-[18px] text-[#0d31a8]">➢ &nbsp;View Selective Data</p>

      <p className="text-[18px] my-4 font-semibold pb-4 text-[#0d31a8]" >Checkout Add-On module<a target="_blank" 
      className="ml-[5px] text-[#122977] "  
       href="https://apps.odoo.com/apps/modules/12.0/looker_sql_connector/">Click
          here</a></p>
    </div>

  </div> */}

      <div className="w-full flex flex-col mt-[50px] md:flex-row text-justify gap-y-10 justify-between items-center">
        <div className="w-full space-y-10">
          <h2 className="text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-10">
            Core Features:
          </h2>
          <p className="text-xl">
            <span className="font-bold"> Direct Connection:</span> No need for
            an intermediate server or application. Connect Odoo directly to Qlik
            for instant data access.
          </p>
          <p className="text-xl">
            <span className="font-bold">Pagination Support:</span> Manage large
            tables efficiently with built-in pagination.
          </p>
          <p className="text-xl">
            <span className="font-bold">Secure Connection:</span> Unique token
            authentication provides top-tier security for your data.
          </p>
          <p className="text-xl">
            <span className="font-bold">Stable Release:</span> The connector is
            thoroughly tested and stable, ensuring dependable performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
