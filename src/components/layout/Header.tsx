"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";
import { ChevronDown, Phone } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkColor = solid ? "text-[#4F4F4F]" : "text-white";
  const barColor = menuOpen || solid ? "bg-[#1F1F1F]" : "bg-white";

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 px-6 md:px-12 h-20 flex items-center justify-between transition-all duration-300 motion-reduce:transition-none ${
          solid ? "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]" : "bg-transparent shadow-none"
        }`}
      >
        {/* Placeholder logo - swap with client's actual logo asset */}
        <Link href="/" className="flex flex-col leading-tight">
          <span
            className={`font-lato font-bold text-2xl tracking-wide transition-colors duration-300 motion-reduce:transition-none ${
              solid ? "text-[#4F4F4F]" : "text-white"
            }`}
          >
            ShriRam<span className="text-[#C4A065]">Group</span>
          </span>
          <span
            className={`font-lato text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 motion-reduce:transition-none ${
              solid ? "text-[#707070]" : "text-white/70"
            }`}
          >
            Experience Excellence
          </span>
        </Link>

        <div className="flex items-center gap-10 md:gap-14">
          <div className="hidden md:flex items-center gap-8">
            <div className="group relative">
              <button
                className={`flex items-center gap-1.5 font-lato font-bold text-sm tracking-wide uppercase transition-colors duration-300 hover:text-[#C4A065] motion-reduce:transition-none ${linkColor}`}
              >
                Our Projects
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                <div className="bg-[#F7F7F7] shadow-xl rounded-xl py-3 min-w-[200px] ring-1 ring-black/5">
                  {[
                    { label: "Residential", href: "/residential" },
                    { label: "Commercial", href: "/commercial" },
                    // { label: "Hospitality", href: "/hospitality" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-3 font-lato text-sm text-[#4F4F4F] hover:bg-white hover:text-[#C4A065] transition-colors first:rounded-t-xl last:rounded-b-xl"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact-us"
              className={`flex items-center gap-2 font-lato font-bold text-sm tracking-wide uppercase transition-colors duration-300 hover:text-[#C4A065] motion-reduce:transition-none ${linkColor}`}
            >
              <Phone size={16} />
              Contact Us
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
              className={`block h-[2px] w-full transition-[background-color,transform] ease-in-out origin-center ${
                menuOpen ? "duration-500" : "duration-200"
              } ${barColor} ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`}
            />
            <span
              className={`block h-[2px] w-full transition-[background-color,transform] ease-in-out origin-center ${
                menuOpen ? "duration-500" : "duration-200"
              } ${barColor} ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
            />
          </button>
        </div>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}