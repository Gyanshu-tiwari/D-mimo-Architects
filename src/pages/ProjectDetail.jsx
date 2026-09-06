import { useParams, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";

// Mock Project Database
const projectsData = {
  "serene-loft": {
    title: "Serene Loft",
    desc: "Open-plan loft styled for clarity & spatial breathing.",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2880",
    client: "Private Client",
    scope: "Full Interior Architecture",
    year: "2025",
    location: "New York City",
    challenge: "The primary challenge was to transform an industrial, echo-prone shell into an intimate, serene living space without losing the architectural heritage of the original loft. We focused on introducing natural light deep into the floorplan through glass partitions and utilizing acoustically absorbing natural materials.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
    ],
    next: "/projects/atelier-living",
    nextTitle: "Atelier Living"
  },
  "atelier-living": {
    title: "Atelier Living",
    desc: "Refined interior blending functionality with elegance.",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2880",
    client: "Atelier Group",
    scope: "Residential Design",
    year: "2024",
    location: "London, UK",
    challenge: "We set out to create a cohesive design language that seamlessly integrates modern living requirements with a classic, timeless aesthetic. Custom joinery and bespoke lighting fixtures were implemented to enhance the sense of bespoke elegance throughout the residence.",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200"
    ],
    next: "/projects/luma-renovation",
    nextTitle: "Luma Renovation"
  },
  "luma-renovation": {
    title: "Luma Renovation",
    desc: "Full-home renovation enhancing layout & harmony.",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2880",
    client: "Luma Family",
    scope: "Complete Renovation",
    year: "2023",
    location: "San Francisco, CA",
    challenge: "The Luma project required a complete gut renovation to open up a cramped, segmented layout. By removing non-load-bearing walls and establishing a central, flowing living axis, we maximized natural light and fostered a deeper connection between the interior and the surrounding landscape.",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
    ],
    next: "/projects/nordic-living",
    nextTitle: "Nordic Living"
  },
  "nordic-living": {
    title: "Nordic Living",
    desc: "Soft interiors with clean lines & natural materials.",
    heroImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2880",
    client: "Nordic Collective",
    scope: "Interior Styling",
    year: "2024",
    location: "Copenhagen, DK",
    challenge: "Drawing inspiration from traditional Scandinavian principles, this project emphasized minimalism, warmth, and high-quality craftsmanship. The challenge was maintaining a minimalist aesthetic without allowing the space to feel stark or uninviting, achieved through rich textures and muted, earthy tones.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
    ],
    next: "/projects/serene-loft",
    nextTitle: "Serene Loft"
  }
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData[slug];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // If project is not found, fallback to 404 styling
  if (!project) {
    return (
      <div className="pt-32 pb-20 flex flex-col items-center min-h-[60vh] justify-center text-center">
        <Heading as="h1" className="mb-4">Project Not Found</Heading>
        <Text className="text-gray-500 mb-8">The project you are looking for does not exist.</Text>
        <Link to="/projects" className="text-black font-medium underline underline-offset-4">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <SEO 
        title={`${project.title} - Case Study`} 
        description={project.desc}
      />
      
      {/* Hero Parallax */}
      <div ref={heroRef} className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-base-dark mt-20">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] top-[-10%]">
          <img 
            src={project.heroImage} 
            alt={project.title} 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </motion.div>
        
        <Container className="relative h-full flex flex-col justify-end pb-16 md:pb-24">
          <motion.div style={{ opacity }}>
            <Heading as="h1" className="text-white mb-4 drop-shadow-md">
              {project.title}
            </Heading>
            <Text className="text-white/80 max-w-xl text-lg md:text-xl drop-shadow-md">
              {project.desc}
            </Text>
          </motion.div>
        </Container>
      </div>

      {/* Project Metadata & Challenge */}
      <Section className="py-24">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Col: Grid Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/3"
            >
              <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                <div>
                  <Text className="text-sm font-semibold tracking-widest uppercase mb-2 text-gray-500">Client</Text>
                  <Text className="font-medium text-black">{project.client}</Text>
                </div>
                <div>
                  <Text className="text-sm font-semibold tracking-widest uppercase mb-2 text-gray-500">Scope</Text>
                  <Text className="font-medium text-black">{project.scope}</Text>
                </div>
                <div>
                  <Text className="text-sm font-semibold tracking-widest uppercase mb-2 text-gray-500">Year</Text>
                  <Text className="font-medium text-black">{project.year}</Text>
                </div>
                <div>
                  <Text className="text-sm font-semibold tracking-widest uppercase mb-2 text-gray-500">Location</Text>
                  <Text className="font-medium text-black">{project.location}</Text>
                </div>
              </div>
            </motion.div>

            {/* Right Col: Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-2/3"
            >
              <Text className="text-[20px] md:text-[24px] leading-relaxed text-black font-medium">
                "{project.challenge}"
              </Text>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Gallery Grid */}
      <Section className="pt-0 pb-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {project.gallery.map((imgSrc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                className={`overflow-hidden rounded-lg shadow-sm ${i % 3 === 0 ? 'md:col-span-2 aspect-21/9' : 'aspect-square'}`}
              >
                <img 
                  src={imgSrc} 
                  alt={`${project.title} Gallery Image ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Next Project CTA */}
      {project.next && (
        <div className="bg-base-light py-24 border-t border-gray-200">
          <Container>
            <div className="flex flex-col items-center text-center">
              <Text className="text-sm font-semibold tracking-widest uppercase mb-6 text-gray-500">
                Next Project
              </Text>
              <Link 
                to={project.next} 
                className="group inline-flex items-center gap-4 text-4xl md:text-6xl font-semibold hover:text-gray-600 transition-colors"
              >
                {project.nextTitle}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black flex items-center justify-center group-hover:scale-110 group-hover:bg-gray-800 transition-all">
                  <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}
