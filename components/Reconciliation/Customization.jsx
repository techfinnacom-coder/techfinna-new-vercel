import React from "react";
import Link from "next/link";

const Customization = (props) => {
  return (
    <>
      <div className="p-5 md:p-20 md:h-[400px] border drop-shadow-xl flex flex-col md:flex-row justify-between items-center rounded-md w-full">
        <div className="w-full text-justify">
          <h2 className="text-2xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#F3C857] to-[#B51A7B] mb-10">
            Join the Waitlist:
          </h2>
          <p className="text-xl mt-4">
            {" "}
            Sign up now to receive an exclusive discount when the Odoo Manual
            Reconciliation module is released. Contact{" "}
            <Link className="text-blue-500" href="mailto:info@techfinna.com">
              info@techfinna.com
            </Link>{" "}
            to join the waitlist.
          </p>
          <p className="text-xl mt-4">
            {" "}
            Transform reconciliation with ease - choose Odoo Manual
            Reconciliation.
          </p>
        </div>
      </div>
    </>
  );
};

export default Customization;
