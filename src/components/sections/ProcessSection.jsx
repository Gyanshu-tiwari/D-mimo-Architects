import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Section } from "@/components/primitives/Section";
import { motion } from "motion/react";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discover & define",
      desc: "We begin by understanding your space, goals, and lifestyle. Through consultations and site review, we define scope, priorities, and a clear design direction."
    },
    {
      num: "02",
      title: "Design & refine",
      desc: "We develop concepts, layouts, and material selections tailored to your vision. Designs are refined collaboratively to ensure clarity & balance."
    },
    {
      num: "03",
      title: "Deliver & transform",
      desc: "Our team oversees execution with trusted partners, ensuring quality, timelines, and details are handled seamlessly—bringing the design to life as intended."
    }
  ];

  return (
    <Section className="cv-auto bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 mb-8 md:mb-12 items-start justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <Text className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">
              // How we work
            </Text>
            <Heading as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[0.015em] text-neutral-900 leading-[1.1]">
              A clear design process
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 lg:self-end"
          >
             <Text className="text-gray-600 text-base sm:text-lg">
              From booking to final check, we make professional design easy, transparent, and stress-free for your home.
            </Text>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col border-t border-gray-200 pt-8"
            >
              <Text className="font-semibold text-gray-400 mb-6 uppercase tracking-wider">{step.num}</Text>
              <Heading as="h4" className="mb-4">{step.title}</Heading>
              <Text className="text-gray-600">{step.desc}</Text>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
