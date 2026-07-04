"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "The handover happened exactly on the date mentioned in our agreement. In a city where delays are the norm, that alone earned our trust.",
    name: "Rohit Sharma",
    detail: "Homeowner, The Meadows",
  },
  {
    quote:
      "What stood out was how clearly every cost was explained upfront. No hidden charges, no last-minute surprises — just what was promised.",
    name: "Anita Verma",
    detail: "Homeowner, Skyline Heights",
  },
  {
    quote:
      "We moved our office into Business Square last year. The build quality and the support team's responsiveness have been excellent since day one.",
    name: "Karan Mehta",
    detail: "Business Owner, Business Square",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C4A065]">
          What Our Residents Say
        </span>
        <h2 className="font-lato font-bold text-3xl md:text-5xl text-[#1F1F1F] mt-3 mb-12">
          Voices From Our Communities
        </h2>

        <div className="relative min-h-[220px] md:min-h-[180px]">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === active ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <p className="font-lato text-xl md:text-2xl text-[#1F1F1F] leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <span className="font-lato font-bold text-sm text-[#1F1F1F]">
                {t.name}
              </span>
              <span className="font-lato text-sm text-[#707070] block">
                {t.detail}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => setActive(i)}
              className={`h-[2px] transition-all duration-300 ${
                i === active ? "w-8 bg-[#C4A065]" : "w-4 bg-[#DDDDDD]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}