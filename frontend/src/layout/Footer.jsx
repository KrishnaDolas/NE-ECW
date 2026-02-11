// src/layout/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-amber-100 bg-amber-50/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 text-xs text-slate-600 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BE6428]">
            Pure Nut
          </p>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#BE6428]/80">
            Luxury in a Jar
          </p>
          <p className="mt-2 max-w-sm">
            Small-batch nut butters made from premium nuts — smooth, crunchy,
            chocolate and 100% variants for everyday indulgence.
          </p>
        </div>

        <div className="flex gap-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BE6428]">
              Pages
            </p>
            <div className="mt-3 flex flex-col gap-1">
              <Link to="/" className="hover:text-[#BE6428]">
                Home
              </Link>
              <Link to="/products" className="hover:text-[#BE6428]">
                Products
              </Link>
              <Link to="/about" className="hover:text-[#BE6428]">
                About
              </Link>
              <Link to="/contact" className="hover:text-[#BE6428]">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BE6428]">
              Contact
            </p>
            <div className="mt-3 flex flex-col gap-1">
              <span>Pune, Maharashtra</span>
              <span>📱 +91-8421-50-1905</span>
              <a
                href="mailto:rockw964@gmail.com"
                className="hover:text-[#BE6428]"
              >
                📧 rockw964@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-amber-100 bg-white/80 py-2 text-center text-[11px] text-slate-500">
  © {year} Pure Nut. All rights reserved.
  <div className="mt-1 text-[10px]">
    <a
      href="https://neuroedgetechnologies.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#BE6428] hover:underline"
    >
      Neuro Edge&apos;s Creation
    </a>
  </div>
</div>

    </footer>
  );
}
