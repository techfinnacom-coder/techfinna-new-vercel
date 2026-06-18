const Features = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-y-10 justify-between items-center">
      <div className="w-full md:w-[500px] space-y-10">
        <h2 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-10">
          Core Features:
        </h2>
        <p className="text-xl">
          <span className="font-bold">Unified Platform:</span> Manage all your
          e-commerce operations from a single Odoo interface.
        </p>
        <p className="text-xl">
          <span className="font-bold">Real-time Synchronization:</span> Keep
          inventory, orders, and customer data in sync across all channels.
        </p>
        <p className="text-xl">
          <span className="font-bold">Streamlined Order Fulfillment:</span>{" "}
          Automate order processing for faster, error-free fulfillment.
        </p>
        <p className="text-xl">
          <span className="font-bold">Analytics and Reporting:</span> Gain
          insights into your sales data to drive informed business decisions.
        </p>
        <p className="text-xl">
          <span className="font-bold">Scalable Solution:</span> Whether you’re
          growing fast or already at scale, our connector grows with you.
        </p>
      </div>
      <div>
        <img width={600} src="\images\commercesuite.png" alt="commercesuite" />
      </div>
    </div>
  );
};

export default Features;
