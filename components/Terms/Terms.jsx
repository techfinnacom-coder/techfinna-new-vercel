import React from "react";

const Terms = () => {
  return (
    <div>
      <section className="w-4/5 flex mx-auto flex-col justify-center items-center mt-12 pt-10">
        <h1 className="text-center bg-transparent py-6 mt-10 text-[#1A3454] drop-shadow-xl text-3xl md:text-3xl font-semibold">
          Terms &amp; Condition
        </h1>
        <p>
          These terms and conditions ("Agreement") govern the use of the Odoo
          Connector for Looker Studio ("Connector") provided by Techfinna. By
          installing the Connector module in Odoo, purchasing a license key, and
          obtaining a token from Techfinna, you agree to be bound by the terms
          and conditions outlined below.
        </p>
        <ul className="list-disc pl-4">
          <li className="pl-4 py-2">
            {" "}
            1.License Grant: a. Techfinna grants you a non-exclusive,
            non-transferable license to use the Connector module in Odoo,
            subject to the terms and conditions of this Agreement. b. The
            license is granted solely for your internal business purposes and is
            limited to the number of users specified in your purchased license
            key.
          </li>
          <li className="pl-4 py-2">
            {" "}
            2.Installation and Configuration: a. You are responsible for
            installing and configuring the Connector module in your Odoo
            instance. b. Techfinna will provide installation instructions and
            support to assist you in the installation process.
          </li>
          <li className="pl-4 py-2">
            {" "}
            3.Token and Access: a. To activate the Connector, you must obtain a
            token from Techfinna. b. The token will be provided to you upon
            purchase of the license key. c. You are responsible for keeping the
            token confidential and ensuring that it is used only by authorized
            individuals within your organization. d. Techfinna reserves the
            right to revoke or disable the token if there is a breach of this
            Agreement or any misuse of the Connector.
          </li>
          <li className="pl-4 py-2">
            {" "}
            4.Intellectual Property: a. The Connector module and any associated
            documentation provided by Techfinna are protected by intellectual
            property rights and are the exclusive property of Techfinna. b. You
            agree not to modify, reverse engineer, decompile, or disassemble the
            Connector module or any part thereof.
          </li>
          <li className="pl-4 py-2">
            {" "}
            5.Support and Maintenance: a. Techfinna will provide technical
            support and maintenance for the Connector module during the term of
            your purchased license key. b. Support may include bug fixes,
            updates, and enhancements at Techfinna's discretion. Fees and
            Payment: a. You agree to pay the applicable fees for the purchase of
            the license key. b. All fees are non-refundable once the license key
            has been issued.
          </li>
          <li className="pl-4 py-2">
            {" "}
            6.Termination: a. This Agreement will remain in effect until
            terminated by either party. b. Techfinna may terminate this
            Agreement immediately if you breach any of the terms and conditions
            outlined herein. c. Upon termination, you must cease all use of the
            Connector module and destroy any copies in your possession.
          </li>
          <li className="pl-4 py-2">
            7.Limitation of Liability: a. Techfinna shall not be liable for any
            indirect, incidental, consequential, or punitive damages arising out
            of or in connection with the use of the Connector module. b.
            Techfinna's liability for any direct damages shall be limited to the
            amount paid by you for the license key.
          </li>
          <li className="pl-4 py-2">
            8.Governing Law and Jurisdiction: a. This Agreement shall be
            governed by and construed in accordance with the laws of the
            jurisdiction in which Techfinna is located. b. Any disputes arising
            out of or in connection with this Agreement shall be subject to the
            exclusive jurisdiction of the courts in that jurisdiction. By
            installing the Connector module, purchasing a license key, and
            obtaining a token from Techfinna, you acknowledge that you have
            read, understood, and agreed to be bound by these terms and
            conditions.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Terms;
