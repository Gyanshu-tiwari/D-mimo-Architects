import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export function FacesSection() {
  const leftRef = useInView({ margin: "-80px" });
  const descRef = useInView({ margin: "-80px" });
  const photoRef = useInView({ margin: "-80px" });

  return (
    <Section className="bg-white py-12 md:py-16 border-t border-gray-100">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-start justify-between">

          {/* Left Column */}
          <div className="flex-1 w-full max-w-2xl flex flex-col justify-between">
            <div ref={leftRef} className="fade-up mb-6 md:mb-8">
              <Heading as="h2" className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.1] tracking-[0.015em] font-medium">
                <span className="text-[#111827]">The face </span>
                <span className="text-gray-400">behind<br />the projects.</span>
              </Heading>
            </div>

            <div ref={descRef} className="fade-up delay-15 relative pt-6 max-w-xl">
              <div className="absolute top-0 left-0 w-full h-px bg-gray-200"></div>
              <div className="absolute -top-3 left-0 bg-white text-gray-400 w-6 h-6 flex items-center justify-center">
                <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
              </div>
              <div className="mt-4 max-w-xl space-y-6">
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
                  We believe great work comes from <span className="text-[#111827] font-semibold">close collaboration</span>. That's why we work closely with you to ensure every project meets your goals and exceeds expectations.
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 rounded-full bg-[#111827] text-white border border-neutral-800 hover:bg-black transition-all duration-300 px-6 py-3 text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Let's connect</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse block"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Photo — fade-scale */}
          <div
            ref={photoRef}
            className="fade-scale delay-25 w-full max-w-80 sm:max-w-95 lg:max-w-105 xl:max-w-115 shrink-0 mx-auto lg:mx-0"
          >
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-4/5 bg-gray-100 group shadow-[0_16px_40px_-15px_rgba(0,0,0,0.14)] border border-neutral-200/90">
              <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md w-7 h-7 rounded-full z-10 flex items-center justify-center border border-white/10">
                <Plus className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </div>
              <div className="absolute top-5 right-5 z-10 text-right bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                <div className="text-white font-bold text-xs drop-shadow-xs">Founder & Principal Architect</div>
                <div className="text-white/80 text-[11px]">at D Mimo®</div>
              </div>
              <img
                src="/images/main.avif"
                alt="Founder & Principal Architect - Ar. Hritik Mishra"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 z-10">
                <Heading as="h4" className="text-white font-medium text-lg sm:text-xl tracking-[0.015em] drop-shadow-sm">Ar. Hritik Mishra</Heading>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
