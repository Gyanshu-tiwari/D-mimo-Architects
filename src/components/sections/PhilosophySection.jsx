import { useRef } from "react";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Section } from "@/components/primitives/Section";
import { motion, useScroll, useTransform } from "motion/react";
import { Gem, Maximize, Infinity as InfinityIcon } from "lucide-react";

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative inline-block mr-[0.25em] mt-[0.1em]">
      <span className="absolute opacity-20 text-white/40">{children}</span>
      <motion.span style={{ opacity }} className="text-white relative z-10">
        {children}
      </motion.span>
    </span>
  );
};

export function PhilosophySection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "center 40%"]
  });

  const headingText = "Creating considered spaces through clarity, restraint, and intention";
  const words = headingText.split(" ");

  const philosophies = [
    {
      icon: Gem,
      title: "Material honesty",
      desc: "We work with natural textures, refined finishes, and materials chosen to age well gracefully over time and use."
    },
    {
      icon: Maximize,
      title: "Spatial clarity",
      desc: "Every layout is designed for balance, flow, and a sense of calm in everyday living environments and routines."
    },
    {
      icon: InfinityIcon,
      title: "Lasting design",
      desc: "Our work prioritizes timeless decisions over trends, ensuring spaces remain relevant, functional, and thoughtful."
    }
  ];

  return (
    <Section ref={containerRef} className="bg-base-dark text-white">
      <Container>
        {/* Top Header - Scroll Reveal */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-12 pt-4">
          <Text className="text-sm font-semibold tracking-widest uppercase mb-4 text-white/50">
            // Design philosophy
          </Text>
          <Heading as="h2" className="text-white lg:max-w-5xl leading-[1.1]! text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </Heading>
        </div>

        {/* Media Container with Diagonal Cuts */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full aspect-video md:aspect-21/9 bg-white/5 mb-8 md:mb-12 overflow-hidden rounded-xl"
          style={{
            clipPath: "polygon(60px 0, 100% 0, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0 100%, 0 60px)"
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000" 
            alt="Interior design philosophy" 
            className="w-full h-full object-cover opacity-80"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* 3-Column Philosophy Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {philosophies.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="flex flex-col border-t border-white/10 pt-8"
            >
              <div className="mb-6 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-white/90" strokeWidth={1.5} />
              </div>
              <Heading as="h4" className="text-white mb-4">{item.title}</Heading>
              <Text className="text-white/60 leading-relaxed">{item.desc}</Text>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
