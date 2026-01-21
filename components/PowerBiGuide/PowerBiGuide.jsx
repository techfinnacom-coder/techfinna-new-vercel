"use client";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PowerBiGuide = () => {
  const [modal, setModal] = useState(false);
  const [customerEmail, setEmail] = useState("");
  const [saleOrder, setSaleOrder] = useState("");
  const [stagingUrl, setStagingUrl] = useState("");
  const [customerName, setCustomerName] = useState("default_licensing_name");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const meta = {
    title: "How to Connect Odoo to PowerBI Guide",
    desc: "Learn how to connect Odoo with Power BI in this comprehensive guide. Unlock powerful analytics and reporting capabilities by integrating your business data seamlessly",
    url: "https://techfinna.com/guides/how-to-connect-odoo-powerbi/",
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      setModal(false);

      if (!file) {
        alert("Please select a PDF file.");
        return;
      }
      // Allowed file types
      const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const maxFileSize = 2 * 1024 * 1024; // 2MB in bytes

      // Validate file type
      if (!allowedTypes.includes(file.type)) {
        alert("Invalid file type! Please upload a PDF or DOCX file.");
        setLoading(false);
        return;
      }

      // Validate file size
      if (file.size > maxFileSize) {
        alert("File size must be 2MB or less.");
        setLoading(false);
        return;
      }
      // Cloudinary Upload Preset & Cloud Name (Replace with your own)
      const CLOUDINARY_CLOUD_NAME = "dr4kyyfk4"; // Replace with your Cloudinary cloud name
      const UPLOAD_PRESET = "techfinna-licensing"; // Replace with your upload preset name
      const formDataUpload = new FormData();
      var apiResponse = null;
      formDataUpload.append("file", file);
      formDataUpload.append("upload_preset", UPLOAD_PRESET); // Required for unsigned upload
      formDataUpload.append("resource_type", "auto");

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`,
          {
            method: "POST",
            body: formDataUpload,
          }
        );

        const data = await response.json();
        console.log(data.secure_url, "file upload link");
        apiResponse = data.secure_url;
      } catch (error) {
        console.log(error);
      }
      // // 1️⃣ Send email first
      const emailResponse = await fetch(
        "https://sendemail-4ghlaskdba-uc.a.run.app",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prodName: customerName,
            customerEmail: customerEmail,
            saleOrder: saleOrder,
            stagingUrl: stagingUrl,
            fileUpload: apiResponse,
          }),
        }
      );

      console.log("Email sent successfully", emailResponse);

      if(emailResponse.status == 200) {
        console.log("initiating download");
        const fileUrl = "/assets/power-bi/OdooBiConnectorTechfinna.mez"; // Example: Public folder in Next.js

        // Create an anchor element
        const anchor = document.createElement("a");
        anchor.href = fileUrl;
        anchor.download = "OdooBiConnectorTechfinna.mez"; // Set the filename
        anchor.target = "_blank"; // Optional: Open in a new tab
    
        // Append to body, trigger click, then remove
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
      }
      else{
        throw new Error("email response failed");
      }

      const reader = new FileReader();
      reader.readAsArrayBuffer(file); // Convert to binary

      // json object for image
      let image = {
        pdf_url: apiResponse,
        binary: file,
        imageBuffer: reader.result,
      };

      const formData = new FormData();
      formData.append("email", customerEmail);
      formData.append("purchase_ref", saleOrder);
      formData.append("urls", stagingUrl);
      formData.append("name", prodName);
      formData.append("sale_invoice", image);

      const response = await fetch(
        "https://odoo.techfinna.com/techfinna/verify-form",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      console.log("Verification response:", data);

      if (data.code == 200) {
        toast.success(
          "Thank you for your patience! You will receive an email shortly. ",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
      } else {
        toast.error(
          "You have already generated the request. Please contact info@techfinna if you believe this is a mistake.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
      }
    } catch (error) {
      console.error("Error verifying:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <head>
        <link rel="canonical" href={meta.url} />
        {/* <!-- Basic meta tags --> */}
        <meta name="robots" content="INDEX,FOLLOW" />n
        {/* <!-- Facebook meta tags --> */}
        <meta name="og:title" content={meta.title} />
        <meta name="og:description" content={meta.desc} />
        <meta property="og:url" content={meta.url} />
        {/* <!-- Twtitter meta tags --> */}
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.desc} />
        <meta property="twitter:url" content={meta.url} />
      </head>
      <ToastContainer />
      <div className="px-3 text-black w-full mt-[120px]">
        <div
          onClick={(e) => setModal(false)}
          data-state="open"
          className={`fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out
          data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 pointer-events-auto ${
            modal ? `block` : `hidden`
          }`}
          data-aria-hidden="true"
          aria-hidden="true"
        ></div>
        <div
          role="dialog"
          id="radix-:r0:"
          aria-describedby="radix-:r2:"
          aria-labelledby="radix-:r1:"
          data-state="open"
          className={`fixed bg-white left-[50%] top-[50%] z-50 grid w-[90%] sm:w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background duration-200
                    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95
                    data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2
                    data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg overflow-hidden p-0 shadow-lg ${
                      modal ? `block` : `hidden`
                    }`}
        >
          <div
            className="flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground [&amp;_[cmdk-group-heading]]:px-2 [&amp;_[cmdk-group-heading]]:font-medium [&amp;_[cmdk-group-heading]]:text-muted-foreground [&amp;_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&amp;_[cmdk-group]]:px-2 [&amp;_[cmdk-input-wrapper]_svg]:h-5 [&amp;_[cmdk-input-wrapper]_svg]:w-5 [&amp;_[cmdk-input]]:h-12 [&amp;_[cmdk-item]]:px-2 [&amp;_[cmdk-item]]:py-3 [&amp;_[cmdk-item]_svg]:h-5 [&amp;_[cmdk-item]_svg]:w-5"
            cmdk-root=""
          >
            <label
              cmdk-label=""
              htmlFor=":rpk:"
              id=":rpj:"
              className="absolute w-px h-px p-0 m-[-1px] overflow-hidden clip-rect whitespace-nowrap border-0"
            ></label>
            <div
              className="flex items-center border-b px-3 font-lg min-h-[50px]"
              cmdk-input-wrapper=""
            >
              Download Power BI Connector
            </div>
            <div className="max-h-[430px] py-4 overflow-y-auto overflow-x-hidden">
              <div cmdk-list-sizer="">
                <div
                  className="overflow-hidden text-center p-1 text-black"
                  role="presentation"
                >
                  <p className="text-center pb-2">
                    Enter these details to verify your purchase
                  </p>
                  <form onSubmit={handleSubmit} class="max-w-sm mx-auto">
                  <div class="mb-5">
                      <input
                        type="text"
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Enter your Name"
                        id="name"
                        required
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                      <div class="mb-5">
                        <input
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter your email here"
                          required
                        />
                      </div>
                      <div class="mb-5">
                        <input
                          type="text"
                          onChange={(e) => setSaleOrder(e.target.value)}
                          placeholder="Enter Sale Order Number"
                          id="saleOrder"
                          required
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div class="mb-5">
                      <input
                        type="text"
                        onChange={(e) => setStagingUrl(e.target.value)}
                        placeholder="Enter Staging URL(seperated by comma)"
                        id="staging"
                        required
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <span className="text-sm text-gray-600">
                        ex: https://example.com , https://example-staging.com
                      </span>
                    </div>
                    <div class="mb-5 flex w-full justify-center items-center">
                      <p className="w-[35%]">Upload Sale Invoice</p>
                      <input
                        type="file"
                        placeholder="Upload Invoice PDF"
                        accept=".pdf,.docx" // Accepts only PDF and DOCX
                        onChange={(e) => setFile(e.target.files[0])}
                        id="invoicePdf"
                        className="bg-gray-50 border flex flex-col border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[65%] p-2.5"
                      />
                    </div>
                    <div className="mb-5">
                      <p className="text-sm">
                        File size must not exceede 2MB and should be .pdf/.docx
                        file type
                      </p>
                    </div>
                    <button
                      disabled={loading}
                      type="submit"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Verify & Download
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={(e) => {
              setModal(false);
            }}
            type="button"
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x h-4 w-4"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div className="w-full md:w-[780px] mx-auto space-y-10">
          <h2 className="text-xl text-gray-500 font-semibold">
            How to connect Odoo with Microsoft PowerBI Desktop
          </h2>
          <h1 className="text-5xl font-bold">
            Odoo to PowerBI Connector Installation & Setup Guide
          </h1>
          <hr></hr>
          {/* table content */}
          {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-400">
            <thead className="text-md text-gray-700 uppercase text-black ">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-white bg-gray-800 border-b-2 border-gray-200"
                >
                  S.No.
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-300 border-b-2 border-black"
                >
                  Index
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-300 border-b-2 border-black"
                >
                  Section
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700 text-black text-md font-semibold">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  1
                </th>
                <td className="px-6 py-4 bg-gray-300">Requirements</td>
                <td className="px-6 py-4  bg-gray-300">
                  <a
                    href="#req"
                    className="bg-transparent text-blue-800 underline"
                  >
                    Go To Link
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-700 text-black text-md font-semibold">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  2
                </th>
                <td className="px-6 py-4 bg-gray-300">Installation</td>
                <td className="px-6 py-4  bg-gray-300">
                  <a
                    href="#install"
                    className="bg-transparent text-blue-800 underline"
                  >
                    Go To Link
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-700 text-black text-md font-semibold">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  3
                </th>
                <td className="px-6 py-4 bg-gray-300">Configuration</td>
                <td className="px-6 py-4  bg-gray-300">
                  <a
                    href="#config"
                    className="bg-transparent text-blue-800 underline"
                  >
                    Go To Link
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-700 text-black text-md font-semibold">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  4
                </th>
                <td className="px-6 py-4 bg-gray-300">
                  <b className="bg-transparent">1.1</b> Click on Odoo Connecter
                  Menu
                </td>
                <td className="px-6 py-4  bg-gray-300">
                  <a
                    href="#1.1"
                    className="bg-transparent text-blue-800 underline"
                  >
                    Go To Link
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-700 text-black text-md font-semibold">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  5
                </th>
                <td className="px-6 py-4 bg-gray-300">
                  <b className="bg-transparent">1.2</b> Enter URL and Access
                  Token
                </td>
                <td className="px-6 py-4  bg-gray-300">
                  <a
                    href="#1.2"
                    className="bg-transparent text-blue-800 underline"
                  >
                    Go To Link
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-700 text-black text-md font-semibold">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  6
                </th>
                <td className="px-6 py-4 bg-gray-300">
                  <b className="bg-transparent">1.3</b> Click Select Tables and
                  Fetch Data
                </td>
                <td className="px-6 py-4  bg-gray-300">
                  <a
                    href="#1.3"
                    className="bg-transparent text-blue-800 underline"
                  >
                    Go To Link
                  </a>
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap text-white bg-gray-800"
                >
                  7
                </th>
                <td className="px-6 py-4 bg-gray-300 text-black font-semibold">
                  <b className="bg-transparent">1.4</b> You will see Tables
                  populated as Sheets
                </td>
                <td className="px-6 py-4  bg-gray-300">
                  <a
                    href="#1.4"
                    className="bg-transparent text-blue-800 underline"
                  >
                    Go To Link
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
          {/* watch demo */}
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
                    src="https://www.youtube.com/embed/XfjPP8LW0l4?si=EIPq6aaizm7zZrUD"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          {/* requirements */}
          <div className="space-y-3" id="req">
            <h3 className=" font-bold text-2xl text-gray-700">
              {" "}
              Requirements:
            </h3>
            <ul className="leading-loose text-lg text-gray-500 list-disc ml-[30px]">
              <li>
                {" "}
                Odoo Versions Supported: 12, 13, 14, 15, 16, 17, 18 (Enterprise
                or Community)
              </li>
              <li>PowerBI installed on your server/desktop</li>
            </ul>
          </div>
          {/* installation */}
          <div className="space-y-3" id="install">
            <h3 className=" font-bold text-3xl"> Installation:</h3>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li>
                {" "}
                Download & install the Odoo to PowerBI Connector from Odoo store{" "}
              </li>
              <div className="border rounded-sm my-1 bg-[#F9F9F9] p-[22px]">
                <a
                  target="_blank"
                  className="font-sans break-words hover:text-[#2462D0]"
                  href="https://apps.odoo.com/apps/modules/17.0/powerbi_desktop_connector"
                >
                  https://apps.odoo.com/apps/modules/17.0/powerbi_desktop_connector
                </a>
              </div>
              <img
                className="img-fluid img my-5"
                src="/images/guide/powerbi-installation.png"
                alt="odoo powerbi installation guide"
              />
            </ul>
          </div>
          {/* config */}
          <div className="space-y-3" id="config">
            <h3 className=" font-bold text-3xl"> Configuration:</h3>
            <h4
              className="font-bold text-xl pt-2"
              id="1.1"
              onClick={() => console.log("clicked")}
            >
              1. Download the MEZ connector file
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li> Download the connector file by Techfinna </li>
              <button
                onClick={() => {
                  setModal(!modal);
                }}
                className="relative inline-flex gap-2 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
              >
                <span className="relative flex gap-1 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Download
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      opacity="0.5"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z"
                      fill="#1C274C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 16.75C12.2106 16.75 12.4114 16.6615 12.5535 16.5061L16.5535 12.1311C16.833 11.8254 16.8118 11.351 16.5061 11.0715C16.2004 10.792 15.726 10.8132 15.4465 11.1189L12.75 14.0682V3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3V14.0682L8.55353 11.1189C8.27403 10.8132 7.79963 10.792 7.49393 11.0715C7.18823 11.351 7.16698 11.8254 7.44648 12.1311L11.4465 16.5061C11.5886 16.6615 11.7894 16.75 12 16.75Z"
                      fill="#1C274C"
                    />
                  </svg>
                </span>
              </button>
              {/* <div className="border rounded-sm my-1 bg-[#F9F9F9] p-[22px]">
                <a
                  target="_blank"
                  className="font-sans break-words hover:text-[#2462D0]"
                  href="https://www.dropbox.com/scl/fi/xsvi5fkpcyg8b0u7o1kqj/OdooBiConnectorTechfinna24.mez?rlkey=du9xql1w9kd5uomj0huod3ba2&st=n1u6kq4l&dl=0"
                >
                  https://www.dropbox.com/scl/fi/xsvi5fkpcyg8b0u7o1kqj/OdooBiConnectorTechfinna24.mez?rlkey=du9xql1w9kd5uomj0huod3ba2&st=n1u6kq4l&dl=0
                </a>
              </div> */}
              <li>
                {" "}
                After Downloading paste the MEZ file in the PowerBI custom
                connectors directory
              </li>

              <div className="border rounded-sm my-1 bg-[#F9F9F9] p-[22px]">
                <p className="font-semibold">Default Location:</p>C:\Users\
                {"<User>"}\Documents\Power BI Desktop\Custom Connectors
              </div>
              <p>
                If cannot find this location,{" "}
                <a href="#troubleshoot">Click Here</a>
              </p>
            </ul>
          </div>
          {/* steps */}
          <div className="space-y-3" id="config">
            <h3 className=" font-bold text-3xl"> Steps:</h3>
            <h4 className="font-bold text-xl pt-2" id="1.1">
              1. Open Microsoft PowerBI
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li>
                {" "}
                Open Microsoft PowerBI in your system and click on{" "}
                <b>Blank Report</b>{" "}
              </li>
              <img
                className="shadow-lg "
                src="/images/powerbi/powerbi1.png"
                width={700}
              />
              <li className="mt-6">
                {" "}
                Click on {"->"} <b>Get Data</b> {"->"} <b>More</b>
              </li>
              <img
                className="shadow-lg "
                src="/images/powerbi/powerbi2.png"
                width={700}
              />
            </ul>
            <h4 className="font-bold text-xl pt-6" id="1.2">
              2. Search & Connect:
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li>
                {" "}
                Click on Connect after selecting 'Odoo Connector by
                Techfinna.com'
              </li>
              <img
                className="img-fluid img my-5 shadow"
                src="/images/powerbi/powerbi3.png"
                width={700}
              />
              <div className="border-2 border-green-600 p-4 bg-green-200 rounded-xl shadow-xl flex flex-col mb-6">
                <h3>NOTE:</h3>
                <p>
                  If you cannot find this module here, go to{" "}
                  <a className="underline" href="#troubleshoot">
                    troubleshoot options
                  </a>
                </p>
              </div>
              <li> Copy the URL & Token from your Odoo </li>
              <img
                className="img-fluid img my-5 shadow"
                src="/images/powerbi/powerbi7.png"
                width={700}
              />
              <li>
                {" "}
                Paste the Url & Token and click <b>OK</b>{" "}
              </li>
              <img
                className="img-fluid img my-5 shadow"
                src="/images/powerbi/powerbi4.png"
                width={700}
              />
            </ul>
            <h4 className="font-bold text-xl pt-6" id="1.3">
              3. Done ! Odoo Connected with Microsoft PowerBI
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <img
                className="img-fluid img my-5 shadow"
                src="/images/powerbi/powerbi5.png"
                width={700}
              />
            </ul>
          </div>
          {/* Troubleshoot */}
          <div className="space-y-3" id="troubleshoot">
            <h3 className=" font-bold text-3xl"> Troubleshoot Options:</h3>
            <h4 className="font-bold text-xl pt-2" id="1.1">
              1. The connector MEZ file is missing from 'Custom Connectors'
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li>
                {" "}
                To fix it, ensure the downloaded MEZ file is present in this
                directory{" "}
                <span className="text-gray-500 text-lg">
                  'C:\Users\{"<User>"}\Documents\Power BI Desktop\Custom
                  Connectors'
                </span>{" "}
              </li>
              <img
                src="/images/powerbi/powerbi6.png"
                width={700}
                className="shadow-xl"
              />
            </ul>
            <h4 className="font-bold text-xl pt-6" id="1.1">
              2. While installing PowerBI, the custom connectors folder is
              created in different user in your desktop/server
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li>
                {" "}
                Find the location of your installed PowerBI and paste the MEZ
                file there without changing file extension{" "}
              </li>
            </ul>
            <h4 className="font-bold text-xl pt-6" id="1.1">
              3. Re-install Microsoft Power BI
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li>
                {" "}
                If you still cannot find this directory, re-install the
                Microsoft Power BI.
              </li>
            </ul>
            <h4 className="font-bold text-xl pt-6" id="1.1">
              4. URL / Token is incorrect
            </h4>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li>
                {" "}
                If facing this issue, connect us with at{" "}
                <a href="mailto:info@techfinna.com">info@techfinna.com</a>. We
                will reach you out within 24 hours
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PowerBiGuide;
