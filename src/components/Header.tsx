"use client";

import { useState } from "react";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";
import { ChevronDown, Phone } from "lucide-react";

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

<div className="flex items-center gap-10 md:gap-14">

        <div className="hidden md:flex items-center gap-8">
          <div className="group relative">
            <button className="flex items-center gap-1.5 font-lato font-bold text-sm tracking-wide uppercase text-[#4F4F4F] hover:text-[#C4A065] transition-colors">
              Our Projects
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </button>

            <div className="absolute top-full left-0 pt-3 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
              <div className="bg-white shadow-lg py-2 min-w-[180px]">
                {[
                  { label: "Residential", href: "/residential" },
                  { label: "Commercial", href: "/commercial" },
                  { label: "Hospitality", href: "/hospitality" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-5 py-2.5 font-lato text-sm text-[#4F4F4F] hover:bg-[#F7F7F7] hover:text-[#C4A065] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact-us"
            className="flex items-center gap-2 font-lato font-bold text-sm tracking-wide uppercase text-[#4F4F4F] hover:text-[#C4A065] transition-colors"
          >
            <Phone size={16} />
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
</div>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
