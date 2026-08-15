"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeAreSection from "@/components/WhoWeAre";
import VerseSection from "@/components/VerseSection";
import WhatWeDo from "@/components/WhatWeDo";
import OutreachSection from "@/components/outreach";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div className="bg-[#FAFDF5] text-[#2D5016] min-h-screen">
      <Navbar />
      
      <div id="hero">
        <Hero />
      </div>
      
      <br />
      <VerseSection />
      <WhoWeAreSection />
      <WhatWeDo />
      <OutreachSection />
      <Footer />
    </div>
  );
}