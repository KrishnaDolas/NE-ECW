// src/routes/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [btnText, setBtnText] = useState("Submit request");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = e => {
    e.preventDefault(); // stop browser redirect

    setIsSubmitting(true);
    setBtnText("Submitting...");

    const form = e.target;

    // Send manually to FormSubmit with your email
    fetch("https://formsubmit.co/kdolas99@gmail.com", {
      method: "POST",
      body: new FormData(form)
    })
      .then(res => {
        console.log("FormSubmit response status:", res.status);
        setBtnText(
          "Done! Your form has been submitted. We'll reach you shortly."
        );
      })
      .catch(err => {
        console.error("FormSubmit error:", err);
        setBtnText("Error! Try Again");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-amber-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10 pb-20 sm:px-6 lg:px-8">
        {/* Intro */}
        <section className="max-w-3xl pt-2 md:pt-4">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-800">
            Contact FreshFoods Hub
          </span>
          <h1 className="mb-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Let&apos;s plan your{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-lime-500 to-amber-400 bg-clip-text text-transparent">
              kitchen supply
            </span>
            .
          </h1>
          <p className="text-sm text-slate-600 sm:text-base">
            Share a few details about your food business and the ingredients you
            need. Our team will help you with pricing, delivery schedules and
            product recommendations.
          </p>
        </section>

        {/* Main contact layout */}
        <section className="mt-8 grid items-start gap-8 lg:mt-10 lg:grid-cols-[1.3fr_1fr]">
          {/* Form */}
          <div className="rounded-3xl border border-emerald-100 bg-white/95 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-6">
            <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-emerald-700">
              Share your details
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 text-xs sm:text-sm"
            >
              {/* FormSubmit hidden fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission from FreshFoods Hub"
              />

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-slate-600">
                    Full name
                  </label>
                  <input
                    name="fullname"
                    type="text"
                    required
                    className="rounded-lg border border-emerald-100 bg-emerald-50/40 px-2.5 py-2 text-xs text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 sm:text-sm"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-slate-600">
                    Restaurant / company
                  </label>
                  <input
                    name="company"
                    type="text"
                    className="rounded-lg border border-emerald-100 bg-emerald-50/40 px-2.5 py-2 text-xs text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 sm:text-sm"
                    placeholder="Business name (optional)"
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-slate-600">
                    Work email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="rounded-lg border border-emerald-100 bg-emerald-50/40 px-2.5 py-2 text-xs text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 sm:text-sm"
                    placeholder="you@restaurant.com"
                    autoComplete="email"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-slate-600">
                    Phone / WhatsApp
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="rounded-lg border border-emerald-100 bg-emerald-50/40 px-2.5 py-2 text-xs text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 sm:text-sm"
                    placeholder="+91-XXXXXXXXXX"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-slate-600">
                  What do you need help with?
                </label>
                <select
                  name="requirement"
                  required
                  className="rounded-lg border border-emerald-100 bg-emerald-50/40 px-2.5 py-2 text-xs text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 sm:text-sm"
                >
                  <option value="">Select an option</option>
                  <option>Daily fruits & vegetables</option>
                  <option>Dry groceries & staples</option>
                  <option>Dairy & frozen items</option>
                  <option>Ready-to-cook / marinated items</option>
                  <option>Office pantry & snacks</option>
                  <option>Bulk order for event / catering</option>
                  <option>Long-term supply contract</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-slate-600">
                  Briefly describe your requirement
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="resize-none rounded-lg border border-emerald-100 bg-emerald-50/40 px-2.5 py-2 text-xs text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 sm:text-sm"
                  placeholder="Share number of outlets, cuisines, approximate daily or weekly volume, and any preferred brands..."
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  name="consent"
                  id="consent"
                  type="checkbox"
                  required
                  className="mt-0.5 h-3.5 w-3.5 rounded border-emerald-300 bg-white text-emerald-600"
                />
                <label
                  htmlFor="consent"
                  className="text-[11px] leading-snug text-slate-600"
                >
                  I agree to be contacted by FreshFoods Hub. My details will be used
                  only for this enquiry and not shared with third parties.
                </label>
              </div>

              {/* Submit button with status text */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-emerald-50 shadow-lg shadow-emerald-500/20 transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70 sm:text-sm"
              >
                {btnText}
              </button>

              <p className="text-[10px] text-slate-500">
                Typical response time: within 1 business day. Please check your email
                (Inbox, Spam, Promotions) for our reply and quotation details.
              </p>
            </form>
          </div>

          {/* Side info card */}
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="rounded-3xl border border-emerald-100 bg-white/95 p-5">
              <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-emerald-700">
                Direct contact
              </p>
              <div className="space-y-1.5 text-slate-800">
                <p>
                  📧 Email:{" "}
                  <a
                    href="mailto:kdolas99@gmail.com"
                    className="font-medium text-emerald-700 hover:text-emerald-800"
                  >
                    kdolas99@gmail.com
                  </a>
                </p>
                <p>
                  📱 Phone / WhatsApp:{" "}
                  <span className="text-slate-800">
                    +91-8421-50-1905
                  </span>
                </p>
                <p>📍 Pune, Maharashtra</p>
              </div>
              <p className="mt-3 text-[11px] text-slate-500">
                Prefer a quick call? Reach out directly and we&apos;ll walk you
                through pricing, delivery routes and sample orders.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}