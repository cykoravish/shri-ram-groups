import type { Metadata } from "next";
import PageBanner from "@/components/residential/PageBanner";
import ResidentialSpotlight from "@/components/residential/ResidentialSpotlight";
import ProjectsGrid from "@/components/residential/ProjectsGrid";
import StatsStrip from "@/components/residential/StatsStrip";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Residential Projects | ShriRam Group",
  description:
    "Explore ShriRam Group's residential projects across Ghaziabad — from new launches to delivered communities.",
};

export default function ResidentialPage() {
  return (
    <>
      <PageBanner
        image="/images/shriram-residential-wide-2.webp"
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