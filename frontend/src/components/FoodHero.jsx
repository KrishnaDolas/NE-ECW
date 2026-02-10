// src/components/FoodHero.jsx
import React, { useEffect, useState } from "react";
import { Button } from "./ui/Button";

const slides = [
  {
    id: 1,
    cta: "Explore nut butters",
    image:
      "https://images.pexels.com/photos/3735151/pexels-photo-3735151.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 2,
    cta: "View flavour variants",
    image:
      "https://images.pexels.com/photos/3735150/pexels-photo-3735150.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 3,
    cta: "Shop Pure Nut online",
    image:
      "https://images.pexels.com/photos/3735152/pexels-photo-3735152.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
];

export function FoodHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive(prev => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  const current = slides[active];

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      {/* Background images slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt="Pure Nut nut butters"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
        {/* Soft light overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/30 md:from-white/25 md:via-white/15 md:to-white/25" />
      </div>

      {/* Center content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-700">
          Luxury in a Jar
        </p>

        <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
          Pure Nut
        </h1>

        <p className="mt-2 text-base font-medium text-slate-800 sm:text-lg">
          Butters, Crafted Fresh.
        </p>

        <p className="mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
          Pure by Nature. Honest by Choice. Premium nuts, zero additives, and a
          commitment to honest food.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button className="bg-amber-700 text-xs font-semibold text-amber-50 hover:bg-amber-800 px-6 py-2.5">
            {current.cta}
          </Button>
          <button className="rounded-full border border-amber-200 bg-white/80 px-5 py-2 text-xs font-medium text-amber-900 shadow-sm hover:bg-amber-50">
            View all products
          </button>
        </div>

        {/* Slider dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === active
                  ? "w-6 bg-amber-700"
                  : "w-2 bg-amber-200 hover:bg-amber-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
