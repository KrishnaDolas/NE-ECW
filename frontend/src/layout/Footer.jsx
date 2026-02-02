import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 text-xs text-slate-400 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            MechParts Hub
          </p>
          <p className="mt-2 max-w-sm">
            Supplier of industrial bearings, power transmission components and
            mechanical spares for OEMs and maintenance teams across India.
          </p>
        </div>
        <div className="flex gap-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Company
            </p>
            <div className="mt-3 flex flex-col gap-1">
              <Link to="/about" className="hover:text-sky-400">
                About us
              </Link>
              <Link to="/services" className="hover:text-sky-400">
                Services
              </Link>
              <Link to="/contact" className="hover:text-sky-400">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Support
            </p>
            <div className="mt-3 flex flex-col gap-1">
              <span>+91-98765-43210</span>
              <span>sales@mechpartshub.in</span>
              <span>Pune, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-900 py-3 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} MechParts Hub. All rights reserved.
      </div>
    </footer>
  );
}
