"use client";

import { useEffect, useRef, useState } from "react";

const delivered = [
  {
    name: "Silver Birch",
    location: "Indirapuram",
    desc: "Where nature's beauty embraces exquisite living. Enjoy abundant greenery and opulence.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Crescent Court",
    location: "Greater Noida West",
    desc: "Exquisitely fashioned and tenderly nurtured, resplendent with world-class amenities.",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Meridian Homes",
    location: "Sector 143, Noida",
    desc: "Setting a new benchmark for refined living in a pristine, well-connected locale.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "The Willows",
    location: "Indirapuram",
    desc: "A majestic sanctuary nestled within easy reach of metropolitan conveniences.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Cedar Grove",
    location: "Indirapuram",
    desc: "A luxurious lifestyle where comfort and security take center stage.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Amber Residency",
    location: "Sector 121, Noida",
    desc: "Ready-to-move homes with modern amenities — your pinnacle of living awaits.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
  },
];

export default function DeliveredGrid() {
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-[#F7F7F7] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C4A065]">
            Delivered With Pride
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl text-[#1F1F1F] mt-4">
            Communities We Call Home
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {delivered.map((p, i) => (
            <a
              key={p.name}
              href="#"
              className={`group block bg-white transition-all duration-700 ease-out motion-reduce:transition-none ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[#C4A065] text-[#1F1F1F] font-lato text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1">
                  Delivered
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-playfair text-xl text-[#1F1F1F]">{p.name}</h3>
                <p className="font-lato text-xs uppercase tracking-[0.1em] text-[#C4A065] mt-1 mb-3">
                  {p.location}
                </p>
                <p className="font-lato text-sm text-[#707070] leading-relaxed">{p.desc}</p>
                <span className="inline-block mt-4 font-lato text-xs uppercase tracking-[0.15em] text-[#1F1F1F] border-b border-transparent group-hover:border-[#C4A065] transition-colors">
                  View Details
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}