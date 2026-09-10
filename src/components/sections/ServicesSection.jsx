import { useRef, useEffect } from "react";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Section } from "@/components/primitives/Section";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function ServicesSection() {
  // cardRef = the first service card (used to measure its natural height)
  const cardRef = useRef(null);
  // stickyColRef = the sticky left column whose height must match the card height
  const stickyColRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current || !stickyColRef.current) return;

    // Writes card height directly to the DOM — no React state, no re-render
    const syncHeight = () => {
      const h = cardRef.current?.offsetHeight;
      if (h && h > 100 && stickyColRef.current) {
        stickyColRef.current.style.height = `${h}px`;
      }
    };

    syncHeight();

    // ResizeObserver watches the card for size changes (image loads, font shifts, etc.)
    // and updates the sticky column height directly in the DOM — zero React renders.
    const ro = new ResizeObserver(syncHeight);
    ro.observe(cardRef.current);
    return () => ro.disconnect();
  }, []);

  const services = [
    {
      number: "01",
      title: "Interior Design",
      description:
        "We design interiors that are simple, functional, and aligned with how the space is used every day.",
      scope: "Layout planning · Material selection · Furniture guidance",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000",
      link: "/contact"
    },
    {
      number: "02",
      title: "Architecture",
      description:
        "We create structures that are practical, well-planned, and built to last through thoughtful detailing.",
      scope: "Concept design · Floor plans · Working drawings",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
      link: "/contact"
    },
    {
      number: "03",
      title: "Space Planning",
      description:
        "We organize layouts to improve flow, usability, natural daylighting, and overall spatial efficiency.",
      scope: "Zoning layout · Circulation flow · Space optimization",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000",
      link: "/contact"
    },
    {
      number: "04",
      title: "Renovation",
      description:
        "We update existing spaces to improve layout, architectural character, and overall material longevity.",
      scope: "Site assessment · Layout updates · Material upgrades",
      image:
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1000",
      link: "/contact"
    }
  ];

  const CARD_GAP = 64; // 64px gap between cards

  return (
    <Section id="services" className="bg-[#FAFBFB] border-t border-gray-100 py-12 md:py-16 lg:py-20 relative">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24 items-start relative">
          {/* Left Column: Sticky on Desktop, exact same height as card so it unsticks at the exact instant Card 04 covers Card 03 */}
          <div className="lg:w-5/12 lg:sticky lg:top-28 self-start pt-2">
            <motion.div
              ref={stickyColRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="pb-6 lg:pb-8">
                <Text className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">
                  // Services
                </Text>
                
                <Heading
                  as="h2"
                  className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[0.015em] mb-6 text-neutral-900 leading-[1.1]"
                >
                  What we design
                </Heading>

                <p className="font-sans text-gray-600 text-base sm:text-lg leading-relaxed mb-6 max-w-md">
                  We follow a clear process to keep every step simple, structured, and easy to manage.
                </p>
              </div>

              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#111827] text-white border border-neutral-800 px-6 py-3 text-sm font-semibold shadow-sm hover:bg-black hover:shadow-md transition-all group"
                >
                  <span>Discuss your project</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Cards stack directly on top of each other covering previous card completely */}
          <div className="lg:w-7/12 flex-1 w-full pb-0">
            {services.map((service, i) => {
              const isLast = i === services.length - 1;
              return (
                <div
                  key={service.number}
                  ref={i === 0 ? cardRef : undefined}
                  style={{
                    top: "112px",
                    zIndex: i + 10,
                    marginBottom: isLast ? 0 : `${CARD_GAP}px`,
                  }}
                  className="sticky transition-all duration-300"
                >
                  <Link
                    to={service.link}
                    className="group block bg-white rounded-3xl border border-neutral-200/90 shadow-[0_12px_36px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.12)] p-6 sm:p-8 md:p-10 transition-all duration-500"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
                      {/* Service Details */}
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <span className="font-mono text-xs md:text-sm text-neutral-400 font-medium tracking-widest block mb-4">
                            {service.number}
                          </span>
                          
                          <Heading
                            as="h4"
                            className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-4 group-hover:text-neutral-600 transition-colors"
                          >
                            {service.title}
                          </Heading>

                          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                            {service.description}
                          </p>
                        </div>

                        <div className="text-xs sm:text-sm text-neutral-500 font-normal tracking-wide pt-4 border-t border-gray-100">
                          {service.scope}
                        </div>
                      </div>

                      {/* Service Visual */}
                      <div className="relative overflow-hidden rounded-2xl aspect-4/3 bg-gray-100 shadow-xs border border-gray-100">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
