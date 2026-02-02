// src/components/MechanicalHero.jsx
import React from "react";
import { Button } from "./ui/Button";
import heroVideo from "../assets/herovideo.webm"; // <-- your actual file

export function MechanicalHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background video (desktop and larger) */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/webm" />
          {/* you can add an mp4 source later if you want */}
        </video>
      </div>

      {/* Simple fallback background for mobile / if video fails */}
      <div className="absolute inset-0 bg-slate-900 md:bg-slate-950/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 lg:flex-row lg:py-20">
        <div className="max-w-xl text-center lg:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
            Precision Mechanical Components
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Keep your factory running with industrial-grade bearings, belts and couplings.
          </h1>
          <p className="mt-4 text-sm text-slate-200">
            Source high-quality mechanical components for automotive, process and general engineering applications. 
            Same-day dispatch across Maharashtra for in-stock items.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button
              variant="contained"
              color="primary"
              className="bg-blue-500 hover:bg-blue-600"
            >
              Browse products
            </Button>
            <button className="rounded-lg border border-slate-400/60 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 backdrop-blur hover:bg-slate-900/70">
              Download catalogue
            </button>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-200 lg:justify-start">
            <div>
              <span className="block font-semibold text-slate-50">
                15+ years
              </span>
              <span className="text-slate-200/80">Mechanical distribution</span>
            </div>
            <div>
              <span className="block font-semibold text-slate-50">
                5000+
              </span>
              <span className="text-slate-200/80">SKUs across categories</span>
            </div>
            <div>
              <span className="block font-semibold text-slate-50">
                Same-day
              </span>
              <span className="text-slate-200/80">Dispatch for stocked items</span>
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="mx-auto grid max-w-md gap-4">
            <div className="rounded-xl border border-slate-500/50 bg-slate-900/60 p-4 shadow-xl backdrop-blur">
              <p className="text-xs font-medium text-slate-300">
                Condition monitoring
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-50">
                Keep critical motors running with high-precision bearings and vibration-optimized couplings.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs text-slate-50">
              <div className="rounded-xl border border-slate-500/50 bg-slate-900/60 p-3 backdrop-blur">
                <p className="text-[10px] uppercase tracking-wide text-slate-300">
                  Bearings
                </p>
                <p className="mt-1 text-sm font-semibold">
                  Electric motor, pump and gearbox ranges in stock.
                </p>
              </div>
              <div className="rounded-xl border border-slate-500/50 bg-slate-900/60 p-3 backdrop-blur">
                <p className="text-[10px] uppercase tracking-wide text-slate-300">
                  Power transmission
                </p>
                <p className="mt-1 text-sm font-semibold">
                  V-belts, pulleys and couplings sized to your application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
