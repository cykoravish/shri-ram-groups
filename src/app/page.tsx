import AreaStats from "@/components/home/AreaStats";
import CtaBand from "@/components/home/CtaBand";
import FeaturedCommunities from "@/components/home/Featuredcommunities ";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import LegacyBand from "@/components/home/Legacyband";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
    <Hero />
      <AreaStats />
      <LegacyBand />
      <FeaturedCommunities />
      <WhyChooseUs />
      <Testimonials />
      <CtaBand />
      <Footer />
    </>
  );
}
