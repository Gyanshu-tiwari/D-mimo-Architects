import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Compass, Mail } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] pt-28 pb-20 bg-[#09090b] text-white flex items-center overflow-hidden">
      <SEO
        title="404 — Page Not Found | D Mimo Architects"
        description="The architectural page or structure you requested could not be located. Explore our portfolio or return to our homepage."
        keywords="404, not found, d mimo architects, architecture portfolio"
      />

      {/* Subtle Architectural Blueprint Grid Background */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-neutral-800/20 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10 py-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-400 text-xs font-mono tracking-widest uppercase mb-6 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>// Error 404 &bull; Coordinate Undefined</span>
          </motion.div>

          {/* Large Architectural 404 Typography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-2 select-none"
          >
            <span className="font-cinzel text-7xl sm:text-9xl md:text-[13rem] font-bold text-transparent bg-clip-text bg-linear-to-b from-neutral-200 via-neutral-400 to-neutral-700 tracking-wider leading-none block">
              404
            </span>
          </motion.div>

          {/* Heading & Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 max-w-xl"
          >
            <Heading as="h1" className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[0.015em] text-white">
              Structure Not Found
            </Heading>

            <Text className="text-neutral-400 text-base sm:text-lg leading-relaxed font-normal">
              The blueprint, file, or coordinate you requested does not exist or may have been relocated during our recent spatial renovations.
            </Text>
          </motion.div>

          {/* Navigation Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8 mb-14"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-neutral-950 font-medium text-sm hover:bg-neutral-200 transition-all duration-200 shadow-md group"
            >
              <Home className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Return to Home</span>
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 text-white border border-neutral-800 font-medium text-sm hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-200 group"
            >
              <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
              <span>Explore Projects</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent text-neutral-400 hover:text-white border border-transparent hover:border-neutral-800 font-medium text-sm transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Studio</span>
            </Link>
          </motion.div>

          {/* Quick Architectural Directory Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-neutral-900 pt-10 text-left"
          >
            <Link
              to="/projects"
              className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/80 transition-all duration-200 group"
            >
              <div className="font-mono text-xs text-neutral-500 mb-2">// 01 Portfolio</div>
              <div className="font-medium text-neutral-200 text-base mb-1 group-hover:text-white transition-colors flex items-center justify-between">
                <span>Selected Works</span>
                <span className="text-neutral-500 group-hover:translate-x-1 group-hover:text-white transition-all text-xs">&rarr;</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                Residential, commercial, and spatial design portfolio.
              </p>
            </Link>

            <Link
              to="/about"
              className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/80 transition-all duration-200 group"
            >
              <div className="font-mono text-xs text-neutral-500 mb-2">// 02 Studio</div>
              <div className="font-medium text-neutral-200 text-base mb-1 group-hover:text-white transition-colors flex items-center justify-between">
                <span>About Practice</span>
                <span className="text-neutral-500 group-hover:translate-x-1 group-hover:text-white transition-all text-xs">&rarr;</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                Our philosophy, team, and architectural vision.
              </p>
            </Link>

            <Link
              to="/contact"
              className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/80 transition-all duration-200 group"
            >
              <div className="font-mono text-xs text-neutral-500 mb-2">// 03 Consultation</div>
              <div className="font-medium text-neutral-200 text-base mb-1 group-hover:text-white transition-colors flex items-center justify-between">
                <span>Get in Touch</span>
                <span className="text-neutral-500 group-hover:translate-x-1 group-hover:text-white transition-all text-xs">&rarr;</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                Start a conversation about your upcoming development.
              </p>
            </Link>
          </motion.div>

        </div>
      </Container>
    </div>
  );
}
