import type { Metadata } from "next";
import EventsHero from "@/components/events/EventsHero";
import EventsTimeline from "@/components/events/EventsTimeline";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Events | ShriRam Group",
  description:
    "A look back at the community events, celebrations, and wellness initiatives hosted across ShriRam Group residences.",
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsTimeline />
      <Footer />
    </>
  );
}