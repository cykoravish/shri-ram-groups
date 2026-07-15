"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

interface CommercialProjectRowProps {
  name: string;
  location: string;
  city: string;
  description: string;
  image: string;
  href: string;
  reverse?: boolean;
  tone?: "white" | "tint";
}

export default function CommercialProjectRow({
  name,
  location,
  city,
  description,
  image,
  href,
  reverse,
  tone = "white",
}: CommercialProjectRowProps) {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`w-full ${tone === "tint" ? "bg-[#F7F7F7]" : "bg-white"} py-16 md:py-24`}>
      <div
        className={`max-w-6xl mx-auto px-6 flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-12 md:gap-16`}
      >
        {/* Image with offset gold frame - callback to LegacyBand's motif */}
        <div
          className={`relative w-full md:w-1/2 transition-all duration-700 ease-out motion-reduce:transition-none ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className={`absolute ${
              reverse ? "-top-4 -left-4 md:-top-6 md:-left-6" : "-top-4 -right-4 md:-top-6 md:-right-6"
            } w-full h-full border-2 border-[#C4A065]`}
          />
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text */}
        <div
          className={`w-full md:w-1/2 transition-all duration-700 ease-out delay-150 motion-reduce:transition-none ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-[#C4A065] leading-tight uppercase">
            {name}
          </h2>
          <p className="font-lato text-lg text-[#4F4F4F] mt-2">
            {location}
            <br />
            {city}
          </p>
          <span className="block w-20 h-[3px] bg-[#C4A065] my-6" />
          <p className="font-lato text-sm md:text-base text-[#707070] leading-relaxed max-w-md mb-6">
            {description}
          </p>
          <a
            href={href}
            className="group inline-flex items-center gap-2 font-lato text-sm uppercase tracking-[0.15em] text-[#C4A065] hover:text-[#1F1F1F] transition-colors"
          >
            Read More
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}