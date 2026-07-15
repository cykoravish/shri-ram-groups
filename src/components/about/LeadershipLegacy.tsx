"use client";

import { useEffect, useRef, useState } from "react";

const leaders = [
  {
    name: "Rajendra Sharma",
    title: "Chairman, ShriRam Group",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    bio: "With over 30 years in real estate, Rajendra has guided the group's growth since its founding, prioritizing long-term trust over short-term gain in every decision.",
  },
  {
    name: "Vinod Kumar Gupta",
    title: "Managing Director",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    bio: "A driving force behind the group's residential portfolio across NCR, Vinod brings 25 years of hands-on development expertise and an unwavering focus on quality.",
  },
  {
    name: "Arjun Mehta",
    title: "Director, Commercial Development",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    bio: "Arjun leads the group's commercial vertical, driving growth across the region's fastest-developing business corridors with a people-first approach to design.",
  },
];

export default function LeadershipLegacy() {
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
    <section ref={ref} className="w-full bg-[#F1EEE9] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#1F1F1F]">Leadership Legacy</h2>
          <span className="block w-16 h-[3px] bg-[#C4A065] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {leaders.map((l, i) => (
            <div
              key={l.name}
              className={`group transition-all duration-700 ease-out motion-reduce:transition-none ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${i * 120}ms` : "0ms" }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden mb-5">
                <img
                  src={l.image}
                  alt={l.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-out"
                />
                <span className="absolute bottom-0 left-0 w-12 h-1.5 bg-[#C4A065]" />
              </div>
              <h3 className="font-playfair text-xl text-[#1F1F1F]">{l.name}</h3>
              <p className="font-lato text-xs uppercase tracking-[0.15em] text-[#C4A065] mt-1 mb-3">
                {l.title}
              </p>
              <p className="font-lato text-sm text-[#707070] leading-relaxed">{l.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}