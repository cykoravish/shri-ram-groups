"use client";

import { useEffect, useRef, useState } from "react";
import { Compass } from "lucide-react";

export default function OurStory() {
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
    <section ref={ref} className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Icon block + pull quote */}
        <div
          className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative aspect-square w-full max-w-sm overflow-hidden">
            <div className="absolute inset-0 bg-[#EFEEEC]" />
            <div
              className="absolute inset-0 bg-[#C4A065]"
              style={{ clipPath: "polygon(0 0, 65% 0, 35% 100%, 0 100%)" }}
            />
            <div className="relative z-10 h-full flex items-center justify-center">
              <Compass size={64} className="text-[#1F1F1F]" strokeWidth={1.25} />
            </div>
          </div>

          <p className="font-playfair text-xl md:text-2xl text-[#1F1F1F] leading-relaxed mt-8 max-w-sm">
            We believe in staying true to{" "}
            <strong className="text-[#C4A065] font-bold">craftsmanship</strong>, so
            every home becomes the foundation of a lasting{" "}
            <strong className="text-[#C4A065] font-bold">community</strong> — built
            with <strong className="text-[#C4A065] font-bold">integrity</strong> and
            designed for <strong className="text-[#C4A065] font-bold">generations</strong>{" "}
            to come.
          </p>
        </div>

        {/* Story copy */}
        <div
          className={`transition-all duration-700 ease-out delay-150 motion-reduce:transition-none ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C4A065]">
            Our Story
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl text-[#1F1F1F] mt-4 mb-6 leading-tight">
            25 Years in the Making
          </h2>
          <p className="font-lato text-sm md:text-base text-[#707070] leading-relaxed mb-5">
            Founded in Ghaziabad, ShriRam Group&apos;s journey over the past 25
            years has been defined by careful growth, considered design, and
            an unwavering focus on the people who call our developments
            home. What began as a single residential project has grown into
            a portfolio spanning residential communities and commercial
            spaces across the region.
          </p>
          <p className="font-lato text-sm md:text-base text-[#707070] leading-relaxed mb-5">
            Trust is the foundation everything else is built on. From site
            selection to material sourcing to the final handover, our teams
            work to a single standard — build as if it were for our own
            family. That discipline is why so many of our residents
            recommend us to theirs.
          </p>
          <p className="font-lato text-sm md:text-base text-[#707070] leading-relaxed">
            Every ShriRam Group development balances the practical and the
            aspirational: accessible connectivity and thoughtful
            landscaping, robust construction and genuinely liveable spaces.
            It&apos;s a balance we&apos;ve spent 25 years learning to get right.
          </p>
        </div>
      </div>
    </section>
  );
}