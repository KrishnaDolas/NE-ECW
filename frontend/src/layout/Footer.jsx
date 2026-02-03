// src/layout/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-emerald-100 bg-emerald-50/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 text-xs text-slate-600 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
            FreshFoods Hub
          </p>
          <p className="mt-2 max-w-sm">
            B2B and bulk supplier of fresh produce, staples and ready-to-cook
            food products for restaurants, cloud kitchens and offices.
          </p>
        </div>

        <div className="flex gap-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Company
            </p>
            <div className="mt-3 flex flex-col gap-1">
              <Link to="/about" className="hover:text-emerald-800">
                About us
              </Link>
              <Link to="/services" className="hover:text-emerald-800">
                Solutions
              </Link>
              <Link to="/contact" className="hover:text-emerald-800">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Support
            </p>
            <div className="mt-3 flex flex-col gap-1">
              <span>+91-98765-43210</span>
              <span>sales@freshfoodshub.in</span>
              <span>Pune, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-emerald-100 bg-white/70 py-3 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} FreshFoods Hub. All rights reserved.
      </div>
    </footer>
  );
}
