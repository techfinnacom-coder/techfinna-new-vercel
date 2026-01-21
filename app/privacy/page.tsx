import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Techfinna",
  description:
    "This Privacy Policy outlines how Techfinna collects, uses, and protects your personal information when you access or use our website, products, and services, including Odoo connectors, modules, services, dashboards, and any related offerings.",
};

const PrivacyPolicy = () => {
  const meta = {
    title: "Privacy Policy - Techfinna",
    desc: "This Privacy Policy outlines how Techfinna collects, uses, and protects your personal information when you access or use our website, products, and services, including Odoo connectors, modules, services, dashboards, and any related offerings.",
    url: "https://techfinna.com/looker-odoo-connector/privacy/",
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
        {/* <!-- Twitter meta tags --> */}
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.desc} />
        <meta property="twitter:url" content={meta.url} />
      </head>
      <section className="w-4/5 flex mx-auto flex-col justify-center items-center mt-12 pt-10 text-gray-800">
        <h1 className="text-center bg-transparent py-6 mt-10 text-gray-800 drop-shadow-xl text-3xl md:text-3xl font-semibold">
          Privacy Policy
        </h1>
        <span className="my-2 text-left align-start w-full font-semibold text-gray-800">
          Last Updated: 21-Nov-2024
        </span>
        <p className="mt-4">
          This Privacy Policy outlines how Techfinna collects, uses, and
          protects your personal information when you access or use our website,
          products, and services, including Odoo connectors, modules, services,
          dashboards, and any related offerings ("Services").
        </p>
        <ul className="list-disc pl-4 pt-4 gap-4 flex flex-col">
          <li className="pl-4 flex flex-col justify-start items-start gap-1">
            <span className="text-2xl text-black">Information We Collect:</span>
            <p>
              <br></br> a. We may collect personal information such as your
              name, email address, phone number, and payment details when you
              purchase or inquire about our Services.<br></br> b. Non-personal
              information such as IP addresses, browser type, and device
              information may also be collected to improve your user experience.
              <br></br> c. Cookies and similar tracking technologies may be used
              to enhance website functionality and analyze user behavior.
            </p>
          </li>
          <li className="pl-4 flex flex-col justify-start items-start gap-1">
            <span className="text-2xl text-black">
              How We Use Your Information:
            </span>
            <p>
              <br></br> a. To process orders and deliver the Services you have
              purchased.<br></br> b. To improve our website, products, and
              services based on customer feedback and analytics.<br></br> c. To
              communicate important updates, promotions, and announcements
              related to Techfinna's offerings.
            </p>
          </li>
          <li className="pl-4 flex flex-col justify-start items-start gap-1">
            <span className="text-2xl text-black">Information Sharing:</span>
            <p>
              <br></br> a. We do not sell, rent, or trade your personal
              information to third parties.<br></br> b. We may share your
              information with trusted third-party service providers to help us
              deliver and improve our Services (e.g., payment processors,
              hosting providers).<br></br> c. Information may be disclosed to
              comply with legal obligations or protect the rights of Techfinna
              and its users.
            </p>
          </li>
          <li className="pl-4 flex flex-col justify-start items-start gap-1">
            <span className="text-2xl text-black">Data Security:</span>
            <p>
              <br></br> a. We implement appropriate technical and organizational
              measures to protect your personal information from unauthorized
              access, alteration, or disclosure.<br></br> b. Despite our
              efforts, no method of transmission or storage is 100% secure, and
              we cannot guarantee absolute security.
            </p>
          </li>
          <li className="pl-4 flex flex-col justify-start items-start gap-1">
            <span className="text-2xl text-black">Your Rights:</span>
            <p>
              <br></br> a. You have the right to access, update, or delete your
              personal information at any time.<br></br> b. To exercise your
              rights, please contact us at{" "}
              <a href="mailto:support@techfinna.com" className="text-blue-600">
                support@techfinna.com
              </a>
              .
            </p>
          </li>
          <li className="pl-4 flex flex-col justify-start items-start gap-1">
            <span className="text-2xl text-black">Changes to the Policy:</span>
            <p>
              <br></br> a. Techfinna reserves the right to update or modify this
              Privacy Policy at any time.<br></br> b. Continued use of our
              Services after such changes constitutes acceptance of the revised
              policy.
            </p>
          </li>
          <li className="pl-4 flex flex-col justify-start items-start gap-1">
            <span className="text-2xl text-black">Contact Us:</span>
            <p>
              <br></br> a. If you have any questions or concerns about this
              Privacy Policy, please contact us at: <br></br> i. Email:{" "}
              <a href="mailto:support@techfinna.com" className="text-blue-600">
                support@techfinna.com
              </a>{" "}
              <br></br> ii. Website:{" "}
              <a href="https://techfinna.com" className="text-blue-600">
                https://techfinna.com
              </a>
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
