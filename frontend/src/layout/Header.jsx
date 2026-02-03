// src/layout/Header.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export function Header() {
  const {
    state: { cart }
  } = useStore();

  const [mobileOpen, setMobileOpen] = useState(false);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const navClass = ({ isActive }) =>
    [
      "text-xs sm:text-sm font-medium transition-colors px-3 py-1.5 rounded-full",
      isActive
        ? "bg-emerald-600 text-white shadow-sm"
        : "text-slate-600 hover:text-emerald-700 hover:bg-emerald-50"
    ].join(" ");

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMobile}>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-lime-300 to-amber-300 text-[11px] font-semibold text-emerald-950 shadow-md shadow-emerald-200/70">
            FF
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-900">
              FreshFoods Hub
            </span>
            <span className="text-[11px] text-slate-500">
              Produce • Staples • Ready-to-cook
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={navClass}>
            Products
          </NavLink>
          <NavLink to="/services" className={navClass}>
            Solutions
          </NavLink>
          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </nav>

        {/* Right side: Cart + mobile menu button */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/cart"
            onClick={closeMobile}
            className="relative inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-800 shadow-sm hover:border-emerald-200 hover:bg-emerald-100"
          >
            <ShoppingCartIcon
              fontSize="small"
              className="text-emerald-700"
            />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="ml-1 inline-flex min-w-[1.25rem] items-center justify-center rounded-full bg-emerald-600 px-1 text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </NavLink>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-emerald-100 bg-white p-1.5 text-emerald-700 shadow-sm hover:bg-emerald-50 md:hidden"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <CloseIcon fontSize="small" />
            ) : (
              <MenuIcon fontSize="small" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <div className="border-t border-emerald-100 bg-white/95 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm">
            <NavLink
              to="/"
              onClick={closeMobile}
              className="rounded-lg px-3 py-2 text-slate-700 hover:bg-emerald-50"
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              onClick={closeMobile}
              className="rounded-lg px-3 py-2 text-slate-700 hover:bg-emerald-50"
            >
              Products
            </NavLink>
            <NavLink
              to="/services"
              onClick={closeMobile}
              className="rounded-lg px-3 py-2 text-slate-700 hover:bg-emerald-50"
            >
              Solutions
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeMobile}
              className="rounded-lg px-3 py-2 text-slate-700 hover:bg-emerald-50"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={closeMobile}
              className="rounded-lg px-3 py-2 text-slate-700 hover:bg-emerald-50"
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
