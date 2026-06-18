import React from "react";
import { FlipWords } from "../ui/flip-words";

const Specifications = () => {
  const words = [
    "Privacy-first AI",
    "Approval-first actions",
    "Enterprise governance",
  ];

  const quickBulletsLeft = [
    "AI never directly touches your Odoo database",
    "Safe, controlled context (policy-approved only)",
    "You approve before anything changes",
  ];

  const quickBulletsRight = [
    "Role-based access control (respects Odoo permissions)",
    "Full audit logs & traceability",
    "No hidden automation — execution stays inside Odoo",
  ];

  const featureCards = [
    {
      title: "AI never directly touches your Odoo data",
      desc: "The AI cannot access your database on its own. Odoo prepares and shares only the exact context needed.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path
            d="M12 3l8 4.5V12c0 5-3.2 9-8 9s-8-4-8-9V7.5L12 3z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.25 12.25l1.9 1.9 3.6-4.2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      tone: "bg-blue-50 border-blue-100",
    },
    {
      title: "Safe and controlled data access",
      desc: "Every piece of information is checked and approved by Odoo before it is shared with the AI.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path
            d="M10 4h4v3h-4V4zM6 9h12v11H6V9z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9 13h6M9 16h6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
      tone: "bg-slate-50 border-slate-100",
    },
    {
      title: "You approve before anything changes",
      desc: "The AI can’t make changes on its own. Any create/update/archive/delete requires your explicit approval.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path
            d="M7 11V8a5 5 0 0110 0v3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6.5 11h11v9h-11v-9z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12 15v2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
      tone: "bg-amber-50 border-amber-100",
    },
    {
      title: "Clear and transparent activity",
      desc: "See what the AI suggests and what happens next. Everything is trackable and reviewable.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path
            d="M4 6h16M4 12h10M4 18h16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M18 10l2 2-2 2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      tone: "bg-emerald-50 border-emerald-100",
    },
    {
      title: "Built for safe business use",
      desc: "Reasoning and execution stay separate — safer, more deterministic, and easier to govern in real operations.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path
            d="M4 7h7v10H4V7zM13 7h7v4h-7V7zM13 13h7v4h-7v-4z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      ),
      tone: "bg-violet-50 border-violet-100",
    },
    {
      title: "Grows with your business",
      desc: "Add more policies, rules, and workflows over time while keeping full control over your Odoo data.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path
            d="M6 18V9M12 18V6M18 18v-7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M4 18h16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
      tone: "bg-rose-50 border-rose-100",
    },
  ];

 

  const steps = [
    {
      n: "1",
      title: "User submits a natural language request",
      desc: `Ask things like "How many products are active?" or "Archive products not sold in 6 months."`,
    },
    {
      n: "2",
      title: "AI planner analyzes intent",
      desc: "The AI does not access the database. It builds a structured plan using controlled context from Odoo controllers.",
    },
    {
      n: "3",
      title: "Odoo validates security rules",
      desc: "Every proposed action is validated: permissions, business rules, policy controls, access restrictions.",
    },
    {
      n: "4",
      title: "Action proposal is generated (if required)",
      desc: "For create/update/archive/delete, the system generates a clear, reviewable proposal. No auto execution.",
    },
    {
      n: "5",
      title: "Human approval is mandatory",
      desc: "You can view full details, preview differences, and approve or reject. Control stays with you.",
    },
    {
      n: "6",
      title: "Odoo executes safely",
      desc: "Once approved, execution happens fully inside Odoo. Actions can be logged and audited.",
    },
  ];

  const useCases = [
    {
      title: "Secure data exploration",
      desc: "Ask business questions safely with controlled context and policy-driven responses.",
    },
    {
      title: "AI-assisted planning",
      desc: "Intent analysis and structured action plans—without letting AI execute anything automatically.",
    },
    {
      title: "Safe catalog maintenance",
      desc: "Create change proposals, review them, and apply updates only after human approval.",
    },
    {
      title: "Executive-level conversational insights",
      desc: "CFO/COO-ready summaries with explainability, provenance, and governance by default.",
    },
  ];

  return (
    <section className="flex justify-evenly items-center my-20 w-[90%] mx-auto">
      {/* Header */}
      <div className=" flex flex-col w-[90%] mx-auto text-left justify-start items-start">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 my-4">
            Product Specifications
          </h2>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <p className="text-gray-700 text-base md:text-lg">
              Secure MCP-based enterprise AI —
            </p>
            <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-emerald-600 inline-block text-transparent bg-clip-text">
              <FlipWords
                className="text-lg md:text-2xl font-semibold"
                words={words}
              />
            </div>
          </div>

          <p className="text-gray-600 max-w-4xl">
            Privacy-first Copilot that keeps execution inside Odoo and keeps LLMs
            away from raw ERP data. Any write action is approval-driven and can
            be audited.
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">
                What you get (fast)
              </h3>
              <ul className="space-y-2 text-gray-700">
                {quickBulletsLeft.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-0.5 text-emerald-600">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">
                Built for governance
              </h3>
              <ul className="space-y-2 text-gray-700">
                {quickBulletsRight.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-0.5 text-emerald-600">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="mt-12">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Features
            </h3>
            <div className="text-sm text-gray-600">
              No data harvesting • No customer-data training • Deterministic &
              explainable outcomes
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featureCards.map((c) => (
              <div
                key={c.title}
                className={`rounded-2xl border ${c.tone} p-5 shadow-sm hover:shadow-md transition`}
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-white/80 border border-black/5 p-2 text-gray-900">
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {c.title}
                    </h4>
                    <p className="text-gray-700 mt-1">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

     
      </div>
    </section>
  );
};

export default Specifications;