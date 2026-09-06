import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export function FacesSection() {
  return (
    <Section className="bg-white py-14 md:py-20 border-t border-gray-100">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 xl:gap-20 items-start justify-between">
          
          {/* Left Column */}
          <div className="flex-1 w-full max-w-2xl flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mb-10 md:mb-14"
            >
              <Heading as="h2" className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-[0.015em] font-medium">
                <span className="text-[#111827]">The face </span>
                <span className="text-gray-400">behind<br />the projects.</span>
              </Heading>
            </motion.div>

            {/* Collaboration & Let's Connect Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative pt-6 max-w-xl"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gray-200"></div>
              <div className="absolute -top-3 left-0 bg-white text-gray-400 w-6 h-6 flex items-center justify-center">
                <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
              </div>
              
              <div className="mt-6 max-w-96 space-y-6">
                <p className="text-gray-500 text-md sm:text-md mb-12 leading-normal font-normal">
                  We believe great work comes - <span className="text-[#111827] font-medium">from collaboration.</span> That's why we work closely with each other to ensure every project meets your goals and exceeds expectations.
                </p>

                <div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#111827] text-white hover:bg-neutral-800 transition-all duration-300 px-3 py-1.5 text-xs sm:text-xs font-medium shadow-xs hover:shadow-md group"
                  >
                    <span>Let's connect</span>
                    <span className="w-1.5 h-1.5 bg-white rounded-full block transition-transform duration-300 group-hover:scale-125"></span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: The Face */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="w-full sm:w-90 lg:w-85 xl:w-92.5 shrink-0 mx-auto lg:mx-0"
          >
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-4/5 bg-gray-100 group shadow-[0_12px_36px_-15px_rgba(0,0,0,0.12)] border border-neutral-200/80">
              <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md w-6 h-6 rounded-full z-10 flex items-center justify-center">
                <Plus className="w-3 h-3 text-white" strokeWidth={2.5} />
              </div>
              <div className="absolute top-5 right-5 z-10 text-right">
                <div className="text-white font-bold text-xs sm:text-xs drop-shadow-xs">Founder & <br/> Principal Architect</div>
                <div className="text-white/80 text-[11px]">at D Mimo®</div>
              </div>
              
              <img
                src="/images/main.avif"
                alt="Founder & Principal Architect - Ar. Hritik Mishra"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-6 left-6 z-10">
                <Heading as="h6" className="text-white font-normal text-md sm:text-lg tracking-[0.015em]">Ar. Hritik Mishra</Heading>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
