import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Section } from "@/components/primitives/Section";
import { Button } from "@/components/primitives/Button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function AboutSection() {
  const stats = [
    { value: "30+", label: "Completed projects" },
    { value: "99%", label: "Client satisfaction" },
    { value: "5+", label: "Years of experiences" },
  ];

  return (
    <Section className="bg-white">
      <Container>
        {/* Top: 2-Column Grid with Image on Left and Text on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column on Desktop / Below Text on Mobile: Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 relative overflow-hidden rounded-2xl shadow-sm aspect-4/5 bg-gray-100 max-h-145 w-full"
          >
            <img
              src="https://images.unsplash.com/photo-1691036562015-56ebf6648f8c?w=1000&auto=format&fit=crop&q=80"
              alt="Refined living room interior with terracotta armchair"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </motion.div>

          {/* Right Column on Desktop / Above Image on Mobile: About Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            <Text className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">
              // About us
            </Text>
            <Heading as="h3" className="tracking-normal font-medium text-xl sm:text-3xl lg:text-4xl leading-tight mb-4 text-neutral-900">
              Shaping spaces with purpose, where design meets living
            </Heading>
            <div className="w-12 h-0.5 bg-black/20 my-4" />
            <p className="font-sans text-gray-700 mt-3 mb-30 text-base sm:text-lg font-normal leading-relaxed">
              We design residential and commercial interiors that balance aesthetics, function, and longevity—creating spaces that feel intentional, refined, and deeply connected to how people live and work.
            </p>
            <div>
              <Button asChild variant="secondary" className="rounded-lg border border-black/80 hover:bg-black hover:text-white transition-colors">
                <Link to="/about"><span className="font-bold">More About Us</span></Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Stats Row Horizontally Below About Section */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-16 pt-12 md:pt-16 mt-12 md:mt-20 border-t border-gray-100">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <Heading as="h3" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.015em] mb-1 sm:mb-2 text-neutral-900">
                {stat.value}
              </Heading>
              <Text size="sm" className="text-gray-600 font-medium uppercase tracking-wider text-[11px] sm:text-xs md:text-sm">
                {stat.label}
              </Text>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
