import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export function Header() {
  const {
    state: { cart }
  } = useStore();

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const navClass = ({ isActive }) =>
    [
      "text-xs sm:text-sm font-medium transition-colors px-2 py-1 rounded-full",
      isActive
        ? "bg-slate-800 text-slate-50"
        : "text-slate-300 hover:text-slate-50 hover:bg-slate-800/60"
    ].join(" ");

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-400 text-[11px] font-semibold text-slate-950 shadow-lg shadow-sky-500/30">
            MP
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-50">
              MechParts Hub
            </span>
            <span className="text-[10px] text-slate-400">
              Bearings • Belts • Couplings
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={navClass}>
            Products
          </NavLink>
          <NavLink to="/services" className={navClass}>
            Services
          </NavLink>
          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </nav>

        <NavLink
          to="/cart"
          className="relative inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-100 shadow-sm hover:border-sky-500 hover:bg-slate-900"
        >
          <ShoppingCartIcon fontSize="small" />
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="ml-1 inline-flex min-w-[1.25rem] items-center justify-center rounded-full bg-sky-500 px-1 text-[10px] font-semibold text-slate-950">
              {cartCount}
            </span>
          )}
        </NavLink>
      </div>
    </header>
  );
}
