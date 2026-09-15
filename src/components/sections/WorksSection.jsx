import { useInView } from "@/hooks/useInView";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Section } from "@/components/primitives/Section";
import { Button } from "@/components/primitives/Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { getFeaturedProjectsArray } from "@/data/projectsData";

const works = getFeaturedProjectsArray();

export function WorksSection() {
  const headerRef = useInView({ margin: "-100px" });
  const gridRef = useInView({ margin: "-50px" });

  return (
    <Section className="bg-white">
      <Container>
        {/* Header row — ref on parent, fade-up on children */}
        <div ref={headerRef} className="flex flex-col md:flex-row gap-6 justify-between items-end mb-8 md:mb-12">
          <div className="fade-up max-w-2xl">
            <Text className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">
              // Featured work
            </Text>
            <Heading as="h2" className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[0.015em] text-neutral-900 leading-[1.1]">
              Recent works
            </Heading>
            <Text className="text-gray-600 text-base sm:text-lg">
              A curated selection of residential and commercial projects showcasing our approach to space design.
            </Text>
          </div>
          <div className="fade-up delay-2">
            <Button asChild variant="secondary" className="rounded-full px-6 py-2.5 border border-neutral-300 bg-white text-neutral-900 font-semibold hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all shadow-xs">
              <Link to="/projects">All works</Link>
            </Button>
          </div>
        </div>

        {/* Standard Grid — ref on parent, fade-up + delay-N on children */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {works.map((work, i) => (
            <div key={work.title} className={`fade-up delay-${i + 1} group block`}>
              <Link to={work.link} className="cursor-pointer flex flex-col h-full group-hover:-translate-y-2 transition-all duration-500 ease-out">
                <div className="relative overflow-hidden aspect-[4/3] mb-6 rounded-lg bg-gray-100">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex justify-between items-center">

                <div>
                  <Heading as="h5" className="mb-2 group-hover:text-gray-600 transition-colors">{work.title}</Heading>
                  <Text className="text-gray-600 text-sm">{work.tags.join(" • ")}</Text>
                </div>
                <ArrowRight className="group-hover:-rotate-45 transition-all text-gray-400 group-hover:text-gray-900"/>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
