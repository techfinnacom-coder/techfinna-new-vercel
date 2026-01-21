import Hero from "./Hero";
import Features from "./Features";
import Connections from "./Connections";
import Customization from "./Customization";
import Link from "next/link";

const LookerAddOn = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Google Spreadsheet Odoo Connector",
    url: "https://techfinna.com/googlesheet-odoo-connector/",
    description:
      "Effortlessly sync data between Google Sheets and Odoo with our two-click connector. Enjoy rapid table selection, one-time setup, and full data control.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      url: "https://techfinna.com/googlesheet-odoo-connector/",
      priceCurrency: "USD",
      price: "248",
      eligibleRegion: "Global",
    },
    featureList: [
      "Rapid Table Selection",
      "One-Time Setup",
      "Manual Data Refresh",
    ],
    softwareVersion: "17.0",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "25",
    },
    releaseNotes:
      "Supports Odoo versions 12.0 to 17.0, works on both Odoo SH and on-premises servers, compatible with both Community and Enterprise editions.",
  };
  const meta = {
    title:
      "Odoo Looker SQL Connector - Add On Module",
    desc: "Integrate Looker with Odoo using our SQL connector for real-time data insights. Streamline reporting, optimize decision-making, and enhance your business analytics effortlessly",
    url: "https://techfinna.com/looker-sql-connector/",
  };
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
        <link rel="canonical" href={meta.url} />

        {/* <!-- Basic meta tags --> */}

        <meta
          name="robots"
          content="INDEX,FOLLOW"
        />

        {/* <!-- Facebook meta tags --> */}
        <meta
          name="og:title"
          content={meta.title}
        />
        <meta
          name="og:description"
          content={meta.desc}
        />

        <meta
          property="og:url"
          content={meta.url}
        />

        {/* <!-- Twtitter meta tags --> */}
        <meta
          name="twitter:title"
          content={meta.title}
        />
        <meta
          name="twitter:description"
          content={meta.desc}
        />
        <meta
          property="twitter:url"
          content={meta.url}
        />
      </head>

      <div className="md:mx-32 text-black pt-20 space-y-48 mt-4 mb-12 w-full">
        <div className="flex gap-32 w-full">
          <div className=" flex w-full flex-col space-y-48">
            <Hero></Hero>
            <Features></Features>
            <Connections></Connections>
            <Customization></Customization>
          </div>
          <div>
            <div className="border p-10 rounded-md drop-shadow-xl duration-300 sticky top-20 bottom-0 items-center flex flex-col gap-y-10 w-full md:w-[350px]">
              <div className="bg-transparent">
                <h4 className="text-xl bg-transparent">
                  <strong>
                    Supported Odoo versions:
                  </strong>
                </h4>
                <p className="text-lg mt-1 bg-transparent">
                  <span className="border rounded-md px-2 dhadow-md">
                    12.0
                  </span>{" "}
                  <span className="border rounded-md px-2 dhadow-md">
                    13.0
                  </span>{" "}
                  <span className="border rounded-md px-2 dhadow-md">
                    14.0
                  </span>{" "}
                  <span className="border rounded-md px-2 dhadow-md">
                    15.0
                  </span>{" "}
                  <span className="border rounded-md px-2 dhadow-md">
                    16.0
                  </span>{" "}
                  <span className="border rounded-md px-2 dhadow-md">
                    17.0
                  </span>{" "}
                  <span className="border rounded-md px-2 dhadow-md">
                    18.0
                  </span>{" "}
                </p>
                <p className="mt-2 bg-transparent mx-2 text-lg">
                  Works well on Odoo Sh and
                  on-premises server
                </p>
                <p className="mt-2 bg-transparent mx-2 font-bold">
                  Community + Enterprise
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  target="_blank"
                  href="https://buy.stripe.com/5kQ4gz2Mt1KZa0Y0Pn0kE12"
                >
                  <button className=" flex justify-center items-center gap-2 rounded-md shadow-lg bg-[#285a9b] text-white w-full px-6 py-2 text-center text-2xl font-bold">
                    Buy Module
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                    >
                      <path
                        d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H13M19 15.5H17"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M5 6H8M5.5 13H16.0218C16.9812 13 17.4609 13 17.8366 12.7523C18.2123 12.5045 18.4013 12.0636 18.7792 11.1818L19.2078 10.1818C20.0173 8.29294 20.4221 7.34853 19.9775 6.67426C19.5328 6 18.5054 6 16.4504 6H12"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </Link>

                <hr className="border-2 border-gray-300 mt-2 w-full rounded-xl"></hr>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <div className="flex justify-center items-center gap-3">
                    <p>Secure Checkout</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15px"
                      height="15px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-center gap-2">
                    <div className="flex h-8 max-w-full items-center justify-center bg-gray-50 p-2">
                      <img
                        loading="lazy"
                        alt="Mastercard"
                        width="42"
                        height="22"
                        decoding="async"
                        data-nimg="1"
                        className="object-contain"
                        srcset="https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Fpayments%2Fmastercard.svg&amp;w=84&amp;q=70&amp;output=webp 1x, https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Fpayments%2Fmastercard.svg&amp;w=84&amp;q=70&amp;output=webp 2x"
                        src="https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Fpayments%2Fmastercard.svg&amp;w=84&amp;q=70&amp;output=webp"
                      />
                    </div>
                    <div className="flex h-8 max-w-full items-center justify-center bg-gray-50 p-2">
                      <img
                        loading="lazy"
                        alt="Stripe"
                        width="56"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        className="object-contain"
                        srcset="https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Fpayments%2Fstripe.png&amp;w=112&amp;q=70&amp;output=webp 1x, https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Fpayments%2Fstripe.png&amp;w=112&amp;q=70&amp;output=webp 2x"
                        src="https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Fpayments%2Fstripe.png&amp;w=112&amp;q=70&amp;output=webp"
                      />
                    </div>
                    <div className="flex h-8 max-w-full items-center justify-center bg-gray-50 p-2">
                      <img
                        loading="lazy"
                        alt="Stripe"
                        width="56"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        className="object-contain"
                        src="/images/payment/visa-icon.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LookerAddOn;
