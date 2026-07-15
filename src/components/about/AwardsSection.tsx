"use client";

import { useEffect, useRef, useState } from "react";
import { Trophy, Award, Medal, Star } from "lucide-react";

const awards = [
  { icon: Trophy, year: "2024", label: "Best Residential Project", title: "Real Estate Excellence Awards" },
  { icon: Award, year: "2023", label: "Developer of the Year", title: "Realty Icons Conclave" },
  { icon: Medal, year: "2023", label: "Excellence in Design", title: "Leadership in Real Estate" },
  { icon: Star, year: "2023", label: "Most Trusted Developer", title: "Achievers Summit" },
];

export default function AwardsSection() {
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
    <section ref={ref} className="w-full bg-[#F7F7F7] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-14 md:mb-20">
          <div
            className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C4A065]">
              Recognized Excellence
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl text-[#1F1F1F] mt-4 mb-6 leading-tight">
              Awards &amp; Recognition
            </h2>
            <p className="font-lato text-sm md:text-base text-[#707070] leading-relaxed max-w-md">
              Two and a half decades of disciplined delivery have earned
              recognition across the industry — a reflection of the trust our
              residents, partners, and peers have placed in us.
            </p>
          </div>
          <div
            className={`relative aspect-[3/2] w-full max-w-md md:ml-auto overflow-hidden transition-all duration-700 ease-out delay-150 motion-reduce:transition-none ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-[#EFEEEC]" />
            <div
              className="absolute inset-0 bg-[#C4A065]"
              style={{ clipPath: "polygon(100% 0, 40% 0, 60% 100%, 100% 100%)" }}
            />
            <div className="relative z-10 h-full flex items-center justify-center">
              <Trophy size={56} className="text-[#1F1F1F]" strokeWidth={1.25} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {awards.map((a, i) => (
            <div
              key={a.title}
              className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms" }}
            >
              <div className="bg-[#1F1F1F] aspect-[4/3] flex flex-col items-center justify-center gap-3 px-4">
                <a.icon size={28} className="text-[#C4A065]" strokeWidth={1.5} />
                <span className="font-lato text-[10px] uppercase tracking-[0.15em] text-white/70">
                  {a.year}
                </span>
              </div>
              <div className="bg-white px-4 py-4 border-t-2 border-[#C4A065]">
                <p className="font-lato text-sm font-bold text-[#1F1F1F] leading-snug">{a.label}</p>
                <p className="font-lato text-xs text-[#707070] mt-1">{a.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}