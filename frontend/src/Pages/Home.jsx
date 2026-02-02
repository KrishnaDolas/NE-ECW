// src/routes/Home.jsx
import React from "react";
import { MechanicalHero } from "../components/MechanicalHero";
import { Accordion } from "../components/ui/Accordion";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export default function Home() {
  const accordionItems = [
    {
      title: "Do you support OEM and MRO requirements?",
      content:
        "Yes. We supply bearings, belts and couplings both to OEMs and to maintenance teams for breakdown and shutdown requirements."
    },
    {
      title: "Can you help with product selection?",
      content:
        "Share application data such as shaft size, load, speed and environment and our team will recommend suitable parts."
    },
    {
      title: "Do you offer same-day dispatch?",
      content:
        "For in-stock products, orders confirmed before 3 PM IST are dispatched the same working day from our Pune warehouse."
    }
  ];

  return (
    <>
      <MechanicalHero />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              Featured products
            </p>
            <h2 className="text-lg font-semibold text-slate-900">
              Quick picks for common mechanical applications
            </h2>
          </div>
          <Link
            to="/products"
            className="text-xs font-medium text-blue-600 hover:text-blue-700"
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
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-8 lg:grid-cols-[1.3fr,1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              Why mechanical teams choose us
            </p>
            <h2 className="mt-1 text-lg font-semibold text-slate-900">
              Industrial-grade components, backed by application support.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Work with a partner who understands shaft fits, load ratings and real-world operating conditions — not just catalogue part numbers.
            </p>
            <div className="mt-4 grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Application engineering help
                </h3>
                <p className="mt-1 text-xs text-slate-600">
                  Guidance on bearing life, belt tensioning and coupling selection for your drives.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Reliable supply chain
                </h3>
                <p className="mt-1 text-xs text-slate-600">
                  Stocking strategies built around your critical machines and shutdown windows.
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              FAQs
            </p>
            <Accordion items={accordionItems} />
          </div>
        </div>
      </section>
    </>
  );
}
