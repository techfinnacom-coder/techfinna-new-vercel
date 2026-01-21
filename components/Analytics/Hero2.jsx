"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const Hero2 = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imageRef.current.classList.add("animate-fadeIn");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      <h1 className="text-5xl font-bold text-center mb-4">
        We provide the most impressive{" "}
        <span className="text-gradient">Odoo Dashboards</span>
      </h1>
      <p className="text-center text-gray-600 text-lg mb-8">
        Here at Techfinna, get comprehensive insight of Odoo data. Increase
        productivity by 10x times.
      </p>
      <div className="flex space-x-4 mb-8">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          See All Dashboards
        </button>
        <button className="bg-gray-600 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition">
          Watch Demo
        </button>
      </div>
      <div
        ref={imageRef}
        className="w-full max-w-4xl opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <img
          src="/images/analytics/analyticsDash.png"
          alt="Dashboard Image"
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero2;
