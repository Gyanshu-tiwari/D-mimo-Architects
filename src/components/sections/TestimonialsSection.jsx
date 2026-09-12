import { useInView } from "@/hooks/useInView";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Section } from "@/components/primitives/Section";
import { motion } from "motion/react";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const baseTestimonials = [
    {
      text: "D Mimo Architects helped us present our work with clarity and confidence. The spacing, typography, and layout choices feel thoughtful, professional, and built to last.",
      author: "Olivia Hart",
      title: "Homeowner, Miami",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
    },
    {
      text: "The design feels calm, polished, and purposeful. D Mimo Architects made it easy to showcase services and projects without visual clutter or unnecessary complexity.",
      author: "Rolanda Patel",
      title: "Property Owner, Chicago",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150"
    },
    {
      text: "From the first section to the last, everything feels cohesive and intentional. D Mimo Architects gave our brand a stronger, more credible online presence.",
      author: "Emile Foster",
      title: "Business Owner, Houston",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    {
      text: "Their attention to natural lighting, spatial flow, and material honesty transformed our residential loft into an inspiring, peaceful sanctuary.",
      author: "Marcus Chen",
      title: "Architect & Collector, Seattle",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    },
    {
      text: "Working with D Mimo Architects was seamless. They balanced our functional requirements with an architectural vision that exceeded every expectation.",
      author: "Sophia Laurent",
      title: "Design Director, New York",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
    }
  ];

  // Duplicate for seamless infinite marquee loop
  const testimonials = [...baseTestimonials, ...baseTestimonials];

  const headerRef = useInView({ margin: '-80px' });

  return (
    <Section className="cv-auto bg-base-dark text-white overflow-hidden relative py-16 md:py-24">
      <Container>
        <div ref={headerRef} className="flex flex-col items-center text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="fade-up max-w-2xl">
            <Text className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 sm:mb-6 text-white/50">
              // Testimonials
            </Text>
            <Heading as="h2" className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-[0.015em] mb-4 sm:mb-6">
              Trusted by 30+ clients
            </Heading>
            <Text className="text-white/85 font-normal text-sm sm:text-base max-w-xl mx-auto">
              Thoughtful interiors delivered through clear communication, refined execution, and long-term design value.
            </Text>
          </div>
        </div>
      </Container>

      {/* Marquee Wrapper with Blur/Fade Gradients */}
      <div className="relative w-full overflow-hidden">
        {/* Left Blur & Fade Edge Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 md:w-36 lg:w-44 z-10 bg-linear-to-r from-base-dark via-base-dark/80 to-transparent backdrop-blur-[2px]"
        />

        {/* Right Blur & Fade Edge Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 md:w-36 lg:w-44 z-10 bg-linear-to-l from-base-dark via-base-dark/80 to-transparent backdrop-blur-[2px]"
        />

        {/* Scrolling Track Moving Right to Left */}
        <div
          className="w-full overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          }}
        >
          <div className="animate-marquee-slow flex items-stretch gap-4 sm:gap-6 md:gap-8 whitespace-normal py-4 pl-4">
            {testimonials.map((item, i) => (
              <div
                key={`${item.author}-${i}`}
                className="w-70 sm:w-85 md:w-95 shrink-0 flex flex-col justify-between bg-[#FAFAFA] rounded-2xl p-6 sm:p-8 md:p-9 shadow-sm transition-transform duration-300 hover:scale-[1.01]"
              >
                <div>
                  <div className="flex gap-1.5 mb-5">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="w-4 h-4 text-[#FACC15] fill-[#FACC15]" />
                    ))}
                  </div>
                  
                  <p className="text-sm sm:text-[15px] md:text-base leading-relaxed font-normal text-[#111827] mb-6 font-sans">
                    "{item.text}"
                  </p>
                </div>
                
                <div>
                  <div className="w-12 border-t border-gray-200 mb-5" />
                  
                  <div className="flex items-center gap-3.5">
                    <img 
                      src={item.image} 
                      alt={item.author} 
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover shrink-0"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#111827] text-sm sm:text-[15px]">{item.author}</span>
                      <span className="text-gray-500 text-xs sm:text-sm mt-0.5">{item.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
