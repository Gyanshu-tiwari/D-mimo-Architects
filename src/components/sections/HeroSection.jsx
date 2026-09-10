import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Button } from "@/components/primitives/Button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1664711942326-2c3351e215e6?q=70&w=1600&auto=format&fit=crop"
          alt="Refined interior space"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="1600"
          height="900"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <Container className="relative z-10 w-full">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <Heading as="h1" className="font-medium text-4xl sm:text-5xl md:text-6xl tracking-normal text-white mb-6 md:mb-8 leading-[1.1]">
              Built to Flow<br/> Designed to Last
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-light max-w-lg mb-8 tracking-wide text-white/90 text-base sm:text-lg leading-relaxed">
              Where fluid design meets lasting impact—crafted for those who value beauty, function, and spatial flow in every detail.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Button asChild size="lg" className="rounded-full bg-white text-neutral-900 border border-white/90 hover:bg-neutral-100 shadow-xl hover:shadow-2xl font-semibold transition-all hover:-translate-y-0.5">
              <Link to="/contact">Get started</Link>
            </Button>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                <img
                  className="inline-block h-9 w-9 shrink-0 aspect-square rounded-full ring-2 ring-white/20 object-cover"
                  src="https://images.unsplash.com/photo-1649532355244-e011eebe7a81?w=120&auto=format&fit=crop&q=60"
                  alt="Client 1"
                  loading="lazy"
                />
                <img
                  className="inline-block h-9 w-9 shrink-0 aspect-square rounded-full ring-2 ring-white/20 object-cover"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=60"
                  alt="Client 2"
                  loading="lazy"
                />
                <img
                  className="inline-block h-9 w-9 shrink-0 aspect-square rounded-full ring-2 ring-white/20 object-cover"
                  src="https://images.unsplash.com/photo-1622020920816-cd528763211a?w=120&auto=format&fit=crop&q=60"
                  alt="Client 3"
                  loading="lazy"
                />
              </div>
              <Text size="xs" className="text-white/90 font-light leading-snug">
                Trusted by 30+<br />happy clients
              </Text>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
