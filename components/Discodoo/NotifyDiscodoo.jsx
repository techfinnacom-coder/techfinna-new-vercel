"use client";
import Swal from "sweetalert2";
const NotifyDiscodoo = () => {
  const notifyMail = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;

    // console.log(email);

    fetch(
      `https://script.google.com/macros/s/AKfycbwPOZu1qja3sJweAGZLDxKHhjIfuG2WzFdCQW5TZK5MtIKTu83nipyfWwW8NICtKw1J/exec?Email=${email}`,
      { method: "POST" }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully done",
          showConfirmButton: false,
          timer: 1500,
        });
      });

    form.reset();
  };

  return (
    <div>
      <div className="px-3 md:px-20 md:py-10">
        <div className="px-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-left order-2 md:order-1">
            <h6 className="text-[13px] text-[#464154] font-extrabold py-6">
              Be the First to Know
            </h6>
            <h1 className="text-4xl font-extrabold text-black">
              Get Notified When We Go Live!
            </h1>
            <p className="py-6 text-[15px] font-light text-[#464154]">
              Be among the first to experience the power of Discodoo. Register
              for pre<span className="font-normal">-</span>sale notifications,
              and we<span className="font-normal">'</span>ll keep you informed
              about its launch. Don<span className="font-normal">'</span>t miss
              out on the chance to unlock the full potential of your Discord and
              Odoo integration.
            </p>
            <div className="py-3 w-full">
              <form onSubmit={notifyMail} className="w-full">
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Your Email"
                  className="border border-black p-3 w-2/3"
                />
                <input
                  type="submit"
                  value="Notify on launch"
                  className="p-3 bg-black text-white rounded-none border border-black"
                />
              </form>
              <p className="py-3">
                Stay tuned and harness the power of automation with Discodoo.
                You can also register your interest now at info
                <span className="font-normal">@</span>techfinna.com.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/images/stay-tuned.jpg"
              alt="get notified when we launch discodoo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotifyDiscodoo;
