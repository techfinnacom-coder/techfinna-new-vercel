const Connections = () => {
  return (
    <div className="w-full flex flex-col md:flex-row text-justify gap-y-10 justify-between items-center !mt-12">
      <div className="w-full space-y-10">
        <div>
          <h1 className="text-3xl md:text-5xl leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#32C2C8] to-[#2E0965] mb-5">
            Functionality:
          </h1>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-2xl mb-2">
            🔹 Insert your SQL query in 'Enter SQL Query':
          </h3>
          <p className="text-xl text-left px-5 text-gray-500">
            <b>eg:</b> SELECT * FROM RES_USERS
          </p>
          <img
            className="px-5"
            src="/images/looker-sql/image1.png"
            alt="Looker SQL Query Execution"
          />
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-2xl mb-2">
            🔹 Check columns and schema:
          </h3>

          <img
            className="px-5"
            src="/images/looker-sql/image2.png"
            alt="Looker SQL Query Execution"
          />
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-2xl mb-2">
            🔹 Understand Data with Google Looker Studio:
          </h3>

          <img
            className="px-5"
            src="/images/looker-sql/image3.png"
            alt="Looker SQL Query Execution"
          />
        </div>
      </div>
    </div>
  );
};

export default Connections;
