import type { Metadata } from "next";
import EventsHero from "@/components/events/EventsHero";
import EventsTimeline from "@/components/events/EventsTimeline";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/residential/PageBanner";

export const metadata: Metadata = {
  title: "Events | ShriRam Group",
  description:
    "A look back at the community events, celebrations, and wellness initiatives hosted across ShriRam Group residences.",
};

export default function EventsPage() {
  return (
    <>
      {/* <EventsHero /> */}
      <PageBanner
        image="/images/shriram-residential-lifestyle.webp"
        title="Events"
        subtitle="Your Home, Your Community"
      />
      <EventsTimeline />
      <Footer />
    </>
  );
}
