import React from "react";
// import { Timeline } from "@/components/ui/timeline"; // (not used now) – custom UI below is more flexible

export default function Screenshots() {
  const setupSteps = [
    {
      step: "1",
      title: "LLM Service Configuration",
      context:
        "TechFinna provides your Orchestrator URL + Tenant Token. Add them in Odoo Settings → MCP Copilot before using AI features.",
      bullets: [
        "Paste Orchestrator URL (your MCP endpoint)",
        "Add Tenant Token (identifies your instance securely)",
  
      ],
      images: [
        {
          src: "/images/ai-copilot/image1.jpeg",
          alt: "Orchestrator URL and tenant token",
        },
      ],
      badge: "Settings",
    },
    {
      step: "2",
      title: "Access Token Management",
      context:
        "During initialization, an internal access token is generated. It helps validate calls securely between Odoo and the LLM service.",
      bullets: [
        "Token is generated automatically (no manual copy/paste needed)",
        "Used to validate requests between Odoo and orchestrator",
      
      ],
      images: [
        {
          src: "/images/ai-copilot/image2.jpeg",
          alt: "MCP Copilot sessions and proposals screen",
        },
        {
          src: "/images/ai-copilot/image3.jpeg",
          alt: "MCP Copilot action proposals list",
        },
      ],
      badge: "Security",
    },
   
  ];

  const howItWorks = [
    {
      n: "1",
      title: "User submits a natural language request",
      desc: `Ask things like "How many products are active?" or "Archive products not sold in 6 months."`,
    },
    {
      n: "2",
      title: "AI planner analyzes intent",
      desc: "The AI does not access the database. It builds a structured plan using controlled context provided by Odoo controllers.",
    },
    {
      n: "3",
      title: "Odoo validates security rules",
      desc: "Every proposed action is checked against role permissions, business rules, policy controls, and access restrictions.",
    },
    {
      n: "4",
      title: "Action proposal is generated (if required)",
      desc: "For write operations (create/update/archive/delete), a clear, reviewable proposal is prepared. No automatic execution.",
    },
    {
      n: "5",
      title: "Human approval is mandatory",
      desc: "You can view full details, preview differences, and approve or reject. Enterprise control stays with you.",
    },
    {
      n: "6",
      title: "Odoo executes safely",
      desc: "Once approved, execution happens fully inside Odoo. Actions can be logged and audited.",
    },
  ];

  return (
    <section className="my-16 md:my-20 w-[92%] mx-auto">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs md:text-sm font-semibold tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1">
            MCP Copilot • Setup Guide
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-gray-900">
            Module Setup Instructions
          </h2>

          <p className="mt-3 text-gray-600 max-w-3xl">
            Configure your orchestrator connection, verify access token flow, and
            start using governed AI inside Odoo — without giving LLMs direct
            database access.
          </p>

          <div className="mt-6 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>

        {/* Setup Steps */}
        <div className="mt-10 grid grid-cols-1 gap-6">
          {setupSteps.map((s) => (
            <div
              key={s.step}
              className="rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-5">
                  {/* Left: number + content */}
                  <div className="md:w-[45%]">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-indigo-700 text-white flex items-center justify-center font-extrabold">
                        {s.step}
                      </div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                          {s.title}
                        </h3>
                        
                      </div>
                    </div>

                    <p className="mt-3 text-gray-600">{s.context}</p>

                    <ul className="mt-4 space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-gray-700">
                          <span className="mt-0.5 text-emerald-600">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 rounded-2xl border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm text-indigo-900">
                      Tip: Start with a read-only question first. If a write
                      action is required, you’ll always get an approval proposal.
                    </div>
                  </div>

                  {/* Right: images */}
                  <div className="md:w-[55%]">
                    <div className="flex flex-wrap justify-center items-center gap-2">
                      {s.images.map((img) => (
                        <div
                          key={img.src}
                          className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm"
                        >
                          <div className="px-4 py-2 border-b border-gray-100 text-xs text-gray-600">
                          </div>
                          <img
                            className=" h-auto"
                            src={img.src}
                            alt={img.alt}
                            width={`800px`}
                          />
                        </div>
                      ))}
                    </div>

                 
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mt-16">
          <div className="text-center">
            <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900">
              How It Works
            </h3>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
              A governed workflow: the AI plans, Odoo validates policies, you
              approve changes, and execution stays inside Odoo.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5">
            {howItWorks.map((st) => (
              <div
                key={st.n}
                className="rounded-3xl border border-gray-200 bg-white shadow-sm"
              >
                <div className="p-6 md:p-7 flex gap-4 items-start">
                  <div className="shrink-0">
                    <div className="h-11 w-11 rounded-2xl bg-gray-900 text-white flex items-center justify-center font-extrabold">
                      {st.n}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                      {st.title}
                    </h4>
                    <p className="mt-2 text-gray-600">{st.desc}</p>

                    {/* subtle divider */}
                    <div className="mt-4 h-[1px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-emerald-900">
                No hidden automation. No raw DB access by AI.
              </p>
              <p className="text-emerald-900/80">
                Write actions require explicit approval — and everything can be
                audited.
              </p>
            </div>

            <a
              href="mailto:info@techfinna.com"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-700 text-white px-5 py-3 font-semibold hover:bg-emerald-800 transition w-full md:w-auto"
            >
              Need help? Email Support
              <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}