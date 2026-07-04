"use client";

import { useEffect, useState } from "react";

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
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
];

export default function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  const [mounted, setMounted] = useState(false);

  // Keeps overlay in the DOM briefly during exit animation
  useEffect(() => {
    if (open) setMounted(true);
    else {
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
      className={`fixed inset-0 z-30 flex transition-transform duration-500 ease-[cubic-bezier(0.83,0,0.17,1)] ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
      role="dialog"
      aria-modal="true"
    >
      {/* Left image panel - placeholder, swap with client project photography */}
      <div className="hidden md:block md:w-[45%] h-full relative">
        <div className="absolute inset-0 bg-[#EFEEEC]">
          <img
            src="/images/menu-feature-placeholder.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right panel - nav content */}
      <div className="flex-1 h-full bg-[#F7F7F7] px-8 md:px-16 py-10 flex flex-col justify-center relative overflow-y-auto">
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="absolute top-6 right-6 md:top-10 md:right-16 text-[#1F1F1F] hover:text-[#C4A065] transition-colors"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 4L20 20M20 4L4 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-y-6 gap-x-16 mt-16 md:mt-0">
          <ul>
            {primaryLinks.map((link, i) => (
              <li
                key={link.href}
                className={`transition-all duration-500 ease-out ${
                  open
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              >
                <a
                  href={link.href}
                  className="group inline-block font-lato text-lg md:text-xl uppercase tracking-wide text-[#4F4F4F] py-2 hover:text-[#1F1F1F] transition-colors"
                >
                  {link.label}
                  <span className="block h-[2px] w-0 bg-[#C4A065] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <ul>
            {secondaryLinks.map((link, i) => (
              <li
                key={link.href}
                className={`transition-all duration-500 ease-out ${
                  open
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
                style={{
                  transitionDelay: open ? `${180 + i * 60}ms` : "0ms",
                }}
              >
                <a
                  href={link.href}
                  className="group inline-block font-lato text-lg md:text-xl uppercase tracking-wide text-[#707070] py-2 hover:text-[#1F1F1F] transition-colors"
                >
                  {link.label}
                  <span className="block h-[2px] w-0 bg-[#C4A065] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-6 mt-12">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="text-[#707070] hover:text-[#C4A065] transition-colors text-sm uppercase tracking-wide"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}