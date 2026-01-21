"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

import "swiper/css";

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const TestimonialSwiper = () => {
  const reviews = [
    {
      text: "TechFinna's dashboards revolutionized our decision-making process. The real-time insights helped us increase revenue by 34% in just 6 months.",
      author: "Emily Watson",
      company: "TechCorp Inc.",
      rating: 5,
    },
    {
      text: "Outstanding support and intuitive design. Our team quickly adopted the new dashboards, improving collaboration and efficiency in just days.",
      author: "David Kim",
      company: "DataDriven LLC",
      rating: 5,
    },
    {
      text: "The Power BI integration was flawless. We now have visibility into metrics we never tracked before, leading to better strategic decisions.",
      author: "Maria Gonzalez",
      company: "Growth Dynamics",
      rating: 5,
    },
    {
      text: "TechFinna's dashboards revolutionized our decision-making process. The real-time insights helped us increase revenue by 34% in just 6 months.",
      author: "Emily Watson",
      company: "TechCorp Inc.",
      rating: 5,
    },
    {
      text: "Outstanding support and intuitive design. Our team quickly adopted the new dashboards, improving collaboration and efficiency in just days.",
      author: "David Kim",
      company: "DataDriven LLC",
      rating: 5,
    },
    {
      text: "The Power BI integration was flawless. We now have visibility into metrics we never tracked before, leading to better strategic decisions.",
      author: "Maria Gonzalez",
      company: "Growth Dynamics",
      rating: 5,
    },
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={32}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="w-full"
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <motion.div
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 shadow-lg border border-gray-100"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div className="flex gap-1 mb-4" variants={itemVariants}>
              {[...Array(review.rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Star size={20} className="text-yellow-400 fill-current" />
                </motion.div>
              ))}
            </motion.div>
            <motion.p
              className="text-gray-700 mb-6 italic leading-relaxed text-base text-left"
              variants={itemVariants}
            >
              "{review.text}"
            </motion.p>
            <motion.div
              className="flex items-center gap-3"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-black rounded-full flex items-center justify-center text-white font-bold">
                {review.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base text-left">{review.author}</p>
                <p className="text-gray-600 text-sm text-left">{review.company}</p>
              </div>
            </motion.div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSwiper;
