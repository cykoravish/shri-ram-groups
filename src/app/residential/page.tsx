import type { Metadata } from "next";
import ResidentialHero from "@/components/residential/ResidentialHero";
import FeaturedProjects from "@/components/residential/FeaturedProjects";
import DeliveredGrid from "@/components/residential/DeliveredGrid";
import ProofStrip from "@/components/residential/ProofStrip";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Residential Projects | ShriRam Group",
  description:
    "Explore ShriRam Group's residential projects across Ghaziabad and Noida — from new launches to delivered communities.",
};

export default function ResidentialPage() {
  return (
    <>
      <ResidentialHero />
      <FeaturedProjects />
      <DeliveredGrid />
      <ProofStrip />
      <Footer />
    </>
  );
}