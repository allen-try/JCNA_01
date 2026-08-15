"use client";

import { useEffect, useState } from "react";

const titleLines = [
  { text: "Welcome to the", italic: false, color: "#2D5016" },
  { text: "JESUS CHRIST of Nazareth", italic: true, color: "#4A7C2F" },
  { text: "One Fold Assembly (JCNA)!", italic: false, color: "#2D5016" },
];

const subtitle =
  "A place of faith, fellowship, and service where we grow together in Christ.";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        /* ── Logo float (unchanged) ── */
        @keyframes floatLogo {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-8px); }
        }
        .logo-float {
          animation: floatLogo 6s ease-in-out infinite;
        }

        /* ── SACRED DESCEND — headline drops from heaven ── */
        .title-line {
          opacity: 0;
          transform: translateY(-40px);
          transition: opacity 1.1s ease-out, transform 1.1s ease-out;
        }
        .title-line.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* CTA button group — 0.8s after headline trigger */
        .btn-wrap {
          opacity: 0;
          transform: translateY(-40px);
          transition: opacity 1.1s ease-out, transform 1.1s ease-out;
          transition-delay: 0.8s;
        }
        .btn-wrap.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* Right panel — slow crossfade 1.5s, no movement, lets text lead */
        .right-panel {
          opacity: 0;
          transition: opacity 1.5s ease-out;
          transition-delay: 0.1s;
        }
        .right-panel.show {
          opacity: 1;
        }

        /* Logo entrance — slow crossfade, no translate */
        .logo-entrance {
          opacity: 0;
          transition: opacity 1.5s ease-out;
          transition-delay: 0.3s;
        }
        .logo-entrance.show {
          opacity: 1;
        }

        /* Button hover interactions */
        .btn-visit {
          transition: transform 220ms ease, box-shadow 220ms ease;
        }
        .btn-visit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(45,80,22,0.25);
        }
        .btn-visit:active { transform: translateY(0); }

        .sermon-link {
          position: relative;
          padding-bottom: 2px;
          transition: color 220ms ease;
        }
        .sermon-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%;
          width: 0; height: 1px;
          background: #4A7C2F;
          transform: translateX(-50%);
          transition: width 280ms ease;
        }
        .sermon-link:hover::after { width: 100%; }

        /* Primary CTA button */
        .btn-watch {
          display: inline-block;
          background: #2D5016;
          color: #FAFDF5;
          padding: 12px 24px;
          border-radius: 6px;
          letter-spacing: 0.03em;
          transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease;
        }
        .btn-watch:hover {
          background: #244012;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(45,80,22,0.25);
        }
        .btn-watch:active { transform: translateY(0); }

        /* Reduced motion — honour system preference */
        @media (prefers-reduced-motion: reduce) {
          .logo-float { animation: none !important; }
          .title-line, .btn-wrap,
          .right-panel, .logo-entrance {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* ── MOBILE & TABLET (stacked) ── */}
      <section className="w-full bg-[#FAFDF5] lg:hidden">
        <div className="mx-auto w-full max-w-[1418px] px-6">
          <div className="flex flex-col min-h-[auto]">

            {/* LEFT */}
            <div className="flex-1 flex flex-col justify-start pt-3 pb-6 items-center text-center">
              {titleLines.map((line, index) => (
                <h1
                  key={index}
                  className={`title-line font-cormorant text-[26px] leading-[31px] sm:text-[32px] sm:leading-[38px] tracking-[0.05em] ${line.italic ? "italic" : ""} ${visible ? "show" : ""}`}
                  style={{
                    color: line.color,
                    transitionDelay: `${index * 120}ms`,
                  }}
                >
                  {line.text}
                </h1>
              ))}

              {/* Subtitle */}
              <p
                className={`body-text font-dm text-[14px] text-[#5F5E5A] max-w-[380px] mt-4 leading-[1.6] ${visible ? "show" : ""}`}
              >
                {subtitle}
              </p>

              {/* CTA — 0.8s after trigger */}
              <div
                className={`btn-wrap flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-5 sm:mt-6 ${visible ? "show" : ""}`}
              >
                <a
                  href="https://web.facebook.com/profile.php?id=100093108589005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-watch font-dm text-[13px] sm:text-[14px]"
                >
                  WATCH OUR SERVICE
                </a>
              </div>
            </div>

            {/* RIGHT — worship photo with a tinted overlay, same logo size */}
            <div
              className={`right-panel w-full flex flex-col items-center justify-start pt-4 pb-4 relative overflow-hidden ${visible ? "show" : ""}`}
              style={{
                backgroundImage: "url('/worship-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top left, rgba(45,80,22,0.55) 0%, rgba(232,245,214,0.55) 55%, rgba(253,248,225,0.6) 100%)",
                }}
              />
              <div className={`logo-entrance relative ${visible ? "show" : ""}`}>
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="logo-float w-[250px] h-[235px] sm:w-[280px] sm:h-[265px] object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── DESKTOP ── */}
      <section className="hidden lg:block w-full bg-[#FAFDF5]">
        <div className="mx-auto w-full max-w-[1418px] px-6 lg:px-12 flex min-h-[480px]">

          {/* LEFT — text content, headline centered, CTA pinned to bottom
              so it lines up with the bottom of the logo on the right */}
          <div className="flex-1 flex flex-col justify-between py-6">
            <div className="pt-16">
              {titleLines.map((line, index) => (
                <h1
                  key={index}
                  className={`title-line font-cormorant text-[34px] leading-[41px] md:text-[40px] md:leading-[48px] tracking-[0.05em] ${line.italic ? "italic" : ""} ${visible ? "show" : ""}`}
                  style={{
                    color: line.color,
                    transitionDelay: `${index * 120}ms`,
                  }}
                >
                  {line.text}
                </h1>
              ))}
            </div>

            {/* Subtitle */}
            <p
              className={`body-text font-dm text-[15px] text-[#5F5E5A] max-w-[380px] mt-4 leading-[1.6] ${visible ? "show" : ""}`}
            >
              {subtitle}
            </p>

            {/* CTA — 0.8s stagger (CSS handles it), pinned to bottom */}
            <div
              className={`btn-wrap flex items-center gap-6 ${visible ? "show" : ""}`}
            >
              <a
                href="https://web.facebook.com/profile.php?id=100093108589005"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-watch font-dm text-[14px]"
              >
                WATCH OUR SERVICE
              </a>
            </div>
          </div>

          {/* RIGHT — worship photo with a tinted overlay, same logo size */}
          <div
            className={`right-panel -mr-12 w-[47.5%] flex-shrink-0 flex flex-col items-center justify-center pl-0 relative overflow-hidden ${visible ? "show" : ""}`}
            style={{
              backgroundImage: "url('/worship-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top left, rgba(45,80,22,0.55) 0%, rgba(232,245,214,0.55) 55%, rgba(253,248,225,0.6) 100%)",
              }}
            />
            <div className={`logo-entrance relative ${visible ? "show" : ""}`}>
              <img
                src="/logo.png"
                alt="Logo"
                className="logo-float w-[320px] h-[300px] md:w-[400px] md:h-[375px] object-contain"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;
