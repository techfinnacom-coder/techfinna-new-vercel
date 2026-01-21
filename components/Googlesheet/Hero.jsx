const Hero = () => {
  return (
    <div className="w-full text-justify space-y-5">
      <h1 className="text-5xl text-start md:text-7xl">
        Google Sheets Odoo Connector
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-4 justify-between items-center">
        <h2 className="text-xl">Data Sync in Just Two Clicks</h2>
        <a
          href="/demo/odoo-google-sheets-connector/"
          className="card1  flex justify-end border-2 shadow-xl border-red-400 rounded-xl w-fit p-3 gap-3 items-center"
        >
          <div className=" play-btn"></div>
          <div className="flex ">
            <div className=" text-black">
              <p className="font-semibold text-xl">Live Demo</p>
            </div>
          </div>
        </a>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center pb-5 w-full">
        <img
          width={"100%"}
          src="\images\googlesheets\main.png"
          alt="googlesheets odoo connector"
        />
      </div>
      <p className="text-lg">
        Unlock the full potential of your data with{" "}
        <b>Google Spreadsheet Connector</b>. Designed for simplicity, our tool
        bridges the gap between Odoo and Google Sheets, transforming the tedious
        task of <b>data transfer into a two-click triumph</b>. Embrace the power
        of real-time, effortless synchronization without ever wrestling with
        complex APIs or manual setups. Experience the future of data management
        — now at your fingertips.
      </p>
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
                src="https://www.youtube.com/embed/Soc4hAvT8-I?si=U4_gB0lX7U9dDKIn"
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
    </div>
  );
};

export default Hero;
