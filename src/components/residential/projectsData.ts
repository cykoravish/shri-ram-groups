export interface Project {
  id: string;
  name: string;
  status: "New Launch" | "Ready to Move" | "Under Construction" | "Delivered";
  location: string;
  image: string;
  href: string;
  featured?: boolean;
  description?: string;
}

export const projects: Project[] = [
  {
    id: "regalia",
    name: "The Regalia",
    status: "New Launch",
    location: "Sector 129, Noida",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
    href: "#",
    featured: true,
    description:
      "North India's newest landmark in serviced luxury living — defined by uncompromising design and five-star hospitality.",
  },
  {
    id: "skyline-heights",
    name: "Skyline Heights",
    status: "Ready to Move",
    location: "Sector 144, Noida",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "garden-residency",
    name: "Garden Residency",
    status: "Under Construction",
    location: "Greater Noida West",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "silver-birch",
    name: "Silver Birch",
    status: "Delivered",
    location: "Indirapuram",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "crescent-court",
    name: "Crescent Court",
    status: "Delivered",
    location: "Greater Noida West",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "meridian-homes",
    name: "Meridian Homes",
    status: "Delivered",
    location: "Sector 143, Noida",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "the-willows",
    name: "The Willows",
    status: "Delivered",
    location: "Indirapuram",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "amber-residency",
    name: "Amber Residency",
    status: "Delivered",
    location: "Sector 121, Noida",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
];