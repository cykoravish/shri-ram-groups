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
          <span className="text-3xl md:text-4xl align-top ml-1">{suffix}</span>
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

function LegacyBanner({ start }: { start: boolean }) {
  const years = useCountUp(25, start);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Full-width paper texture background, tiled instead of stretched */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/paper-texture.webp')",
          backgroundSize: "700px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="absolute inset-0 bg-white/30" />

      {/* Ghost watermark number for depth */}
      <span className="pointer-events-none select-none absolute -left-4 md:left-10 top-1/2 -translate-y-1/2 font-lato font-bold text-[14rem] md:text-[22rem] leading-none text-[#1F1F1F]/[0.04]">
        25
      </span>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-14">
        {/* Left: big diagonal number block */}
        <div className="relative shrink-0">
          <div
            className="absolute -inset-4 md:-inset-6 bg-[#C4A065]"
            style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
          />
          <div className="relative z-10 px-6 py-4 md:px-10 md:py-6">
            <span className="font-lato font-bold text-7xl md:text-8xl lg:text-9xl text-[#1F1F1F] leading-none">
              {years}
              <span className="text-3xl md:text-4xl align-top ml-1">+</span>
            </span>
            <span className="block font-lato text-xs md:text-sm tracking-[0.4em] uppercase text-[#1F1F1F] mt-1">
              Years
            </span>
          </div>
        </div>

        {/* Right: heading + copy */}
        <div className="text-center md:text-left">
          <span className="inline-block font-lato text-xs tracking-[0.3em] uppercase text-[#C4A065] border-b border-[#C4A065] pb-2 mb-4">
            Legacy
          </span>
          <h3 className="font-lato text-3xl md:text-4xl lg:text-5xl text-[#1F1F1F] leading-tight">
            Experience <span className="font-bold">Excellence</span>
          </h3>
          <span className="block w-16 h-[3px] bg-[#C4A065] my-4 mx-auto md:mx-0" />
          <p className="font-lato text-sm md:text-base text-[#707070] max-w-xl leading-relaxed">
            With utmost respect for our communities, we meticulously design
            timeless residences, spanning well-planned neighborhoods to majestic
            high-rises. Our unwavering commitment to discerning clients
            guarantees enduring grandeur.
          </p>
        </div>
      </div>

      {/* Diagonal cut at the bottom edge, transitioning into the white section below */}
      <div
        className="absolute bottom-0 left-0 w-full h-6 md:h-10 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />
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
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="abouts"
      ref={sectionRef}
      className="w-full bg-white pb-14 md:pb-20"
    >
      <LegacyBanner start={visible} />
      <div className="max-w-6xl mx-auto px-6 pt-14 md:pt-20">
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

        {/* Secondary metric - quiet numeric treatment */}
        <div className="flex justify-center">
          <SimpleStat
            value={10}
            suffix="+"
            label="Projects Delivered"
            start={visible}
          />
        </div>
      </div>
    </section>
  );
}
