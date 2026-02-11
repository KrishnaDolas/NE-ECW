// src/Pages/Home.jsx (or src/routes/Home.jsx)
import React from "react";
import { FoodHero } from "../components/FoodHero";
import { Accordion } from "../components/ui/Accordion";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export default function Home() {
  const accordionItems = [
    {
      title: "Is Pure Nut peanut butter made with any additives?",
      content:
        "No. Pure Nut butters are made from premium nuts with no added oils, no preservatives and no artificial flavours."
    },
    {
      title: "What makes your peanut butter different?",
      content:
        "We slow-roast our nuts in small batches and grind them fresh for a rich, natural flavour and a creamy, spoonable texture."
    },
    {
      title: "How should I store the jars?",
      content:
        "Store in a cool, dry place. Natural oil separation is normal — just stir well. You can refrigerate after opening if you prefer a thicker texture."
    }
  ];

  return (
    <>
      <FoodHero />

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BA5C1E]">
              Featured nut butters
            </p>
            <h2 className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl">
              Quick picks from the Pure Nut range
            </h2>
          </div>
          <Link
            to="/products"
            className="text-xs font-medium text-[#BA5C1E] hover:underline"
          >
            View all products →
          </Link>
        </div>

        {/* 4 products per row */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Why choose us + FAQs */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-8 lg:grid-cols-[1.3fr,1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BA5C1E]">
              Why peanut lovers choose us
            </p>
            <h2 className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl">
              Freshly ground nut butters, crafted honestly.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              We start with high-quality nuts, roast them in small batches and
              grind them without shortcuts — so every spoonful tastes clean,
              rich and real.
            </p>

            <div className="mt-4 grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
              <div className="rounded-xl border border-[#BA5C1E]/20 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  100% honest ingredients
                </h3>
                <p className="mt-1 text-xs text-slate-600">
                  No refined sugar in our 100% variants, no palm oil and no
                  preservatives — just nuts and carefully chosen additions
                  where needed.
                </p>
              </div>

              <div className="rounded-xl border border-[#BA5C1E]/20 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Small-batch roasting
                </h3>
                <p className="mt-1 text-xs text-slate-600">
                  Nuts are roasted in small batches for better control over
                  flavour and aroma, then ground while fresh for maximum taste.
                </p>
              </div>

              <div className="rounded-xl border border-[#BA5C1E]/20 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Variants for every palate
                </h3>
                <p className="mt-1 text-xs text-slate-600">
                  Smooth, crunchy, chocolate and 100% nut options so you can
                  match every breakfast bowl, smoothie and dessert.
                </p>
              </div>

              <div className="rounded-xl border border-[#BA5C1E]/20 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Perfect for home & HoReCa
                </h3>
                <p className="mt-1 text-xs text-slate-600">
                  Packed for both home consumers and professional kitchens —
                  ideal for toast bars, cafés, desserts and prep counters.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#BA5C1E]">
              FAQs
            </p>
            <Accordion items={accordionItems} />
          </div>
        </div>
      </section>
    </>
  );
}
