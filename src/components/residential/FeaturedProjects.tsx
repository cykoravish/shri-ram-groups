import FeaturedProject from "./FeaturedProject";

const projects = [
  {
    name: "The Regalia",
    tagline: "A private sky above the city you call home.",
    status: "New Launch",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
    description:
      "The Regalia is North India's newest landmark in serviced luxury living — a tower defined by uncompromising design, five-star hospitality, and views that stretch beyond the skyline.",
    specs: ["Serviced Apartments", "Sector 129, Noida", "New Launch"],
    href: "#",
  },
  {
    name: "Skyline Heights",
    tagline: "Where every evening ends with the city at your feet.",
    status: "Ready to Move",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    description:
      "Elevate your lifestyle at Skyline Heights, Sector 144 Noida — nestled amid greenery and unobstructed views, designed for families who expect grandeur as standard.",
    specs: ["4 BHK Apartments", "Sector 144, Noida", "Ready to Move"],
    href: "#",
  },
  {
    name: "Garden Residency",
    tagline: "Opulence, rooted in nature.",
    status: "Under Construction",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    description:
      "Garden Residency in Greater Noida West redefines expansive living with 82 exclusive residences, world-class amenities, and uncompromising comfort at every turn.",
    specs: ["4 BHK Apartments", "Greater Noida West", "Under Construction"],
    href: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="w-full bg-white">
      {projects.map((p) => (
        <FeaturedProject key={p.name} {...p} />
      ))}
    </section>
  );
}