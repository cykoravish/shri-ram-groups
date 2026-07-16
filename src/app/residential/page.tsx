import type { Metadata } from "next";
import PageBanner from "@/components/residential/PageBanner";
import ResidentialSpotlight from "@/components/residential/ResidentialSpotlight";
import ProjectsGrid from "@/components/residential/ProjectsGrid";
import StatsStrip from "@/components/residential/StatsStrip";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Residential Projects | ShriRam Group",
  description:
    "Explore ShriRam Group's residential projects across Ghaziabad and Noida — from new launches to delivered communities.",
};

export default function ResidentialPage() {
  return (
    <>
      <PageBanner
        image="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1600&auto=format&fit=crop"
        title="Explore Our Projects"
        subtitle="Our Residences"
      />
      <ResidentialSpotlight />
      <StatsStrip />
      <ProjectsGrid />
      <Footer />
    </>
  );
}