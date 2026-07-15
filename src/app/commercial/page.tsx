import type { Metadata } from "next";
import CommercialHero from "@/components/commercial/CommercialHero";
import CommercialProjects from "@/components/commercial/CommercialProjects";
import CtaBand from "@/components/home/CtaBand";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Commercial Projects | ShriRam Group",
  description:
    "Explore ShriRam Group's ongoing commercial developments across Noida, Delhi NCR and Ghaziabad.",
};

export default function CommercialPage() {
  return (
    <>
      <CommercialHero />
      <CommercialProjects />
      <CtaBand />
      <Footer />
    </>
  );
}