import { SEO } from "@/components/SEO";
import { BlogSection } from "@/components/sections/BlogSection";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";

export default function Blog() {
  return (
    <div className="pt-24 bg-base-light">
      <SEO 
        title="Blog & Insights" 
        description="Read articles from D Mimo Architects on interior design tips, choosing materials, renovation strategy, and spatial planning."
        keywords="interior design blog, design tips, renovation strategy, material choices"
      />
      <Section className="pb-0">
        <Container>
          <Heading as="h1" className="mb-8">Blog & Insights</Heading>
        </Container>
      </Section>
      <BlogSection />
    </div>
  );
}
