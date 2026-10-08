"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Award, Building2, HardHat, Users, type LucideIcon } from "lucide-react";

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

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  start,
  indian = false,
}: {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
  start: boolean;
  indian?: boolean;
}) {
  const count = useCountUp(value, start);

  return (
    <div className="bg-white/95 px-5 py-8 md:py-10 text-center shadow-[0_12px_32px_rgba(20,37,59,0.14)] transition-transform duration-300 ease-out hover:-translate-y-1">
      <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-tint text-brand">
        <Icon className="h-7 w-7" strokeWidth={1.4} aria-hidden />
      </span>
      <span className="block font-playfair text-4xl sm:text-5xl lg:text-4xl xl:text-[2.6rem] leading-none text-brand whitespace-nowrap">
        {indian ? count.toLocaleString("en-IN") : count}
        {suffix}
      </span>
      <span className="mt-4 block font-lato text-[0.7rem] sm:text-xs uppercase tracking-[0.22em] text-ink leading-relaxed">
        {label}
      </span>
      <span className="mx-auto mt-5 block h-px w-10 bg-brand" />
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
      className="w-full bg-white"
    >
      <LegacyBanner start={visible} />
      {/* Our Journey in Numbers */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/images/hero-contact.webp"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover object-[75%_50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/55 to-white/10" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-14 md:pb-20">
          <div className="text-center max-w-3xl mx-auto">
            <span className="block font-lato text-xs tracking-[0.3em] uppercase text-brand">
              Our Journey in Numbers
            </span>
            <span className="mx-auto mt-4 block h-px w-16 bg-brand" />
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-ink leading-tight mt-8">
              Built on Trust.
              <br />
              Delivered with Pride.
            </h2>
            <p className="font-lato text-sm md:text-base text-[#4F4F4F] mt-6 max-w-xl mx-auto leading-relaxed">
              From landmark developments to thousands of happy families, our
              journey reflects a commitment to quality, trust and a better
              tomorrow.
            </p>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            <StatCard icon={Building2} value={900000} suffix="+" label="Sq. Ft. Delivered" start={visible} indian />
            <StatCard icon={Award} value={26} suffix="" label="Projects Successfully Delivered" start={visible} />
            <StatCard icon={HardHat} value={2} suffix="" label="Ongoing Projects" start={visible} />
            <StatCard icon={Users} value={700} suffix="+" label="Happy Customers" start={visible} />
          </div>
        </div>
      </div>
    </section>
  );
}
