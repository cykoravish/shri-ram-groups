"use client";

import { useState } from "react";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative w-full z-40 px-6 md:px-12 h-20 flex items-center justify-between bg-white">
        {/* Placeholder logo - swap with client's actual logo asset */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-lato font-bold text-2xl tracking-wide text-[#4F4F4F]">
            ShriRam<span className="text-[#C4A065]">Group</span>
          </span>
          <span className="font-lato text-[10px] tracking-[0.2em] uppercase text-[#707070]">
            Experience Excellence
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/residential"
            className="font-lato text-sm tracking-wide uppercase text-[#4F4F4F] hover:text-[#C4A065] transition-colors"
          >
            Our Projects
          </Link>
          <Link
            href="/contact-us"
            className="font-lato text-sm tracking-wide uppercase text-[#4F4F4F] hover:text-[#C4A065] transition-colors"
          >
            Get In Touch
          </Link>
        </div>

        {/* Hamburger / close trigger */}
<button
  aria-label={menuOpen ? "Close menu" : "Open menu"}
  aria-expanded={menuOpen}
  aria-controls="site-menu-overlay"
  onClick={() => setMenuOpen((prev) => !prev)}
  className="relative z-50 w-8 h-3 flex flex-col justify-between group"
>
  <span
    className={`block h-[2px] w-full bg-[#1F1F1F] transition-transform ease-in-out origin-center ${menuOpen ? "duration-500" : "duration-200"} ${
      menuOpen ? "rotate-45 translate-y-[5px]" : ""
    }`}
  />
  <span
    className={`block h-[2px] w-full bg-[#1F1F1F] transition-transform ease-in-out origin-center ${menuOpen ? "duration-500" : "duration-200"} ${
      menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
    }`}
  />
</button>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}