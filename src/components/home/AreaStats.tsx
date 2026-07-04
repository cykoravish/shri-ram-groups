"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return value;
}

function BigBlockStat({
  value,
  suffix,
  label,
  reverse,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  reverse?: boolean;
  start: boolean;
}) {
  const count = useCountUp(value, start);

  // Diagonal "skyline cut" clip paths - mirrored for the reversed block
  const goldClip = reverse
    ? "polygon(100% 0, 42% 0, 58% 100%, 100% 100%)"
    : "polygon(0 0, 58% 0, 42% 100%, 0 100%)";

  return (
    <div className="group relative h-56 md:h-64 overflow-hidden transition-transform duration-300 ease-out hover:scale-[1.015]">
      {/* Base layer */}
      <div className="absolute inset-0 bg-[#EFEEEC]" />
      {/* Diagonal gold cut */}
      <div
        className="absolute inset-0 bg-[#C4A065] transition-[filter] duration-300 group-hover:brightness-[1.06]"
        style={{ clipPath: goldClip }}
      />

      <div className="relative z-10 h-full flex items-center justify-center">
        <span className="font-lato font-bold text-6xl md:text-7xl lg:text-8xl text-[#1F1F1F] leading-none">
          {count}
          <span className="text-3xl md:text-4xl align-top ml-1">
            {suffix}
          </span>
        </span>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-[#4F4F4F]/90 py-3">
        <span className="block text-center font-lato text-xs md:text-sm uppercase tracking-[0.2em] text-white">
          {label}
        </span>
      </div>
    </div>
  );
}

function SimpleStat({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const count = useCountUp(value, start);

  return (
    <div className="flex items-center gap-4 md:gap-6 py-8 md:py-0">
      <span className="font-lato font-bold text-5xl md:text-6xl text-[#1F1F1F] leading-none whitespace-nowrap">
        {count}
        <span className="text-[#C4A065]">{suffix}</span>
      </span>
      <span className="w-px h-10 bg-[#DDDDDD] hidden sm:block rotate-12" />
      <span className="font-lato text-sm md:text-base text-[#707070] max-w-[10rem] leading-snug">
        {label}
      </span>
    </div>
  );
}

export default function AreaStats() {
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
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="abouts" ref={sectionRef} className="w-full bg-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Eyebrow / context line */}
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block font-lato text-xs tracking-[0.3em] uppercase text-[#C4A065] border-b border-[#C4A065] pb-2 mb-3">
            Our Scale
          </span>
          <p className="font-lato text-[#707070] text-sm md:text-base mt-3 max-w-md mx-auto">
            Two and a half decades of shaping Ghaziabad&apos;s skyline.
          </p>
        </div>

        {/* Primary metrics - two-tone diagonal blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2 mb-12 md:mb-16">
          <BigBlockStat
            value={20}
            suffix="M+"
            label="Sq. Ft. Area Developed"
            start={visible}
          />
          <BigBlockStat
            value={5}
            suffix="M+"
            label="Sq. Ft. Under Development"
            reverse
            start={visible}
          />
        </div>

        {/* Secondary metrics - quiet numeric treatment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 divide-y sm:divide-y-0 sm:divide-x divide-[#DDDDDD]">
          <div className="sm:pr-12">
            <SimpleStat value={25} suffix="+" label="Years of Excellence" start={visible} />
          </div>
          <div className="sm:pl-12">
            <SimpleStat value={10} suffix="+" label="Projects Delivered" start={visible} />
          </div>
        </div>
      </div>
    </section>
  );
}