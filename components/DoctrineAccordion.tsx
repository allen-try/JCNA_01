"use client";

import React, { useState } from "react";

type DocItem = {
  id: string;
  num: string;
  title: string;
  content?: React.ReactNode;
};

export default function DoctrineAccordion({ items }: { items: DocItem[] }) {
  const [openDoc, setOpenDoc] = useState<string | null>(null);
  const toggle = (id: string) => setOpenDoc((prev) => (prev === id ? null : id));

  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => {
        const hasContent = !!item.content;
        const isOpen = openDoc === item.id;
        return (
          <div
            key={item.id}
            className={`rounded-[10px] overflow-hidden border transition-colors duration-200 ${
              isOpen ? "border-[#2D5016]" : "border-[#D4E8BE]"
            }`}
          >
            <button
              onClick={() => hasContent && toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`doc-panel-${item.id}`}
              className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-left transition-colors duration-200 ${
                isOpen ? "bg-[#F0F5E8]" : "bg-white"
              } ${hasContent ? "cursor-pointer" : "cursor-default"}`}
            >
              <span className="bg-[#2D5016] text-white rounded-[6px] px-2 py-0.5 text-[11px] font-bold shrink-0">
                {item.num}
              </span>
              <span className="font-semibold text-[13px] text-[#2D5016] flex-1">{item.title}</span>
              {hasContent && (
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-base font-light shrink-0 select-none transition-transform duration-200 ${
                    isOpen ? "bg-[#2D5016] text-white rotate-45" : "bg-[#EAF3DE] text-[#2D5016] rotate-0"
                  }`}
                >
                  +
                </span>
              )}
            </button>

            {/*
              CSS grid-rows height trick instead of animating height:"auto".
              0fr -> 1fr lets the browser compositor handle the transition,
              no JS layout measuring, no reflow thrashing — this is what
              was causing the stutter when a second (nested) accordion
              animated inside the outer content pane's own height animation.
            */}
            {hasContent && (
              <div
                id={`doc-panel-${item.id}`}
                role="region"
                className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden min-h-0">
                  <div className="p-4 border-t border-[#E2EAC8] bg-white">{item.content}</div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
