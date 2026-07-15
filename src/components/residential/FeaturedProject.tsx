"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

interface FeaturedProjectProps {
  name: string;
  tagline: string;
  status: string;
  image: string;
  description: string;
  specs: string[];
  href: string;
}

export default function FeaturedProject({
  name,
  tagline,
  status,
  image,
  description,
  specs,
  href,
}: FeaturedProjectProps) {
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full">
      {/* Image banner */}
      <div
        className={`relative w-full h-[60vh] md:h-[75vh] overflow-hidden transition-all duration-700 ease-out motion-reduce:transition-none ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"
        }`}
      >
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Status ribbon - diagonal cut, callback to the site's signature clip motif */}
        <span
          className="absolute top-0 left-0 z-10 bg-[#C4A065] text-[#1F1F1F] font-lato text-xs font-bold uppercase tracking-[0.15em] px-7 py-3"
          style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}
        >
          {status}
        </span>

        <p className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 font-playfair text-2xl md:text-4xl text-white leading-snug max-w-2xl">
          {tagline}
        </p>
      </div>

      {/* Detail row */}
      <div
        className={`max-w-6xl mx-auto px-6 py-10 md:py-14 transition-all duration-700 ease-out delay-150 motion-reduce:transition-none ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#C4A065]" />
          <h3 className="font-playfair text-3xl md:text-4xl text-[#1F1F1F]">{name}</h3>
        </div>
        <span className="block w-16 h-[3px] bg-[#C4A065] mb-5" />
        <p className="font-lato text-sm md:text-base text-[#707070] leading-relaxed max-w-2xl mb-6">
          {description}
        </p>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0 justify-between">
          <div className="flex flex-wrap items-center divide-x divide-[#DDDDDD]">
            {specs.map((s) => (
              <span
                key={s}
                className="font-lato text-xs uppercase tracking-[0.15em] text-[#4F4F4F] px-4 first:pl-0"
              >
                {s}
              </span>
            ))}
          </div>
          <a
            href={href}
            className="group inline-flex items-center gap-2 border border-[#1F1F1F] px-6 py-3 font-lato text-xs uppercase tracking-[0.2em] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white transition-colors w-fit"
          >
            Know More
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}