import React from "react";
import Navbar from "../Navbar";
import "./styles.css";
const SpreadsheetDemo = () => {
  const meta = {
    title: "Demo - Odoo Googlesheets Connector",
    desc: "View/Edit a demo connection between odoo and google sheets made by Techfinna, access all odoo data using this connector into google sheets",
    url: "https://techfinna.com/demo/odoo-google-sheets-connector/",
  };
  return (
    <>
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/images/techfinna-logo.png"
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
          property="og:url"
          content={meta.url}
        />
        <meta
          name="og:description"
          content={meta.desc}
        />

        {/* <!-- Twtitter meta tags --> */}
        <meta
          name="twitter:title"
          content={meta.title}
        />
        <meta
          property="twitter:url"
          content={meta.url}
        />
        <meta
          name="twitter:description"
          content={meta.desc}
        />
      </head>
      <Navbar />
      <div className="w-full flex mt-[65px] h-[calc(100vh-65px)] text-black">
        <div className="flex w-[40%] flex-col py-3 mt-5 gap-10 px-5">
          <div className="border rounded-md overflow-hidden">
            <p className="text-xl px-3 py-1 bg-[#EDF2FA]">
              <span className="font-bold bg-[#EDF2FA]">
                Step-1 :
              </span>{" "}
              Click on Odoo Connector and select
              "Set Url and Token"
            </p>
            <img
              className="px-3 pt-2"
              src="\images\demospreadsheet\urltoken.png"
              alt="spreadsheet demo"
            />
          </div>

          <div className="flex flex-col border rounded-md overflow-hidden">
            <p className="text-xl px-3 py-1 bg-[#EDF2FA]">
              <span className="font-bold bg-[#EDF2FA]">
                Step-2 :
              </span>{" "}
              Enter Url and Token given below
            </p>
            <div className="flex flex-col gap-2 w-min px-3 py-2">
              <div className="border flex w-min overflow-hidden rounded-md">
                <span className="bg-[#EDF2FA] py-1 px-3 font-semibold">
                  Url:{" "}
                </span>
                <span className="px-2 py-1">
                  http://dev.techfinna.com
                </span>
                {/* <span
                  onClick={() =>
                    navigator.clipboard.writeText("http://dev.techfinna.com")
                  }
                  title="copy"
                  className="bg-[#EDF2FA] flex items-center cursor-pointer px-3"
                >
                  <svg
                    fill="#000000"
                    height="15px"
                    width="15px"
                    version="1.1"
                    id="Layer_1"
                    viewBox="0 0 64 64"
                    enable-background="new 0 0 64 64"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g id="Text-files">
                        {" "}
                        <path d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228 C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999 c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64 h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002 C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228 c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999 c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699 c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946 c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999 h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z"></path>{" "}
                        <path d="M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005 c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997 C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z"></path>{" "}
                        <path d="M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986 c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016 C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z"></path>{" "}
                        <path d="M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997 s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997 S39.16465,29.4603004,38.6031494,29.4603004z"></path>{" "}
                        <path d="M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997 s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997 S29.0059509,37.5872993,28.4444485,37.5872993z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </span> */}
              </div>
              <div className="border inline-flex overflow-hidden rounded-md">
                <span className="bg-[#EDF2FA] py-1 px-3 font-semibold">
                  Token:{" "}
                </span>
                <span className="px-2 py-1">
                  _b4f6c5d4c7d867be7d041a244f45208a4df3f034
                </span>
                {/* <span
                  onClick={() =>
                    navigator.clipboard.writeText(
                      "_b4f6c5d4c7d867be7d041a244f45208a4df3f034"
                    )
                  }
                  title="copy"
                  className="bg-[#EDF2FA] flex items-center cursor-pointer py-1 px-3"
                >
                  <svg
                    fill="#000000"
                    height="15px"
                    width="15px"
                    version="1.1"
                    id="Layer_1"
                    viewBox="0 0 64 64"
                    enable-background="new 0 0 64 64"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g id="Text-files">
                        {" "}
                        <path d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228 C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999 c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64 h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002 C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228 c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999 c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699 c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946 c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999 h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z"></path>{" "}
                        <path d="M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005 c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997 C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z"></path>{" "}
                        <path d="M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986 c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016 C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z"></path>{" "}
                        <path d="M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997 s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997 S39.16465,29.4603004,38.6031494,29.4603004z"></path>{" "}
                        <path d="M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997 s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997 S29.0059509,37.5872993,28.4444485,37.5872993z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </span> */}
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <p className="text-xl px-3 py-1 bg-[#EDF2FA]">
              <span className="font-bold bg-[#EDF2FA]">
                Step-3 :
              </span>{" "}
              Click on Odoo Connector and select
              "Select Tables and Fetch Data"
            </p>
            <img
              className="px-3 pt-2"
              src="\images\demospreadsheet\fetchdata.png"
              alt="spreadsheet demo"
            />
          </div>

          <div className="border bg-[#434190] rounded-full text-white p-3">
            <p className="bg-[#434190]">
              <span className="bg-[#667EEA] rounded-full font-bold p-1 px-2">
                Note
              </span>
              &nbsp;&nbsp; Signin to Google
              account is required for this demo
            </p>
          </div>
        </div>
        <iframe
          className="w-full border-l-2 "
          src="https://docs.google.com/spreadsheets/d/1usC_3OTc7IxsTl0xsBRkVcyKW1-EtNd-O3swpfBz9vw/edit?usp=sharing"
          title="Spreadsheet demo"
        ></iframe>
      </div>
    </>
  );
};

export default SpreadsheetDemo;
