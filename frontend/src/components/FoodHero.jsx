// src/components/FoodHero.jsx
import React from "react";
import { Button } from "./ui/Button";
import AIVideo from "../assets/aivideo.mp4";

export function FoodHero() {
  return (
    <section className="relative flex h-[70vh] w-full items-stretch justify-center overflow-hidden bg-black sm:h-[80vh] lg:h-[90vh]">
      {/* Background video sized to hero */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={AIVideo} type="video/mp4" />
      </video>

      {/* Dark gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pb-12 pt-24 sm:pt-32 lg:pt-40 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-200">
          Luxury in a Jar
        </p>

        <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl drop-shadow">
          Pure Nut
        </h1>

        <p className="mt-2 text-base font-medium text-amber-50 sm:text-lg drop-shadow">
          Butters, crafted fresh.
        </p>

        <p className="mt-3 max-w-xl text-xs text-amber-100 sm:text-sm">
          Creamy, crunchy and chocolatey peanut butters made from premium nuts — perfect for toast, smoothies and desserts.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button className="bg-amber-600 text-xs font-semibold text-amber-50 hover:bg-amber-700 px-6 py-2.5 shadow-md shadow-black/30">
            Explore nut butters
          </Button>
          <button className="rounded-full border border-amber-200/70 bg-white/85 px-5 py-2 text-xs font-medium text-amber-900 shadow-sm hover:bg-amber-50">
            View all products
          </button>
        </div>
      </div>
    </section>
  );
}
