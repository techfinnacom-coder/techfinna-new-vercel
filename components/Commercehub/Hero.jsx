const Hero = () => {
  return (
    <div className="w-full space-y-5 text-center">
      <h1 className="text-5xl md:text-7xl">
        Odoo Commerce Hub Connector | Add-on Module
      </h1>
      <h2 className="text-xl">Integrate ◦ Automate ◦ Accelerate</h2>
      <p className="text-lg">
        Expand your Odoo ecosystem’s horizons with TechFinna’s Commerce Hub
        Connector, your bridge to multichannel retailing. Seamlessly integrate
        your online storefronts, marketplaces, and dropshipping platforms
        directly into Odoo for unmatched synchronization and efficiency.
      </p>
      <div className="flex gap-5 pt-5 w-full">
        <div className="w-1/2 flex drop-shadow-lg justify-center py-5 rounded-md bg-[#A24689]">
          <img
            width={200}
            height={"auto"}
            src="\images\odoo_logo_1200.webp"
            alt="odoo"
          />
        </div>
        <div className="w-1/2 drop-shadow-lg flex justify-center rounded-md border">
          <img
            width={200}
            height={"auto"}
            src="\images\commercehub_logo.jpeg"
            alt="commercehub"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
