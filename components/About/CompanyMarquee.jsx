import React from "react";

const CompanyMarquee = () => {
  return (
    <div className="mt-8 relative flex flex-col justify-center  overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 bg-white">
        <div className="text-center">
          <div
            x-data="{}"
            x-init="$nextTick(() => {
              let ul = $refs.logos;
              ul.insertAdjacentHTML('afterend', ul.outerHTML);
              ul.nextSibling.setAttribute('aria-hidden', 'true');
          })"
            className=" w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul
              x-ref="logos"
              className=" flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-time"
            >
              <li className="">
                <img
                  width={"150px"}
                  className=""
                  src="/images/company/1.png"
                  alt="Facebook"
                />
              </li>
              <li className="">
                <img
                  width={"150px"}
                  className=""
                  src="/images/company/2.png"
                  alt="Disney"
                />
              </li>
              <li className="">
                <img
                  width={"150px"}
                  className=""
                  src="/images/company/3.png"
                  alt="Airbnb"
                />
              </li>
              <li className="">
                <img
                  width={"150px"}
                  className=""
                  src="/images/company/4.png"
                  alt="Apple"
                />
              </li>
              <li className="">
                <img
                  width={"150px"}
                  className=""
                  src="/images/company/5.png"
                  alt="Spark"
                />
              </li>
              <li className="">
                <img
                  width={"150px"}
                  className=""
                  src="/images/company/6.png"
                  alt="Samsung"
                />
              </li>
              <li className="">
                <img
                  width={"150px"}
                  className=""
                  src="/images/company/7.png"
                  alt="Quora"
                />
              </li>
              <li className="">
                <img
                  width={"150px"}
                  className=""
                  src="/images/company/8.png"
                  alt="Sass"
                />
              </li>
              <li className="">
                <img
                  width={"150px"}
                  className=""
                  src="/images/company/9.webp"
                  alt="Sass"
                />
              </li>
              <li className="">
                <img className="" src="/images/company/10.svg" alt="Sass" />
              </li>
              <li className="">
                <img
                  width={"150px"}
                  className=""
                  src="/images/company/1.png"
                  alt="Facebook"
                />
              </li>
              <li className="">
                <img
                  width={"150px"}
                  className=""
                  src="/images/company/2.png"
                  alt="Disney"
                />
              </li>
              <li className="">
                <img
                  width={"150px"}
                  className=""
                  src="/images/company/3.png"
                  alt="Airbnb"
                />
              </li>
              <li className="">
                <img
                  width={"150px"}
                  className=""
                  src="/images/company/4.png"
                  alt="Apple"
                />
              </li>
              <li className="">
                <img
                  width={"150px"}
                  className=""
                  src="/images/company/5.png"
                  alt="Spark"
                />
              </li>
              <li className="">
                <img
                  width={"150px"}
                  className=""
                  src="/images/company/6.png"
                  alt="Samsung"
                />
              </li>
              <li className="">
                <img
                  width={"150px"}
                  className=""
                  src="/images/company/7.png"
                  alt="Quora"
                />
              </li>
              <li className="">
                <img
                  width={"150px"}
                  className=""
                  src="/images/company/8.png"
                  alt="Sass"
                />
              </li>
              <li className="">
                <img
                  width={"150px"}
                  className=""
                  src="/images/company/9.webp"
                  alt="Sass"
                />
              </li>
              <li className="">
                <img className="" src="/images/company/10.svg" alt="Sass" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyMarquee;
