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
            <div className="absolute inset-0 bg-tint" />
            <div
              className="absolute inset-0 bg-brand"
              style={{ clipPath: "polygon(0 0, 65% 0, 35% 100%, 0 100%)" }}
            />
            <div className="relative z-10 h-full flex items-center justify-center">
              <Compass size={64} className="text-ink" strokeWidth={1.25} />
            </div>
          </div>

          <p className="font-playfair text-xl md:text-2xl text-ink leading-relaxed mt-8 max-w-sm">
            We believe in staying true to{" "}
            <strong className="text-brand font-bold">craftsmanship</strong>, so
            every home becomes the foundation of a lasting{" "}
            <strong className="text-brand font-bold">community</strong> — built
            with <strong className="text-brand font-bold">integrity</strong> and
            designed for <strong className="text-brand font-bold">generations</strong>{" "}
            to come.
          </p>
        </div>

        {/* Story copy */}
        <div
          className={`transition-all duration-700 ease-out delay-150 motion-reduce:transition-none ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-lato text-xs tracking-[0.3em] uppercase text-brand">
            Our Legacy
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl text-ink mt-4 mb-6 leading-tight">
            30 Years of Building Excellence
          </h2>
          <p className="font-lato text-sm md:text-base text-[#707070] leading-relaxed mb-5">
            Our legacy is built on trust, quality and a commitment to
            creating spaces that add lasting value to people&apos;s lives. As
            we grow, our focus remains unchanged — to build better, live
            better and contribute meaningfully to the communities around us.
          </p>
          <p className="font-lato text-sm md:text-base text-[#707070] leading-relaxed mb-5">
            With a strong and growing presence in Ghaziabad, we have earned
            the trust of our customers through consistent quality,
            transparency and timely delivery. Our strong partnerships
            further strengthen our foundation, bringing together shared
            values, expertise and a commitment to building better
            communities.
          </p>
          <p className="font-lato text-sm md:text-base text-[#707070] leading-relaxed">
            With every project, we strive to raise the benchmark for urban
            living, creating homes and communities that are built for
            today, while keeping tomorrow in mind.
          </p>
        </div>
      </div>
    </section>
  );
}