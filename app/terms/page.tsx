import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - Techfinna",
  description:
    "These terms and conditions ('Agreement') govern  your use of our website, products, and services, including Odoo connectors, modules, services, dashboards, and any related offerings (collectively, the 'Services'). ",
};

const Terms = () => {
  const meta = {
    title: "Terms & Conditions - Techfinna ",
    desc: "These terms and conditions ('Agreement') govern your use of our website, products, and services, including Odoo connectors, modules, services, dashboards, and any related offerings (collectively, the 'Services'). ",
    url: "https://techfinna.com/terms/",
  };
  return (
    <div>
      <head>
        <link rel="canonical" href={meta.url} />

        <title>{meta.title}</title>
        {/* <!-- Basic meta tags --> */}
        <meta name="title" content={meta.title} />

        <meta name="robots" content="INDEX,FOLLOW" />

        {/* <!-- Facebook meta tags --> */}
        <meta name="og:title" content={meta.title} />
        <meta name="og:description" content={meta.desc} />

        <meta property="og:url" content={meta.url} />

        {/* <!-- Twtitter meta tags --> */}
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.desc} />
        <meta property="twitter:url" content={meta.url} />
      </head>
      <section className="w-4/5 flex mx-auto flex-col justify-center items-center mt-12 pt-10 text-gray-800">
        <h1 className="text-center bg-transparent py-6 mt-10 text-gray-800 drop-shadow-xl text-3xl md:text-3xl font-semibold">
          Terms &amp; Condition
        </h1>
        <span className="my-2 text-left align-start w-full font-semibold text-gray-800">
          Last Updated: 21-Nov-2024
        </span>
        <p>
          <br></br>
          Welcome to Techfinna! These Terms and Conditions ("Agreement") govern
          your use of our website, products, and services, including Odoo
          connectors, modules, services, dashboards, and any related offerings
          (collectively, the "Services"). By accessing or using our website
          <a className="px-2" href="https://techfinna.com/">
            (https://techfinna.com/)
          </a>{" "}
          and purchasing or using any of our Services, you agree to be bound by
          this Agreement. If you do not agree to these terms, please refrain
          from using our Services.
        </p>
        <ul className="list-disc pl-4 pt-4 gap-4 flex flex-col">
          <li className="pl-4 flex flex-col justify-start items-start gap-1">
            {" "}
            <span className="text-2xl text-black">License & Usage:</span>{" "}
            <p>
              <br></br> a. Upon purchase, Techfinna grants you a limited,
              non-exclusive, non-transferable license to use the products and
              services for your internal business purposes.<br></br>
              b. Any license or token provided must not be shared, sublicensed,
              or used by unauthorized individuals or entities. <br></br> c. You
              are prohibited from reverse-engineering, modifying, or
              redistributing any of our products without prior written consent.
            </p>
          </li>
          <li className="pl-4 flex flex-col justify-start items-start gap-1">
            <span className="text-2xl text-black">Purchase & Payment:</span>
            <p>
              <br></br> a. Prices for all products and services are listed on
              our website and are subject to change without notice.<br></br> b.
              All fees are non-refundable unless explicitly stated otherwise in
              writing. <br></br> c. Payments must be made in full before the
              delivery or activation of any purchased product or service.
            </p>
          </li>
          <li className="pl-4 flex flex-col justify-start items-start gap-1">
            <span className="text-2xl text-black">Support & Maintenance:</span>
            <p>
              <br></br> a. Techfinna offers support and maintenance services for
              its products based on the terms of the specific purchase
              agreement.<br></br> b. Support may include updates, bug fixes, and
              enhancements, which will be provided at Techfinna’s discretion.
              <br></br> c. Customers are encouraged to contact our support team
              for assistance, but Techfinna does not guarantee resolution times.
            </p>
          </li>
          <li className="pl-4 flex flex-col justify-start items-start gap-1">
            <span className="text-2xl text-black">Intellectual Property:</span>
            <p>
              <br></br> a. All intellectual property rights to the Services,
              including but not limited to software, documentation, and
              branding, remain with Techfinna.<br></br> b. Unauthorized
              reproduction, distribution, or use of Techfinna’s intellectual
              property is strictly prohibited.
            </p>
          </li>
          <li className="pl-4 flex flex-col justify-start items-start gap-1">
            <span className="text-2xl text-black">User Responsibilities:</span>
            <p>
              <br></br> a. You are responsible for ensuring the accuracy of any
              information provided to Techfinna during the purchase or
              configuration of our Services.<br></br> b. It is your
              responsibility to install and configure any software or modules
              provided unless a separate installation service is purchased.
              <br></br> c. You must safeguard all license keys, tokens, and
              access credentials provided by Techfinna.
            </p>
          </li>
          <li className="pl-4 flex flex-col justify-start items-start gap-1">
            <span className="text-2xl text-black">Termination:</span>
            <p>
              <br></br> a. This Agreement remains effective until terminated by
              either party.<br></br> b. Techfinna reserves the right to
              terminate access to its products or services immediately if:{" "}
              <br></br> i. The terms of this Agreement are violated.<br></br>{" "}
              ii. Misuse or unauthorized use of the Services occurs. <br></br>{" "}
              c. Upon termination, you must stop using all products and destroy
              any copies in your possession.
            </p>
          </li>
          <li className="pl-4 flex flex-col justify-start items-start gap-1">
            <span className="text-2xl text-black">
              Limitation of Liability:
            </span>
            <p>
              <br></br> a. Techfinna is not responsible for any indirect,
              incidental, or consequential damages arising from the use of its
              products or services.<br></br> b. The maximum liability for direct
              damages shall not exceed the amount paid for the specific product
              or service.
            </p>
          </li>
          <li className="pl-4 flex flex-col justify-start items-start gap-1">
            <span className="text-2xl text-black">Privacy Policy:</span>
            <p>
              <br></br> a. Your use of the Services is subject to Techfinna’s
              Privacy Policy, which outlines how we collect, use, and protect
              your information.<br></br> b. By using our Services, you agree to
              our Privacy Policy.
            </p>
          </li>
          <li className="pl-4 flex flex-col justify-start items-start gap-1">
            <span className="text-2xl text-black">Governing Law:</span>
            <p>
              <br></br> a. This Agreement is governed by the laws of the
              jurisdiction in which Techfinna is located.<br></br> b. Any
              disputes shall be resolved exclusively in the courts of that
              jurisdiction.
            </p>
          </li>
          <li className="pl-4 flex flex-col justify-start items-start gap-1">
            <span className="text-2xl text-black">Changes to the Terms:</span>
            <p>
              <br></br> a. Techfinna reserves the right to update or modify
              these Terms and Conditions at any time.<br></br> b. Continued use
              of the Services after such changes constitutes acceptance of the
              revised terms.
            </p>
          </li>
          <li className="pl-4 flex flex-col justify-start items-start gap-1">
            <span className="text-2xl text-black">Contact Us:</span>
            <p>
              <br></br> a. If you have any questions about these Terms and
              Conditions, please contact us at: <br></br> i. Email: [Insert
              Contact Email] <br></br> ii. Website:
              [https://techfinna.com/](https://techfinna.com/)
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Terms;
