"use client";
import React, { useRef } from "react";
import {
  FaAddressCard,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x8p43tj",
        "template_jlna3r1",
        form.current,
        "G1C06YFYj5_11xav4"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Mail Send Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.reset();
  };

  return (
    // <section className="relative z-10 w-3/5 mx-auto  bg-white  py-20 lg:py-[120px]">
    //   <section className="bg-white w-full text-center my-6">
    //     <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    //       <div className="mx-auto  sm:text-center">
    //         <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl ">
    //           Sign up for our newsletter
    //         </h2>
    //         <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl ">
    //           Stay up to date with the roadmap progress, announcements and
    //           exclusive discounts feel free to sign up with your email.
    //         </p>
    //         <form action="#">
    //           <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
    //             <div className="relative w-full">
    //               <label
    //                 htmlhtmlFor="email"
    //                 className="hidden mb-2 text-sm font-medium text-gray-900 "
    //               >
    //                 Email address
    //               </label>
    //               <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    //                 <svg
    //                   className="w-5 h-5 text-gray-500 "
    //                   fill="currentColor"
    //                   viewBox="0 0 20 20"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
    //                   <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
    //                 </svg>
    //               </div>
    //               <input
    //                 className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg
    //                 border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 "
    //                 placeholder="Enter your email"
    //                 type="email"
    //                 id="email"
    //                 required=""
    //               />
    //             </div>
    //             <div>
    //               <button
    //                 type="submit"
    //                 className="text-white p-3 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600
    //                 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300
    //                 font-medium text-md px-5 py-2.5 text-center rounded-r-2 border border-gray-300 rounded-r-md"
    //               >
    //                 Subscribe
    //               </button>
    //             </div>
    //           </div>
    //           <div className="mx-auto max-w-screen-sm text-sm text-center text-gray-500 newsletter-form-footer ">
    //             We care about the protection of your data.{" "}
    //             <a
    //               href="#"
    //               className="font-medium text-primary-600  hover:underline"
    //             >
    //               Read our Privacy Policy
    //             </a>
    //             .
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </section>
    //   <div className="container mx-auto">
    //     <div className="flex flex-wrap -mx-4 lg:justify-between">
    //       <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
    //         <div className="mb-12 max-w-[570px] lg:mb-0">
    //           <div classNameName="text-center">
    //             <h2 className="text-5xl font-extrabold my-4 text-black">
    //               Contact Us
    //             </h2>
    //             <p classNameName="text-xl font-medium my-2 mb-12">
    //               Contact us with your queries or connect with our team
    //             </p>
    //           </div>

    //           <div className="bg-[#353535] mb-8 flex w-full max-w-[370px] mt-12 px-4 py-3 rounded-md boxShadow">
    //             <div className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
    //               <svg
    //                 width="32"
    //                 height="32"
    //                 viewBox="0 0 32 32"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
    //                   fill="currentColor"
    //                 />
    //               </svg>
    //             </div>
    //             <div className="w-full">
    //               <h4 className="mb-1 text-xl font-bold text-white ">
    //                 Our Location
    //               </h4>
    //               <p className="text-base text-body-color ">
    //                 In the Clouds, Serving You Globally!
    //               </p>
    //             </div>
    //           </div>
    //           <div className="bg-[#353535] mb-8 flex w-full max-w-[370px] px-4 py-3 rounded-md boxShadow">
    //             <div className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
    //               <svg
    //                 width="32"
    //                 height="32"
    //                 viewBox="0 0 32 32"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <g clipPath="url(#clip0_941_17577)">
    //                   <path
    //                     d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
    //                     fill="currentColor"
    //                   />
    //                   <path
    //                     d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
    //                     fill="currentColor"
    //                   />
    //                   <path
    //                     d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
    //                     fill="currentColor"
    //                   />
    //                 </g>
    //                 <defs>
    //                   <clipPath id="clip0_941_17577">
    //                     <rect width="32" height="32" fill="white" />
    //                   </clipPath>
    //                 </defs>
    //               </svg>
    //             </div>
    //             <div className="w-full">
    //               <h4 className="mb-1 text-xl font-bold text-white ">
    //                 Phone Number
    //               </h4>
    //               <p className="text-base text-body-color ">+91 908057 27667</p>
    //             </div>
    //           </div>
    //           <div className="bg-[#353535] mb-8 flex w-full max-w-[370px] px-4 py-3 rounded-md boxShadow">
    //             <div className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
    //               <svg
    //                 width="32"
    //                 height="32"
    //                 viewBox="0 0 32 32"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
    //                   fill="currentColor"
    //                 />
    //               </svg>
    //             </div>
    //             <div className="w-full">
    //               <h4 className="mb-1 text-xl font-bold text-white ">
    //                 Email Address
    //               </h4>
    //               <p className="text-base text-body-color ">
    //                 info@techfinna.com
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-full px-4 lg:w-1/2 ">
    //         <div className="relative py-8 px-4 bg-white rounded-lg shadow-lg w-full">
    //           <form>
    //             <div className="mb-6">
    //               <input
    //                 type="text"
    //                 placeholder="Your Name"
    //                 className="bg-white border-stroke text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
    //               />
    //             </div>
    //             <div className="mb-6">
    //               <input
    //                 type="email"
    //                 placeholder="Your Email"
    //                 className="bg-white border-stroke text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
    //               />
    //             </div>
    //             <div className="mb-6">
    //               <input
    //                 type="text"
    //                 placeholder="Your Phone"
    //                 className="bg-white border-stroke text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
    //               />
    //             </div>
    //             <div className="mb-6">
    //               <textarea
    //                 rows="6"
    //                 placeholder="Your Message"
    //                 className="bg-white border-stroke text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
    //               ></textarea>
    //             </div>
    //             <div className="mx-auto px-4">
    //               <button
    //                 type="submit"
    //                 className="relative w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white  focus:ring-4 focus:outline-none focus:ring-green-200 "
    //               >
    //                 <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white w-full  rounded-md group-hover:bg-opacity-0">
    //                   Send
    //                 </span>
    //               </button>
    //             </div>
    //           </form>
    //           <div>
    //             <span className="absolute -top-10 -right-9 z-[-1]">
    //               <svg
    //                 width="100"
    //                 height="100"
    //                 viewBox="0 0 100 100"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   clipRule="evenodd"
    //                   d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
    //                   fill="#3056D3"
    //                 />
    //               </svg>
    //             </span>
    //             <span className="absolute -right-10 top-[90px] z-[-1]">
    //               <svg
    //                 width="34"
    //                 height="134"
    //                 viewBox="0 0 34 134"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <circle
    //                   cx="31.9993"
    //                   cy="132"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 132)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="31.9993"
    //                   cy="117.333"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 117.333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="31.9993"
    //                   cy="102.667"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 102.667)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="31.9993"
    //                   cy="88"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 88)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="31.9993"
    //                   cy="73.3333"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 73.3333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="31.9993"
    //                   cy="45"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 45)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="31.9993"
    //                   cy="16"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 16)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="31.9993"
    //                   cy="59"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 59)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="31.9993"
    //                   cy="30.6666"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 30.6666)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="31.9993"
    //                   cy="1.66665"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 1.66665)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="132"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 132)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="117.333"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 117.333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="102.667"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 102.667)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="88"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 88)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="73.3333"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 73.3333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="45"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 45)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="16"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 16)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="59"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 59)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="30.6666"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 30.6666)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="1.66665"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 1.66665)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="132"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 132)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="117.333"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 117.333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="102.667"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 102.667)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="88"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 88)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="73.3333"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 73.3333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="45"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 45)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="16"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 16)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="59"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 59)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="30.6666"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 30.6666)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="1.66665"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 1.66665)"
    //                   fill="#13C296"
    //                 />
    //               </svg>
    //             </span>
    //             <span className="absolute -left-7 -bottom-7 z-[-1]">
    //               <svg
    //                 width="107"
    //                 height="134"
    //                 viewBox="0 0 107 134"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <circle
    //                   cx="104.999"
    //                   cy="132"
    //                   r="1.66667"
    //                   transform="rotate(180 104.999 132)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="104.999"
    //                   cy="117.333"
    //                   r="1.66667"
    //                   transform="rotate(180 104.999 117.333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="104.999"
    //                   cy="102.667"
    //                   r="1.66667"
    //                   transform="rotate(180 104.999 102.667)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="104.999"
    //                   cy="88"
    //                   r="1.66667"
    //                   transform="rotate(180 104.999 88)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="104.999"
    //                   cy="73.3333"
    //                   r="1.66667"
    //                   transform="rotate(180 104.999 73.3333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="104.999"
    //                   cy="45"
    //                   r="1.66667"
    //                   transform="rotate(180 104.999 45)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="104.999"
    //                   cy="16"
    //                   r="1.66667"
    //                   transform="rotate(180 104.999 16)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="104.999"
    //                   cy="59"
    //                   r="1.66667"
    //                   transform="rotate(180 104.999 59)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="104.999"
    //                   cy="30.6666"
    //                   r="1.66667"
    //                   transform="rotate(180 104.999 30.6666)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="104.999"
    //                   cy="1.66665"
    //                   r="1.66667"
    //                   transform="rotate(180 104.999 1.66665)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="90.3333"
    //                   cy="132"
    //                   r="1.66667"
    //                   transform="rotate(180 90.3333 132)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="90.3333"
    //                   cy="117.333"
    //                   r="1.66667"
    //                   transform="rotate(180 90.3333 117.333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="90.3333"
    //                   cy="102.667"
    //                   r="1.66667"
    //                   transform="rotate(180 90.3333 102.667)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="90.3333"
    //                   cy="88"
    //                   r="1.66667"
    //                   transform="rotate(180 90.3333 88)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="90.3333"
    //                   cy="73.3333"
    //                   r="1.66667"
    //                   transform="rotate(180 90.3333 73.3333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="90.3333"
    //                   cy="45"
    //                   r="1.66667"
    //                   transform="rotate(180 90.3333 45)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="90.3333"
    //                   cy="16"
    //                   r="1.66667"
    //                   transform="rotate(180 90.3333 16)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="90.3333"
    //                   cy="59"
    //                   r="1.66667"
    //                   transform="rotate(180 90.3333 59)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="90.3333"
    //                   cy="30.6666"
    //                   r="1.66667"
    //                   transform="rotate(180 90.3333 30.6666)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="90.3333"
    //                   cy="1.66665"
    //                   r="1.66667"
    //                   transform="rotate(180 90.3333 1.66665)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="75.6654"
    //                   cy="132"
    //                   r="1.66667"
    //                   transform="rotate(180 75.6654 132)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="31.9993"
    //                   cy="132"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 132)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="75.6654"
    //                   cy="117.333"
    //                   r="1.66667"
    //                   transform="rotate(180 75.6654 117.333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="31.9993"
    //                   cy="117.333"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 117.333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="75.6654"
    //                   cy="102.667"
    //                   r="1.66667"
    //                   transform="rotate(180 75.6654 102.667)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="31.9993"
    //                   cy="102.667"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 102.667)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="75.6654"
    //                   cy="88"
    //                   r="1.66667"
    //                   transform="rotate(180 75.6654 88)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="31.9993"
    //                   cy="88"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 88)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="75.6654"
    //                   cy="73.3333"
    //                   r="1.66667"
    //                   transform="rotate(180 75.6654 73.3333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="31.9993"
    //                   cy="73.3333"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 73.3333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="75.6654"
    //                   cy="45"
    //                   r="1.66667"
    //                   transform="rotate(180 75.6654 45)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="31.9993"
    //                   cy="45"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 45)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="75.6654"
    //                   cy="16"
    //                   r="1.66667"
    //                   transform="rotate(180 75.6654 16)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="31.9993"
    //                   cy="16"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 16)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="75.6654"
    //                   cy="59"
    //                   r="1.66667"
    //                   transform="rotate(180 75.6654 59)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="31.9993"
    //                   cy="59"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 59)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="75.6654"
    //                   cy="30.6666"
    //                   r="1.66667"
    //                   transform="rotate(180 75.6654 30.6666)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="31.9993"
    //                   cy="30.6666"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 30.6666)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="75.6654"
    //                   cy="1.66665"
    //                   r="1.66667"
    //                   transform="rotate(180 75.6654 1.66665)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="31.9993"
    //                   cy="1.66665"
    //                   r="1.66667"
    //                   transform="rotate(180 31.9993 1.66665)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="60.9993"
    //                   cy="132"
    //                   r="1.66667"
    //                   transform="rotate(180 60.9993 132)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="132"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 132)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="60.9993"
    //                   cy="117.333"
    //                   r="1.66667"
    //                   transform="rotate(180 60.9993 117.333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="117.333"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 117.333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="60.9993"
    //                   cy="102.667"
    //                   r="1.66667"
    //                   transform="rotate(180 60.9993 102.667)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="102.667"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 102.667)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="60.9993"
    //                   cy="88"
    //                   r="1.66667"
    //                   transform="rotate(180 60.9993 88)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="88"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 88)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="60.9993"
    //                   cy="73.3333"
    //                   r="1.66667"
    //                   transform="rotate(180 60.9993 73.3333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="73.3333"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 73.3333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="60.9993"
    //                   cy="45"
    //                   r="1.66667"
    //                   transform="rotate(180 60.9993 45)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="45"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 45)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="60.9993"
    //                   cy="16"
    //                   r="1.66667"
    //                   transform="rotate(180 60.9993 16)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="16"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 16)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="60.9993"
    //                   cy="59"
    //                   r="1.66667"
    //                   transform="rotate(180 60.9993 59)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="59"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 59)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="60.9993"
    //                   cy="30.6666"
    //                   r="1.66667"
    //                   transform="rotate(180 60.9993 30.6666)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="30.6666"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 30.6666)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="60.9993"
    //                   cy="1.66665"
    //                   r="1.66667"
    //                   transform="rotate(180 60.9993 1.66665)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="17.3333"
    //                   cy="1.66665"
    //                   r="1.66667"
    //                   transform="rotate(180 17.3333 1.66665)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="46.3333"
    //                   cy="132"
    //                   r="1.66667"
    //                   transform="rotate(180 46.3333 132)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="132"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 132)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="46.3333"
    //                   cy="117.333"
    //                   r="1.66667"
    //                   transform="rotate(180 46.3333 117.333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="117.333"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 117.333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="46.3333"
    //                   cy="102.667"
    //                   r="1.66667"
    //                   transform="rotate(180 46.3333 102.667)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="102.667"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 102.667)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="46.3333"
    //                   cy="88"
    //                   r="1.66667"
    //                   transform="rotate(180 46.3333 88)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="88"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 88)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="46.3333"
    //                   cy="73.3333"
    //                   r="1.66667"
    //                   transform="rotate(180 46.3333 73.3333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="73.3333"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 73.3333)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="46.3333"
    //                   cy="45"
    //                   r="1.66667"
    //                   transform="rotate(180 46.3333 45)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="45"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 45)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="46.3333"
    //                   cy="16"
    //                   r="1.66667"
    //                   transform="rotate(180 46.3333 16)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="16"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 16)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="46.3333"
    //                   cy="59"
    //                   r="1.66667"
    //                   transform="rotate(180 46.3333 59)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="59"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 59)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="46.3333"
    //                   cy="30.6666"
    //                   r="1.66667"
    //                   transform="rotate(180 46.3333 30.6666)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="30.6666"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 30.6666)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="46.3333"
    //                   cy="1.66665"
    //                   r="1.66667"
    //                   transform="rotate(180 46.3333 1.66665)"
    //                   fill="#13C296"
    //                 />
    //                 <circle
    //                   cx="2.66536"
    //                   cy="1.66665"
    //                   r="1.66667"
    //                   transform="rotate(180 2.66536 1.66665)"
    //                   fill="#13C296"
    //                 />
    //               </svg>
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div className=" md:px-24 md:py-10  text-center">
      <div className="rounded-xl lg:shadow-xl py-20 lg:ps-20 grid  lg:grid-cols-2 gap-5 items-center">
        <div className="px-4 text-left">
          <h3 className="text-3xl font-extrabold text-black">
            Get in Touch
          </h3>
          <p className="py-6 text-[15px] font-thin text-[#464154]">
            Reach out to us with your queries,
            ideas, or project dreams
            <span className="font-normal">
              !
            </span>{" "}
            Our contact form is your gateway to
            seamless communication, top
            <span className="font-normal">-</span>
            notch solutions, and personalized
            attention. Let
            <span className="font-normal">'</span>
            s turn your vision into reality
            together
            <span className="font-normal">!</span>
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <div className="form-control">
              <input
                type="text"
                placeholder="name"
                className="input bg-white my-2 rounded-none border border-gray-300"
                name="user_name"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="email"
                className="input bg-white my-2 rounded-none border border-gray-300"
                name="user_email"
              />
            </div>
            <div className="form-control">
              <textarea
                className="textarea bg-white rounded-none border border-gray-300 my-2 text-black"
                placeholder="message"
                name="message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              {/* <input className='btn bg-black text-white rounded-none hover:bg-[#34306c]' value="Send" /> */}
              <input
                type="submit"
                value="Send"
                className="btn bg-black text-white rounded-none hover:bg-[#34306c]"
              />
            </div>
          </form>
        </div>
        <div className="lg:ms-24">
          <div className="justify-end bg-black md:ms-24 my-12 md:rounded-s-2xl p-10 py-14 text-white text-left items-center">
            <h3 className="text-2xl font-extrabold bg-black">
              Connect and reach us
            </h3>
            <div className="pt-10 space-y-2 bg-black">
              <div className="flex space-x-5 items-center bg-black">
                <FaWhatsapp className="bg-black"></FaWhatsapp>
                <p className=" text-[15px] font-thin bg-black">
                  Whatsapp : <br />
                  <a
                    href="https://wa.me/916230927667"
                    className="bg-black"
                  >
                    <span className="font-normal bg-black">
                      +
                    </span>
                    91 62309 27667
                  </a>
                </p>
              </div>
              <div className="flex space-x-5 items-center bg-black">
                <FaEnvelope className="bg-black"></FaEnvelope>
                <p className=" text-[15px] font-thin bg-black">
                  email: <br />
                  <span className="bg-black">
                    info
                    <span className="font-normal bg-black">
                      @
                    </span>
                    techfinna.com
                  </span>
                </p>
              </div>
              <div className="flex space-x-5 items-center bg-black">
                <FaAddressCard className="bg-black"></FaAddressCard>
                <p className="bg-black text-[15px] font-thin ">
                  address: <br />
                  <span className="bg-black">
                    In the Clouds, Serving You
                    Globally
                    <span className="font-normal bg-black">
                      !
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
