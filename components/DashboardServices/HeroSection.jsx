"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, duration: 0.4 },
  },
};

const item = {
  hidden: { opacity: 1, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardItem = {
  hidden: { opacity: 1, y: 50, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
];

const previewCards = [
  {
    title: "Visualize sales data instantly",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Real-time analytics overview",
    img: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5hbHl0aWNzfGVufDB8fDB8fHww",
  },
  {
    title: "Inventory Dashboard",
    img: "https://techfinna.com/images/blogs/inven_dashboard.png",
  },
  {
    title: "Custom inventory monitoring",
    img: "https://techfinna.com/images/blogs/how-to-create-dashboards-in-odoo.png",
  },
];

export default function HeroSection() {
  const words = ["Awesome", "Amazing", "Stunning", "Epic", "Incredible"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
   // --- Smooth scroll helper ---
  const smoothScrollTo = (id, offset = 0) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (!el) return;

    // Respect reduced-motion preference
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    if (prefersReduced) {
      window.scrollTo(0, y);
    } else {
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <section className="relative w-full py-24 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <motion.div
          className="grid gap-12 md:grid-cols-2 md:items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          <motion.div
            className="grid grid-cols-2 gap-4 md:gap-5"
            variants={container}
          >
            {previewCards.map((card, i) => (
              <motion.div
                key={card.title}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900"
                variants={cardItem}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-40 w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.04] md:h-48"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
                <motion.div
                  className="pointer-events-none absolute inset-x-0 bottom-0 p-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="rounded-md bg-neutral-900/80 px-2 py-1 text-xs font-medium text-neutral-200 backdrop-blur">
                    {card.title}
                  </div>
                </motion.div>
                <div className="absolute inset-0 shadow-[0_0_0_0_rgba(0,0,0,0)] transition-[box-shadow] duration-300 group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)]" />
              </motion.div>
            ))}
          </motion.div>
          <div className="space-y-6">
            <motion.div variants={item}>
              <button
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur transition-colors hover:bg-white/10"
                aria-label="Introducing TechFinna Dashboard"
              >
               TechFinna Dashboards
              </button>
            </motion.div>

            <motion.h1
              className="text-pretty text-4xl font-extrabold leading-tight md:text-6xl"
              initial={{ opacity: 1, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {"Powerful Dashboards insights made"}
              <br />
              {"10x "}
              <motion.span
                className="relative inline-block"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[currentWord]}
                    className="relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {words[currentWord]}
                  </motion.span>
                </AnimatePresence>
                <span
                  aria-hidden="true"
                  className="absolute -inset-1 rounded-xl bg-cyan-500/20"
                />
              </motion.span>
            </motion.h1>

            <motion.p
              className="max-w-xl text-base leading-relaxed text-neutral-300 md:text-lg"
              variants={item}
            >
              {
                "Deploy custom or prebuild odoo dashboards with Techfinna. Easy to integrate, fully customizable, and scalable solutions"
              }
              {"without having to worry about styling and animations."}
            </motion.p>

            <motion.div className="flex gap-3" variants={item}>
              <motion.a
                href="#prebuilt"
                 onClick={(e) => {
                  e.preventDefault();
                  // If you have a fixed header, pass its height as offset (e.g., 72)
                  smoothScrollTo("prebuilt", 0);
                }}
                className="group inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition-transform duration-200 hover:scale-[1.02] md:px-5 md:py-2.5"
                whileTap={{ scale: 0.97 }}
              >
                View Dashboards
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </motion.a>
              <motion.a
                href="#custom"
                onClick={(e) => {
                  e.preventDefault();
                  // If you have a fixed header, pass its height as offset (e.g., 72)
                  smoothScrollTo("custom", 0);
                }}
                className="inline-flex items-center rounded-lg border border-white/20 bg-transparent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:px-5 md:py-2.5"
                whileTap={{ scale: 0.97 }}
              >
                Custom Dashboards
              </motion.a>
            </motion.div>

            {/* Avatars row */}
            {/* <motion.div className="flex items-center pt-2" variants={item}>
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    alt={`Team member ${i + 1}`}
                    className="h-10 w-10 rounded-full ring-2 ring-neutral-950"
                    initial={{ x: -50, opacity: 1 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                  />
                ))}
              </div>
              <span className="ml-3 text-sm text-neutral-400">
                Trusted by teams building advanced analytics platforms
              </span>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
