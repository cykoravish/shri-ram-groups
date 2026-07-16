import type { Metadata } from "next";
import CommercialHero from "@/components/commercial/CommercialHero";
import CommercialProjects from "@/components/commercial/CommercialProjects";
import CtaBand from "@/components/home/CtaBand";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/residential/PageBanner";

export const metadata: Metadata = {
  title: "Commercial Projects | ShriRam Group",
  description:
    "Explore ShriRam Group's ongoing commercial developments across Noida, Delhi NCR and Ghaziabad.",
};

export default function CommercialPage() {
  return (
    <>
       <PageBanner
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
        title="Ongoing Commercial Projects"
        subtitle="Commercial Portfolio"
      />
      {/* <CommercialHero /> */}
      <CommercialProjects />
      <CtaBand />
      <Footer />
    </>
  );
}
