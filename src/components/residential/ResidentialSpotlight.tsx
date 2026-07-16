"use client";
import { ArrowRight } from "lucide-react";
import { projects } from "./projectsData";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function ResidentialSpotlight() {
  const project = projects.find((p) => p.featured) ?? projects[0];
  const { ref, visible } = useInViewAnimation(0.2);

  return (
    <section
      ref={ref}
      className="relative w-full bg-gradient-to-b from-[#1F1F1F] via-[#181818] to-[#1F1F1F] pt-14 md:pt-20 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#C4A065]/10 blur-[120px] rounded-full" />
      <div
        className="pointer-events-none absolute top-0 left-0 w-24 h-24 md:w-40 md:h-40 border-t-2 border-l-2 border-[#C4A065]/25"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-24 h-24 md:w-40 md:h-40 border-b-2 border-r-2 border-[#C4A065]/25"
        style={{ clipPath: "polygon(100% 100%, 100% 0, 0 100%)" }}
      />
      <span className="pointer-events-none absolute -top-6 right-6 md:right-16 font-playfair text-[140px] md:text-[220px] leading-none text-white/[0.03] select-none">
        25
      </span>

      <div className="relative max-w-6xl mx-auto px-6 -mt-8 md:-mt-12">
        <div
          className={`bg-white shadow-2xl grid grid-cols-1 md:grid-cols-2 transition-all duration-700 ease-out motion-reduce:transition-none ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
            <span className="absolute top-5 left-5 bg-[#C4A065] text-[#1F1F1F] font-lato text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-1.5">
              {project.status}
            </span>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C4A065]">Spotlight</span>
            <h2 className="font-playfair text-3xl md:text-4xl text-[#1F1F1F] mt-3 mb-2">{project.name}</h2>
            <p className="font-lato text-sm text-[#707070] mb-5">{project.location}</p>
            <p className="font-lato text-sm md:text-base text-[#707070] leading-relaxed mb-8 max-w-sm">
              {project.description}
            </p>
            
            <a href={project.href}
              className="group inline-flex items-center gap-2 w-fit bg-[#1F1F1F] text-white font-lato text-xs uppercase tracking-[0.2em] px-6 py-3.5 hover:bg-[#C4A065] hover:text-[#1F1F1F] transition-colors"
            >
              Explore Project
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}