"use client";

const projects = [
  {
    name: "The Meadows",
    location: "Ghaziabad",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Skyline Heights",
    location: "Ghaziabad",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Business Square",
    location: "Ghaziabad",
    type: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Garden Residency",
    location: "Ghaziabad",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
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