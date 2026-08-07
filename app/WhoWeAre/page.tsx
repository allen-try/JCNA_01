"use client";

import React, { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import WhoWeAreCardGrid from "@/components/WhoWeAreCardGrid";
import { sections, sectionSummaries } from "@/components/whoWeAreSections";

const EASE_CURVE = [0.16, 1, 0.3, 1] as const;

const WhoWeArePageContent = () => {
  const searchParams = useSearchParams();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentPaneRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);

  // True only when the currently-open panel was set from the initial URL
  // (arrived here via a click on the home teaser). We skip the entrance
  // animation in that case so the panel is just *there* on load, instead
  // of visibly popping open a moment after the page paints.
  const [skipEntranceAnim, setSkipEntranceAnim] = useState(false);
  const hasHandledInitialParam = useRef(false);

  useEffect(() => {
    if (hasHandledInitialParam.current) return;
    hasHandledInitialParam.current = true;

    const section = searchParams.get("section");
    if (section && sections.some((s) => s.id === section)) {
      setSkipEntranceAnim(true);
      setOpenId(section);
      // Scroll after the panel has actually rendered, not on a flat timer.
      requestAnimationFrame(() => {
        contentPaneRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [searchParams]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleToggle = (id: string) => {
    // Any manual click after arrival should animate normally.
    setSkipEntranceAnim(false);
    // No scroll here on purpose — the card grid and the panel are both
    // already visible on screen when the user clicks, so forcing a scroll
    // just adds unnecessary motion. Scroll is only needed once: landing
    // fresh on the page from a home-page link (see the useEffect above).
    setOpenId((prev) => (prev === id ? null : id));
  };

  const openSection = sections.find((s) => s.id === openId);
  const isOpen = !!openId && !!openSection;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFDF5]">
      <Navbar />
      <div id="who-we-are" ref={sectionRef} className="w-full bg-[#FAFDF5] flex-grow">
        <div className="mx-auto w-full max-w-[1418px] px-6 lg:px-12 pt-14 pb-16 lg:pt-[70px] lg:pb-[80px]">

          {/* HEADING */}
          <motion.div
            className="text-center mb-8 lg:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_CURVE }}
          >
            <h2 className="font-cormorant text-[clamp(30px,5.5vw,46px)] text-[#2D5016] tracking-[0.15em] font-bold leading-none">
              Who We Are
            </h2>
            <motion.div
              className="h-[1px] bg-[#C5D09B] mt-[22px] origin-center"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.9, ease: EASE_CURVE, delay: 0.15 }}
            />
          </motion.div>

          {/* CARD GRID — shared with the home teaser, "toggle" mode here */}
          <WhoWeAreCardGrid
            sections={sectionSummaries}
            inView={inView}
            mode="toggle"
            openId={openId}
            onToggle={handleToggle}
          />

          {/* CONTENT PANE — CSS grid-rows instead of animating height:"auto".
              No JS layout measuring, no reflow thrashing. On first paint
              from a URL param, skipEntranceAnim disables the transition
              so the panel is just already-open, not animating open. */}
          <div ref={contentPaneRef} className="relative w-full">
            <div
              id="whoweare-panel"
              className={`grid mt-5 ${skipEntranceAnim ? "" : "transition-[grid-template-rows] duration-[320ms] ease-[cubic-bezier(0.16,1,0.3,1)]"}`}
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden min-h-0">
                {openSection && (
                  <div
                    className={`border-[1.5px] border-[#2D5016] rounded-xl bg-white overflow-hidden ${
                      skipEntranceAnim ? "" : "transition-opacity duration-200 delay-[60ms]"
                    } ${isOpen ? "opacity-100" : "opacity-0"}`}
                    role="region"
                    aria-label={openSection.label}
                  >
                    <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E2EAC8] bg-[#F0F5E8]">
                      <span className="font-cormorant text-[clamp(16px,2.8vw,20px)] text-[#2D5016] font-semibold tracking-[0.08em] italic">
                        {openSection.label}
                      </span>
                      <button
                        className="w-7 h-7 rounded-full bg-[#2D5016] border-none shrink-0 flex items-center justify-center cursor-pointer transition-[transform,background-color] duration-150 hover:bg-[#3d6e20] hover:scale-[1.08]"
                        aria-label={`Close ${openSection.label}`}
                        onClick={() => handleToggle(openSection.id)}
                      >
                        <svg className="w-3 h-3 stroke-white stroke-[2.5] stroke-linecap-round" viewBox="0 0 14 14" fill="none">
                          <line x1="2" y1="2" x2="12" y2="12" />
                          <line x1="12" y1="2" x2="2" y2="12" />
                        </svg>
                      </button>
                    </div>
                    <div className="p-6 sm:p-7 md:pb-8 font-sans">
                      {openSection.content}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* BOTTOM DIVIDER */}
          <motion.div
            className="h-[1px] bg-[#C5D09B] mt-16 lg:mt-[80px] origin-center"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1, ease: EASE_CURVE, delay: 0.6 }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default function WhoWeArePage() {
  return (
    <Suspense fallback={<div className="p-20 text-center text-[#2D5016]">Loading...</div>}>
      <WhoWeArePageContent />
    </Suspense>
  );
}
