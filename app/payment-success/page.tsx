import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Success",
  description:
    "After a successful & secure payment you will receive a mail consisting your order details. If facing any issue, contact us at info@techfinna.com",
};

export default function PaymentSuccess() {
  return (
    <main className="w-full ">
      <div className="flex flex-col justify-center items-center mx-auto p-10 text-white text-center border m-10 rounded-md bg-[#12c06a] ">
        <img src="/images/payment/success.gif" width={600} />
        <Link
          href={"/"}
          className="bg-white text-white bg-opacity-30 p-4 rounded-xl"
        >
          ← Go Home
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center text-black">
        <h3 className="text-4xl !font-sans font-medium">
          Congratulations! You have successfully bought the module
        </h3>
        <p className="pt-12 text-gray-500 w-1/2 text-center text-xl">
          Check your registered email for invoice and payment details. The
          module details are provided along with it. Our team will shortly get
          back to you, contact us info@techfinna.com
        </p>
      </div>
    </main>
  );
}
