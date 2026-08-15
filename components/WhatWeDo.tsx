"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; 

type TopTab = "church-service" | "service-volunteers" | "church-ministries" | "special-events";

const tabData: Record<TopTab, { id: string; label: string }[]> = {
  "church-service": [
    { id: "praise-worship", label: "Praise and Worship"       },
    { id: "bible-study",    label: "Bible Study"              },
    { id: "testimonies",    label: "Testimonies"              },
    { id: "tithes",         label: "Tithes and Love Offering" },
    { id: "preaching",      label: "Preaching"                },
  ],
  "service-volunteers": [
    { id: "preachers",        label: "Preachers"        },
    { id: "gospel-choir",     label: "Gospel Choir"     },
    { id: "adults-choir",     label: "Adults Choir"     },
    { id: "children-choir",   label: "Children Choir"   },
    { id: "instrumentalists", label: "Instrumentalists" },
    { id: "workers",          label: "Workers"          },
  ],
  "church-ministries": [
    { id: "word",               label: "Word & Evangelism" },
    { id: "couples",            label: "Couples Ministry"  },
    { id: "youth",              label: "Youth Ministry"    },
    { id: "children-ministry", label: "Children Ministry" },
  ],
  "special-events": [
    { id: "baptism",       label: "Baptism"       },
    { id: "anniversaries", label: "Anniversaries" },
    { id: "weddings",      label: "Weddings"      },
    { id: "dedications",   label: "Dedications"   },
  ],
};

const topTabs: { id: TopTab; label: string }[] = [
  { id: "church-service",     label: "Church Service" },
  { id: "service-volunteers", label: "Volunteers"     },
  { id: "church-ministries",  label: "Ministries"     },
  { id: "special-events",     label: "Events"         },
];

function useInView(ref: React.RefObject<Element>, threshold = 0.08) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

