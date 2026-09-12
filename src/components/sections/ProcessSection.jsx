import { useInView } from "@/hooks/useInView";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Section } from "@/components/primitives/Section";

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

export function ProcessSection() {
  const headerRef = useInView({ margin: "-100px" });
  const stepsRef = useInView({ margin: "-100px" });

  return (
    <Section className="cv-auto bg-white">
      <Container>
        {/* Header — ref on parent, fade-up on children */}
        <div ref={headerRef} className="flex flex-col lg:flex-row gap-6 lg:gap-16 mb-8 md:mb-12 items-start justify-between">
          <div className="fade-up lg:w-1/2">
            <Text className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">
              // How we work
            </Text>
            <Heading as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[0.015em] text-neutral-900 leading-[1.1]">
              A clear design process
            </Heading>
          </div>
          <div className="fade-up delay-2 lg:w-1/2 lg:self-end">
            <Text className="text-gray-600 text-base sm:text-lg">
              From booking to final check, we make professional design easy, transparent, and stress-free for your home.
            </Text>
          </div>
        </div>

        {/* Steps — ref on parent, fade-up + delay-N on each step */}
        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={step.num} className={`fade-up flex flex-col border-t border-gray-200 pt-8 delay-${i + 1}`}>
              <Text className="font-semibold text-gray-400 mb-6 uppercase tracking-wider">{step.num}</Text>
              <Heading as="h4" className="mb-4">{step.title}</Heading>
              <Text className="text-gray-600">{step.desc}</Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
