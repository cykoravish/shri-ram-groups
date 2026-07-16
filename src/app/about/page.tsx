import type { Metadata } from "next";
import PageBanner from "@/components/residential/PageBanner";
import OurStory from "@/components/about/OurStory";
import AwardsSection from "@/components/about/AwardsSection";
import VisionMission from "@/components/about/VisionMission";
import LeadershipLegacy from "@/components/about/LeadershipLegacy";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us | ShriRam Group",
  description:
    "25 years of building trust, timeless design, and thriving communities across Ghaziabad and NCR.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1600&auto=format&fit=crop"
        title="About Us"
        subtitle="Our Legacy"
      />

      <OurStory />
      <AwardsSection />
      <VisionMission />
      <LeadershipLegacy />
      <Footer />
    </>
  );
}