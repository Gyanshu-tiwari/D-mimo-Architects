import { useState, useRef, useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

import { getAllProjectsArray } from "@/data/projectsData";

const projectsData = getAllProjectsArray();

// Dynamically generate all unique categories from the tags arrays, then add "All" at the beginning
const allTags = Array.from(new Set(projectsData.flatMap(p => p.tags))).sort();
const categories = ["All", ...allTags];

import { useLocation } from "react-router-dom";

export default function Projects() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "All";
  const [activeFilter, setActiveFilter] = useState(initialCategory);
  
  useEffect(() => {
    const category = queryParams.get("category");
    if (category && categories.includes(category)) {
      setActiveFilter(category);
    }
  }, [location.search]);
  
  const headerRef = useInView({ margin: "-100px" });
  
  // Use a standard ref for the grid, and manually observe it in a useEffect 
  // that depends on activeFilter. This ensures the observer runs again when the DOM changes.
  const gridRef = useRef(null);
  
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.querySelectorAll('.fade-up').forEach(child => child.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.querySelectorAll('.fade-up').forEach(child => child.classList.add('is-visible'));
        observer.disconnect();
      }
    }, { rootMargin: "-50px" });

    observer.observe(el);
    return () => observer.disconnect();
  }, [activeFilter]);

  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.tags.includes(activeFilter));

  return (
    <div className="pt-24">
      <SEO 
        title="Featured Works & Projects" 
        description="Explore our curated portfolio of residential and commercial design projects including lofts, renovations, and modern spaces."
        keywords="interior design projects, portfolio, loft design, home renovation projects"
      />
      <Section className="bg-white">
        <Container>
          <div ref={headerRef} className="fade-up max-w-3xl mb-12">
            <Heading as="h1" className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[0.015em] text-neutral-900 leading-[1.1]">
              Projects
            </Heading>
            <Text className="text-gray-600 text-lg sm:text-xl leading-relaxed">
              Explore our curated portfolio of architectural planning and interior design projects, showcasing our approach to creating timeless and functional spaces.
            </Text>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-[#111827] text-white border border-[#111827] shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-900 hover:text-gray-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Standard Grid - The key prop ensures the grid remounts when filter changes, re-triggering the scroll animations */}
          <div key={activeFilter} ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {filteredProjects.map((work, i) => (
              <div key={work.title} className={`fade-up delay-${(i % 4) + 1} group block`}>
                <Link to={work.link} className="cursor-pointer flex flex-col h-full group-hover:-translate-y-2 transition-all duration-500 ease-out">
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-6 bg-gray-100">
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
                      <Text className="text-gray-600">{work.desc}</Text>
                    </div>
                    <ArrowRight className="group-hover:-rotate-45 transition-all text-gray-400 group-hover:text-gray-900"/>
                  </div>
                </Link>
              </div>
            ))}

            
            {filteredProjects.length === 0 && (
              <div className="col-span-full py-12 text-center text-gray-500">
                No projects found in this category.
              </div>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
}
