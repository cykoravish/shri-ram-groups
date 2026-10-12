export interface Project {
  id: string;
  name: string;
  status: "New Launch" | "Ready to Move" | "Under Construction" | "Delivered";
  location: string;
  image: string;
  href: string;
  featured?: boolean;
  description?: string;
  /** transparent cut-out render of the building (shown on a gradient, not cropped) */
  cutout?: boolean;
}

export const projects: Project[] = [
  {
    id: "shriram-heights",
    name: "ShriRam Heights",
    status: "New Launch",
    location: "Ghaziabad",
    image: "/images/project-shriram-heights.webp",
    cutout: true,
    href: "/residential",
    featured: true,
    description:
      "Thoughtfully designed homes that bring together modern comfort, quality construction and a better standard of everyday living.",
  },
  {
    id: "shriram-northview",
    name: "ShriRam NorthView",
    status: "Ready to Move",
    location: "Ghaziabad",
    image: "/images/project-shriram-northview.webp",
    cutout: true,
    href: "https://www.shriramnorthview.com/",
  },
  {
    id: "shriram-residency",
    name: "ShriRam Residency",
    status: "Under Construction",
    location: "Ghaziabad",
    image: "/images/project-shriram-residency.webp",
    cutout: true,
    href: "/residential",
  },
  {
    id: "silver-birch",
    name: "Silver Birch",
    status: "Delivered",
    location: "Ghaziabad",
    image: "/images/shriram-residential-wide-2.webp",
    href: "#",
  },
  {
    id: "crescent-court",
    name: "Crescent Court",
    status: "Delivered",
    location: "Ghaziabad",
    image: "/images/shriram-residential-complex-watermarked.webp",
    href: "#",
  },
  {
    id: "meridian-homes",
    name: "Meridian Homes",
    status: "Delivered",
    location: "Ghaziabad",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "the-willows",
    name: "The Willows",
    status: "Delivered",
    location: "Ghaziabad",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "amber-residency",
    name: "Amber Residency",
    status: "Delivered",
    location: "Ghaziabad",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
];