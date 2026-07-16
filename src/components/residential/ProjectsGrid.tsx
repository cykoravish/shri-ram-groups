"use client";
import { useState } from "react";
import { projects } from "./projectsData";

const filters = ["All", "New Launch", "Ready to Move", "Under Construction", "Delivered"] as const;

export default function ProjectsGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  // Exclude the featured/spotlighted project so it isn't shown twice on the page
  const nonFeatured = projects.filter((p) => !p.featured);
  const filtered = active === "All" ? nonFeatured : nonFeatured.filter((p) => p.status === active);

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C4A065]">
            Our Portfolio
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl text-[#1F1F1F] mt-4">Explore By Status</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`font-lato text-xs uppercase tracking-[0.15em] px-5 py-2.5 border transition-colors ${
                active === f
                  ? "bg-[#C4A065] border-[#C4A065] text-[#1F1F1F]"
                  : "border-[#DDDDDD] text-[#707070] hover:border-[#C4A065] hover:text-[#1F1F1F]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((p) => (
            <a key={p.id} href={p.href} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <span className="absolute top-4 left-4 bg-white/90 font-lato text-[10px] uppercase tracking-[0.15em] text-[#4F4F4F] px-3 py-1">
                  {p.status}
                </span>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-lato text-xs uppercase tracking-[0.2em] text-white border-b border-white pb-1">
                    View Details
                  </span>
                </span>
              </div>
              <h3 className="font-playfair text-xl text-[#1F1F1F] group-hover:text-[#C4A065] transition-colors">
                {p.name}
              </h3>
              <p className="font-lato text-sm text-[#707070] mt-1">{p.location}</p>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center font-lato text-sm text-[#707070] py-10">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
}