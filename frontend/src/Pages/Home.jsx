// src/routes/Home.jsx
import React from "react";
import { FoodHero } from "../components/FoodHero";
import { Accordion } from "../components/ui/Accordion";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export default function Home() {
  const accordionItems = [
    {
      title: "Do you deliver daily to restaurants and cloud kitchens?",
      content:
        "Yes. We support both daily and scheduled deliveries for restaurants, cloud kitchens, cafes and offices, depending on your volume and route."
    },
    {
      title: "Which categories of food products do you supply?",
      content:
        "We supply fresh fruits and vegetables, dry groceries and staples, dairy, frozen products, ready-to-cook items and office pantry essentials."
    },
    {
      title: "Do you handle bulk or event orders?",
      content:
        "Yes. You can share your event date, guest count and menu outline, and we will help you plan quantities and delivery timelines for bulk orders."
    }
  ];

  return (
    <>
      <FoodHero />

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600">
              Featured products
            </p>
            <h2 className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl">
              Quick picks for everyday kitchen operations
            </h2>
          </div>
          <Link
            to="/products"
            className="text-xs font-medium text-emerald-700 hover:text-emerald-800"
          >
            View all products →
          </Link>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Why choose us + FAQs */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-8 lg:grid-cols-[1.3fr,1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
              Why kitchens choose us
            </p>
            <h2 className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl">
              Fresh, consistent ingredients with predictable deliveries.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Work with a food supply partner that understands prep time, peak
              hours and storage constraints — not just price per kilo. We focus
              on freshness, reliability and flexibility for busy kitchens.
            </p>

            <div className="mt-4 grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-100 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Freshness & quality
                </h3>
                <p className="mt-1 text-xs text-slate-600">
                  Ingredients sourced from trusted farms and suppliers with
                  proper handling so your dishes stay consistent every day.
                </p>
              </div>
              <div className="rounded-xl border border-emerald-100 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Reliable delivery windows
                </h3>
                <p className="mt-1 text-xs text-slate-600">
                  Route‑planned deliveries and clear cut‑off times so your team
                  knows exactly when to expect each order.
                </p>
              </div>
              <div className="rounded-xl border border-emerald-100 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Flexible order volumes
                </h3>
                <p className="mt-1 text-xs text-slate-600">
                  From trial quantities for new menus to full‑scale weekly
                  orders for multiple outlets, we adapt to your demand.
                </p>
              </div>
              <div className="rounded-xl border border-emerald-100 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Support for chefs & owners
                </h3>
                <p className="mt-1 text-xs text-slate-600">
                  A support team that can help you plan categories, substitutes
                  and stock levels as your menu and volumes grow.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
              FAQs
            </p>
            <Accordion items={accordionItems} />
          </div>
        </div>
      </section>
    </>
  );
}
