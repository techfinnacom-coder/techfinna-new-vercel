import Link from "next/link";

const Customization = (props) => {
  return (
    <>
      <div className="p-5 md:p-20 md:h-[400px] border drop-shadow-xl flex flex-col md:flex-row justify-between items-center rounded-md w-full">
        <div className="w-full text-justify">
          <h2 className="text-2xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#F3C857] to-[#B51A7B] mb-10">
            Your Ideas, Supercharged by TechFinna
          </h2>
          <p className="text-xl ">
            {" "}
            Have a feature in mind that could enhance your Odoo to Looker Studio
            experience? We're all ears!
          </p>
          <p className="text-xl mt-4">
            {" "}
            At TechFinna, we're committed to evolving alongside your business
            needs. Drop us a line at{" "}
            <a className="text-blue-500" href="mailto:info@techfinna.com">
              info@techfinna.com
            </a>{" "}
            with your suggestions, and let's collaborate to bring your vision to
            life in our next update.
          </p>
        </div>
      </div>
    </>
  );
};

export default Customization;
