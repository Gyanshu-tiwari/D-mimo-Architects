import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Section } from "@/components/primitives/Section";
import { Button } from "@/components/primitives/Button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function WorksSection() {
  const works = [
    {
      title: "Serene Loft",
      desc: "Open-plan loft styled for clarity & spatial breathing.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
      link: "/projects/serene-loft"
    },
    {
      title: "Atelier Living",
      desc: "Refined interior blending functionality with elegance.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
      link: "/projects/atelier-living"
    },
    {
      title: "Luma Renovation",
      desc: "Full-home renovation enhancing layout & harmony.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
      link: "/projects/luma-renovation"
    },
    {
      title: "Nordic Living",
      desc: "Soft interiors with clean lines & natural materials.",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200",
      link: "/projects/nordic-living"
    }
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="flex flex-col md:flex-row gap-6 justify-between items-end mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <Text className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">
              // Featured work
            </Text>
            <Heading as="h2" className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[0.015em] text-neutral-900 leading-[1.1]">
              Recent works
            </Heading>
            <Text className="text-gray-600 text-base sm:text-lg">
              A curated selection of residential and commercial projects showcasing our approach to space design.
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button asChild variant="secondary" className="rounded-full px-6 py-2.5 border border-neutral-300 bg-white text-neutral-900 font-semibold hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all shadow-xs">
              <Link to="/projects">All works</Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to={work.link} className="group cursor-pointer flex flex-col h-full">
                <div className="relative overflow-hidden aspect-4/3 mb-6">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="900"
                  />
                </div>
                <Heading as="h5" className="mb-2 group-hover:text-gray-600 transition-colors">{work.title}</Heading>
                <Text className="text-gray-600">{work.desc}</Text>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
