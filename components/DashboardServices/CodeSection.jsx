"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const codeSample = `import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function SalesChart() {
  const options = {
    chart: {
      type: 'line',
      backgroundColor: '#1a1a1a',
      style: {
        fontFamily: 'Inter, sans-serif'
      }
    },
    title: {
      text: 'Monthly Sales Performance',
      style: { color: '#e5e7eb' }
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: { style: { color: '#9ca3af' } }
    },
    yAxis: {
      title: {
        text: 'Sales ($)',
        style: { color: '#9ca3af' }
      },
      labels: { style: { color: '#9ca3af' } }
    },
    series: [{
      name: 'Sales',
      data: [12000, 19000, 15000, 22000, 18000, 25000, 23000, 27000, 24000, 30000, 28000, 32000],
      color: '#3b82f6'
    }],
    credits: { enabled: false }
  };

  return (
    <div className="rounded-xl border bg-zinc-900/60 p-6">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
`;

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function CodeSection() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(codeSample);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (_) {}
  }

  return (
    <section
      className="relative overflow-hidden py-24 md:py-28 text-white"
      aria-labelledby="copy-paste-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(37,99,235,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e18] to-[#070b12]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeIn}
        >
          <h2
            id="copy-paste-heading"
            className="text-balance flex gap-2 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl"
          >
            Easy Plug n Play in your App
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
            >
              <path d="M8.95305171,17.9846747 C8.72737466,19.1334216 7.71488744,20 6.5,20 L4.5,20 C4.22385763,20 4,19.7761424 4,19.5 L4,17.5 C4,16.2851126 4.86657841,15.2726253 6.0153253,15.0469483 L6.02714614,14.7041437 C6.04713299,14.1245251 6.10682628,13.555636 6.20352226,13 L2.5,13 C2.1462677,13 1.90438878,12.6427369 2.03576165,12.3143047 L4.03576165,7.31430466 C4.11169333,7.12447547 4.29554771,7 4.5,7 L9,7 C9.02538451,7 9.05032719,7.00189166 9.07469478,7.0055417 C11.4290981,4.32146349 14.9247139,2.67696313 18.771296,2.80960389 C19.3819666,2.8306615 19.9902263,2.89709634 20.5910446,3.008359 C20.7946429,3.04606238 20.9539376,3.20535713 20.991641,3.40895537 C21.812186,7.83989855 20.1522623,12.1558183 16.9947249,14.9271075 C16.9982004,14.9509022 17,14.9752409 17,15 L17,19.5 C17,19.7044523 16.8755245,19.8883067 16.6856953,19.9642383 L11.6856953,21.9642383 C11.3572631,22.0956112 11,21.8537323 11,21.5 L11,17.7949378 C10.4368132,17.8936903 9.86739064,17.9531458 9.29585627,17.9728539 L8.95305171,17.9846747 Z M7.98749247,17.6945992 L6.30540075,16.0125075 C5.56890748,16.1079151 5,16.7375198 5,17.5 L5,19 L6.5,19 C7.26248018,19 7.8920849,18.4310925 7.98749247,17.6945992 L7.98749247,17.6945992 Z M12,17.5770127 L12,20.7614835 L16,19.1614835 L16,15.7132231 C14.8178863,16.5520811 13.4713529,17.1925443 12,17.5770127 L12,17.5770127 Z M6.42079004,12 C6.80202391,10.5414825 7.44257093,9.19144113 8.28872675,8 L4.83851648,8 L3.23851648,12 L6.42079004,12 L6.42079004,12 Z M8.69991595,16.9928092 L9.26139399,16.9734479 C9.82252402,16.9540985 10.3814387,16.8930532 10.9335157,16.7908167 C16.9701904,15.672914 20.9957193,9.95997934 20.0664857,3.93363717 C19.626205,3.86599452 19.1822172,3.82436794 18.7368337,3.80900989 C12.4850041,3.59342956 7.24213247,8.48677642 7.02655214,14.738606 L7.00719083,15.300084 L8.69991595,16.9928092 Z M14,13 C12.3431458,13 11,11.6568542 11,10 C11,8.34314575 12.3431458,7 14,7 C15.6568542,7 17,8.34314575 17,10 C17,11.6568542 15.6568542,13 14,13 Z M14,12 C15.1045695,12 16,11.1045695 16,10 C16,8.8954305 15.1045695,8 14,8 C12.8954305,8 12,8.8954305 12,10 C12,11.1045695 12.8954305,12 14,12 Z" />
            </svg>
          </h2>
          <p className="mt-4 text-pretty text-zinc-300 md:text-lg">
            Easily build & deploy dashboards in your web in minutes. Fully customizable, accessible, and optimized for real-time data visualization
          </p>
          {/* <div className="mt-6">
            <button className="h-9 rounded-md bg-white/10 px-4 text-sm text-white hover:bg-white/15">
              Explore Dashboard Components
            </button>
          </div> */}
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="group relative max-w-[90vw] md:max-w-[unset]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeIn}
            whileHover={{
              rotateX: 4,
              rotateY: -4,
              scale: 1.03,
              boxShadow: "0 30px 120px rgba(59,130,246,0.35)",
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            style={{ transformPerspective: 1000 }}
          >
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-blue-500/0 blur-3xl transition duration-500 group-hover:bg-blue-500/10" />
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-500/40 via-cyan-400/30 to-fuchsia-500/40">
              <div className="rounded-2xl bg-black/50 ring-1 ring-white/10">
                <img
                  src="/images/dashboard/dashboard2.png"
                  alt="TechFinna dashboard mockup"
                  className="block w-full rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeIn}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="rounded-2xl p-[1px] bg-gradient-to-br from-blue-500/50 via-purple-500/40 to-cyan-500/50">
              <div className="relative rounded-2xl bg-[#0b0f1a]/90 ring-1 ring-white/10">
                {/* Copy button */}
                <div className="absolute right-3 top-3 z-10">
                  <button
                    onClick={handleCopy}
                    className="h-8 rounded-md bg-white/10 px-3 text-xs text-white hover:bg-white/15"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
                <pre
                  className="scrollbar-none max-h-[520px] overflow-auto rounded-2xl p-6 text-[13px] leading-relaxed md:text-sm scrollbar-hide max-w-[90vw] md:max-w-[unset]"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <code>
                    <span className="text-zinc-400">
                      import{" "}
                      <span className="text-sky-300">{"Highcharts"}</span> from{" "}
                      <span className="text-amber-300">"highcharts"</span>;
                    </span>
                    {"\n"}
                    <span className="text-zinc-400">
                      import{" "}
                      <span className="text-sky-300">{"HighchartsReact"}</span>{" "}
                      from{" "}
                      <span className="text-amber-300">
                        "highcharts-react-official"
                      </span>
                      ;
                    </span>
                    {"\n"}
                    <span className="text-zinc-400">
                      import{" "}
                      <span className="text-sky-300">
                        {"type { HighchartsReactProps }"}
                      </span>{" "}
                      from{" "}
                      <span className="text-amber-300">
                        "highcharts-react-official"
                      </span>
                      ;
                    </span>
                    {"\n\n"}
                    <span className="text-zinc-400">
                      interface{" "}
                      <span className="text-sky-300">SalesChartProps</span>{" "}
                      {"{"}
                    </span>
                    {"\n  "}
                    <span className="text-amber-300">title</span>?:{" "}
                    <span className="text-sky-300">string</span>;{"\n  "}
                    <span className="text-amber-300">data</span>:{" "}
                    <span className="text-sky-300">number</span>[];
                    {"\n  "}
                    <span className="text-amber-300">categories</span>:{" "}
                    <span className="text-sky-300">string</span>[];
                    {"\n  "}
                    <span className="text-amber-300">seriesName</span>?:{" "}
                    <span className="text-sky-300">string</span>;{"\n  "}
                    <span className="text-amber-300">color</span>?:{" "}
                    <span className="text-sky-300">string</span>;{"\n"}
                    <span className="text-zinc-400">{"}"}</span>
                    {"\n\n"}
                    <span className="text-zinc-400">
                      export default function{" "}
                      <span className="text-sky-300">SalesChart</span>(
                      <span className="text-purple-400">{"{"}</span>{" "}
                      <span className="text-amber-300">title</span> ={" "}
                      <span className="text-emerald-400">
                        'Monthly Sales Performance'
                      </span>
                      ,{"\n    "}
                      <span className="text-amber-300">data</span>,{"\n    "}
                      <span className="text-amber-300">categories</span>,
                      {"\n    "}
                      <span className="text-amber-300">seriesName</span> ={" "}
                      <span className="text-emerald-400">'Sales'</span>,
                      {"\n    "}
                      <span className="text-amber-300">color</span> ={" "}
                      <span className="text-emerald-400">'#3b82f6'</span>,
                      {"\n  "}
                      <span className="text-purple-400">{"}"}</span>:{" "}
                      <span className="text-sky-300">SalesChartProps</span>, ){" "}
                      {"{"}
                    </span>
                    {"\n  "}
                    <span className="text-zinc-400">
                      const <span className="text-purple-400">options</span>:{" "}
                      <span className="text-sky-300">Highcharts.Options</span> ={" "}
                      <span className="text-sky-300">{"{"}</span>
                    </span>
                    {"\n    "}
                    <span className="text-amber-300">chart</span>: {"{"}
                    {"\n      "}
                    <span className="text-amber-300">type</span>:{" "}
                    <span className="text-emerald-400">'line'</span>,
                    {"\n      "}
                    <span className="text-amber-300">
                      backgroundColor
                    </span>: <span className="text-emerald-400">'#1a1a1a'</span>
                    ,{"\n      "}
                    <span className="text-amber-300">style</span>: {"{"}
                    {"\n        "}
                    <span className="text-amber-300">fontFamily</span>:{" "}
                    <span className="text-emerald-400">
                      'Inter, sans-serif'
                    </span>
                    ,{"\n      "},{"}"},{"\n    "},{"},"}
                    {"\n    "}
                    <span className="text-amber-300">title</span>: {"{"}
                    {"\n      "}
                    <span className="text-amber-300">text</span>:{" "}
                    <span className="text-purple-400">title</span>,{"\n      "}
                    <span className="text-amber-300">style</span>: {"{"}{" "}
                    <span className="text-amber-300">color</span>:{" "}
                    <span className="text-emerald-400">'#e5e7eb'</span> {"}"},
                    {"\n    "},{"},"}
                    {"\n    "}
                    <span className="text-amber-300">xAxis</span>: {"{"}
                    {"\n      "}
                    <span className="text-amber-300">categories</span>:{" "}
                    <span className="text-purple-400">categories</span>,
                    {"\n      "}
                    <span className="text-amber-300">labels</span>: {"{"}{" "}
                    <span className="text-amber-300">style</span>: {"{"}{" "}
                    <span className="text-amber-300">color</span>:{" "}
                    <span className="text-emerald-400">'#9ca3af'</span> {"}"}{" "}
                    {"}"},{"\n    "},{"},"}
                    {"\n    "}
                    <span className="text-amber-300">yAxis</span>: {"{"}
                    {"\n      "}
                    <span className="text-amber-300">title</span>: {"{"}
                    {"\n        "}
                    <span className="text-amber-300">text</span>:{" "}
                    <span className="text-emerald-400">'Sales ($)'</span>,
                    {"\n        "}
                    <span className="text-amber-300">style</span>: {"{"}{" "}
                    <span className="text-amber-300">color</span>:{" "}
                    <span className="text-emerald-400">'#9ca3af'</span> {"}"},
                    {"\n      "},{"},"}
                    {"\n      "}
                    <span className="text-amber-300">labels</span>: {"{"}{" "}
                    <span className="text-amber-300">style</span>: {"{"}{" "}
                    <span className="text-amber-300">color</span>:{" "}
                    <span className="text-emerald-400">'#9ca3af'</span> {"}"}{" "}
                    {"}"},{"\n    "},{"},"}
                    {"\n    "}
                    <span className="text-amber-300">series</span>: [{"{"}
                    {"\n      "}
                    <span className="text-amber-300">name</span>:{" "}
                    <span className="text-purple-400">seriesName</span>,
                    {"\n      "}
                    <span className="text-amber-300">data</span>:{" "}
                    <span className="text-purple-400">data</span>,{"\n      "}
                    <span className="text-amber-300">color</span>:{" "}
                    <span className="text-purple-400">color</span>,{"\n    "},
                    {"}]"},{"\n    "}
                    <span className="text-amber-300">credits</span>: {"{"}{" "}
                    <span className="text-amber-300">enabled</span>:{" "}
                    <span className="text-purple-400">false</span> {"}"},
                    {"\n    "}
                    <span className="text-amber-300">accessibility</span>: {"{"}{" "}
                    // Add accessibility for better inclusivity
                    {"\n      "}
                    <span className="text-amber-300">enabled</span>:{" "}
                    <span className="text-purple-400">true</span>,{"\n      "}
                    <span className="text-amber-300">description</span>:{" "}
                    <span className="text-emerald-400">
                      `Line chart showing seriesName over time.`
                    </span>
                    ,{"\n    "},{"},"}
                    {"\n  "},<span className="text-sky-300">{"}"}</span>;
                    {"\n\n  "}
                    <span className="text-zinc-400">return (</span>
                    {"\n    "}
                    <span className="text-pink-400">{"<div "}</span>
                    <span className="text-amber-300">className</span>=
                    <span className="text-emerald-400">
                      "rounded-xl border bg-zinc-900/60 p-6"
                    </span>
                    <span className="text-pink-400">{">"}</span>
                    {"\n      "}
                    <span className="text-pink-400">{"<HighchartsReact "}</span>
                    <span className="text-amber-300">highcharts</span>=
                    <span className="text-sky-300">{"{Highcharts}"}</span>{" "}
                    <span className="text-amber-300">options</span>=
                    <span className="text-sky-300">{"{options}"}</span>{" "}
                    <span className="text-pink-400">{"/>"}</span>
                    {"\n    "}
                    <span className="text-pink-400">{"</div>"}</span>
                    {"\n  "}
                    <span className="text-zinc-400">{")"}</span>;{"\n"}
                    <span className="text-zinc-400">{"}"}</span>
                  </code>
                </pre>
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[28px] bg-[conic-gradient(at_0%_0%,#3b82f620,transparent_40%)] blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
