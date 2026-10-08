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

function StatBox({
  value,
  suffix,
  label,
  start,
  indian = false,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
  indian?: boolean;
}) {
  const count = useCountUp(value, start);

  return (
    // Two straight parts split by a vertical edge: number on the left, text on the right
    <div className="group relative transition-transform duration-300 ease-out hover:scale-[1.015]">
      {/* Offset outline frame, same treatment as the site's images */}
      <div className="pointer-events-none absolute -top-2 -right-2 md:-top-3 md:-right-3 w-full h-full border-2 border-brand" />
      <div className="relative flex h-24 sm:h-28 lg:h-32 overflow-hidden">
      <div className="flex basis-[48%] shrink-0 items-center justify-center bg-brand px-2">
        <span className="font-lato font-bold text-[1.6rem] sm:text-5xl lg:text-4xl text-on-brand leading-none whitespace-nowrap">
          {indian ? count.toLocaleString("en-IN") : count}
          <span className="text-xl sm:text-3xl lg:text-2xl align-top ml-0.5">{suffix}</span>
        </span>
      </div>
      <div className="flex flex-1 items-center bg-tint px-4 sm:px-6">
        <span className="font-lato text-[0.7rem] sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.2em] text-ink leading-snug">
          {label}
        </span>
      </div>
      </div>
    </div>
  );
}

function LegacyBanner({ start }: { start: boolean }) {
  const years = useCountUp(30, start);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Full-width paper texture background, tiled instead of stretched */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/paper-texture.webp')",
          backgroundSize: "2500px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="absolute inset-0 bg-white/30" />

      {/* Ghost watermark number for depth */}
      <span className="pointer-events-none select-none absolute -left-4 md:left-10 top-1/2 -translate-y-1/2 font-lato font-bold text-[14rem] md:text-[22rem] leading-none text-ink/[0.04]">
        30
      </span>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-14">
        {/* Left: big number block */}
        <div className="relative shrink-0">
          <div className="absolute -inset-4 md:-inset-6 bg-brand" />
          <div className="relative z-10 px-6 py-4 md:px-10 md:py-6">
            <span className="font-lato font-bold text-7xl md:text-8xl lg:text-9xl text-on-brand leading-none">
              {years}
              <span className="text-3xl md:text-4xl align-top ml-1">+</span>
            </span>
            <span className="block font-lato text-xs md:text-sm tracking-[0.4em] uppercase text-on-brand/70 mt-1">
              Years
            </span>
          </div>
        </div>

        {/* Right: heading + copy */}
        <div className="text-center md:text-left">
          <span className="inline-block font-lato text-xs tracking-[0.3em] uppercase text-brand border-b border-brand pb-2 mb-4">
            Legacy
          </span>
          <h3 className="font-lato text-3xl md:text-4xl lg:text-5xl text-ink leading-tight">
            Experience <span className="font-bold">Excellence</span>
          </h3>
          <span className="block w-16 h-[3px] bg-brand my-4 mx-auto md:mx-0" />
          <p className="font-lato text-sm md:text-base text-[#707070] max-w-xl leading-relaxed">
            At Shriram Realty, we believe a better life begins with a better
            place to live, grow and thrive. For over 30 years, we have been
            building spaces for people who aspire to move ahead, achieve more
            and create a life they can be proud of.
          </p>
        </div>
      </div>

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
          <span className="inline-block font-lato text-xs tracking-[0.3em] uppercase text-brand border-b border-brand pb-2 mb-3">
            Our Scale
          </span>
          <p className="font-lato text-[#707070] text-sm md:text-base mt-3 max-w-md mx-auto">
            Three decades of shaping Ghaziabad&apos;s skyline.
          </p>
        </div>

        {/* Four equal stat boxes: number | text, split by a straight edge */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <StatBox value={900000} suffix="+" label="Sq. Ft. Approx. Area Delivered" start={visible} indian />
          <StatBox value={2} suffix="" label="Ongoing Projects" start={visible} />
          <StatBox value={700} suffix="+" label="Happy Customers" start={visible} />
          <StatBox value={26} suffix="" label="Projects Successfully Delivered" start={visible} />
        </div>
      </div>
    </section>
  );
}
