// src/routes/Services.jsx
import React from "react";
import { Accordion } from "../components/ui/Accordion";

export default function Services() {
  const items = [
    {
      title: "Bearing failure analysis",
      content:
        "We help diagnose premature bearing failures using photos, operating data and lubrication history, and recommend corrective actions."
    },
    {
      title: "Drive sizing and selection",
      content:
        "Share load, speed and duty cycle details and we will size belts, pulleys and couplings for optimal life and efficiency."
    },
    {
      title: "Spares standardisation",
      content:
        "We map existing spares across machines and suggest standardisation opportunities to reduce inventory complexity."
    }
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
        Services
      </p>
      <h1 className="mt-1 text-lg font-semibold text-slate-900">
        Application support for mechanical drives and rotating equipment.
      </h1>
      <div className="mt-3 grid gap-8 lg:grid-cols-[1.4fr,1fr]">
        <div className="space-y-4 text-sm text-slate-700">
          <p>
            Beyond supplying components, we help your team specify the right bearings, belts and couplings for each application. This reduces unplanned downtime and extends equipment life.
          </p>
          <p>
            For critical machines, we can work with your maintenance team to map operating conditions and create stocking plans that keep essential spares available without overstocking.
          </p>
        </div>
        <div>
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
