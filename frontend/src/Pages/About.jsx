// src/routes/About.jsx
import React from "react";

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      {/* Eyebrow + heading */}
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
        About FreshFoods Hub
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
        Reliable fresh food supply for modern kitchens.
      </h1>

      {/* Intro + image */}
      <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr,1fr] md:items-center">
        <div className="text-sm leading-relaxed text-slate-700 space-y-3">
          <p>
            FreshFoods Hub is a B2B food supplier focused on fresh produce, pantry
            essentials and ready-to-cook products. We help restaurants, cloud kitchens,
            cafes and offices keep their menus running without worrying about daily
            sourcing.
          </p>
          <p>
            Our team curates ingredients with chefs and kitchen managers in mind — consistent
            quality, easy storage and reliable delivery windows. Whether you&apos;re planning
            a weekly menu or scaling a new outlet, we work to make your food operations
            simpler and more predictable.
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
