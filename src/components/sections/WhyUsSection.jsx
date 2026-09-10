import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Section } from "@/components/primitives/Section";
import { motion } from "motion/react";
import { ShieldCheck, Target, Clock, Medal } from "lucide-react";

export function WhyUsSection() {
  const principles = [
    { 
      icon: Medal, 
      title: "Selected designers", 
      desc: "Every project is led by experienced interior designers focused on quality and detail." 
    },
    { 
      icon: Target, 
      title: "Thoughtful process", 
      desc: "Clear workflows & structured milestones ensure the best possible outcomes." 
    },
    { 
      icon: ShieldCheck, 
      title: "Spaces that last", 
      desc: "We design interiors that age well, adapting seamlessly to real everyday life." 
    },
    { 
      icon: Clock, 
      title: "Reliable delivery", 
      desc: "Timelines, budgets, and expectations are clearly defined from the very beginning." 
    }
  ];

  return (
    <Section className="bg-white py-16 md:py-24 border-t border-gray-100">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-stretch">
          
          {/* Left Column - Image & Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-5/12 flex flex-col justify-between"
          >
            <div>
              <Text className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 sm:mb-6 text-gray-500">
                // Why choose us
              </Text>
              <Heading as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[0.015em] mb-8 lg:mb-10 text-neutral-900 leading-[1.1]">
                Design you can trust, every step
              </Heading>
            </div>

            <div className="relative w-full aspect-4/3 sm:aspect-16/10 lg:aspect-auto lg:flex-1 lg:min-h-95 bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-xs border border-neutral-200/80">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" 
                alt="Interior design detail" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                loading="lazy"
                decoding="async"
                width="1200"
                height="800"
              />
            </div>
          </motion.div>

          {/* Right Column - 2x2 Grid with Scroll Reveal */}
          <div className="lg:w-7/12 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-10 lg:gap-x-12 gap-y-10 sm:gap-y-12">
              {principles.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                  className="flex flex-col"
                >
                  <div className="mb-4 sm:mb-5 w-11 h-11 rounded-full border border-gray-200/90 bg-gray-50/50 flex items-center justify-center">
                    <point.icon className="w-5 h-5 text-neutral-800" strokeWidth={1.5} />
                  </div>
                  <Heading as="h5" className="mb-2 text-lg sm:text-xl font-medium text-neutral-900">{point.title}</Heading>
                  <Text className="text-gray-500 text-sm sm:text-base leading-relaxed">{point.desc}</Text>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
