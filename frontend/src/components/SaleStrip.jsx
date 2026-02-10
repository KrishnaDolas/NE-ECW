import React from "react";

export function SaleStrip() {
  const text = "On Sale ! 20% ! Hurry Up !";

  return (
    <div className="border-b border-[#BA5C1E]/20 bg-[#BA5C1E]/95 text-white">
      <div className="relative mx-auto flex max-w-6xl overflow-hidden px-4 py-1.5 text-[11px] sm:text-xs font-semibold">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-6">{text}</span>
          <span className="mx-6">{text}</span>
          <span className="mx-6">{text}</span>
          <span className="mx-6">{text}</span>
        </div>
      </div>
    </div>
  );
}
