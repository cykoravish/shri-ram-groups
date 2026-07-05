"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

const primaryLinks = [
  { label: "About", href: "/about" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Awards", href: "/awards" },
  { label: "Blogs", href: "/blogs" },
  { label: "Events", href: "/events" },
  { label: "In The News", href: "/in-the-news" },
  { label: "Community", href: "/community" },
  { label: "Contact Us", href: "/contact-us" },
];

const secondaryLinks = [
  { label: "Company", href: "/company" },
  { label: "Careers", href: "/careers" },
];

const socials = [
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "YouTube", href: "#", icon: FaYoutube },
  { label: "LinkedIn", href: "#", icon: FaLinkedin },
  { label: "Facebook", href: "#", icon: FaFacebook },
];

export default function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  const [mounted, setMounted] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMounted(true);
      // Double rAF guarantees the browser paints the closed position
      // first, so the transition to open actually animates.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEntered(true));
      });
    } else {
      setEntered(false);
      const t = setTimeout(() => setMounted(false), 400);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  if (!mounted) return null;

  return (
    <div
      id="site-menu-overlay"
      className={`fixed inset-0 z-50 flex overflow-x-hidden transition-transform ease-[cubic-bezier(0.65,0,0.35,1)] ${
        open ? "duration-700 translate-x-0" : "duration-400 -translate-x-full"
      }`}
      role="dialog"
      aria-modal="true"
    >
      {/* Left image panel - placeholder, swap with client project photography */}
      <div className="hidden md:block md:w-[57%] h-full relative">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover"
          sizes="45vw"
        />
      </div>

      {/* Right panel - nav content */}
      <div className="flex-1 h-full bg-[#F7F7F7] px-8 md:px-16 py-10 flex flex-col justify-center relative overflow-y-auto">
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="absolute top-0 right-6 md:right-12 h-20 z-50 w-8 flex flex-col justify-center"
        >
          <span
            className={`block h-[2px] w-full bg-[#1F1F1F] transition-all duration-500 ease-out origin-center ${
              entered
                ? "rotate-45 translate-y-[5px] opacity-100"
                : "rotate-0 translate-y-0 opacity-0"
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-[#1F1F1F] transition-all duration-500 ease-out origin-center ${
              entered
                ? "-rotate-45 -translate-y-[5px] opacity-100"
                : "rotate-0 translate-y-0 opacity-0"
            }`}
          />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-y-6 gap-x-16 mt-16 md:mt-0">
          <ul>
            {primaryLinks.map((link, i) => (
              <li
                key={link.href}
                className={`transition-all duration-500 ease-out ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="group inline-block font-lato text-lg md:text-xl uppercase tracking-wide text-[#4F4F4F] py-2 hover:text-[#1F1F1F] transition-colors"
                >
                  {link.label}
                  <span className="block h-[2px] w-0 bg-[#C4A065] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <ul>
            {secondaryLinks.map((link, i) => (
              <li
                key={link.href}
                className={`transition-all duration-500 ease-out ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{
                  transitionDelay: open ? `${180 + i * 60}ms` : "0ms",
                }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="group inline-block font-lato text-lg md:text-xl uppercase tracking-wide text-[#707070] py-2 hover:text-[#1F1F1F] transition-colors"
                >
                  {link.label}
                  <span className="block h-[2px] w-0 bg-[#C4A065] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-3 mt-12">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex items-center gap-2 text-[#707070] hover:text-[#C4A065] transition-colors text-sm uppercase tracking-wide"
            >
              <s.icon size={16} />
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
