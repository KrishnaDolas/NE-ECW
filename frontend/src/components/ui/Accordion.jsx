// src/components/ui/Accordion.jsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() =>
                setOpenIndex(open ? null : index)
              }
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              <span>{item.title}</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            {open && (
              <div className="px-4 pb-4 text-sm text-slate-600">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
