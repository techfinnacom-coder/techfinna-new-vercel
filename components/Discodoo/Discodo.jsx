import React from "react";
import Head from "next/head";
import Link from "next/link";
import FirsSectionDiscodoo from "./FirsSectionDiscodoo";
import SecondSectionDiscodoo from "./SecondSectionDiscodoo";
import FeaturesDiscodoo from "./FeaturesDiscodoo";
import WhyChooseDiscodoo from "./WhyChooseDiscodoo";
import NotifyDiscodoo from "./NotifyDiscodoo";

const Discodo = () => {
  const meta = {
    title: "Discodoo: Discord integration for Odoo",
    desc: "Unleash the power of Discord automation with Discodoo by Techfinna. Seamlessly integrate Odoo with Discord for real-time insights, efficient workflows, and instant actions. Enhance collaboration and productivity with customizable alerts, interactive dashboards, and more.",
    url: "https://techfinna.com/discodoo/",
  };
  return (
    <>
      <head>
        <link rel="canonical" href={meta.url} />

        {/* <!-- Basic meta tags --> */}

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
      <Head>
        <title>Discodoo: Discord integration for Odoo</title>
        <meta
          name="description"
          content="Unlock seamless integration with Discord and Odoo through Discodoo. Automate tasks, enhance communication, and boost productivity. Get your business on the next level."
        />
      </Head>
      <div className="text-center mt-12 pt-10">
        <h1 className="text-4xl font-extrabold text-black">Discodoo</h1>
        <h6 className="text-[13px] text-[#464154] font-bold">
          <Link className="font-medium" href="/">
            Home
          </Link>{" "}
          | Discodoo
        </h6>
      </div>
      <FirsSectionDiscodoo></FirsSectionDiscodoo>
      <SecondSectionDiscodoo></SecondSectionDiscodoo>
      <FeaturesDiscodoo></FeaturesDiscodoo>
      <WhyChooseDiscodoo></WhyChooseDiscodoo>
      <NotifyDiscodoo></NotifyDiscodoo>
    </>
  );
};

export default Discodo;
