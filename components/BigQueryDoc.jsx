const BigQueryDoc = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechFinna",
    url: "https://techfinna.com/",
    logo: "https://techfinna.com/images/techfinna-logo.png",
    description:
      "Experts in Odoo Connectors, Analytics, and React Solutions. Offering Odoo Looker Studio Connector, Odoo BigQuery Connector, Power BI Connector, Spreadsheet Connector, and more.",
    sameAs: [
      "https://www.linkedin.com/company/techfinna",
      "https://www.youtube.com/@tech-finna",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "info@techfinna.com",
    },
  };
  const meta = {
    title: "Google BigQuery Connector - Techfinna",
    desc: "Learn how to seamlessly connect Google BigQuery with Odoo. Follow our step-by-step guide to integrate data, enabling advanced analytics and powerful business insights with ease.",
    url: "https://techfinna.com/guides/how-to-connect-google-bigquery-with-odoo/",
  };
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
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
      <div className="px-3 text-black mt-4 mb-20 w-full">
        <div className="w-full md:w-[780px] mx-auto space-y-10">
          <h2 className="text-xl text-gray-500 font-semibold">
            How to connect Odoo with Google Bigquery
          </h2>
          <h1 className="text-5xl font-bold">
            Google BigQuery Connector for Odoo Installation and Setup Guide
          </h1>
          <hr></hr>
          <div className="flex justify-center items-center flex-col pb-10">
            <h2 className="text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#31E2BE] to-[#2F9B93] mb-5">
              Watch Demo
            </h2>
            <div className="flex items-center flex-col sm:h-[285px] sm:w-[450px] lg:h-[380px] lg:w-[600px] relative border-sm">
              <div className="flex items-center flex-row rounded-t-md border w-full bg-white min-h-[20px] py-1.5 px-3">
                <div className="w-[12px] mr-2 h-[12px] rounded-full bg-red-500"></div>
                <div className="w-[12px] mr-2 h-[12px] rounded-full bg-yellow-500"></div>
                <div className="w-[12px] h-[12px] rounded-full bg-green-500"></div>
                <div className="flex-1 place-delf-stretch"></div>
              </div>
              <div className="border border-t-0 border-gray-200 relative h-full w-full rounded-b-sm">
                {/* <div className="relative flex justify-center items-center cursor-pointer yt-img" onclick={ytVid()}>
                      <img className="absolute top-50 left-50" width="75px" height="75px" alt="youtube-button" src="\images\lookers\play.png"/>
                      <img className="img-responsive" alt="looker studio demo video" width="500px" height="450px" src="\images\lookers\thumbnail.jpg"/>
                    </div> */}
                <div className="h-full yt-vid">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/fRtjMXTZSwA?si=XUQ8S_M5GCXapjB8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className=" font-bold text-3xl"> Requirements:</h3>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li>
                {" "}
                Odoo Versions Supported: 12, 13, 14, 15, 16, 17 (Enterprise or
                Community)
              </li>
              <li> Google Cloud Account with BigQuery enabled</li>
              <li>
                {" "}
                Necessary permissions in Odoo and Google Cloud (follow along for
                more details)
              </li>
              <li>
                {" "}
                The module depends on these python libraries
                'google-cloud-bigquery', 'pandas','pyarrow'.{" "}
              </li>
              <li>
                {" "}
                If you are on Odoo Sh, add these in your addons repository level
                requirements.txt.
              </li>
              <li>
                {" "}
                If you are on on-premises server, install these manually in your
                Odoo python environment manually and restart the server.
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className=" font-bold text-3xl"> Installation:</h3>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li> Download the BigQuery Connector module from </li>
              <div className="border rounded-sm my-1 bg-[#F9F9F9] p-[22px]">
                <a
                  target="_blank"
                  className="font-sans break-words hover:text-[#2462D0]"
                  href="https://apps.odoo.com/apps/modules/17.0/bigquery_techfinna/"
                >
                  https://apps.odoo.com/apps/modules/17.0/bigquery_techfinna/
                </a>
              </div>
              <img
                className="img-fluid img my-5"
                src="/images/odoo-apps.jpg"
                alt="odoo-apps"
              />
              <li>
                {" "}
                In your Odoo, navigate to Apps and click on 'Update Apps List'
                and Update
              </li>
              <img
                className="img-fluid img my-5"
                src="/images/odoo-update.jpg"
                alt="odoo-apps"
              />
              <li> Search for 'BigQuery Connector', then click 'Install'</li>
              <img
                className="img-fluid img my-5"
                src="/images/odoo-activate.jpg"
                alt="odoo-apps"
              />
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className=" font-bold text-3xl"> Configuration:</h3>
            <h4 className="font-bold text-xl pt-2">
              3.1. Obtaining BigQuery Project ID and Dataset ID:
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li> Log in to your Google Cloud Console </li>
              <div className="border rounded-sm my-1 bg-[#F9F9F9] p-[22px]">
                <a
                  target="_blank"
                  className="font-sans hover:text-[#2462D0]"
                  href="https://console.cloud.google.com"
                >
                  console.cloud.google.com
                </a>
              </div>
              <li> Navigate to the BigQuery section.</li>
              <li>
                {" "}
                Create a new project (if not already done). Note: Ensure the
                Project ID does not contain dots (".") as this may cause issues
                with certain integrations.
              </li>
              <li> Note down the Project ID. </li>
              <img
                className="img-fluid img my-5"
                src="/images/odoo-projectid.jpg"
                alt="odoo-apps"
              />
              <li>
                {" "}
                In the BigQuery dashboard, create a new dataset. Remember: The
                Dataset ID should not contain dots (".") as well.{" "}
              </li>
              <img
                className="img-fluid img my-5"
                src="/images/create-dataset.jpg"
                alt="odoo-apps"
              />
              <li> Note down the Dataset ID. </li>
              <img
                className="img-fluid img my-5"
                src="/images/odoo-datasetid.jpg"
                alt="odoo-apps"
              />
            </ul>
            <h4 className="font-bold text-xl pt-2">
              3.2. Creating a Google Cloud Service Account and Generating
              Credentials JSON:
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li>
                {" "}
                Navigate to ‘IAM & Admin’ &rarr; ‘Service Accounts’ in the
                Google Cloud Console.{" "}
              </li>
              <img
                className="img-fluid img my-5"
                src="/images/create-account.jpg"
                alt="odoo-apps"
              />
              <li>
                {" "}
                Create a new service account and assign the ‘BigQuery Admin’
                role for full BigQuery access. (if you do not want to give admin
                access provide “BigQueryData Editor” and “BigQuery Job User”
                role){" "}
              </li>
              <img
                className="img-fluid img my-5"
                src="/images/bigquery-user.jpg"
                alt="odoo-apps"
              />
              <li>
                {" "}
                Generate a new JSON key for this service account and download
                it. (Select your Service account and in “Keys” tab click “ADD
                KEY”)
              </li>
              <img
                className="img-fluid img my-5"
                src="/images/account-details.jpg"
                alt="odoo-apps"
              />
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className=" font-bold text-2xl">
              {" "}
              Connecting to Google BigQuery:
            </h3>
            <p className="text-xl">
              After configuring the BigQuery Connector in your Odoo settings,
              the next step is to ensure that it is properly connected and can
              communicate with Google BigQuery. Here’s how you can verify the
              connection:
            </p>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li className="font-semibold">
                {" "}
                Fill in the Required Information: In the Odoo settings menu,
                input the necessary details:{" "}
              </li>
              <ul className="leading-loose text-xl list-[circle] ml-6">
                <li>
                  {" "}
                  In Odoo, enter the BigQuery Project ID and Dataset ID in the
                  connector settings.{" "}
                </li>
                <img
                  className="img-fluid img my-5"
                  src="/images/bigquery-connector.jpg"
                  alt="odoo-apps"
                />
                <li>
                  {" "}
                  Paste the contents of the JSON file (download after key
                  creation) into the ‘BigQuery Credentials JSON’ field. Click
                  “SAVE” after filling information.{" "}
                </li>
                <img
                  className="img-fluid img my-5"
                  src="/images/bigquery-json.jpg"
                  alt="odoo-apps"
                />
              </ul>
              <li className="font-semibold">
                {" "}
                Export Data to Verify Connection:
              </li>
              <ul className="leading-loose text-xl list-[circle] ml-6">
                <li>
                  Navigate to the top menu in the settings and select a table to
                  export from the dropdown list.
                </li>
                <img
                  className="img-fluid img my-5"
                  src="/images/top-menu.jpg"
                  alt="odoo-apps"
                />
                <img
                  className="img-fluid img my-5"
                  src="/images/bigquery-export.jpg"
                  alt="odoo-apps"
                />
                <li>
                  Click the ‘Export’ button to initiate data export to BigQuery.
                </li>
                <img
                  className="img-fluid img my-5"
                  src="/images/click-export.jpg"
                  alt="odoo-apps"
                />
                <li>
                  This action will attempt to export the selected table's data
                  to your BigQuery dataset.
                </li>
              </ul>
              <li className="font-semibold">
                {" "}
                Check BigQuery for Exported Data:
              </li>
              <ul className="leading-loose text-xl list-[circle] ml-6">
                <li>
                  Log into your Google Cloud Console and go to the BigQuery
                  section.
                </li>
                <li>Navigate to the dataset you provided in the settings.</li>
                <li>
                  Check for the presence of the exported table and its data.
                  (You might need to refresh the content to see the table(s) )
                </li>
                <img
                  className="img-fluid img my-5"
                  src="/images/check-data.jpg"
                  alt="odoo-apps"
                />
                <li>
                  Successful data (schema and records) visibility in the
                  BigQuery dataset confirms that the connection between Odoo and
                  BigQuery is functioning correctly.
                </li>
              </ul>
            </ul>
          </div>
          <p className="text-xl">
            <b>Note:</b> This process not only verifies the connection but also
            ensures that the BigQuery Connector is set up correctly and has the
            necessary permissions to perform data operations.
          </p>
        </div>
      </div>
    </>
  );
};

export default BigQueryDoc;
