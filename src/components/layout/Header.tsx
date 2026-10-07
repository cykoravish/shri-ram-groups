"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
  const barColor = menuOpen || solid ? "bg-ink" : "bg-white";

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 px-6 md:px-12 h-20 flex items-center justify-between transition-all duration-300 motion-reduce:transition-none ${
          solid
            ? "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
            : "bg-transparent shadow-none"
        }`}
      >
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-black/50 via-black/20 to-transparent transition-opacity duration-300 motion-reduce:transition-none ${
            solid ? "opacity-0" : "opacity-100"
          }`}
        />
        <Link
          href="/"
          aria-label="ShriRam Realty - Home"
          className={`self-start -ml-6 md:-ml-12 flex items-center bg-white pl-6 md:pl-12 pr-5 md:pr-8 transition-all duration-300 motion-reduce:transition-none ${
            solid
              ? "h-20 rounded-br-none shadow-none"
              : "h-[88px] md:h-24 rounded-br-3xl shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
          }`}
        >
          {/* One logo only (client's file). A white tab keeps it readable over photos and video;
              it blends into the header once the header turns solid white on scroll. */}
          <span className="relative block h-12 md:h-14 aspect-[1200/551]">
            <Image
              src="/images/shriram-realty-logo.png"
              alt="ShriRam Realty - Gateway to Prosperity"
              fill
              priority
              sizes="140px"
              className="object-contain object-left"
            />
          </span>
        </Link>

        <div className="flex items-center gap-10 md:gap-14">
          <div className="hidden md:flex items-center gap-8">
            <div className="group relative">
              <button
                className={`flex items-center gap-1.5 font-lato font-bold text-sm tracking-wide uppercase transition-colors duration-300 hover:text-brand motion-reduce:transition-none ${linkColor}`}
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
                      className="block px-6 py-3 font-lato text-sm text-[#4F4F4F] hover:bg-white hover:text-brand transition-colors first:rounded-t-xl last:rounded-b-xl"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact-us"
              className={`flex items-center gap-2 font-lato font-bold text-sm tracking-wide uppercase transition-colors duration-300 hover:text-brand motion-reduce:transition-none ${linkColor}`}
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
