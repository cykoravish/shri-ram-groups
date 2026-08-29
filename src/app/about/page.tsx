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
    "30 years of building trust, timeless design, and thriving communities across Ghaziabad and NCR.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        image="/images/shriram-residential-wide-1.webp"
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