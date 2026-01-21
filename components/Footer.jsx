import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="px-10 md:px-20 py-10 foot">
      <div className="px-2">
        <div className="py-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 py-10">
            <div className="space-y-2 items-center">
              <h6 className="text-black text-[15px] font-extrabold py-3">
                Products
              </h6>
              <p className="text-[#7f798d] text-[12px]">
                <Link href="/looker-odoo-connector">Odoo Looker Connector</Link>
              </p>
              <p className="text-[#7f798d] text-[12px]">
                <Link href="/guides/how-to-connect-google-bigquery-with-odoo/">
                  Google BigQuery
                </Link>
              </p>
              <p className="text-[#7f798d] text-[12px]">
                <Link href="/googlesheet-odoo-connector/">
                  Spreadsheet Connector
                </Link>
              </p>
              <p className="text-[#7f798d] text-[12px]">
                <Link href="/odoo-manual-reconciliation/">
                  Odoo Manual Reconciliation
                </Link>
              </p>
            </div>
            <div className="space-y-2 items-center">
              <h6 className="text-black text-[15px] font-extrabold py-3">
                Privacy Policy
              </h6>
              <p className="text-[#7f798d] text-[12px]">
                <Link href="/privacy/">Privacy Policy</Link>
              </p>
              <p className="text-[#7f798d] text-[12px]">
                <Link href="/terms">Terms and Conditions</Link>
              </p>
            </div>
            <div className="space-y-2 items-center">
              <h6 className="text-black text-[15px] font-extrabold py-3">
                Services
              </h6>
              <p className="text-[#7f798d] text-[12px]">
                <a href="/service">Odoo Implementation</a>
              </p>
              <p className="text-[#7f798d] text-[12px]">
                <a href="/service">Odoo with React</a>
              </p>
              <p className="text-[#7f798d] text-[12px]">
                <a href="/service">Odoo Analytics</a>
              </p>
            </div>
            <div className="space-y-2 items-center">
              <h6 className="text-black text-[15px] font-extrabold py-3">
                Company
              </h6>
              <p className="text-[#7f798d] text-[12px]">
                <Link href="/about">About us</Link>
              </p>
              <p className="text-[#7f798d] text-[12px]">
                <a href="/#testimony">Testimonials</a>
              </p>
            </div>
            <div className="space-y-2 items-center">
              <h6 className="text-black text-[15px] font-extrabold py-3">
                Resources
              </h6>
              <p className="text-[#7f798d] text-[12px]">
                <Link href="/contact">Help Center</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-between items-center py-5 space-y-2">
          <div className="space-y-2">
            <h4 className="font-bold normal-case text-xl">TechFinna</h4>
            <p className="text-[13px] text-[#7f798d]">
              © {currentYear} TechFinna. All Rights Reserved.
            </p>
            <p className="text-[13px] text-[#7f798d]">
              TechFinna Private Limited <span className="font-normal"> #</span>
              <a href="mailto:info@techfinna.com">info@techfinna.com</a>
            </p>
          </div>
          <div className="flex space-x-3 md:pe-10">
            {/* <FaTwitter className='text-[#7f798d]'></FaTwitter> */}
            <Link href="https://www.facebook.com/techfinnacompany">
              <FaFacebook className="text-[#7f798d]"></FaFacebook>
            </Link>
            <Link href="https://www.linkedin.com/company/techfinna/">
              <FaLinkedin className="text-[#7f798d]"></FaLinkedin>
            </Link>
            <Link href="https://www.youtube.com/@tech-finna">
              <FaYoutube className="text-[#7f798d]"></FaYoutube>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
