// src/routes/About.jsx
import React from "react";

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
        About us
      </p>
      <h1 className="mt-1 text-lg font-semibold text-slate-900">
        Mechanical distribution partner for OEM and MRO teams.
      </h1>
      <div className="mt-3 grid gap-6 text-sm text-slate-700 md:grid-cols-2">
        <p>
          MechParts Hub is a mechanical components distributor focused on industrial bearings, power transmission and couplings. We support OEMs, maintenance teams and project contractors with reliable supply and application guidance.
        </p>
        <p>
          From electric motors and pumps to conveyors and compressors, our products are selected to maximise uptime and simplify maintenance. Our team understands real plant conditions like misalignment, contamination and vibration — not just catalogue ratings.
        </p>
      </div>
      <div className="mt-6 grid gap-4 text-xs text-slate-700 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Industries
          </p>
          <p className="mt-2">
            Automotive, process, food & beverage, cement, packaging, machine builders and more.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Location
          </p>
          <p className="mt-2">
            Pune-based warehouse with partner stocking locations across Maharashtra.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Values
          </p>
          <p className="mt-2">
            Honest engineering advice, transparent pricing and long-term relationships with maintenance teams.
          </p>
        </div>
      </div>
    </section>
  );
}
