import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogosSection } from "@/components/sections/LogosSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { WorksSection } from "@/components/sections/WorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FacesSection } from "@/components/sections/FacesSection";
import { AwardsSection } from "@/components/sections/AwardsSection";

export default function Home() {
  return (
    <>
      <SEO 
        description="D Mimo Architects designs timeless, modern, and intentional residential and commercial interior spaces. Discover our projects and design philosophy."
        keywords="interior design, modern design studio, home renovation, space planning, commercial interiors"
      />
      <HeroSection />
      <LogosSection />
      <AboutSection />
      <ServicesSection />
      <PhilosophySection />
      <WorksSection />
      <TestimonialsSection />
      <FacesSection />
      <AwardsSection />
      <ProcessSection />
      <WhyUsSection />
      <FAQSection />
      <BlogSection />
    </>
  );
}
