"use client";
import { useEffect, useState } from "react";

/** ✅ ADDED: Reviews (better UI + modal + view more) */
const StarRating = ({ rating, size = "text-lg" }) => {
  const full = Math.max(0, Math.min(5, Math.round(Number(rating || 0))));
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`${size} ${i < full ? "text-yellow-500" : "text-gray-300"}`}
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </div>
     
    </div>
  );
};

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* modal */}
      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl border overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
          <h3 className="text-xl font-extrabold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-lg px-3 py-1 text-gray-700 hover:bg-gray-200 duration-200"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

const Reviews = ({ reviews }) => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [thankYouOpen, setThankYouOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
const [url, setUrl] = useState("");
  const [form, setForm] = useState({
    title: "",
    date: "",
    company: "",
    name: "",
    email: "",
    rating: 5,
    review: "",
  });

  useEffect(() => {
      if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  },[])
  if (!reviews?.length) return null;

  const avg =
    reviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) / reviews.length;

  // ✅ ADDED: rating distribution (for summary UI)
  const total = reviews.length;
  const counts = [5, 4, 3, 2, 1].reduce((acc, s) => {
    acc[s] = reviews.filter((r) => Number(r.rating || 0) === s).length;
    return acc;
  }, {});

  // ✅ FIXED: scale bars by total reviews (4/5 => 80%), not by max bucket
  const safeTotal = Math.max(1, total);

  // ✅ FIXED: show 3 reviews by default, then "View more"
  const shown = expanded ? reviews : reviews.slice(0, 4);

  const onChange = (key) => (e) => {
    const value = e?.target?.value;
    setForm((p) => ({ ...p, [key]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitting(true);

    const payload = {
      ...form,
      rating: Number(form.rating),
      createdAt: new Date().toISOString(),
      product: url,
    };

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Failed to submit review");
      }

      // reset + close form modal
      setForm({
        title: "",
        date: "",
        company: "",
        name: "",
        email: "",
        rating: 5,
        review: "",
      });
      setOpen(false);

      // open thank you popup
      setThankYouOpen(true);
    } catch (err) {
      setSubmitError(err?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full md:w-[80%] mx-auto">
      <div className="rounded-3xl border bg-gradient-to-b from-white to-gray-50 p-6 md:p-10 shadow-sm">
        {/* ✅ Rating summary (like marketplace UI) */}
        <div className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Left: avg in circle */}
          <div className="flex items-center gap-5">
            <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-full border-4 border-orange-400 flex items-center justify-center bg-white shadow-sm">
              <div className="text-2xl md:text-3xl font-extrabold text-gray-900">
                {avg.toFixed(1)}
              </div>
            </div>

            <div className="min-w-0">
              <div className="text-sm md:text-base text-gray-700 font-semibold">
                {total} Ratings & Reviews
              </div>
              <div className="mt-1">
                <StarRating rating={avg} />
              </div>
            </div>
          </div>

          {/* Right: distribution bars */}
          <div className="lg:col-span-2 w-full space-y-2">
            {[5, 4, 3, 2, 1].map((s) => {
              const c = counts[s] || 0;
              const pct = (c / safeTotal) * 100;

              return (
                <div key={s} className="flex items-center gap-3">
                  <div className="w-10 flex items-center justify-end gap-1 text-sm font-semibold text-gray-700">
                    <span>{s}</span>
                    <span className="text-gray-400">★</span>
                  </div>

                  <div className="flex-1 h-2.5 rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-orange-400"
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  <div className="w-10 text-right text-sm text-gray-600">
                    {c}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ✅ Full-width Add Review CTA (before heading) */}
        <div className="w-full mt-2 mb-10">
          <button
            onClick={() => setOpen(true)}
            className="mx-auto flex items-center justify-center rounded-2xl bg-black text-white px-10 py-4 font-extrabold text-lg hover:opacity-90 duration-200 shadow-sm"
          >
            + Add a review
          </button>
        </div>

        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Reviews
            </h2>
            <p className="text-gray-700 text-lg mt-2">
              Trusted by teams using Odoo → Your reviews are important to us. We regularly update our modules based on user feedback.            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {shown.map((r, idx) => (
            <div
              key={idx}
              className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-xl font-extrabold text-gray-900 truncate">
                    {r.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-600">
                    {r.company ? (
                      <>
                        <span className="font-semibold text-gray-900">
                          {r.company}
                        </span>
                        <span className="text-gray-300">•</span>
                      </>
                    ) : null}
                    <span>{r.date}</span>
                    {r.name ? (
                      <>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-700">{r.name}</span>
                      </>
                    ) : null}
                  </div>
                </div>

                <div className="shrink-0">
                  <StarRating rating={r.rating} />
                </div>
              </div>

              <div className="mt-4 text-gray-800 leading-relaxed">
                “{r.review}”
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-gray-500">Verified customer</span>
              </div>
            </div>
          ))}
        </div>

        {/* View more after 3 */}
        {reviews.length > 3 ? (
          <div className="mt-8 flex justify-center">
            {!expanded ? (
              <button
                onClick={() => setExpanded(true)}
                className="rounded-xl border bg-white px-6 py-2 font-bold text-gray-900 hover:bg-gray-100 duration-200 shadow-sm"
              >
                View more
              </button>
            ) : (
              <button
                onClick={() => setExpanded(false)}
                className="rounded-xl border bg-white px-6 py-2 font-bold text-gray-900 hover:bg-gray-100 duration-200 shadow-sm"
              >
                View less
              </button>
            )}
          </div>
        ) : null}
      </div>

      {/* Modal: Add review */}
      <Modal open={open} onClose={() => setOpen(false)} title="Add your review">
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-gray-800">
                Review title
              </label>
              <input
                value={form.title}
                onChange={onChange("title")}
                required
                placeholder="e.g. Smooth integration & stable refresh"
                className="mt-2 bg-white w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black border-[#6B7280]"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-gray-800">Company</label>
              <input
                required
                value={form.company}
                onChange={onChange("company")}
                placeholder="e.g. BrightRetail Group"
                className="mt-2 bg-white w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black border-[#6B7280]"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-gray-800">Rating</label>
              <select
                value={form.rating}
                onChange={onChange("rating")}
                className="mt-2 bg-white w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black border-[#6B7280]"
              >
                <option value={5}>5 - Excellent</option>
                <option value={4}>4 - Good</option>
                <option value={3}>3 - Okay</option>
                <option value={2}>2 - Not great</option>
                <option value={1}>1 - Bad</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-gray-800">
                Your name (optional)
              </label>
              <input
                value={form.name}
                onChange={onChange("name")}
                placeholder="e.g. Amit"
                className="mt-2 bg-white w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black border-[#6B7280]"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-gray-800">
                Email (Required)
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={onChange("email")}
                placeholder="e.g. amit@company.com"
                className="mt-2 bg-white w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black border-[#6B7280]"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-bold text-gray-800">Review</label>
            <textarea
              value={form.review}
              onChange={onChange("review")}
              required
              rows={5}
              placeholder="Write your experience…"
              className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <p>Note: Do not try to add links in the review, as it will be rejected during verification.</p>
          </div>
          <div className="flex flex-col-reverse md:flex-row md:justify-end gap-3 pt-2">
            {submitError ? (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                {submitError}
              </div>
            ) : null}

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-xl border bg-white px-5 py-3 font-bold text-gray-900 hover:bg-gray-100 duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className={`rounded-xl bg-black text-white px-5 py-3 font-bold hover:opacity-90 duration-200 ${submitting ? "opacity-60 cursor-not-allowed" : ""}`}
            >
              {submitting ? "Submitting..." : "Submit review"}
            </button>
          </div>
        </form>
      </Modal>
      <Modal
        open={thankYouOpen}
        onClose={() => setThankYouOpen(false)}
        title="Thank you!"
      >
        <div className="space-y-4">
          <p className="text-gray-800 text-base">
            Thank you for your valuable review, after verifying it we will
            update you.
          </p>

          <div className="flex justify-end">
            <button
              onClick={() => setThankYouOpen(false)}
              className="rounded-xl bg-black text-white px-5 py-3 font-bold hover:opacity-90 duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Reviews;
