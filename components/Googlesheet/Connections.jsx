const Connections = () => {
  return (
    <div className="w-full flex flex-col md:flex-row text-justify gap-y-10 justify-between items-center">
      <div className="w-full space-y-10">
        <div>
          <h1 className="text-3xl md:text-5xl leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#32C2C8] to-[#2E0965] mb-5">
            Step-by-Step Guide:
          </h1>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-2">🔹 Connect in a Snap:</h3>
          <p className="text-xl text-left px-5 text-gray-500">
            <b>Set Up and Authenticate with ease—</b>just input your Odoo URL
            and token, and you're good to go. (Can be found in Odoo settings
            after connector module is installed on your Odoo)
          </p>
          <img
            className="px-5"
            src="\images\googlesheets\odoourl.png"
            alt="googlesheet odoo connector"
          />
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-2">🔹 Choose Your Data:</h3>
          <p className="text-xl text-left px-5 text-gray-500">
            <b>Select the tables</b> you need <b>with a simple checklist</b> and
            watch as they populate in individual sheets, all named and
            organized. (A list of all your Odoo tables will be shown after
            connection)
          </p>
          <img
            className="px-5 mt-5"
            src="\images\googlesheets\selectitems.png"
            alt="googlesheet odoo connector"
          />
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-2">🔹 Full Data Control:</h3>
          <p className="text-xl px-5 text-gray-500">
            Your Odoo tables are now in Sheets, ready for analysis, reporting,
            and sharing—data management has never been this smooth. (The tables
            you selected will automatically populate into independent sheets)
          </p>
          <img
            className="px-5 mt-5"
            src="\images\googlesheets\odootosheets.png"
            alt="googlesheet odoo connector"
          />
        </div>
      </div>
    </div>
  );
};

export default Connections;
