"use client";

const projects = [
  {
    name: "The Meadows",
    location: "Ghaziabad",
    type: "Residential",
    image: "/images/shriram-residential-wide-1.webp",
  },
  {
    name: "Skyline Heights",
    location: "Ghaziabad",
    type: "Residential",
    image: "/images/shriram-residential-wide-2.webp",
  },
  {
    name: "Business Square",
    location: "Ghaziabad",
    type: "Commercial",
    image: "/images/shriram-business-centre-hero.webp",
  },
  {
    name: "Garden Residency",
    location: "Ghaziabad",
    type: "Residential",
    image: "/images/shriram-heights-building.webp",
  },
];

export default function FeaturedCommunities() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-4">
          <div>
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C4A065]">
              Where We Build
            </span>
            <h2 className="font-lato font-bold text-3xl md:text-5xl text-[#1F1F1F] mt-3">
              Featured Communities
            </h2>
          </div>
          <a
            href="/residential"
            className="font-lato text-sm uppercase tracking-wide text-[#1F1F1F] border-b border-[#C4A065] pb-1 hover:text-[#C4A065] transition-colors whitespace-nowrap"
          >
            View All Projects →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project) => (
            <a
              key={project.name}
              href="#"
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white/90 font-lato text-[10px] uppercase tracking-[0.15em] text-[#4F4F4F] px-3 py-1">
                  {project.type}
                </span>
              </div>
              <h3 className="font-lato font-bold text-lg text-[#1F1F1F] group-hover:text-[#C4A065] transition-colors">
                {project.name}
              </h3>
              <p className="font-lato text-sm text-[#707070] mt-1">
                {project.location}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}