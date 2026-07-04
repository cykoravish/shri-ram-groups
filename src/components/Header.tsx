"use client";

import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative w-full z-40 px-6 md:px-12 py-5 flex items-center justify-between bg-white">
        {/* Placeholder logo - swap with client's actual logo asset */}
        <a href="/" className="flex flex-col leading-tight">
          <span className="font-lato font-bold text-2xl tracking-wide text-[#4F4F4F]">
            ShriRam<span className="text-[#C4A065]">Group</span>
          </span>
          <span className="font-lato text-sm tracking-wide uppercase text-white/90 hover:text-[#C4A065] transition-colors">
            Experience Excellence
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="/residential"
            className="font-lato text-sm tracking-wide uppercase text-[#4F4F4F] hover:text-[#C4A065] transition-colors"
          >
            Our Projects
          </a>
          <a
            href="/contact-us"
            className="font-lato text-sm tracking-wide uppercase text-[#4F4F4F] hover:text-[#C4A065] transition-colors flex items-center gap-2"
          >
            Get In Touch
          </a>
        </div>

        {/* Hamburger / close trigger */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative z-50 w-8 h-6 flex flex-col justify-between group"
        >
          <span
            className={`block h-[2px] w-full bg-[#1F1F1F] transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-45 translate-y-[11px] bg-[#1F1F1F]" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-[#1F1F1F] transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-[#1F1F1F] transition-all duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 -translate-y-[11px] bg-[#1F1F1F]" : ""
            }`}
          />
        </button>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}