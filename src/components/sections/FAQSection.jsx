import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Section } from "@/components/primitives/Section";
import { Button } from "@/components/primitives/Button";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const faqs = [
    {
      q: "What services does D Mimo Architects offer?",
      a: "We provide full-service interior design, home styling, space planning, and renovation support for residential and select commercial projects."
    },
    {
      q: "How does a typical project start?",
      a: "Every project begins with a consultation where we discuss your vision, budget, and timeline. From there, we create a detailed proposal outlining the scope of work."
    },
    {
      q: "Do you handle renovations as well as design?",
      a: "Yes, we offer end-to-end services. We coordinate with trusted contractors and oversee the renovation process to ensure our design vision is executed perfectly."
    },
    {
      q: "Can you work with an existing space or furniture?",
      a: "Absolutely. We often blend new designs with existing pieces to create a cohesive look that honors the character of your space and your personal history."
    },
    {
      q: "What is the typical project timeline?",
      a: "Timelines vary greatly depending on scope. A single room redesign might take 4-6 weeks, while a full home renovation could take 4-8 months from concept to completion."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);
  const { ref: leftRef, isInView: leftInView } = useInView({ margin: '-100px' });

  return (
    <Section className="cv-auto bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <div
            ref={leftRef}
            className={`fade-up lg:w-1/3${leftInView ? ' is-visible' : ''}`}
          >
            <Text className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">
              // FAQ
            </Text>
            <Heading as="h2" className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[0.015em] text-neutral-900 leading-[1.1]">
              Got questions?
            </Heading>
            <Text className="text-gray-600 mb-6 text-base sm:text-lg">
              We’ve answered some of the most common questions about our services.
            </Text>
            <Button asChild variant="secondary" className="rounded-full px-6 py-2.5 border border-neutral-900 bg-neutral-900 text-white font-semibold hover:bg-black hover:border-black transition-all shadow-sm">
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>

          <div className="lg:w-2/3 flex flex-col w-full">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="border-b border-gray-200">
                  <button
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <Heading as="h5" className={cn("transition-colors", isOpen ? "text-black" : "text-gray-500")}>
                      {faq.q}
                    </Heading>
                    <span className="ml-6 shrink-0">
                      {isOpen ? <Minus className="w-6 h-6 text-black" /> : <Plus className="w-6 h-6 text-gray-400" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-12">
                          <Text className="text-gray-600">{faq.a}</Text>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
