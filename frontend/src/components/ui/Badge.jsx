// src/components/ui/Badge.jsx
import React from "react";

export function Badge({ children, className = "" }) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 " +
        className
      }
    >
      {children}
    </span>
  );
}
