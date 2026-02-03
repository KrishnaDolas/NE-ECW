// src/components/ui/Button.jsx
import React from "react";
import { Button as MUIButton } from "@mui/material";

export function Button({ className = "", children, ...props }) {
  return (
    <MUIButton
      {...props}
      className={
        "normal-case rounded-full bg-emerald-600 px-4 py-2 text-xs sm:text-sm font-semibold text-emerald-50 hover:bg-emerald-700 shadow-sm " +
        className
      }
      disableElevation
    >
      {children}
    </MUIButton>
  );
}
