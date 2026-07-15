import CommercialProjectRow from "./CommercialProjectRow";

const projects = [
  {
    name: "The Exchange",
    location: "Sector 135,",
    city: "Noida",
    description:
      "Located on the Noida Expressway, this developed sector provides numerous advantages to elevate your business.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    href: "#",
  },
  {
    name: "Vertex Courtyard",
    location: "NSP, Pitampura,",
    city: "Delhi",
    description:
      "Vertex Courtyard promises to take your business lifestyle a notch higher, with retail and office spaces designed for the modern enterprise.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    href: "#",
  },
  {
    name: "Prime Square",
    location: "Sector 63,",
    city: "Ghaziabad",
    description:
      "Prime Square brings Grade-A office spaces and curated retail together at the heart of Ghaziabad's fastest-growing business corridor.",
    image:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1200&auto=format&fit=crop",
    href: "#",
  },
];

export default function CommercialProjects() {
  return (
    <section className="w-full">
      {projects.map((p, i) => (
        <CommercialProjectRow
          key={p.name}
          {...p}
          reverse={i % 2 === 1}
          tone={i % 2 === 1 ? "tint" : "white"}
        />
      ))}
    </section>
  );
}