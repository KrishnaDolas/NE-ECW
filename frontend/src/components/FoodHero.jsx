// src/components/FoodHero.jsx
import React, { useEffect, useState } from "react";
import { Button } from "./ui/Button";

const slides = [
  {
    id: 1,
    title: "Fresh ingredients, daily",
    subtitle:
      "Source premium vegetables, fruits and staples for your kitchen.",
    cta: "Shop fresh produce",
    image:
      "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 2,
    title: "Bulk food supplies",
    subtitle:
      "Packaged staples, oils and pulses for restaurants and cloud kitchens.",
    cta: "Explore bulk packs",
    image:
      "https://images.pexels.com/photos/3298180/pexels-photo-3298180.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    title: "Ready-to-cook solutions",
    subtitle:
      "Marinated items and prepped ingredients to save prep time.",
    cta: "Discover ready-to-cook",
    image:
      "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
              alt={slide.title}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
        {/* Soft light overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/50 to-white/50 md:from-white/50 md:via-white/45 md:to-white/50" />
      </div>

      {/* Center content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700">
          Fresh food supplies
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
          {current.title}
        </h1>
        <p className="mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
          {current.subtitle}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button className="bg-emerald-600 text-xs font-semibold text-emerald-50 hover:bg-emerald-700 px-6 py-2.5">
            {current.cta}
          </Button>
          <button className="rounded-full border border-emerald-200 bg-white/80 px-5 py-2 text-xs font-medium text-emerald-800 shadow-sm hover:bg-emerald-50">
            View all products
          </button>
        </div>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-[11px] text-slate-500 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Trusted by restaurants across Maharashtra
        </div>

        {/* Slider dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === active
                  ? "w-6 bg-emerald-600"
                  : "w-2 bg-emerald-200 hover:bg-emerald-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
