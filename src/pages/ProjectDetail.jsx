import { useParams, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { projectsData } from "@/data/projectsData";

/**
 * ProjectDetailWrapper — sets key={slug} so React fully unmounts the
 * previous page and mounts a fresh one on every navigation. This is the
 * correct React idiom for resetting all component state (refs, observers,
 * scroll position) without any manual DOM manipulation or resetKey hacks.
 */
export default function ProjectDetailWrapper() {
  const { slug } = useParams();
  return <ProjectDetail key={slug} slug={slug} />;
}

function ProjectDetail({ slug }) {
  const project = projectsData[slug];

  const metaRef = useInView({ margin: "-10%" });
  const galleryRef = useInView({ margin: "-10%" });

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
      
      {/* Hero */}
      <div className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-base-dark">
        <div className="absolute inset-0 w-full h-full top-0">
          <img         
            src={project.heroImage} 
            alt={project.title} 
            className="w-full h-full object-cover object-top"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <Container className="relative h-full flex flex-col justify-end pb-16 md:pb-24">
          <div className="fade-up is-visible">
            <Heading as="h1" className="text-white mb-4 drop-shadow-md">
              {project.title}
            </Heading>
            <Text className="text-white/80 max-w-xl text-lg md:text-xl drop-shadow-md">
              {project.desc}
            </Text>
          </div>
        </Container>
      </div>

      {/* Project Metadata & Challenge */}
      <Section className="py-24" ref={metaRef}>
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Col: Grid Info */}
            <div className="fade-up lg:w-1/3">
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
            </div>

            {/* Right Col: Challenge Description */}
            <div className="fade-up delay-1 lg:w-2/3">
              <Text className="text-[20px] md:text-[24px] leading-relaxed text-black font-medium">
                {project.challenge}
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* Gallery Grid */}
      <Section className={project.next ? "pt-0 pb-32" : "pt-0 pb-16 md:pb-24"} ref={galleryRef}>
        <Container>
          <div className="columns-1 md:columns-2 gap-8 md:gap-10 lg:gap-12 space-y-8 md:space-y-10 lg:space-y-12">
            {project.gallery.map((imgSrc, i) => {
              // Eager-load the top image in BOTH columns for fast perceived LCP
              const mid = Math.ceil(project.gallery.length / 2);
              const isTopOfColumn = i === 0 || i === mid;
              return (
                <div
                  key={i}
                  className={`fade-up delay-${(i % 3) + 1} group block break-inside-avoid`}
                >
                  <div className="overflow-hidden rounded-lg shadow-sm group-hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer">
                    <img 
                      src={imgSrc} 
                      alt={`${project.title} — Image ${i + 1}`}
                      className="w-full h-auto"
                      loading={isTopOfColumn ? "eager" : "lazy"}
                      fetchPriority={isTopOfColumn ? "high" : "auto"}
                      decoding="async"
                    />
                  </div>
                </div>
              );
            })}
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
