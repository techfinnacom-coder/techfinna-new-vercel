const Customization = (props) => {
  return (
    <div className="p-5 md:p-20 md:h-[450px] border drop-shadow-xl flex flex-col md:flex-row justify-between items-center rounded-md w-full">
      <div className="w-full md:w-[500px] ">
        <h2 className="text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#F3C857] to-[#B51A7B] mb-10">
          Need Customization:
        </h2>
        <p className="text-xl ">
          {" "}
          Your business is unique, and so are your needs. TechFinna’s Commerce
          Hub Connector is fully customizable, ensuring it fits perfectly into
          your business model. Need additional features? Our team is on standby
          to tailor the connector to your specifications.
        </p>
      </div>
      <div>
        <img className="h-[320px]" src="\images\daco.png" alt="support" />
      </div>
    </div>
  );
};

export default Customization;
