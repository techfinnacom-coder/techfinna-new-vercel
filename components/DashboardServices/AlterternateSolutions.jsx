"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const blocks = [
  {
    eyebrow: "Sales Intelligence",
    title: "Make decisions in minutes, not months",
    description:
      "Surface revenue trends and conversion funnels in real-time. Drill down by channel, region, or cohort with zero lag.",
    bullets: [
      "Live metrics and anomaly alerts",
      "Conversion funnel breakdowns",
      "Total Sales, Margin, COGS KPI's",
    ],
    imageAlt: "Sales analytics dashboard mockup",
    imageQuery: "modern saas sales analytics dashboard ui",
    imageRight: true,
    imageSrc:
      "/images/dashboard/salesDash.jpg",
  },
  {
    eyebrow: "Budget Sales Dashboard",
    title: "Budget your future ahead without spreadsheets",
    description:
      "Realtime data, with EBITDA, COGS and Net Income from your Budget Sales Dashboard",
    bullets: [
      "EBITDA - Earning before interest, tax, depreciation and amortization",
      "COGS - Cost of goods sold",
      "Dashboard Slicers",
    ],
    imageAlt: "Budget Sales Dashboard",
    imageQuery: "saas inventory management dashboard clean ui",
    imageRight: false,
    imageSrc:
      "/images/dashboard/budgetSales.jpg",
  },
  {
    eyebrow: "Profit & Loss Dashboard",
    title: "Understand Profit & Loss of your data",
    description:
      "Plan with confidence using scenario modeling and instant rollups. Share links your team will actually understand.",
    bullets: [
      "OPEX - Operating Expenses",
      "Scenario planning",
      "Gross Profit - Before deduction",
    ],
    imageAlt: "Finance dashboard mockup",
    imageQuery: "finance analytics dashboard charts cards modern ui",
    imageRight: true,
    imageSrc:
      "/images/dashboard/p&l.jpg",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AlternatingSolutions() {
  return (
    <section
      className="relative py-24 md:py-28"
      aria-labelledby="solutions-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeIn}
        >
          <p className="mx-auto inline-flex rounded-full border px-3 py-1 text-xs font-medium text-gray-500">
            Solutions built for analytics
          </p>
          <h2
            id="solutions-heading"
            className="mt-4 flex text-black text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl"
          >
            Best Dashboards for your Business

            <svg width="60px" height="60px" viewBox="0 0 24 24" fill="#cb3636"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </h2>
          <p className="mt-4 text-pretty text-gray-500 md:text-lg">
           Plug n play dashboards to supercharge your data analytics and reporting.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {blocks.map((b, i) => {
            const image = (
              <motion.div
                key={`img-${i}`}
                className="group relative my-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                variants={fadeIn}
                whileHover={{
                  rotateX: 4,
                  rotateY: -4,
                  scale: 1.02,
                  boxShadow: "0 30px 120px rgba(59,130,246,0.25)",
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                style={{ transformPerspective: 1000 }}
              >
                <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-blue-500/0 blur-3xl transition duration-500 group-hover:bg-blue-500/10" />
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-500/40 via-cyan-400/30 to-blue-500/40">
                  <div className="rounded-2xl bg-[#141823] p-4 py-6 ring-1 ring-white/10">
                    <img
                      src={b.imageSrc || "/placeholder.svg"}
                      alt={b.imageAlt}
                      className="block w-full rounded-2xl"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                
              </motion.div>
            );

            const text = (
              <motion.div
                key={`txt-${i}`}
                className="max-w-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                variants={fadeIn}
              >
                <p className="inline-flex rounded-full border px-3 py-1 text-xs font-medium text-gray-500">
                  {b.eyebrow}
                </p>
                <h3 className="mt-3 text-black text-2xl font-semibold md:text-3xl">
                  {b.title}
                </h3>
                <p className="mt-3 text-gray-500">{b.description}</p>

                <ul className="mt-6 space-y-3">
                  {b.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex rounded-full bg-blue-500/10 p-1.5 text-blue-500 ring-1 ring-blue-500/20">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <span className="text-sm md:text-base text-black/90">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* <div className="mt-6">
                  <button className="h-9 rounded-md bg-black px-4 text-sm text-white hover:bg-black/90 border border-white/10">
                    Learn more
                  </button>
                </div> */}
              </motion.div>
            );

            return (
              <div
                key={i}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                {b.imageRight ? (
                  <>
                    {text}
                    {image}
                  </>
                ) : (
                  <>
                    {image}
                    {text}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
