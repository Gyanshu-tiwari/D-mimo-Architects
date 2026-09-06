import { SEO } from "@/components/SEO";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FacesSection } from "@/components/sections/FacesSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";

export default function About() {
  return (
    <div className="pt-24">
      <SEO 
        title="About Us" 
        description="Learn more about D Mimo Architects' design philosophy, our experienced designers, and our process for creating functional, beautiful spaces."
        keywords="about D Mimo, interior design team, design philosophy, process"
      />
      <Section className="bg-white pb-0">
        <Container>
          <Heading as="h1" className="mb-8">About Us</Heading>
        </Container>
      </Section>
      <AboutSection />
      <FacesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <AwardsSection />
    </div>
  );
}
