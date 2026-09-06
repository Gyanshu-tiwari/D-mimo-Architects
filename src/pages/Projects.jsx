import { SEO } from "@/components/SEO";
import { WorksSection } from "@/components/sections/WorksSection";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";

export default function Projects() {
  return (
    <div className="pt-24">
      <SEO 
        title="Featured Works & Projects" 
        description="Explore our curated portfolio of residential and commercial design projects including lofts, renovations, and modern spaces."
        keywords="interior design projects, portfolio, loft design, home renovation projects"
      />
      <Section className="bg-white pb-0">
        <Container>
          <Heading as="h1" className="mb-8">Projects</Heading>
        </Container>
      </Section>
      <WorksSection />
    </div>
  );
}
