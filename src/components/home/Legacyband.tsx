"use client";

import { useEffect, useRef, useState } from "react";

export default function LegacyBand() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
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
    <section ref={sectionRef} className="w-full bg-[#F1EEE9] py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text column */}
        <div
          className={`relative transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Faded large numeral - quiet background flourish */}
          <span
            aria-hidden="true"
            className="absolute -top-10 -left-4 font-lato font-bold text-[8rem] md:text-[11rem] text-[#C4A065]/10 leading-none select-none"
          >
            25
          </span>

          <div className="relative">
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C4A065]">
              Our Legacy
            </span>
            <h2 className="font-lato font-bold text-3xl md:text-5xl text-[#1F1F1F] mt-4 mb-6 leading-tight">
              25 Years of
              <br />
              Building Excellence
            </h2>
            <p className="font-lato text-[#4F4F4F] text-base md:text-lg leading-relaxed max-w-md mb-4">
              For a quarter century, we&apos;ve shaped Ghaziabad&apos;s skyline
              with landmark residential and commercial developments — each
              one built on a foundation of quality, transparency, and homes
              delivered on time, every time.
            </p>
            <p className="font-lato text-[#707070] text-sm md:text-base leading-relaxed max-w-md mb-8">
              From our first residential society to the high-rise
              communities we build today, our commitment has never changed:
              creating spaces where families and businesses thrive for
              generations.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 font-lato text-sm uppercase tracking-wide text-[#1F1F1F] border-b border-[#C4A065] pb-1 hover:text-[#C4A065] hover:gap-3 transition-all"
            >
              Read Our Story
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Image column */}
        <div
          className={`relative transition-all duration-700 ease-out delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Offset gold frame - premium real-estate motif */}
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full border-2 border-[#C4A065]" />

          <div className="relative aspect-[4/5] md:aspect-[4/5] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1755735340764-3b077cab0c5c?fm=jpg&q=80&w=1200&auto=format&fit=crop"
              alt="Landmark development by the group"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping stat chip */}
          <div className="absolute -bottom-6 left-6 md:-bottom-8 md:left-8 bg-white shadow-lg px-6 py-4 md:px-8 md:py-5">
            <span className="font-lato font-bold text-3xl md:text-4xl text-[#1F1F1F]">
              10<span className="text-[#C4A065]">+</span>
            </span>
            <span className="block font-lato text-xs uppercase tracking-[0.15em] text-[#707070] mt-1">
              Landmark Projects Delivered
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}