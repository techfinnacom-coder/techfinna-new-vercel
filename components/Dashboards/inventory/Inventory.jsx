import Link from "next/link";
const Inventory = () => {
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
    title:
      "Odoo Inventory Management - Dashboard",
    desc: "Optimize your inventory with Odoo's powerful management tools. Track stock, automate processes, and improve efficiency with seamless inventory control and real-time analytics",
    url: "https://techfinna.com/odoo-analytics/odoo-inventory-management/",
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
      <div className="md:mx-32 mx-5 text-black pt-20 space-y-48 mt-4 mb-12 w-full">
        <div className="flex flex-col-reverse md:flex-row h-full gap-32 w-full">
          <div className="flex flex-col space-y-48 px-6">
            <div className="w-full mx-auto space-y-10">
              <h2 className="text-xl text-gray-500 font-semibold">
                Odoo Analytics
              </h2>
              <h1 className="text-5xl font-bold">
                Odoo Inventory Management
                Dashboard
              </h1>
              <a
                href="https://app.powerbi.com/view?r=eyJrIjoiZjk0ZDhlOTItOWJlNy00ZTY0LTlmMjYtMDI4ZTc2ZTBmYzVhIiwidCI6IjQ0N2UwMzI5LWVhOTItNGIyOC1iY2FiLWY3ZDlmNjcwMGJmZSJ9"
                className="card1  flex justify-end border-2 shadow-xl border-red-400 rounded-xl w-fit p-3 gap-3 items-center"
              >
                <div className=" play-btn"></div>
                <div className="flex ">
                  <div className=" text-black">
                    <p className="font-semibold text-xl">
                      Live Demo
                    </p>
                  </div>
                </div>
              </a>
              <hr></hr>
              {/* watch demo  */}
              {/* <div className="flex justify-center items-center flex-col pb-10">
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
              </div> */}
              <div className="w-full justify-start items-center flex">
                <img
                  src="/images/analytics/inventory-dash1.png"
                  width={800}
                />
              </div>
              <div className="space-y-3">
                <h3 className=" font-bold text-3xl">
                  {" "}
                  Requirements:
                </h3>
                <ul className="leading-loose text-xl list-disc ml-[30px]">
                  <li>
                    {" "}
                    Latest PowerBI Desktop
                    version.
                  </li>
                  <li>
                    {" "}
                    Ensure you have the PowerBI
                    Desktop Connector by
                    Techfinna.{" "}
                    <a
                      className="text-blue-600"
                      href="https://apps.odoo.com/apps/modules/17.0/powerbi_desktop_connector"
                    >
                      Click Here
                    </a>
                  </li>
                  <li>
                    Ensure you have the Inventory
                    Dashboard PBIX file from
                    Techfinna.
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className=" font-bold text-3xl">
                  2. Set-Up:
                </h3>
                <ul className="leading-loose text-xl list-decimal ml-[30px]">
                  <li>
                    {" "}
                    Log in to your Odoo account.
                  </li>
                  {/* <div className="border rounded-sm my-1 bg-[#F9F9F9] p-[22px]">
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
                  /> */}
                  <li>
                    {" "}
                    Select the "Apps" option.
                  </li>
                  <img
                    className="img-fluid img my-5"
                    src="/images/analytics/inventory-dash2.png"
                    alt="odoo-apps"
                    width={800}
                  />
                  <li>
                    {" "}
                    Then, Select "Settings."
                  </li>
                  <img
                    className="img-fluid img my-5"
                    src="/images/analytics/inventory-dash3.png"
                    alt="odoo-apps"
                    width={800}
                  />
                  <li>
                    {" "}
                    Here, you will find the BI
                    connector credentials (URL and
                    token) that you will need to
                    paste when fetching the data.
                    (Reference Point 3 IV)
                  </li>
                  <img
                    className="img-fluid img my-5"
                    src="/images/analytics/inventory-dash4.png"
                    alt="odoo-apps"
                    width={800}
                  />
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className=" font-bold text-3xl">
                  3. Inventory Dashboard:
                </h3>
                {/* <h4 className="font-bold text-xl pt-2">
                  Now, open the Inventory Dashboard PBIX file on your Power BI
                  Desktop.
                </h4> */}
                <ul className="leading-loose text-xl list-decimal ml-[30px]">
                  <li>
                    Now, open the Inventory
                    Dashboard PBIX file on your
                    Power BI Desktop.
                  </li>
                  <img
                    className="img-fluid img my-5"
                    src="/images/analytics/inventory-dash1.png"
                    alt="odoo-apps"
                    width={800}
                  />
                  {/* <div className="border rounded-sm my-1 bg-[#F9F9F9] p-[22px]">
                    <a
                      target="_blank"
                      className="font-sans hover:text-[#2462D0]"
                      href="https://console.cloud.google.com"
                    >
                      console.cloud.google.com
                    </a>
                  </div> */}
                  <li>
                    Next, go to the "Home" tab and
                    select "Transform Data."
                  </li>
                  <img
                    className="img-fluid img my-5"
                    src="/images/analytics/inventory-dash5.png"
                    alt="odoo-apps"
                    width={800}
                  />
                  <li>
                    Select the first table, then
                    open the "Advanced Editor" in
                    the "Home" tab.
                  </li>
                  <img
                    className="img-fluid img my-5"
                    src="/images/analytics/inventory-dash6.png"
                    alt="odoo-apps"
                    width={800}
                  />
                  <li>
                    {" "}
                    Replace the URL and token as
                    specified in point 2(IV)
                    accordingly.
                  </li>
                  <li>
                    After making the changes,
                    repeat this task for all
                    tables.
                  </li>
                  <li>
                    Then, select "Close & Apply"
                    in the "Home" tab.
                  </li>
                  <li>
                    Now, click "Apply Changes" or
                    "Refresh" to refresh the data.
                  </li>
                  <img
                    className="img-fluid img my-5"
                    src="/images/analytics/inventory-dash7.png"
                    alt="odoo-apps"
                    width={800}
                  />
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className=" font-bold text-3xl">
                  4. Dashboard Publishing:
                </h3>
                <ul className="leading-loose text-xl list-disc ml-[30px]">
                  <li>
                    On the "Home" tab, click or
                    select "Publish" in Power BI
                    Desktop.
                  </li>
                  <li>
                    If you're not already signed
                    in to the Power BI service,
                    enter your account details,
                    then click or tap "Sign in."
                  </li>
                  <img
                    className="img-fluid img my-5"
                    src="/images/analytics/inventory-dash8.png"
                    alt="odoo-apps"
                    width={400}
                  />
                  <li>
                    Enter your password, then
                    click or tap "Sign in."
                  </li>
                  <img
                    className="img-fluid img my-5"
                    src="/images/analytics/inventory-dash9.png"
                    alt="odoo-apps"
                    width={400}
                  />
                  <li>
                    Choose a destination for the
                    report, then click or tap
                    "Select."
                  </li>
                  <img
                    className="img-fluid img my-5"
                    src="/images/analytics/inventory-dash10.png"
                    alt="odoo-apps"
                    width={400}
                  />
                  <img
                    className="img-fluid img my-5"
                    src="/images/analytics/inventory-dash11.png"
                    alt="odoo-apps"
                    width={400}
                  />
                  <li>
                    After publishing completes,
                    Open the Power BI service in
                    your browser. Here, you will
                    see your dataset and reports
                    in the Power BI service, which
                    you can share with your
                    colleagues, team, etc.
                  </li>
                  <img
                    className="img-fluid img my-5"
                    src="/images/analytics/inventory-dash12.png"
                    alt="odoo-apps"
                    width={800}
                  />
                </ul>
              </div>
              <div className="">
                <h3 className=" font-bold text-4xl">
                  KPI's Explaination
                </h3>
                <ul className="leading-loose text-xl list-decimal ml-[30px] mt-[40px] space-y-4">
                  <li className="text-2xl">
                    Required Tables
                    <ul className="leading-loose text-lg list-none ml-[30px] flex flex-wrap gap-4 ">
                      <li className="bg-gray-300 border-2 border-green-300 shadow-lg rounded-lg px-2 py-2 my-2 text-gray-700">
                        Stock quant
                      </li>
                      <li className="bg-gray-300 border-2 border-green-300 shadow-lg rounded-lg px-2 py-2 my-2 text-gray-700">
                        Stock move
                      </li>
                      <li className="bg-gray-300 border-2 border-green-300 shadow-lg rounded-lg px-2 py-2 my-2 text-gray-700">
                        Stock location
                      </li>
                      <li className="bg-gray-300 border-2 border-green-300 shadow-lg rounded-lg px-2 py-2 my-2 text-gray-700">
                        Stock warehouse
                      </li>
                      <li className="bg-gray-300 border-2 border-green-300 shadow-lg rounded-lg px-2 py-2 my-2 text-gray-700">
                        Product Product
                      </li>
                      <li className="bg-gray-300 border-2 border-green-300 shadow-lg rounded-lg px-2 py-2 my-2 text-gray-700">
                        Product template
                      </li>
                      <li className="bg-gray-300 border-2 border-green-300 shadow-lg rounded-lg px-2 py-2 my-2 text-gray-700">
                        Product category
                      </li>
                    </ul>
                  </li>
                  <li className="text-2xl">
                    KPI's Explained
                  </li>
                  <img
                    className="img-fluid img my-5"
                    src="/images/analytics/inventory-dash13.png"
                    alt="odoo-apps"
                    width={800}
                  />
                  <div className="flex flex-col justify-start items-start space-y-4">
                    <div className="flex flex-col justify-start items-start gap-2 mt-[30px]">
                      <h3 className="text-2xl">
                        Total Inventory
                      </h3>
                      <p>
                        Represents the total
                        quantity of all items
                        currently held in
                        inventory. It helps to
                        understand overall stock
                        levels and manage
                        inventory effectively to
                        meet customer demand.
                      </p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 mt-[30px]">
                      <h3 className="text-2xl">
                        Total Inventory Value
                      </h3>
                      <p>
                        The monetary value of the
                        total inventory,
                        calculated by multiplying
                        the quantity of each item
                        by its unit cost. It
                        provides insight into the
                        financial investment in
                        inventory, which is
                        essential for budgeting
                        and financial planning.
                      </p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 mt-[30px]">
                      <h3 className="text-2xl">
                        SKUs (Stock Keeping Units)
                      </h3>
                      <p>
                        The total number of unique
                        items or product
                        variations in the
                        inventory, each identified
                        by a unique SKU code. It
                        tracks the diversity of
                        the inventory, aiding in
                        the management of product
                        variety and complexity.
                      </p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 mt-[30px]">
                      <h3 className="text-2xl">
                        Reserved Quantity
                      </h3>
                      <p>
                        The quantity of inventory
                        that has been set aside or
                        reserved to fulfill
                        specific customer orders
                        or for particular
                        purposes. This ensures
                        that sufficient stock is
                        allocated to meet future
                        commitments and prevents
                        double-selling of the same
                        stock.
                      </p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 mt-[30px]">
                      <h3 className="text-2xl">
                        Deadstock
                      </h3>
                      <p>
                        Inventory items that have
                        not been sold or used for
                        a significant period,
                        typically indicating
                        obsolete or slow-moving
                        products. Identifying
                        these items helps in
                        deciding whether to
                        discount, repurpose, or
                        remove them to free up
                        storage space and reduce
                        holding costs.
                      </p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 mt-[30px]">
                      <h3 className="text-2xl">
                        DOH (Days of Inventory on
                        Hand)
                      </h3>
                      <p>
                        The average number of days
                        it would take to sell the
                        entire inventory is based
                        on current sales rates.
                        This metric assesses how
                        efficiently inventory is
                        being managed and aids in
                        forecasting and planning
                        to avoid overstocking or
                        stockouts.
                      </p>
                    </div>
                    <img
                      className="img-fluid img my-5"
                      src="/images/analytics/inventory-dash14.png"
                      alt="odoo-apps"
                      width={400}
                    />
                    <div className="flex flex-col justify-start items-start gap-2 mt-[30px]">
                      <h3 className="text-2xl">
                        Warehouse Position
                      </h3>
                      <p>
                        Inventory value and unit
                        by warehouse location
                        display the distribution
                        of the total inventory
                        value and units across
                        different warehouse
                        locations. Each segment of
                        the donut chart represents
                        a specific warehouse
                        location.
                      </p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 mt-[30px]">
                      <h3 className="text-2xl">
                        Category Position
                      </h3>
                      <p>
                        Inventory value and unit
                        by product category
                        display the distribution
                        of the total inventory
                        value across different
                        product categories. Each
                        block in the tree map
                        represents a specific
                        product category, with the
                        size of each block
                        corresponding to the value
                        of inventory in that
                        category.
                      </p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 mt-[30px]">
                      <h3 className="text-2xl">
                        Top Products
                      </h3>
                      <p>
                        Inventory value and unit
                        by top products display
                        the monetary value of the
                        inventory for the top
                        products. Each bar
                        represents a specific top
                        product, with the length
                        of the bar corresponding
                        to the inventory value of
                        that product. Bars are
                        grouped into clusters,
                        each cluster representing
                        a different product.
                      </p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 mt-[30px]">
                      <h3 className="text-2xl">
                        Products Analysis{" "}
                      </h3>
                      <p>
                        This tabular view provides
                        a detailed overview of
                        each product, including
                        current stock levels,
                        reserved quantities, stock
                        status, inventory value,
                        and the amount of obsolete
                        or slow-moving inventory.
                      </p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 mt-[30px]">
                      <h3 className="text-2xl">
                        Filters & Slicers{" "}
                      </h3>
                      <img
                        className="img-fluid img my-5"
                        src="/images/analytics/inventory-dash15.png"
                        alt="odoo-apps"
                        width={400}
                      />
                      <p>
                        This slicer view allows
                        you to filter and analyze
                        warehouse data by
                        selecting specific years,
                        months, and quarters to
                        focus on inventory trends
                        and performance over
                        different periods.
                      </p>
                    </div>
                  </div>
                </ul>
              </div>
              <h3 className="text-3xl">
                Live Preview
              </h3>
              <div className="border rounded-sm my-1 bg-[#F9F9F9] p-[22px]">
                <a
                  target="_blank"
                  className="font-sans hover:text-[#2462D0]"
                  href="https://app.powerbi.com/view?r=eyJrIjoiZjk0ZDhlOTItOWJlNy00ZTY0LTlmMjYtMDI4ZTc2ZTBmYzVhIiwidCI6IjQ0N2UwMzI5LWVhOTItNGIyOC1iY2FiLWY3ZDlmNjcwMGJmZSJ9"
                >
                  https://app.powerbi.com/view?r=eyJrIjoiZjk0ZDhlOTItOWJlNy00ZTY0LTlmMjYtMDI4ZTc2ZTBmYzVhIiwidCI6IjQ0N2UwMzI5LWVhOTItNGIyOC1iY2FiLWY3ZDlmNjcwMGJmZSJ9
                </a>
              </div>
            </div>
          </div>
          <div className="border h-min p-10 rounded-md drop-shadow-xl duration-300 md:sticky top-20 bottom-0 items-center flex flex-col gap-y-10 w-full md:max-w-[350px]">
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
                </span>
              </p>
              <p className="mt-2 bg-transparent mx-2 text-lg">
                Works well on Odoo Sh and
                on-premises server
              </p>
              <p className="mt-2 bg-transparent mx-2 font-bold">
                Community + Enterprise
              </p>
            </div>
            {/* <div className="flex flex-col gap-3 w-[80%]">
              <Link
                target="_blank"
                href="https://apps.odoo.com/apps/modules/17.0/looker_connector"
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
              <Link
                target="_blank"
                href="https://apps.odoo.com/apps/modules/12.0/looker_sql_connector/"
              >
                <button className="p-1 rounded-md shadow-lg border-[#285a9b] border-2 text-[#285a9b] w-full px-6 py-2  text-center text-xl font-semibold">
                  Custom SQL Query (Add-on)
                </button>
              </Link>
              <button
                // onClick={showModal}
                className="rounded-md shadow-lg border-[#285a9b] border-2 text-[#285a9b] w-full px-6 h-[50px] text-center text-2xl font-bold"
              >
                Try for free
              </button>
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
                  <div className="flex h-8 max-w-full items-center justify-center bg-gray-50 p-2 shadow-md">
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
                  <div className="flex h-8 max-w-full items-center justify-center bg-gray-50 p-2 shadow-md">
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
                  <div className="flex h-8 max-w-full items-center justify-center bg-gray-50 p-2 shadow-md">
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
            </div> */}
          </div>
        </div>
      </div>
      {/* <Modal modalId="modalId" /> */}
    </>
  );
};

export default Inventory;
