// src/routes/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [btnText, setBtnText] = useState("Submit request");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // stop browser redirect

    setIsSubmitting(true);
    setBtnText("Submitting...");

    const form = e.target;

    // Send manually to FormSubmit with your email
    fetch("https://formsubmit.co/kdolas99@gmail.com", {
      method: "POST",
      body: new FormData(form),
    })
      .then((res) => {
        console.log("FormSubmit response status:", res.status);
        setBtnText(
          "Done! Your form has been submitted. We'll reach you shortly."
        );
      })
      .catch((err) => {
        console.error("FormSubmit error:", err);
        setBtnText("Error! Try Again");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-24 h-80 w-80 bg-sky-500/35 blur-3xl rounded-full" />
        <div className="absolute top-40 right-[-6rem] h-80 w-80 bg-indigo-500/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[32rem] bg-emerald-400/18 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 pb-20">
        {/* Intro */}
        <section className="pt-2 md:pt-4 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-100 mb-3">
            Contact MechParts Hub
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-3">
            Share your{" "}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              mechanical requirements
            </span>
            .
          </h1>
        </section>

        {/* Main contact layout */}
        <section className="mt-10 grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
          {/* Form */}
          <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-5 sm:p-6 shadow-[0_20px_60px_rgba(15,23,42,0.9)]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-3">
              Share your details
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* FormSubmit hidden fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission from MechParts Hub"
              />

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-slate-300">Full name</label>
                  <input
                    name="fullname"
                    type="text"
                    required
                    className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-slate-300">Company</label>
                  <input
                    name="company"
                    type="text"
                    className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                    placeholder="Organization name"
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-slate-300">Work email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-slate-300">
                    Phone (with country code)
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                    placeholder="+91-XXXXXXXXXX"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-slate-300">
                  What do you need help with?
                </label>
                <select
                  name="requirement"
                  required
                  className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                >
                  <option value="">Select an option</option>
                  <option>Bearings for motors/pumps</option>
                  <option>V-belts & pulleys</option>
                  <option>Couplings & power transmission</option>
                  <option>Gearboxes & drives</option>
                  <option>Spare parts for maintenance (MRO)</option>
                  <option>Other mechanical components</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-slate-300">
                  Briefly describe your requirement
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-2 text-xs sm:text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 resize-none"
                  placeholder="Describe your machines, quantities, brands and timelines..."
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  name="consent"
                  id="consent"
                  type="checkbox"
                  required
                  className="mt-0.5 h-3.5 w-3.5 rounded border-slate-700 bg-slate-900 text-sky-500"
                />
                <label
                  htmlFor="consent"
                  className="text-[11px] text-slate-300 leading-snug"
                >
                  I agree to be contacted by MechParts Hub. My details will be used
                  only for this enquiry.
                </label>
              </div>

              {/* Submit button with status text */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {btnText}
              </button>

              <p className="text-[10px] text-slate-400">
                Typical response time: 1–2 business days. Check your email (Inbox,
                Spam, Promotions) for a confirmation.
              </p>
            </form>
          </div>

          {/* Side info card (you can adapt to your business) */}
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">
                Direct contact
              </p>
              <div className="space-y-1.5 text-slate-100">
                <p>
                  📧 Email:{" "}
                  <a
                    href="mailto:kdolas99@gmail.com"
                    className="hover:text-blue-500 transition"
                  >
                    kdolas99@gmail.com
                  </a>
                </p>
                <p>
                  📱 Phone:{" "}
                  <span className="text-slate-200">
                    +91-98765-43210
                  </span>
                </p>
              </div>
              <p className="mt-3 text-[11px] text-slate-400">
                Prefer email or phone? Reach out directly—our team will respond
                with next steps.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