const WhatWeDo = () => {
  const router = useRouter(); 
  const sectionRef = useRef<HTMLDivElement>(null!);
  const inView     = useInView(sectionRef);

  const [activeTab,    setActiveTab]    = useState<TopTab>("church-service");
  const [displayedTab, setDisplayedTab] = useState<TopTab>("church-service");
  const [tabFading,    setTabFading]    = useState(false);

  const handleTabSwitch = (tab: TopTab) => {
    if (tab === activeTab) return;
    setTabFading(true);
    setActiveTab(tab);
    setTimeout(() => {
      setDisplayedTab(tab);
      setTimeout(() => setTabFading(false), 30);
    }, 220);
  };

  const items = tabData[displayedTab];

  return (
    <>
      <style>{`
        @keyframes wwd-fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        @keyframes wwd-growH {
          from { transform:scaleX(0); opacity:0; }
          to   { transform:scaleX(1); opacity:1; }
        }

        .wwd-top-strip {
          display:flex; gap:10px;
          overflow-x:auto; scrollbar-width:none;
          -webkit-overflow-scrolling:touch;
          justify-content:center; flex-wrap:wrap;
        }
        @media(max-width:520px){
          .wwd-top-strip { flex-wrap:nowrap; justify-content:flex-start; }
        }
        .wwd-top-strip::-webkit-scrollbar { display:none; }

        .wwd-top-pill {
          flex-shrink:0;
          padding:9px 24px; border-radius:999px;
          border:1px solid #C5D09B; background:transparent;
          font-family:'DM Sans',sans-serif;
          font-size:clamp(11px,2.8vw,13px); letter-spacing:0.1em;
          font-weight:500; cursor:pointer; white-space:nowrap; color:#4A7C2F;
          transition:background 220ms ease, color 220ms ease,
                     border-color 220ms ease, transform 120ms ease;
        }
        .wwd-top-pill:active { transform:scale(0.96); }
        .wwd-top-pill.active { background:#2D5016; border-color:#2D5016; color:#F6F8F1; font-weight:700; }
        .wwd-top-pill:not(.active):hover { border-color:#7AAB50; color:#7AAB50; }

        .wwd-tab-body { transition:opacity 220ms ease, transform 220ms ease; }
        .wwd-tab-body.fading  { opacity:0; transform:translateY(8px); }
        .wwd-tab-body.visible { opacity:1; transform:translateY(0);   }

        .wwd-card-grid {
          display:grid;
          grid-template-columns:repeat(auto-fit, minmax(140px, 1fr));
          gap:12px; margin-top:28px;
        }
        @media(max-width:420px){
          .wwd-card-grid { grid-template-columns:repeat(2, 1fr); gap:8px; }
        }

        .wwd-card {
          display:flex; align-items:center; justify-content:center;
          padding:20px 14px; background:#fff;
          border:1.5px solid #E2EAC8; border-radius:10px; cursor:pointer;
          transition:border-color 250ms ease, background 250ms ease,
                     transform 150ms ease, box-shadow 250ms ease;
          text-align:center;
          position:relative;
          overflow:hidden;
        }
        .wwd-card::before {
          content:"";
          position:absolute;
          top:0; left:0; right:0;
          height:3px;
          background:#C5D09B;
          transition:background 250ms ease;
        }
        .wwd-card:hover::before {
          background:#2D5016;
        }
        .wwd-card:hover {
          border-color:#7AAB50;
          box-shadow:0 4px 16px rgba(45,80,22,0.10);
          transform:translateY(-2px);
        }
        .wwd-card-label {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(14px,2.2vw,16px);
          letter-spacing:0.07em; font-weight:500;
          color:#4A7C2F; line-height:1.3;
          transition:color 250ms ease;
        }
      `}</style>

      <div id="what-we-do" ref={sectionRef} className="w-full bg-[#F6F8F1]">
        <div className="mx-auto w-full max-w-[1418px] px-6 lg:px-12 pt-14 pb-16 lg:pt-[70px] lg:pb-[80px]">

          {/* HEADING */}
          <div
            className="text-center mb-8 lg:mb-10"
            style={{
              animation: inView ? "wwd-fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both" : undefined,
              opacity: inView ? undefined : 0,
            }}
          >
            <h2
              className="font-cormorant"
              style={{ fontSize: "clamp(30px,5.5vw,46px)", color: "#2D5016", letterSpacing: "0.15em", fontWeight: 700, lineHeight: 1 }}
            >
              What We Do
            </h2>
            <div
              style={{
                height: "1px", background: "#C5D09B", marginTop: "22px",
                transformOrigin: "center",
                animation: inView ? "wwd-growH 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s both" : undefined,
                opacity: inView ? undefined : 0,
              }}
            />
          </div>

          {/* TOP TAB PILLS */}
          <div
            className="wwd-top-strip mb-0"
            style={{
              animation: inView ? "wwd-fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.18s both" : undefined,
              opacity: inView ? undefined : 0,
            }}
          >
            {topTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabSwitch(tab.id)}
                className={`wwd-top-pill${activeTab === tab.id ? " active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ height: "1px", background: "#C5D09B", margin: "18px 0 0" }} />

          {/* CARD GRID */}
          <div className={`wwd-tab-body${tabFading ? " fading" : " visible"}`}>
            <div
              className="wwd-card-grid"
              style={{
                animation: inView ? "wwd-fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.22s both" : undefined,
                opacity: inView ? undefined : 0,
              }}
            >
              {items.map(item => (
                <button
                  key={item.id}
                  className="wwd-card"
                  onClick={() => {
                    router.push(`/WhatWeDo?tab=${displayedTab}&item=${item.id}`);
                  }}
                >
                  <span className="wwd-card-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* BOTTOM DIVIDER */}
          <div
            className="h-[1px] bg-[#C5D09B] mt-16 lg:mt-[80px]"
            style={{
              transformOrigin: "center",
              animation: inView ? "wwd-growH 1s cubic-bezier(0.22,1,0.36,1) 0.6s both" : undefined,
              opacity: inView ? undefined : 0,
            }}
          />

        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
