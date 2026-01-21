import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-between items-center px-8 py-2 border-gray-500 border-2 shadow-lg rounded-lg">
      <div className="flex flex-col justify-center items-start px-8 text-gray-600">
        <h3 className="text-3xl text-left py-2">
          Want help with{" "}
          <span className="text-purple-400 font-semibold">o</span>doo?
        </h3>
        <ul className="list-disc mt-2 text-gray-500 pl-4">
          <li>Connect with React !</li>
          <li>Interactive Dashboards </li>
          <li>Odoo Modules & Customization</li>
        </ul>
        <a
          href="/contact/"
          className="relative mt-8 inline-flex items-center border-2 border-purple-300 justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group "
        >
          <span className="relative text-gray-500 tracking-wider px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md ">
            Contact Us
          </span>
        </a>
      </div>
      <div>
        <img src="/images/blogs/giphy.webp" width={200} />
      </div>
    </div>
  );
};

export default Contact;
