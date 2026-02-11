// src/components/FoodHero.jsx
import React, { useEffect, useState } from "react";
import { Button } from "./ui/Button";

const slides = [
  {
    id: 1,
    cta: "Explore nut butters",
    image:
      "https://images.pexels.com/photos/3735152/pexels-photo-3735152.jpeg?auto=compress&cs=tinysrgb&w=1600" // spoon + jar + peanuts [web:278]
  },
  {
    id: 2,
    cta: "View flavour variants",
    image:
      "https://images.pexels.com/photos/3735151/pexels-photo-3735151.jpeg?auto=compress&cs=tinysrgb&w=1600" // top view jar + spoon [web:278]
  },
  {
    id: 3,
    cta: "Shop Pure Nut online",
    image:
      "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=1600" // toast with peanut butter [web:278]
  },
  {
    id: 4,
    cta: "See breakfast ideas",
    image:
      "https://images.pexels.com/photos/4938391/pexels-photo-4938391.jpeg?auto=compress&cs=tinysrgb&w=1600" // jar + bread + peanuts [web:278]
  },
  {
    id: 5,
    cta: "Try crunchy & smooth",
    image:
      "https://images.pexels.com/photos/3735150/pexels-photo-3735150.jpeg?auto=compress&cs=tinysrgb&w=1600" // multiple toasts [web:278]
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
    <section className="relative flex min-h-[85vh] items-stretch justify-center overflow-hidden">
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
              alt="Pure Nut peanut butter"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
        {/* Very light overlay so visuals stay in focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/20 md:from-black/20 md:via-black/10 md:to-black/30" />
      </div>

      {/* Content, anchored lower so image dominates */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pb-10 pt-24 sm:pt-32 lg:pt-40 text-center">
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
          Creamy, crunchy and chocolatey peanut butters made from premium nuts —
          perfect for toast, smoothies and desserts.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button className="bg-amber-600 text-xs font-semibold text-amber-50 hover:bg-amber-700 px-6 py-2.5 shadow-md shadow-black/20">
            {current.cta}
          </Button>
          <button className="rounded-full border border-amber-200/70 bg-white/85 px-5 py-2 text-xs font-medium text-amber-900 shadow-sm hover:bg-amber-50">
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
                  ? "w-6 bg-amber-400"
                  : "w-2 bg-amber-200/70 hover:bg-amber-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
