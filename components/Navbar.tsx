"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const menuItems = ["HOME", "WHO WE ARE", "WHAT WE DO", "CONTACT US"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const scrollOrNavigate = (id: string) => {
    if (isHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  const handleClick = (item: string) => {
    setOpen(false);
    setActiveItem(item);

    if (item === "HOME") {
      if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
      else router.push("/");
      return;
    }
    if (item === "WHO WE ARE") { scrollOrNavigate("who-we-are"); return; }
    if (item === "WHAT WE DO") { scrollOrNavigate("what-we-do"); return; }
    if (item === "CONTACT US") { router.push("/ContactUs"); return; }
  };

  return (
    <>
      <style>{`
        .nb-link {
          position: relative;
          padding-bottom: 4px;
          background: transparent;
          border: none;
          cursor: pointer;
          display: inline-block;
        }
        .nb-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #2D5016;
          border-radius: 2px;
        }
        .nb-link:hover { color: #2D5016 !important; }
        .nb-link:hover::after,
        .nb-link.active::after { width: 100%; }

        .nb-burger {
          width: 24px;
          height: 18px;
          flex-direction: column;
          justify-content: space-between;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          flex-shrink: 0;
          display: none;
        }
        @media (max-width: 767px) {
          .nb-burger { display: flex; }
        }

        .nb-burger span {
          display: block;
          height: 2px;
          width: 100%;
          background-color: #2D5016 !important;
          border-radius: 2px;
          transform-origin: center;
          flex-shrink: 0;
        }
        .nb-burger.open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .nb-burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nb-burger.open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        .nb-mitem {
          transition: none;
        }
        .nb-mitem:hover { color: #2D5016; }
      `}</style>

      {/* SPACER so fixed navbar doesn't overlap page content */}
      <div className="h-[70px] sm:h-[83px]" />

      <div className="w-full bg-[#FAFDF5] border-b border-[#E8F5D6] fixed top-0 left-0 right-0 z-50 shadow-[0_2px_16px_rgba(45,80,22,0.06)]">
        <nav className="mx-auto w-full max-w-[1418px] pl-0 pr-4 sm:px-6 lg:px-12 flex items-center justify-between h-[70px] sm:h-[83px]">
          
          {/* LEFT — Logo + Church Name */}
          <div className="flex items-center gap-1 sm:gap-4 pl-0 ml-0">
            <img
              src="/logo.png"
              alt="Logo"
              className="object-contain w-[60px] h-[50px] sm:w-[74px] sm:h-[65px] lg:w-[110px] lg:h-[99px] ml-0"
            />
            <div className="leading-tight">
              <h1 className="font-cormorant font-bold text-[#2D5016] text-[14px] sm:text-[20px] md:text-[24px]">
                JESUS CHRIST OF NAZARETH
              </h1>
              <p className="font-cormorant font-bold text-[#2D5016] text-[14px] sm:text-[20px] md:text-[24px]">
                ONE FOLD ASSEMBLY
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className={`nb-link text-[12px] lg:text-[13px] text-[#4A7C2F] font-dm tracking-wide whitespace-nowrap ${
                  activeItem === item ? "active" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className={`nb-burger ${open ? "open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-[#FAFDF5] border-t border-[#E8F5D6] flex flex-col items-center gap-4 py-6 z-50 shadow-md">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className="nb-mitem text-[16px] text-[#4A7C2F] font-dm bg-transparent border-none cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;