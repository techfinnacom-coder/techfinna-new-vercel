import { useState } from "react";
import { motion } from "framer-motion";

const Rfq = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full py-20 px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-black bg-black/5 px-4 py-2 rounded-full mb-4 backdrop-blur-sm border border-black/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 117 117"
              version="1.1"
            >
              <script
                xmlns=""
                src="chrome-extension://hoklmmgfnpapgjgcpechhaamimifchmp/frame_ant/frame_ant.js"
              />

              <title />

              <desc />

              <defs />

              <g
                fill="none"
                fill-rule="evenodd"
                id="Page-1"
                stroke="none"
                stroke-width="1"
              >
                <g fill-rule="nonzero" id="add">
                  <path
                    d="M58.5,0.5 C26.5,0.5 0.4,26.5 0.4,58.5 C0.4,90.5 26.4,116.5 58.5,116.5 C90.5,116.5 116.5,90.5 116.5,58.5 C116.5,26.5 90.5,0.5 58.5,0.5 Z M58.5,108.4 C31,108.4 8.6,86 8.6,58.5 C8.6,31 31,8.6 58.5,8.6 C86,8.6 108.4,31 108.4,58.5 C108.4,86 86,108.4 58.5,108.4 Z"
                    fill="#4A4A4A"
                    id="Shape"
                  />

                  <path
                    d="M85.2,53.9 L62.6,53.9 L62.6,31.2 C62.6,28.9 60.8,27.1 58.5,27.1 C56.2,27.1 54.4,28.9 54.4,31.2 L54.4,53.8 L31.8,53.8 C29.5,53.8 27.7,55.6 27.7,57.9 C27.7,60.2 29.5,62 31.8,62 L54.4,62 L54.4,84.6 C54.4,86.9 56.2,88.7 58.5,88.7 C60.8,88.7 62.6,86.9 62.6,84.6 L62.6,62 L85.2,62 C87.5,62 89.3,60.2 89.3,57.9 C89.3,55.6 87.5,53.9 85.2,53.9 Z"
                    fill="#17AB13"
                    id="Shape"
                  />
                </g>
              </g>

              <script xmlns="" />
            </svg>
            Additional Feature
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Single Click RFQ Creation
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how easily you can create RFQs for any vendor with just a
            single click
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative group w-[80%] mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-black via-gray-800 to-black rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
             <div className="flex flex-col  gap-4 items-center">
          <video
            className="shadow-lg w-[100%]"
            src="/images/inventory/single-click-rfq.mp4"
            
             autoPlay
            loop
            muted
          />
        </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Rfq;
