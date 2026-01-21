"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Database,
  Filter,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const featuresLeft = [
  "One-step installation",
  "Interactive dataset builder (no SQL)",
  "Live row preview while you build",
  "Token-based, secure connection",
];

const featuresRight = [
  "Automate dataset creation",
  "Interactive dashboard editing",
  "AI chatbot assistance",
  "Advanced filters for deep analysis",
];

export default function AiOdooSection() {
  return (
    <section
      className="relative py-20 md:py-24"
      aria-labelledby="ai-odoo-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_400px_at_15%_-10%,rgba(59,130,246,0.10),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeIn}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-800/80">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Aritificial Intelligence
          </span>
          <h2
            id="ai-odoo-heading"
            className="mt-4 text-black text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl"
          >
            AI Powered Odoo Dashboards
          </h2>
          <p className="mt-4 text-pretty text-gray-600 md:text-lg leading-relaxed">
            TechFinna’s AI-Powered Odoo Dashboards let you pick fields, preview
            data live, and combine them into a single, clean dataset—then
            instantly generate smart, KPI‑driven dashboards. Customize charts,
            apply filters, and chat with your data to get back to analysis
            faster.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeIn}
            className="order-2 lg:order-1"
          >
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700">
                <Database className="h-3.5 w-3.5" aria-hidden />
                Clean Odoo dataset
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                Token-based security
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700">
                <Filter className="h-3.5 w-3.5" aria-hidden />
                Advanced filters
              </span>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <ul className="space-y-3">
                {featuresLeft.map((f, i) => (
                  <motion.li
                    key={f}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                  >
                    <span className="mt-0.5 inline-flex rounded-full bg-gray-50 p-1.5 text-blue-600 ring-1 ring-blue-100">
                      <CheckCircle2 className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-sm md:text-base text-gray-800">
                      {f}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <ul className="space-y-3">
                {featuresRight.map((f, i) => (
                  <motion.li
                    key={f}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 + 0.1 }}
                  >
                    <span className="mt-0.5 inline-flex rounded-full bg-gray-50 p-1.5 text-blue-600 ring-1 ring-blue-100">
                      <CheckCircle2 className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-sm md:text-base text-gray-800">
                      {f}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-black"
                whileTap={{ scale: 0.98 }}
              >
                See it in action
              </motion.a>
              {/* <motion.a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileTap={{ scale: 0.98 }}
              >
                Get a demo
              </motion.a> */}
            </div>
          </motion.div>

          <motion.div
            className="group relative order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeIn}
            whileHover={{
              rotateX: 4,
              rotateY: -4,
              scale: 1.02,
              boxShadow: "0 30px 120px rgba(37, 99, 235, 0.35)",
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            style={{ transformPerspective: 1000 }}
            aria-label="Odoo dashboard mockup preview"
          >
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-[rgba(37,99,235,0.10)] blur-3xl transition duration-500 group-hover:bg-[rgba(37,99,235,0.15)]" />
            <div className="relative rounded-2xl p-[1px] ring-1 ring-gray-200 bg-white">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/odoo-analytics-dashboard-ui-h7Mde6aFzOBfP96oTIAZSv3Jgh29j2.jpg"
                  alt="AI-powered Odoo analytics dashboard preview"
                  className="block w-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
