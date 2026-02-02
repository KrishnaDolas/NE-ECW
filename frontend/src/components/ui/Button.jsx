// src/components/ui/Button.jsx
import React from "react";
import { Button as MUIButton } from "@mui/material";

export function Button({ className = "", children, ...props }) {
  return (
    <MUIButton
      {...props}
      className={
        "normal-case rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 shadow-sm " +
        className
      }
      disableElevation
    >
      {children}
    </MUIButton>
  );
}
