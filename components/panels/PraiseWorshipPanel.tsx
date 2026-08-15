"use client";

import { useState } from "react";

interface Props {
  onNavigate: (id: string) => void;
}

type SubTab = "joyful" | "solemn";

/* ── Joyful Content ─────────────────────────────────────────────────────── */
const JoyfulContent = () => (
  <div className="flex flex-col lg:flex-row items-center lg:items-start w-full gap-8 lg:gap-10">

    {/* Left — Video */}
    <div
      className="w-full lg:flex-1 rounded-[20px] overflow-hidden flex-shrink-0"
      style={{ border: "1px solid #6AAD4F", aspectRatio: "16/9" }}
    >
      <iframe
        src="https://www.youtube.com/embed/VAstQmugNP4?si=-mpSHoR0nc8kGVDr"
        className="w-full h-full"
        style={{ border: "none", display: "block" }}
        title="Joyful Worship Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>

    {/* Right — Text */}
    <div className="w-full lg:flex-1 flex flex-col justify-center">

      <p
        className="font-dm text-center lg:text-left mb-6"
        style={{ fontSize: "clamp(12px, 2.5vw, 14px)", color: "#4A7C2F", lineHeight: 1.85 }}
      >
        <span style={{ fontWeight: 700, color: "#2D5016" }}>Joyful Praise - </span>We sing and dance for the glory of the Lord through lively praise and worship songs with moderate to fast tempos. For nearly an hour, the congregation joins in singing, clapping, and dancing with one purpose—to glorify the Lord. The worship service is led by a song leader together with assisting singers.
</p>
      <p  
        className="font-cormorant italic text-center lg:text-left"
        style={{ fontSize: "clamp(14px, 2.8vw, 17px)", color: "#D4A017", lineHeight: 1.75 }}
      >
        "Make a joyful noise unto the Lord, all ye lands. Serve the Lord with gladness: come before his presence with singing."{" "}
        <span style={{ fontStyle: "normal", fontWeight: 600, color: "#2D5016" }}>— Psalm 100:1–2</span>
      </p>
    </div>

  </div>
);

/* ── Solemn Content ─────────────────────────────────────────────────────── */
const SolemnContent = () => (
  <div className="flex flex-col lg:flex-row items-center lg:items-start w-full gap-8 lg:gap-10">

    {/* Left — Video */}
    <div
      className="w-full lg:flex-1 rounded-[20px] overflow-hidden flex-shrink-0"
      style={{ border: "1px solid #6AAD4F", aspectRatio: "16/9" }}
    >
      <iframe
        src="https://www.youtube.com/embed/wIoWbOO636s?si=9o9Q6BhCdUX6M-bU"
        className="w-full h-full"
        style={{ border: "none", display: "block" }}
        title="Solemn Worship Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>

    {/* Right — Text */}
    <div className="w-full lg:flex-1 flex flex-col justify-center">
      

      <p
        className="font-dm text-center lg:text-left mb-6"
        style={{ fontSize: "clamp(12px, 2.5vw, 14px)", color: "#4A7C2F", lineHeight: 1.85 }}
      >
        <span style={{ fontWeight: 700, color: "#2D5016" }}>Solemn Worship - </span> A series of solemn worship songs with slow tempos are sung while the congregation kneels in reverence and sings in unison. In this form of worship, the songs become prayers offered to the Lord. This sacred moment may last from 30 minutes to an hour and is led by a song leader together with assisting singers. 

      </p>

      <p
        className="font-cormorant italic text-center lg:text-left"
        style={{ fontSize: "clamp(14px, 2.8vw, 17px)", color: "#D4A017", lineHeight: 1.75 }}
      >
        "God is greatly to be feared in the assembly of the saints, and to be had in reverence of all them that are about him."{" "}
        <span style={{ fontStyle: "normal", fontWeight: 600, color: "#2D5016" }}>— Psalm 89:7</span>
      </p>
    </div>

  </div>
);

/* ── Main Panel ─────────────────────────────────────────────────────────── */
const PraiseWorshipPanel = ({ onNavigate }: Props) => {
  const [sub, setSub] = useState<SubTab>("joyful");

  return (
    <div className="flex flex-col items-center w-full">

      {/* sub-tab toggle */}
      <div className="flex justify-center mb-8">
        <div
          className="flex rounded-full"
          style={{ border: "1px solid #C5D09B", background: "#EEF3E6", padding: "3px" }}
        >
          {(["joyful", "solemn"] as SubTab[]).map((tab) => {
            const isActive = sub === tab;
            return (
              <button
                key={tab}
                onClick={() => setSub(tab)}
                className="font-dm cursor-pointer border-none"
                style={{
                  fontSize: "clamp(11px, 2.5vw, 13px)",
                  letterSpacing: "0.1em",
                  fontWeight: isActive ? 700 : 500,
                  padding: "8px 20px",
                  background: isActive ? "#2D5016" : "transparent",
                  color: isActive ? "#F6F8F1" : "#4A7C2F",
                  borderRadius: "9999px",
                  transition: "background 220ms ease, color 220ms ease",
                }}
              >
                {tab === "joyful" ? "Joyful Praise" : "Solemn Worship"}
              </button>
            );
          })}
        </div>
      </div>

      {/* sub-tab content */}
      <style>{`
        @keyframes pw-contentIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
      <div
        key={sub}
        className="w-full"
        style={{ animation: "pw-contentIn 0.35s cubic-bezier(0.22,1,0.36,1) both" }}
      >
        {sub === "joyful" ? <JoyfulContent /> : <SolemnContent />}
      </div>

    </div>
  );
};

export default PraiseWorshipPanel;
