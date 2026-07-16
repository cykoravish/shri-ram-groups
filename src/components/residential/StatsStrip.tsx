"use client";
import { Building2, MapPinned, CheckCircle2, Star } from "lucide-react";
import { projects } from "./projectsData";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function StatsStrip() {
  const { ref, visible } = useInViewAnimation(0.3);

  // Derived from real data, but expressed qualitatively — no bare counts on display
  const hasDelivered = projects.some((p) => p.status === "Delivered");
  const hasOngoing = projects.some((p) => p.status !== "Delivered");
  const multipleLocations = new Set(projects.map((p) => p.location)).size > 1;

  const highlights = [
    {
      icon: Building2,
      title: "Residential Expertise",
      desc: "Purpose-built homes designed for real families, not just floor plans.",
    },
    {
      icon: CheckCircle2,
      title: hasDelivered ? "Proven Delivery" : "In Development",
      desc: hasDelivered
        ? "Communities completed, handed over, and lived in today."
        : "Careful construction underway, built to the same standard.",
    },
    {
      icon: MapPinned,
      title: multipleLocations ? "Growing Footprint" : "Rooted Locally",
      desc: multipleLocations
        ? "Presence across Ghaziabad and Noida's most sought-after sectors."
        : "Deep roots in the community we've built for over two decades.",
    },
    {
      icon: Star,
      title: "5.0 Rated",
      desc: "Trusted by residents, reflected in our Google reviews.",
    },
  ];

  return (
    <section ref={ref} className="w-full bg-[#F7F7F7] py-16 md:py-24">
      <div
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ease-out motion-reduce:transition-none ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C4A065]">
            Residential Portfolio
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl text-[#1F1F1F] mt-4">
            Why Families Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={h.title}
                className="bg-white border border-[#E5E5E5] px-6 py-9 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#C4A065] hover:shadow-lg"
                style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
              >
                <div className="w-12 h-12 mx-auto flex items-center justify-center bg-[#C4A065]/10 mb-5">
                  <Icon size={22} className="text-[#C4A065]" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-lg text-[#1F1F1F] mb-2">{h.title}</h3>
                <p className="font-lato text-xs text-[#707070] leading-relaxed">{h.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}