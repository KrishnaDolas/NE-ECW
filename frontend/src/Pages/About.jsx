// src/routes/About.jsx
import React from "react";

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      {/* Eyebrow + heading */}
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
        Beyond Peanut Butter
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
        A Story of Purity and Passion.
      </h1>

      {/* Intro + image */}
      <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr,1fr] md:items-center">
        <div className="text-sm leading-relaxed text-slate-700 space-y-3">
          <p>
            The Pure Nut isn’t just about nut butter. It’s about a belief that real food still exists.
Our founder — a mom and finance professional — spent years searching for something simple and honest to feed her family. After tasting freshly roasted peanut butter in Groningen, she realized Amsterdam needed this purity.
          </p>
          <p>
            Today, The Pure Nut crafts premium nut butters from the finest ingredients sourced globally — peanuts from Argentina, Brazil, and the USA; hazelnuts from Georgia; almonds from California; and Barry Callebaut chocolate for indulgent variants.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/60 shadow-sm">
          <img
            src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Chef selecting fresh ingredients in a kitchen"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Stats / pillars */}
      <div className="mt-8 grid gap-4 text-xs text-slate-700 md:grid-cols-3">
        <div className="rounded-xl border border-emerald-100 bg-white p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
           Mission
          </p>
          <p className="mt-2">
            To bring back simplicity and honesty to everyday food.
          </p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Who we serve
          </p>
          <p className="mt-2">
            Quick-service restaurants, fine‑dine kitchens, cloud kitchens, caterers,
            bakeries and corporate cafeterias across Maharashtra.
          </p>
        </div>
        <div className="rounded-xl border border-emerald-100 bg-white p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
            What we supply
          </p>
          <p className="mt-2">
            Fresh fruits and vegetables, grains and pulses, oils and spices, dairy, frozen
            items and selected ready‑to‑cook SKUs for busy kitchens.
          </p>
        </div>
        <div className="rounded-xl border border-emerald-100 bg-white p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
            How we work
          </p>
          <p className="mt-2">
            Transparent pricing, route‑planned deliveries, and a support team that
            understands prep time, peak hours and real‑world kitchen constraints.
          </p>
        </div>
      </div>
    </section>
  );
}
