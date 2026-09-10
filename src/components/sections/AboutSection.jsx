import { useInView } from "@/hooks/useInView";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Section } from "@/components/primitives/Section";
import { Button } from "@/components/primitives/Button";
import { Link } from "react-router-dom";

export function AboutSection() {
  const stats = [
    { value: "30+", label: "Completed projects" },
    { value: "99%", label: "Client satisfaction" },
    { value: "5+", label: "Years of experiences" },
  ];

  const { ref: imgRef, isInView: imgInView } = useInView({ margin: "-100px" });
  const { ref: textRef, isInView: textInView } = useInView({ margin: "-100px" });
  const { ref: statsRef, isInView: statsInView } = useInView({ margin: "-50px" });

  return (
    <Section className="bg-white">
      <Container>
        {/* Top: 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Image */}
          <div
            ref={imgRef}
            className={`fade-up order-2 lg:order-1 relative overflow-hidden rounded-2xl shadow-sm aspect-4/5 bg-gray-100 max-h-145 w-full${imgInView ? " is-visible" : ""}`}
          >
            <img
              src="https://images.unsplash.com/photo-1691036562015-56ebf6648f8c?w=1000&auto=format&fit=crop&q=80"
              alt="Refined living room interior with terracotta armchair"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
              decoding="async"
              width="1000"
              height="1250"
            />
          </div>

          {/* Right Column: About Text */}
          <div
            ref={textRef}
            className={`fade-up delay-15 order-1 lg:order-2 flex flex-col justify-center${textInView ? " is-visible" : ""}`}
          >
            <Text className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">
              // About us
            </Text>
            <Heading as="h3" className="tracking-normal font-medium text-xl sm:text-3xl lg:text-4xl leading-tight mb-4 text-neutral-900">
              Shaping spaces with purpose, where design meets living
            </Heading>
            <div className="w-12 h-0.5 bg-black/20 my-4" />
            <p className="font-sans text-gray-700 mt-3 mb-6 md:mb-8 text-base sm:text-lg font-normal leading-relaxed">
              We design residential and commercial interiors that balance aesthetics, function, and longevity—creating spaces that feel intentional, refined, and deeply connected to how people live and work.
            </p>
            <div>
              <Button asChild variant="outline" className="rounded-full px-6 py-2.5 border border-neutral-900 text-neutral-900 font-semibold hover:bg-neutral-900 hover:text-white transition-all shadow-xs">
                <Link to="/about">More About Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom: Stats Row */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-16 pt-8 md:pt-12 mt-8 md:mt-12 border-t border-gray-100"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`fade-up flex flex-col${statsInView ? ` is-visible delay-${i + 1}` : ""}`}
            >
              <Heading as="h3" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.015em] mb-1 sm:mb-2 text-neutral-900">
                {stat.value}
              </Heading>
              <Text size="sm" className="text-gray-600 font-medium uppercase tracking-wider text-[11px] sm:text-xs md:text-sm">
                {stat.label}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
