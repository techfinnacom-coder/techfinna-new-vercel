const Customization = (props) => {
  return (
    <>
      <div className="p-5 md:p-20 md:h-[400px] border drop-shadow-xl flex flex-col md:flex-row justify-between items-center rounded-md w-full">
        <div className="w-full text-justify">
          <h2 className="text-2xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#F3C857] to-[#B51A7B] mb-10">
            Feature Requests:
          </h2>
          <p className="text-xl mt-4">
            {" "}
            Have an idea for improvement? Your feedback shapes our roadmap. Send
            feature suggestions to{" "}
            <a className="text-blue-500" href="mailto:info@techfinna.com">
              info@techfinna.com
            </a>
            , and let's innovate together.
          </p>
        </div>
      </div>
    </>
  );
};

export default Customization;
