"use client";

import React, { useState } from "react";

export type SubTab = { id: string; label: string; content: React.ReactNode };

/** Small in-panel tab row (used for Article II: Sections 1, 2 and 3). */
export default function SubTabs({ tabs }: { tabs: SubTab[] }) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);
  const current = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <div>
      <div
        role="tablist"
        className="flex flex-wrap gap-2 mb-5 pb-4 border-b border-[#E2EAC8]"
      >
        {tabs.map((t) => {
          const on = t.id === current.id;
          return (
            <button
              key={t.id}
              role="tab"
              id={`subtab-${t.id}`}
              aria-selected={on}
              aria-controls={`subtab-panel-${t.id}`}
              onClick={() => setActiveId(t.id)}
              className={`rounded-[8px] border px-3.5 py-1.5 text-[13px] text-left transition-colors duration-200 ${
                on
                  ? "bg-[#2D5016] border-[#2D5016] text-white font-semibold"
                  : "bg-white border-[#D4E8BE] text-[#4A7C2F] hover:border-[#7AAB50]"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`subtab-panel-${current.id}`}
        aria-labelledby={`subtab-${current.id}`}
      >
        {current.content}
      </div>
    </div>
  );
}
