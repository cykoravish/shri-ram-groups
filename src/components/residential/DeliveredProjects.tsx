import { projects, type Project } from "./projectsData";
import { SpotlightCard } from "./ResidentialSpotlight";

const DELIVERED_ORDER = ["shriram-residency", "shriram-northview"];

/** "Already Delivered" blocks: same look as the New Launch spotlight, one block per delivered project. */
export default function DeliveredProjects() {
  const list = DELIVERED_ORDER.map((id) => projects.find((p) => p.id === id)).filter(
    (p): p is Project => Boolean(p)
  );

  return (
    <section className="relative w-full bg-gradient-to-b from-ink via-ink-deep to-ink py-16 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-brand-light/10 blur-[120px] rounded-full" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <span className="font-lato text-xs tracking-[0.3em] uppercase text-brand-light">Our Portfolio</span>
          <h2 className="font-playfair text-3xl md:text-5xl text-white mt-4">Already Delivered</h2>
        </div>
        <div className="space-y-10 md:space-y-14">
          {list.map((p, i) => (
            <SpotlightCard key={p.id} project={p} eyebrow="Delivered with Pride" reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
