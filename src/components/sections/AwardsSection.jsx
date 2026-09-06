import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, ChevronLeft, ChevronRight, Sparkles, ExternalLink, Calendar, Users, ShieldCheck } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Section } from "@/components/primitives/Section";

const ceremonyPhotos = [
  {
    id: 1,
    src: "/images/award/img1.webp",
    title: "National Citation & Trophy Presentation",
    subtitle: "Presented by Birla Uttam & Mangalam Cement Ltd. with IIA",
    tag: "Citation & Trophy",
  },
  {
    id: 2,
    src: "/images/award/img2.webp",
    title: "Ar. Hritik Mishra with the Uttam Architect Trophy",
    subtitle: "Recognizing spatial innovation and structural creativity",
    tag: "Founder & Trophy",
  },
  {
    id: 3,
    src: "/images/award/img4.webp",
    title: "Auditorium Stage Ceremony Conferment",
    subtitle: "Grand award ceremony before national architecture jury & peers",
    tag: "Stage Ceremony",
  },
  {
    id: 4,
    src: "/images/award/img3.webp",
    title: "Honored Alongside Senior Architectural Dignitaries",
    subtitle: "Commemorating excellence in modern Indian design language",
    tag: "Gala & Dignitaries",
  },
];

export function AwardsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoplayKey, setAutoplayKey] = useState(0);

  // Auto-slide every 3.5 seconds continuously; resets cleanly when user manually interacts
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % ceremonyPhotos.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [autoplayKey]);

  const resetAutoplay = () => {
    setAutoplayKey((prev) => prev + 1);
  };

  const handleNext = () => {
    resetAutoplay();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % ceremonyPhotos.length);
  };

  const handlePrev = () => {
    resetAutoplay();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + ceremonyPhotos.length) % ceremonyPhotos.length);
  };

  const selectSlide = (index) => {
    if (index === currentIndex) return;
    resetAutoplay();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const activePhoto = ceremonyPhotos[currentIndex];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "10%" : "-10%",
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: "0%",
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? "-10%" : "10%",
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <Section className="bg-[#fafafa] py-16 sm:py-20 lg:py-24 border-t border-neutral-200/80 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <Text className="text-sm font-semibold tracking-widest uppercase mb-6 text-black/50">
              // Recognition
            </Text>

            <Heading as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[0.015em] text-neutral-900 leading-[1.1]">
              Award-winning design practice.
            </Heading>

            <Text className="text-gray-600 text-base sm:text-lg max-w-2xl mt-4 font-normal leading-relaxed">
              Celebrated nationally for architectural innovation, thoughtful spatial geometry, and progressive design language.
            </Text>
          </motion.div>
        </div>

        {/* Single Unified Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-neutral-200/80"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Part: Award Distinction Details (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                {/* Award Title */}
                <div className="space-y-3 mb-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-neutral-900 leading-tight">
                    Uttam Architect Award 2025
                  </h3>
                  <div className="inline-block bg-amber-50 border border-amber-200/80 rounded-xl px-4 py-2 text-amber-950 font-medium text-sm sm:text-base">
                    Best Innovative Design Language
                  </div>
                </div>

                {/* Citation */}
                <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-8">
                  Conferred in national recognition of bold spatial clarity, experiential minimalism, and structural originality that elevates contemporary architectural practice.
                </p>

                {/* Credits & Affiliations */}
                <div className="space-y-3 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-700">
                    <ShieldCheck className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span><strong>Presented by:</strong> Birla Uttam & Mangalam Cement Ltd.</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-700">
                    <Users className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span><strong>In Association with:</strong> Indian Institute of Architects (IIA)</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-700">
                    <Calendar className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span><strong>Conferred:</strong> March 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Part: Modern Image Carousel with Light Dots (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* Main Carousel Screen */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-900 shadow-sm border border-neutral-200/60 group">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={activePhoto.src}
                      alt={activePhoto.title}
                      className="w-full h-full object-cover select-none"
                      loading="eager"
                    />
                    
                    {/* Subtle Gradient Scrim for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Top Tag */}
                    <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono font-medium border border-white/10 shadow-sm">
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        {activePhoto.tag}
                      </span>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-10 text-white">
                      <h4 className="text-base sm:text-lg md:text-xl font-medium font-display tracking-[0.01em] text-white leading-snug mb-1 drop-shadow-sm">
                        {activePhoto.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-300 font-normal line-clamp-1 drop-shadow-xs">
                        {activePhoto.subtitle}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* In-Frame Navigation Controls */}
                <div className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20 shadow-md cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20 shadow-md cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modern Animated Pill & Dots Indicator (Light Background) */}
              <div className="flex items-center justify-center pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 shadow-xs">
                  {ceremonyPhotos.map((photo, index) => {
                    const isActive = index === currentIndex;
                    return (
                      <button
                        key={photo.id}
                        onClick={() => selectSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className="relative flex items-center justify-center cursor-pointer focus:outline-none"
                      >
                        {isActive ? (
                          <motion.div
                            layoutId="awardSlideIndicator"
                            transition={{ type: "spring", stiffness: 400, damping: 32 }}
                            className="px-3.5 py-1 rounded-full bg-neutral-900 text-white text-xs font-medium whitespace-nowrap shadow-xs select-none"
                          >
                            Slide {index + 1}
                          </motion.div>
                        ) : (
                          <motion.div
                            whileHover={{ scale: 1.25 }}
                            className="w-2.5 h-2.5 mx-1 rounded-full bg-neutral-300 hover:bg-neutral-500 transition-colors"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
