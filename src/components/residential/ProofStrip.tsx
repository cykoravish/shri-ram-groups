"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

export default function ProofStrip() {
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
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-white py-12 md:py-16 border-t border-[#DDDDDD]">
      <div
        className={`max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 ease-out motion-reduce:transition-none ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <span className="font-playfair text-2xl text-[#1F1F1F]">
          25<span className="text-[#C4A065]">+</span> Years of Building Excellence
        </span>
        <div className="flex items-center gap-3 border border-[#DDDDDD] px-6 py-3">
          <span className="font-lato font-bold text-sm text-[#1F1F1F]">Google Rating</span>
          <span className="flex items-center gap-1 text-[#C4A065]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
            ))}
          </span>
          <span className="font-lato text-sm text-[#707070]">5.0</span>
        </div>
      </div>
    </section>
  );
}