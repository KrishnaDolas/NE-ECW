import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import logo from "../assets/Logo.webp";

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
        ? "bg-[#BA5C1E] text-white shadow-sm"
        : "text-slate-600 hover:text-[#BA5C1E] hover:bg-[#BA5C1E]/10"
    ].join(" ");

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#BA5C1E]/20 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={closeMobile}
        >
          <img
            src={logo}
            alt="Pure Nut Logo"
            className="h-13 w-12 rounded-lg object-contain"
          />
          <span className="text-base font-semibold text-[#BA5C1E]">
            Pure Nut
          </span>
        </Link>

        {/* Right section */}
        <div className="flex items-center gap-3">
          
          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 md:flex">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/products" className={navClass}>Products</NavLink>
            <NavLink to="/services" className={navClass}>Solutions</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </nav>

          {/* Cart */}
          <NavLink
            to="/cart"
            onClick={closeMobile}
            className="relative inline-flex items-center gap-1.5 rounded-full border border-[#BA5C1E]/20 bg-[#BA5C1E]/10 px-3 py-1.5 text-xs font-medium text-[#BA5C1E] shadow-sm hover:bg-[#BA5C1E]/20"
          >
            <ShoppingCartIcon
              fontSize="small"
              className="text-[#BA5C1E]"
            />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="ml-1 inline-flex min-w-[1.25rem] items-center justify-center rounded-full bg-[#BA5C1E] px-1 text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </NavLink>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-[#BA5C1E]/20 bg-white p-1.5 text-[#BA5C1E] shadow-sm hover:bg-[#BA5C1E]/10 md:hidden"
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

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-[#BA5C1E]/20 bg-white/95 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm">
            {["/", "/products", "/services", "/about", "/contact"].map(
              (path, i) => (
                <NavLink
                  key={i}
                  to={path}
                  onClick={closeMobile}
                  className="rounded-lg px-3 py-2 text-slate-700 hover:bg-[#BA5C1E]/10"
                >
                  {["Home", "Products", "Solutions", "About", "Contact"][i]}
                </NavLink>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
