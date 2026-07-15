"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactInfoBand() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#1F1F1F] pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden"
    >
      {/* Ghost numeral watermark - callback to the 25-year legacy motif */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 left-6 md:left-16 font-playfair text-[9rem] md:text-[13rem] text-white/[0.03] leading-none"
      >
        25
      </span>

      {/* Animated gold seam - reveals top to bottom on scroll-in */}
      <div
        className="absolute top-0 left-0 w-[3px] bg-[#C4A065] transition-[height] duration-[1100ms] ease-out motion-reduce:transition-none"
        style={{ height: visible ? "100%" : "0%" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
        <div
          className={`text-center md:pr-16 pb-10 md:pb-0 transition-all duration-700 ease-out motion-reduce:transition-none ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C4A065]">
            Corporate Office
          </span>
          <p className="font-playfair text-xl md:text-2xl text-white mt-4 leading-relaxed">
            NH-24, Ghaziabad,
            <br />
            Uttar Pradesh, India
          </p>
        </div>
        <div
          className={`text-center md:pl-16 pt-10 md:pt-0 transition-all duration-700 ease-out delay-150 motion-reduce:transition-none ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C4A065]">
            Sales Enquiries
          </span>
          <p className="font-playfair text-xl md:text-2xl text-white mt-4 leading-relaxed">
            <a href="tel:+911234567890" className="hover:text-[#C4A065] transition-colors">
              +91 12345 67890
            </a>
            <br />
            <a href="mailto:info@shriramgroup.com" className="hover:text-[#C4A065] transition-colors">
              info@shriramgroup.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}