"use client";
import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import "../../removeHeader.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import the navigation styles
// Import required modules
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import products from "../../data/products.json";

// Test key
// const stripePromise = loadStripe(
//   `${process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY}`
// );

// Live key
const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);

const AdvanceBI = () => {
  const currentProduct = products.filter(
    (obj) => obj.href == "/odoo-powerbi-advance-connector/"
  );
  const amount = currentProduct[0].price;
  const reviews = [
    {
      id: "1",
      image: "/images/company/1.png",
      name: "Garud El",
      position: "CEO",
      description: "Works good on my data sets and good team support",
    },
    {
      id: "2",
      image: "/images/company/2.png",
      name: "Cam Troung Du",
      position: "CTO",
      description: "Great app and excellent on customer support",
    },
    {
      id: "3",
      image: "/images/company/3.png",
      name: "Farma Go",
      position: "Head Sales",
      description:
        "Easy to Set Up. I recommend this module for those who want to connect their Odoo to Looker Studio",
    },
  ];

  return (
    <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row justify-center items-center ">
      <div className="flex flex-col w-full md:w-1/2 bg-white py-10 md:py-2 px-6 md:px-24">
        <div className="flex items-center space-x-4 pb-4 text-left text-black">
          {/* <div className="relative h-[72px] w-[128px] flex-shrink-0 overflow-hidden rounded">
            <img
              alt="logo"
              loading="lazy"
              width="256"
              height="144"
              decoding="async"
              data-nimg="1"
              className="object-contain"
              src="/images/youtube/powerbi-thumbnail.png"
            />
          </div> */}
          <div className="flex-grow">
            <h3 className="font-semibold" data-testid="purchase-item">
              Odoo PowerBI Advance Connector
            </h3>
            <div className="mt-1 text-sm">
              PowerBI Advance Connector module offers advanced features with
              basic connector
            </div>
          </div>
        </div>
        <hr className="w-[90%] bg-gray-200 mx-auto h-[.5px] rounded-lg"></hr>
        <div className="items-center space-y-2 py-4 text-black ">
          <div className="flex justify-between text-base ">
            <span>Price</span> <span className="font-semibold">${amount}</span>
          </div>
          <div className="flex justify-between text-base ">
            <span>
              Custom SQL PowerBI Connector{" "}
              <span className="font-semibold">(Free)</span>{" "}
            </span>{" "}
            <span className="font-semibold">$0</span>
          </div>
          <div className="flex justify-between text-base ">
            <span>
              Installation Demo <span className="font-semibold">(Free)</span>{" "}
            </span>{" "}
            <span className="font-semibold">$0</span>
          </div>
        </div>
        <hr className="w-[90%] bg-gray-200 mx-auto h-[.5px] rounded-lg"></hr>
        <div className="items-center space-x-2 pt-4 pb-4 text-black">
          <div className="flex items-center justify-between">
            <span className="text-lg">
              Total <span className="text-sm text-gray-600"></span>
            </span>
            <span className="text-2xl font-semibold">
              <span
                className="mr-2 text-sm font-normal text-gray-600"
                id="currency-code"
              >
                USD
              </span>
              $<span data-testid="checkout-total-price">{amount}</span>
            </span>
          </div>
        </div>
        <div id="testimony" className="md:py-10  items-center ">
          <div className="text-left">
            <div className=" rounded-lg py-6">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                autoplay={{ delay: 3000 }}
                modules={[FreeMode, Navigation, Autoplay]} // Include the Navigation and Autoplay modules
                navigation={true} // Enable navigation
                className="mySwiper text-left order-2 md:order-1"
              >
                {reviews.map((review) => (
                  <div key={review.id}>
                    <SwiperSlide>
                      <div className="swiper-text ">
                        <span className="py-2 text-left text-[16px] text-[#464154]">
                          "{review.description}"
                        </span>
                        <div className="flex justify-center items-center p-2 py-3 rounded">
                          <div className="w-[25px] h-[25px] md:w-[50px] md:h-[50px] mx-5">
                            <img
                              src={review.image}
                              alt="client review for projects"
                              width={"50px"}
                              height={"50px"}
                            />
                          </div>
                          <div className="text-left ">
                            <span className="md:text-xl text-black font-bold">
                              {review.name}
                            </span>
                            <br />
                            <span className="text-blue-300 text-sm font-medium">
                              {review.position}
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-2 md:mt-10">
          <div className="flex h-8 max-w-full items-center justify-center bg-gray-50 p-2">
            <img
              loading="lazy"
              alt="Mastercard"
              width="42"
              height="22"
              decoding="async"
              data-nimg="1"
              className="object-contain"
              src="https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Fpayments%2Fmastercard.svg&amp;w=84&amp;q=70&amp;output=webp"
            />
          </div>
          <div className="flex h-8 max-w-full items-center justify-center bg-gray-50 p-2">
            <img
              loading="lazy"
              alt="Stripe"
              width="56"
              height="28"
              decoding="async"
              data-nimg="1"
              className="object-contain"
              src="/images/payment/americanExpress.png"
            />
          </div>
          <div className="flex h-8 max-w-full items-center justify-center bg-gray-50 p-2">
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
          <div className="flex h-8 max-w-full items-center justify-center bg-gray-50 p-2">
            <img
              loading="lazy"
              alt="Stripe"
              width="56"
              height="28"
              decoding="async"
              data-nimg="1"
              className="object-contain"
              src="/images/payment/Maestro-logo.png"
            />
          </div>
        </div>
        <hr className="w-[90%] bg-gray-200 mx-auto h-[.5px] rounded-lg mt-10"></hr>

        <p className="text-gray-500 mt-10">
          Copyright TechFinna © 2024. All rights reserved by TechFinna.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-gray-100 py-12  px-4 ">
        <a
          href="/"
          className="flex justify-end items-center w-[80%] gap-3 logo-container"
        >
          <img
            className="logo -mt-2 tracking-wider"
            src="/images/techfinna-logo.png"
            alt="Techfinna logo"
            width="50px"
          />
          <h2 className="text-black">TECHFINNA</h2>
        </a>
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubcurrency(amount),
            currency: "usd",
          }}
        >
          <CheckoutPage
            amount={amount}
            productName={`powerbi_advance_connector`}
          />
        </Elements>
      </div>
    </div>
  );
};

export default AdvanceBI;
