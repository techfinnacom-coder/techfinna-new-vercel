import React from "react";

const Dashboards = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#020817] w-full py-10 ">
      <div className="w-[80%]">
        <div className="text-center py-4">
          <h2 className="text-3xl md:text-5xl font-extrabold my-4 text-white flex text-center justify-center items-center gap-4">
            Glimpses of our Dashboards
            <svg
              height="60px"
              width="60px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 505 505"
            >
              <circle
                className="bg-[#90DFAA]"
                fill="#90DFAA"
                cx="252.5"
                cy="252.5"
                r="252.5"
              />
              <path
                fill="#ffffff"
                d="M360.5,138H134.6c-2.7,0-4.8,2.2-4.8,4.8v225.9c0,2.7,2.2,4.8,4.8,4.8h225.9c2.7,0,4.8-2.2,4.8-4.8  V142.8C365.4,140.2,363.2,138,360.5,138z M355.7,194.5h-46.8v-46.8h46.8V194.5z M252.4,194.5v-46.8h46.8v46.8H252.4z M299.2,204.2  V251h-46.8v-46.8H299.2z M242.7,194.5h-46.8v-46.8h46.8V194.5z M242.7,204.2V251h-46.8v-46.8H242.7z M186.2,251h-46.8v-46.8h46.8  V251z M186.2,260.7v46.8h-46.8v-46.8H186.2z M195.9,260.7h46.8v46.8h-46.8V260.7z M242.7,317.1v46.8h-46.8v-46.8H242.7z   M252.4,317.1h46.8v46.8h-46.8L252.4,317.1L252.4,317.1z M252.4,307.5v-46.8h46.8v46.8H252.4z M308.9,260.7h46.8v46.8h-46.8V260.7z   M308.9,251v-46.8h46.8V251H308.9z M186.2,147.7v46.8h-46.8v-46.8H186.2z M139.4,317.1h46.8v46.8h-46.8V317.1z M308.9,363.9v-46.8  h46.8v46.8H308.9z"
              />
              <path
                fill="#FF7058"
                d="M170.1,323.8c-0.6,0-1.3-0.1-1.9-0.3c-3.2-1.1-4.9-4.5-3.8-7.7l16.6-49.1c2.1-6.5,4.5-13.8,10-19.4  c3.1-3.1,12.4-12.5,22.1-8.8c11.2,4.2,13.2,22,14.3,41.3c0.2,2.7,0.3,5,0.5,6.5c0.1,1.1,0.3,3,0.7,3.5c0.3,0.4,1.8,1,4.7,0.9  c2.3-0.1,3.9-0.4,5.1-1.1c2.7-1.5,4.6-5.3,5.9-12.1c1-5.4,1.7-11,2-16.5c0.1-1,0.1-2.1,0.2-3.1c0.3-4.6,0.5-9.4,1.7-14.3  c1.9-7.6,5.9-13.7,11.2-17.2c4.9-3.2,11.2-4.5,18.8-3.9c2.6,0.2,5.7,0.7,8.5,2.6c2.9,2,4.5,4.9,5.6,7c4.1,7.5,9.7,17.1,17.2,25.2  c7.2,7.8,15.5,13.2,23.9,15.7c3.2,1,5,4.3,4.1,7.5c-1,3.2-4.3,5-7.5,4.1c-10.5-3.1-20.6-9.7-29.3-19.1c-8.4-9.1-14.6-19.5-19-27.7  c-0.6-1-1.3-2.4-1.8-2.7c-0.2-0.2-0.9-0.4-2.6-0.5c-4.9-0.4-8.7,0.3-11.3,2c-3.8,2.5-5.4,7.3-6.1,9.9c-0.9,3.8-1.1,7.8-1.4,12.1  c-0.1,1.1-0.1,2.2-0.2,3.3c-0.4,6-1.1,12-2.2,17.9c-1.2,6.7-3.9,16.2-12.1,20.6c-3.7,1.9-7.6,2.3-10.2,2.4  c-8.5,0.4-12.8-2.9-14.9-5.7c-2.4-3.2-2.8-7-3.1-9.5c-0.2-1.9-0.3-4.3-0.5-7.2c-1.4-23.9-4.3-29.9-6.5-30.7c-0.6-0.2-3.6,0.4-9.2,6  c-3.5,3.5-5.3,8.9-7.1,14.6l-0.8,2.5l-15.8,46.7C175,322.2,172.7,323.8,170.1,323.8z"
              />
              <g>
                <polygon
                  fill="#ffffff"
                  points="124.4,378.9 393.9,378.9 393.9,364.3 139,364.3 139,109.5 124.4,109.5  "
                />
                <polygon
                  fill="#ffffff"
                  points="388.5,344.9 388.5,398.7 424.9,371.8  "
                />
                <polygon
                  fill="#ffffff"
                  points="105.3,117.7 159.1,117.7 132.2,81.3  "
                />
              </g>
            </svg>
          </h2>
          <p className="text-xl font-medium my-2 mb-12 text-white/90">
            We specialize in making custom dashboards
          </p>
        </div>
        <div className="dashboard-slider">
          <div>
            <img src="/images/analytics/bi-dashboard.webp" width={400} />
            <img src="/images/analytics/looker-dashboard.png" width={400} />
            <img src="/images/analytics/biconnectionDash.png" width={400} />
            <img src="/images/analytics/bi-dashboard.webp" width={400} />
            <img src="/images/analytics/looker-dashboard.png" width={400} />
            <img src="/images/analytics/biconnectionDash.png" width={400} />
          </div>

          <div>
            <img src="/images/analytics/bi-dashboard.webp" width={400} />
            <img src="/images/analytics/looker-dashboard.png" width={400} />
            <img src="/images/analytics/biconnectionDash.png" width={400} />
            <img src="/images/analytics/bi-dashboard.webp" width={400} />
            <img src="/images/analytics/looker-dashboard.png" width={400} />
            <img src="/images/analytics/biconnectionDash.png" width={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
