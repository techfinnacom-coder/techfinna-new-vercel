'use client';
import { useState } from "react";
import { motion } from "framer-motion";
 
const DemoVideo = ({bannerImage, youtubeLink, title, duration}) => {
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
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
            Live Demo
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            See It In Action
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            {title}
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
              <a
                href={youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={bannerImage}
                  alt="Inventory forecasting module demo"
                  className="w-full h-full object-cover transition-transform duration-700"
                />
 
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/40"></div>
 
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: isHovered ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                    <img
                      className="top-50 left-50"
                      width="110px"
                      height="75px"
                      alt="youtube-button"
                      src="\images\lookers\play.png"
                    />
                  </div>
                </motion.div>
 
                <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-xl md:text-2xl mb-1">
                        Watch Full Demo
                      </p>
                      <p className="text-gray-300 text-sm md:text-base">
                       {title}
                      </p>
                    </div>
                    <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-white font-medium">{duration}</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
 
export default DemoVideo;