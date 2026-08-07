"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import WhoWeAreCardGrid from "@/components/WhoWeAreCardGrid";
import { sectionSummaries } from "@/components/whoWeAreSections";

const EASE_CURVE = [0.16, 1, 0.3, 1] as const;

// Lives INSIDE the home page — the home page itself owns the single
// Navbar/Footer at its root, so this component intentionally has neither.
export default function WhoWeAre() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="who-we-are" ref={sectionRef} className="w-full bg-[#FAFDF5]">
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

        {/* CARD GRID — "link" mode: clicking navigates straight to
            /WhoWeAre?section=id, prefetched on viewport-enter/hover so
            the click feels instant instead of triggering a visible load. */}
        <WhoWeAreCardGrid sections={sectionSummaries} inView={inView} mode="link" />

        {/* BOTTOM DIVIDER */}
        <motion.div
          className="h-[1px] bg-[#C5D09B] mt-16 lg:mt-[80px] origin-center"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, ease: EASE_CURVE, delay: 0.6 }}
        />
      </div>
    </div>
  );
}
