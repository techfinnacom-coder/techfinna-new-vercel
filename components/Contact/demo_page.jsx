"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const DemoPage = () => {
  const [email, setEmail] = useState("");
  const [moduleName, setModuleName] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !moduleName) {
      return;
    }

    setIsSending(true);
    try {
      await emailjs.send(
        "service_x8p43tj",
        "template_jlna3r1",
        {
          user_email: email,
          user_name: moduleName,
          message: `Demo request for ${moduleName}`,
        },
        "G1C06YFYj5_11xav4"
      );
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Demo request sent",
        showConfirmButton: false,
        timer: 1500,
      });
      setEmail("");
      setModuleName("");
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to send request",
        showConfirmButton: false,
        timer: 2000,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#f7f3ee] px-6 py-16">
      <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-[#f7c59f] blur-3xl opacity-40" />
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#7dd3c7] blur-3xl opacity-40" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#f4a259] blur-[120px] opacity-30" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 text-left lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-black">
              Demo Tutorial
            </span>
            <h1 className="mt-4 text-4xl font-extrabold text-black md:text-5xl">
              See Inventory Forecasting in Action
            </h1>
            <p className="mt-3 max-w-2xl text-base text-[#3f3a47]">
              Start with the guided video. If you want access to the module,
              send a request and we will unlock it for you.
            </p>
          </div>
          {/* <div className="flex gap-4 text-sm text-[#3f3a47]">
            <div className="rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-sm">
              <p className="text-xs uppercase tracking-[0.15em] text-[#8c7c6a]">
                Response time
              </p>
              <p className="text-lg font-bold text-black">24-48 hrs</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-sm">
              <p className="text-xs uppercase tracking-[0.15em] text-[#8c7c6a]">
                Access
              </p>
              <p className="text-lg font-bold text-black">By request</p>
            </div>
          </div> */}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.85fr]">
          <div className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.35)] backdrop-blur">
            <div className="flex items-center justify-between gap-4 pb-4">
              <div>
                <h2 className="text-2xl font-bold text-black">
                  Demo walkthrough
                </h2>
                <p className="mt-1 text-sm text-[#595064]">
                  Follow the full tutorial to understand the workflow.
                </p>
              </div>
              
            </div>
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-black shadow-sm">
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/mc_yw7OG8Hc"
                title="Inventory Forecasting Demo Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white px-4 py-3">
                <p className="text-xs uppercase tracking-[0.12em] text-[#8c7c6a]">
                  Step 1
                </p>
                <p className="mt-1 text-sm font-semibold text-black">
                  Watch the demo
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white px-4 py-3">
                <p className="text-xs uppercase tracking-[0.12em] text-[#8c7c6a]">
                  Step 2
                </p>
                <p className="mt-1 text-sm font-semibold text-black">
                  Request access
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white px-4 py-3">
                <p className="text-xs uppercase tracking-[0.12em] text-[#8c7c6a]">
                  Step 3
                </p>
                <p className="mt-1 text-sm font-semibold text-black">
                  Start using it
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.35)]">
            <div className="rounded-2xl bg-[#111111] px-5 py-4 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                Access request
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                Get the module unlocked
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Fill in your email and the module name you want access to.
              </p>
            </div>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-black">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#f8f6f3] px-4 py-3 text-black shadow-sm focus:border-black focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black">
                  Module name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  value={moduleName}
                  onChange={(event) => setModuleName(event.target.value)}
                  placeholder="inventory forecasting"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#f8f6f3] px-4 py-3 text-black shadow-sm focus:border-black focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-xl bg-[#111111] px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-black disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? "Sending..." : "Send request"}
              </button>
            </form>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
