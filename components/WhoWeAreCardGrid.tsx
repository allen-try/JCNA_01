"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const EASE_CURVE = [0.16, 1, 0.3, 1] as const;

type CardGridProps = {
  sections: { id: string; label: string }[];
  inView: boolean;
  /** "link": navigates to /WhoWeAre?section=id (home teaser).
   *  "toggle": expands a local panel in place (full WhoWeAre page). */
  mode: "link" | "toggle";
  basePath?: string;
  openId?: string | null;
  onToggle?: (id: string) => void;
};

export default function WhoWeAreCardGrid({
  sections,
  inView,
  mode,
  basePath = "/WhoWeAre",
  openId = null,
  onToggle,
}: CardGridProps) {
  const router = useRouter();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Let modifier-clicks (open in new tab, etc.) behave normally.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    if (typeof document !== "undefined" && "startViewTransition" in document) {
      e.preventDefault();
      document.startViewTransition(() => {
        router.push(href);
      });
    }
    // Otherwise let the Link's normal navigation happen (older browsers
    // just get a plain instant navigation, no error, no broken click).
  };

  return (
    <motion.div
      className="grid grid-cols-2 min-[421px]:grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-2 min-[421px]:gap-3 mt-7"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: EASE_CURVE, delay: 0.22 }}
    >
      {sections.map((s) => {
        const isCardOpen = mode === "toggle" && openId === s.id;

        const cardClasses = `group relative flex items-center justify-center px-3.5 py-5 rounded-[10px] text-center cursor-pointer border-[1.5px] overflow-hidden transition-[transform,border-color,box-shadow] duration-200 ease-out active:scale-95 hover:border-[#7AAB50] hover:-translate-y-0.5 ${
          isCardOpen
            ? "bg-[#F0F5E8] border-[#2D5016] shadow-[0_4px_18px_rgba(45,80,22,0.13)]"
            : "bg-white border-[#E2EAC8] hover:shadow-[0_4px_16px_rgba(45,80,22,0.10)]"
        }`;

        const labelClasses = `font-cormorant text-[clamp(14px,2.2vw,16px)] tracking-[0.07em] transition-colors duration-200 ${
          isCardOpen ? "text-[#2D5016] font-semibold italic" : "text-[#4A7C2F] font-medium"
        }`;

        // Top accent bar — sits flush across the top edge, darkens on
        // hover/open. Muted sage at rest so it reads as a quiet structural
        // detail rather than a loud highlight.
        const topBarClasses = `absolute top-0 left-0 right-0 h-[3px] transition-colors duration-200 ease-out ${
          isCardOpen ? "bg-[#2D5016]" : "bg-[#C5D09B] group-hover:bg-[#2D5016]"
        }`;

        // Same view-transition-name on both pages for a given card id lets
        // the browser morph size/position between the teaser card and its
        // spot in the full-page grid, instead of hard-cutting between pages.
        const transitionStyle: React.CSSProperties = {
          viewTransitionName: `wwa-card-${s.id}`,
        };

        if (mode === "link") {
          const href = `${basePath}?section=${s.id}`;
          return (
            <Link
              key={s.id}
              href={href}
              prefetch
              className={cardClasses}
              style={transitionStyle}
              onClick={(e) => handleLinkClick(e, href)}
            >
              <span className={topBarClasses} aria-hidden="true" />
              <span className={labelClasses}>{s.label}</span>
            </Link>
          );
        }

        return (
          <button
            key={s.id}
            className={cardClasses}
            style={transitionStyle}
            onClick={() => onToggle?.(s.id)}
            aria-expanded={isCardOpen}
            aria-controls="whoweare-panel"
          >
            <span className={topBarClasses} aria-hidden="true" />
            <span className={labelClasses}>{s.label}</span>
          </button>
        );
      })}
    </motion.div>
  );
}
