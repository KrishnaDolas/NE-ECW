import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SaleStrip } from "../components/SaleStrip";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-amber-50 text-slate-900">
      <Header />
      <SaleStrip />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
