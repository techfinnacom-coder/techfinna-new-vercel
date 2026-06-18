const FeaturesDiscodoo = () => {
  return (
    <div className="px-3 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10  items-center">
        <div className="border-l p-5">
          <div className="text-left space-y-3">
            <h4 className="text-2xl font-bold text-black">
              Real Time Lead Updates
            </h4>
            <p className="font-light text-sm text-black">
              Stay informed about new leads generated in Odoo directly from your
              Discord server. Discodoo sends instant notifications to keep your"
              team up<span className="font-normal">-</span>to
              <span className="font-normal">-</span>date, ensuring no
              opportunity goes unnoticed.
            </p>
          </div>
        </div>
        <div className="border-l p-5">
          <div className="text-left space-y-3">
            <h4 className="text-2xl font-bold text-black">
              Instant Sales Orders
            </h4>
            <p className="font-light text-sm text-black">
              Create and manage sales orders effortlessly through Discord.
              Discodoo enables you to swiftly generate sales orders in Odoo,
              ensuring quick and efficient transactions.
            </p>
          </div>
        </div>
        <div className="border-l p-5">
          <div className="text-left space-y-3">
            <h4 className="text-2xl font-bold text-black">
              Customizable Alerts
            </h4>
            <p className="font-light text-sm text-black">
              Set up personalized alerts to monitor specific events in Odoo.
              Discodoo provides flexibility in configuring notifications based
              on your business needs.
            </p>
          </div>
        </div>
        <div className="border-l p-5">
          <div className="text-left space-y-3">
            <h4 className="text-2xl font-bold text-black">
              Interactive Dashboards
            </h4>
            <p className="font-light text-sm text-black">
              Access real time insights and key metrics from Odoo right within
              Discord. Discodoo<span className="font-normal">'</span>s
              interactive dashboards empower you with the data you need to make
              informed decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesDiscodoo;
