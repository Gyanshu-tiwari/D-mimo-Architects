import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { ArrowRight, User } from "lucide-react";
import { Text } from "@/components/primitives/Text";
import { Link } from "react-router-dom";

export function FacesSection() {
  const leftRef = useInView({ margin: "-80px" });
  const descRef = useInView({ margin: "-80px" });
  const photoRef = useInView({ margin: "-80px" });

  return (
    <Section className="bg-white py-12 md:py-16 border-t border-gray-100">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-start justify-evenly">

          {/* Left Column */}
          <div className="flex-1 w-full max-w-2xl flex flex-col justify-evenly">
            <div ref={leftRef} className="fade-up mb-3 md:mb-5">
              <Text className="text-sm font-semibold tracking-widest uppercase mb-10 text-gray-500">
                // person behind progress
              </Text>
              <Heading as="h2" className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.1] tracking-[0.015em] font-medium">
                <span className="text-[#111827]">The face </span>
                <span className="text-gray-400">behind<br />the projects.</span>
              </Heading>
            </div>

            <div ref={descRef} className="fade-up delay-15 relative max-w-xl">
              <div className="max-w-xl space-y-6">
                <p className="text-gray-600 text-md md:text-lg pr-20 leading-relaxed font-normal">
                  We believe great work comes from <span className="text-[#111827] font-semibold">close collaboration</span>. That's why we work closely with you to ensure every project meets your goals and exceeds expectations.
                </p>
                <div className="pt-2 mt-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 rounded-full bg-[#111827] text-white border border-neutral-800 hover:bg-black transition-all duration-300 px-6 py-3 text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Let's connect</span>
                    <ArrowRight size="16"/>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Photo — fade-scale */}
          <div
            ref={photoRef}
            className="fade-scale delay-25 w-full max-w-80 sm:max-w-95 lg:max-w-105 xl:max-w-115 shrink-0 mx-auto lg:mx-0 group block"
          >
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl aspect-4/5 bg-gray-100 group-hover:-translate-y-2 duration-500 transition-all ease-out group-hover:border group-hover:shadow-[0_16px_40px_-15px_rgba(0,0,0,0.14)] border border-neutral-200/90">
              <div className="absolute top-2 right-2 z-10 flex items-center gap-3 text-left bg-white/40 backdrop-blur-md px-3 py-3 rounded-xl border border-white/10">
                <User strokeWidth="1" />
                <div>
                  <div className="text-black font-medium text-xs drop-shadow-xs">Founder & <br/> Principal Architect</div>
                </div>
              </div>
              <img
                src="/images/main.webp"
                alt="Founder & Principal Architect - Ar. Hritik Mishra"
                className="w-full h-full object-cover object-center"
                loading="lazy"
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
