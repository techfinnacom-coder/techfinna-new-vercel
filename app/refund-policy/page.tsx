import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white mt-8">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="px-6 py-8 sm:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                  TechFinna • Refund Policy
                </p>
                <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Refund Policy (Modules Purchased on techfinna.com)
                </h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  We stand behind our modules and our support. If things don’t work out, you’re covered.
                </p>
              </div>

              <div className="mt-2 sm:mt-0">
                <a
                  href="mailto:info@techfinna.com"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 sm:w-auto"
                >
                  Contact for Refund
                </a>
                <p className="mt-2 text-center text-xs text-slate-500 sm:text-right">
                  info@techfinna.com
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="border-t border-slate-200 px-6 py-8 sm:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Left: Policy */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                    <h2 className="text-lg font-semibold text-slate-900">
                      15-Day Refund Window
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      If you purchased a module from <span className="font-medium">techfinna.com</span>, you can request a refund within{" "}
                      <span className="font-semibold text-slate-900">15 days</span> of the purchase date.
                    </p>
                  </section>

                  <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                    <h2 className="text-lg font-semibold text-slate-900">
                      Support First (We’ll Try Our Best)
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Our technical support team will try its level best to help you if:
                    </p>

                    <ul className="mt-4 space-y-3 text-sm text-slate-700">
                      <li className="flex gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                          ✓
                        </span>
                        <span>
                          The module doesn’t integrate properly with your setup
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                          ✓
                        </span>
                        <span>
                          The module fails to deliver the features described on our website
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                          ✓
                        </span>
                        <span>
                          You face technical issues during installation or configuration
                        </span>
                      </li>
                    </ul>

                    <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm leading-6 text-slate-700">
                        If you are still unsatisfied even after our team has attempted to fix the issue,
                        we will process a refund (as long as your request is within 15 days of purchase).
                      </p>
                    </div>
                  </section>

                  <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                    <h2 className="text-lg font-semibold text-slate-900">
                      How to Request a Refund
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Email us at{" "}
                      <a
                        className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
                        href="mailto:info@techfinna.com"
                      >
                        info@techfinna.com
                      </a>{" "}
                      with the details below. This helps us verify your purchase and resolve faster.
                    </p>
                  </section>
                </div>
              </div>

              {/* Right: Details Card */}
              <aside className="lg:col-span-1">
                <div className="sticky top-6 space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                    <h3 className="text-base font-semibold text-slate-900">
                      Include These Details
                    </h3>

                    <div className="mt-4 space-y-4">
                      <div className="rounded-xl border border-slate-200 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Purchase Info
                        </p>
                        <ul className="mt-2 space-y-2 text-sm text-slate-700">
                          <li>
                            <span className="font-medium text-slate-900">Module name</span>
                            {" "}and version
                          </li>
                          <li>
                            <span className="font-medium text-slate-900">Order ID / Invoice</span>
                            {" "}number
                          </li>
                          <li>
                            <span className="font-medium text-slate-900">Purchase date</span>
                          </li>
                          <li>
                            <span className="font-medium text-slate-900">Email used</span>
                            {" "}during checkout
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-xl border border-slate-200 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Technical Context
                        </p>
                        <ul className="mt-2 space-y-2 text-sm text-slate-700">
                          <li>
                            <span className="font-medium text-slate-900">Platform</span>
                            {" "}(e.g., Odoo version, hosting type)
                          </li>
                          <li>
                            <span className="font-medium text-slate-900">Issue summary</span>
                            {" "}and steps tried
                          </li>
                          <li>
                            <span className="font-medium text-slate-900">Screenshots / logs</span>
                            {" "}if available
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                        <p className="text-sm font-semibold text-amber-900">
                          Important
                        </p>
                        <p className="mt-1 text-sm leading-6 text-amber-800">
                          Refund requests must be made within <span className="font-semibold">15 days</span> of purchase.
                        </p>
                      </div>

                
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                    <h3 className="text-base font-semibold text-slate-900">
                      Summary
                    </h3>
                    <div className="mt-3 space-y-2 text-sm text-slate-700">
                      <p>
                        ✅ Refund available within <span className="font-semibold">15 days</span> of purchase.
                      </p>
                      <p>
                        ✅ We’ll attempt fixes and support first.
                      </p>
                      <p>
                        ✅ If still unsatisfied, we’ll refund your payment.
                      </p>
                      <p className="pt-2">
                        Contact:{" "}
                        <a
                          className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
                          href="mailto:info@techfinna.com"
                        >
                          info@techfinna.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* Footer note */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="text-sm leading-6 text-slate-600">
                <span className="font-semibold text-slate-900">Note:</span>{" "}
                This refund policy applies to purchases made directly on techfinna.com. If you purchased through a
                marketplace or a third-party platform, their refund policy may apply.
              </p>
            </div>
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default page;