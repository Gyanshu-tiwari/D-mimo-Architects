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
          src="https://images.unsplash.com/photo-1664711942326-2c3351e215e6?q=80&w=2400&auto=format&fit=crop"
          alt="Refined interior space"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
          fetchPriority="high"
          decoding="async"
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
            <Heading as="h1" className="font-medium text-4xl md:text-4xl lg:text-5xl tracking-normal text-white mb-45">
              Built to Flow<br/> Designed to Last
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-light max-w-82 mb-10 tracking-wide text-white/90">
              Where fluid design - meets lasting impact, crafted for those who value beauty, function, and flow in every detail.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Button asChild size="lg" className="bg-white rounded-lg mr-4 text-black hover:bg-gray-100">
              <Link to="/contact">Get started</Link>
            </Button>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                <img
                  className="inline-block h-9 w-9 shrink-0 aspect-square rounded-full ring-2 ring-white/20 object-cover"
                  src="https://images.unsplash.com/photo-1649532355244-e011eebe7a81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZvcm1hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Client 1"
                />
                <img
                  className="inline-block h-9 w-9 shrink-0 aspect-square rounded-full ring-2 ring-white/20 object-cover"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120"
                  alt="Client 2"
                />
                <img
                  className="inline-block h-9 w-9 shrink-0 aspect-square rounded-full ring-2 ring-white/20 object-cover"
                  src="https://images.unsplash.com/photo-1622020920816-cd528763211a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvcm1hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Client 3"
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
