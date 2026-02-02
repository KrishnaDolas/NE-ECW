// src/components/ui/Card.jsx
import React from "react";

export function Card({ className = "", children }) {
  return (
    <div
      className={
        "rounded-xl border border-slate-200 bg-white shadow-sm " +
        className
      }
    >
      {children}
    </div>
  );
}
