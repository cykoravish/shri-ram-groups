import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
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
      <AboutHero />
      <OurStory />
      <AwardsSection />
      <VisionMission />
      <LeadershipLegacy />
      <Footer />
    </>
  );
}