"use client";

import { useEffect, useRef, useState } from "react";
import { Eye, Target, type LucideIcon } from "lucide-react";

function IconBlock({ Icon, reverseClip }: { Icon: LucideIcon; reverseClip?: boolean }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <div className="absolute inset-0 bg-[#EFEEEC]" />
      <div
        className="absolute inset-0 bg-[#C4A065]"
        style={{
          clipPath: reverseClip
            ? "polygon(100% 0, 45% 0, 65% 100%, 100% 100%)"
            : "polygon(0 0, 55% 0, 35% 100%, 0 100%)",
        }}
      />
      <div className="relative z-10 h-full flex items-center justify-center">
        <Icon size={56} className="text-[#1F1F1F]" strokeWidth={1.25} />
      </div>
    </div>
  );
}

function Row({
  label,
  heading,
  copy,
  Icon,
  reverse,
}: {
  label: string;
  heading: string;
  copy: string;
  Icon: LucideIcon;
  reverse?: boolean;
}) {
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
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center py-12 md:py-16">
      <div
        className={`${reverse ? "md:order-2" : ""} transition-all duration-700 ease-out motion-reduce:transition-none ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <IconBlock Icon={Icon} reverseClip={reverse} />
      </div>
      <div
        className={`${reverse ? "md:order-1" : ""} transition-all duration-700 ease-out delay-150 motion-reduce:transition-none ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C4A065]">{label}</span>
        <h2 className="font-playfair text-3xl md:text-4xl text-[#1F1F1F] mt-4 mb-5">{heading}</h2>
        <p className="font-lato text-sm md:text-base text-[#707070] leading-relaxed max-w-md">{copy}</p>
      </div>
    </div>
  );
}

export default function VisionMission() {
  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-6 divide-y divide-[#DDDDDD]">
        <Row
          label="Vision"
          heading="Where We're Headed"
          copy="To be among North India's most trusted real estate names, shaping communities that balance modern living with lasting value — building responsibly for the generations who will inherit what we create."
          Icon={Eye}
        />
        <Row
          label="Mission"
          heading="How We Get There"
          copy="Our mission is simple: build trust before buildings. We deliver every project on the promise of quality, transparency, and timely handover, while fostering strong, connected communities in every space we create."
          Icon={Target}
          reverse
        />
      </div>
    </section>
  );
}