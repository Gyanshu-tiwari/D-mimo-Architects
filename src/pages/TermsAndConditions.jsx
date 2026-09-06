import { useState, useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { motion } from "motion/react";
import { ArrowUpRight, Compass, FileCheck, Layers, Scale } from "lucide-react";

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("acceptance");

  const sections = [
    { id: "acceptance", num: "01", title: "Acceptance of Terms" },
    { id: "services", num: "02", title: "Architectural Services" },
    { id: "ip", num: "03", title: "Intellectual Property & Drawings" },
    { id: "proposals", num: "04", title: "Proposals & Fees" },
    { id: "responsibilities", num: "05", title: "Client Approvals & Site Access" },
    { id: "photography", num: "06", title: "Photography & Media Rights" },
    { id: "liability", num: "07", title: "Limitation of Liability" },
    { id: "governing", num: "08", title: "Governing Law & Jurisdiction" },
    { id: "contact", num: "09", title: "Studio Inquiries" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-white min-h-screen">
      <SEO 
        title="Terms & Conditions | D Mimo Architects" 
        description="Review the Terms & Conditions governing architectural design, interior planning, project drawings, and client agreements at D Mimo Architects."
        keywords="terms and conditions, architectural agreement, interior design contract, D Mimo Architects"
      />

      {/* Header Banner */}
      <section className="border-b border-gray-100 pb-12 md:pb-16">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs font-semibold tracking-widest uppercase text-gray-400">
                // Legal & Practice Terms
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 border border-neutral-200">
                Effective Sept 2026
              </span>
            </div>

            <Heading as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[0.015em] mb-6 text-neutral-900 leading-[1.1]">
              Terms & Conditions
            </Heading>

            <Text className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              These terms outline the professional standards, intellectual property rights, project milestones, and contractual expectations when commissioning architectural or interior design services with D Mimo Architects.
            </Text>
          </motion.div>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="pt-12 md:pt-16">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-start">
            
            {/* Left Column: Sticky Table of Contents */}
            <div className="hidden lg:block lg:w-3/12 sticky top-28 self-start">
              <div className="bg-[#FAFBFB] p-6 rounded-2xl border border-gray-100">
                <div className="font-mono text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
                  Contents
                </div>
                <nav className="flex flex-col space-y-2">
                  {sections.map((section) => {
                    const isActive = activeSection === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`text-left text-sm py-1.5 px-2 rounded-lg transition-all flex items-center gap-2.5 ${
                          isActive 
                            ? "bg-neutral-900 text-white font-medium shadow-xs" 
                            : "text-gray-600 hover:text-neutral-900 hover:bg-gray-100/70"
                        }`}
                      >
                        <span className={`font-mono text-xs ${isActive ? "text-white/70" : "text-gray-400"}`}>
                          {section.num}
                        </span>
                        <span className="truncate">{section.title}</span>
                      </button>
                    );
                  })}
                </nav>

                <div className="mt-8 pt-6 border-t border-gray-200/70">
                  <div className="text-xs text-gray-500 mb-2">Need consultation?</div>
                  <a
                    href="mailto:mimoarchitectshm@gmail.com"
                    className="text-xs font-medium text-neutral-900 hover:text-neutral-600 inline-flex items-center gap-1 group"
                  >
                    <span>mimoarchitectshm@gmail.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Terms Articles */}
            <div className="lg:w-9/12 max-w-3xl space-y-16">

              {/* 01 Acceptance of Terms */}
              <article id="acceptance" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-neutral-400 font-medium tracking-widest">01</span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>
                <Heading as="h3" className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                  Acceptance of Terms
                </Heading>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    By browsing this website, requesting project consultations, or entering into a design service agreement with D Mimo Architects (&ldquo;the Studio&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.
                  </p>
                  <p>
                    Where a separate formal Letter of Appointment or Client Agreement is executed, those specific project terms shall take precedence in case of any direct conflict with these general terms.
                  </p>
                </div>
              </article>

              {/* 02 Architectural Services */}
              <article id="services" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-neutral-400 font-medium tracking-widest">02</span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>
                <Heading as="h3" className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                  Architectural & Design Services
                </Heading>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    D Mimo Architects provides professional consultancy in residential architecture, interior design, space planning, and renovation oversight.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-5 rounded-2xl bg-[#FAFBFB] border border-gray-100">
                      <div className="font-medium text-neutral-900 text-sm mb-2 flex items-center gap-2">
                        <Compass className="w-4 h-4 text-neutral-700" />
                        Design Consultancy
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 leading-normal">
                        Concept development, moodboards, space flow, material palettes, and 3D architectural visual representations.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#FAFBFB] border border-gray-100">
                      <div className="font-medium text-neutral-900 text-sm mb-2 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-neutral-700" />
                        Technical Documentation
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 leading-normal">
                        Detailed layout plans, electrical layouts, plumbing schemes, joinery drawings, and bill of quantities specifications.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* 03 Intellectual Property & Drawings */}
              <article id="ip" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-neutral-400 font-medium tracking-widest">03</span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>
                <Heading as="h3" className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                  Intellectual Property & Drawings
                </Heading>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    All architectural drawings, CAD files, 3D renderings, sketches, specifications, and creative designs authored by D Mimo Architects remain the intellectual property and copyright of D Mimo Architects under the Indian Copyright Act, 1957.
                  </p>
                  <p>
                    Upon full settlement of agreed professional fees, the client is granted a non-exclusive license to execute the design solely for the designated site and project. Drawings and specifications may not be reused for other properties or handed over to third parties without prior written consent from the Studio.
                  </p>
                </div>
              </article>

              {/* 04 Proposals & Fees */}
              <article id="proposals" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-neutral-400 font-medium tracking-widest">04</span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>
                <Heading as="h3" className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                  Proposals, Estimates & Retainers
                </Heading>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    All proposals and fee estimates generated by D Mimo Architects are valid for 30 days from the date of issuance unless stated otherwise.
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2 text-sm sm:text-base">
                    <li>Design work commences following receipt of the agreed mobilization retainer.</li>
                    <li>Milestone payments are tied to deliverable stages (Concept, Schematics, Working Drawings, Site Handover).</li>
                    <li>Material supply and contractor execution costs are billed independently according to actual site measurements.</li>
                  </ul>
                </div>
              </article>

              {/* 05 Client Approvals & Site Access */}
              <article id="responsibilities" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-neutral-400 font-medium tracking-widest">05</span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>
                <Heading as="h3" className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                  Client Approvals & Site Access
                </Heading>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    Timely execution requires active collaboration. The client agrees to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2 text-sm sm:text-base">
                    <li>Provide accurate site dimensions, legal boundary documents, and structural history.</li>
                    <li>Ensure unhindered access to the project site during designated working hours.</li>
                    <li>Review and issue formal approvals on design milestones within the agreed review windows.</li>
                  </ul>
                  <p className="text-xs sm:text-sm text-gray-500 pt-1">
                    Major scope revisions requested after working drawings have been frozen and approved may incur additional design revision fees.
                  </p>
                </div>
              </article>

              {/* 06 Photography & Media Rights */}
              <article id="photography" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-neutral-400 font-medium tracking-widest">06</span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>
                <Heading as="h3" className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                  Photography & Promotional Rights
                </Heading>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    D Mimo Architects reserves the right to photograph, film, and document completed projects for architectural publications, design awards, and studio portfolio presentations.
                  </p>
                  <p>
                    In all published media, client privacy is maintained by withholding specific apartment/plot numbers, owner identity, or sensitive security layout features.
                  </p>
                </div>
              </article>

              {/* 07 Limitation of Liability */}
              <article id="liability" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-neutral-400 font-medium tracking-widest">07</span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>
                <Heading as="h3" className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                  Limitation of Liability
                </Heading>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    While D Mimo Architects provides periodic site reviews and design intent oversight, civil execution, electrical installation, and structural fabrication are performed by independent licensed contractors.
                  </p>
                  <p>
                    The Studio shall not be liable for contractor delays, manufacturer material defects, force majeure events, or unauthorized modifications made to the drawings by site teams without our written consent.
                  </p>
                </div>
              </article>

              {/* 08 Governing Law & Jurisdiction */}
              <article id="governing" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-neutral-400 font-medium tracking-widest">08</span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>
                <Heading as="h3" className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                  Governing Law & Jurisdiction
                </Heading>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with design contracts shall be subject to the exclusive jurisdiction of the competent courts in Gautam Buddha Nagar / Greater Noida, Uttar Pradesh.
                  </p>
                </div>
              </article>

              {/* 09 Studio Inquiries */}
              <article id="contact" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-neutral-400 font-medium tracking-widest">09</span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>
                <Heading as="h3" className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                  Studio Inquiries
                </Heading>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    To discuss terms, project appointments, or contract inquiries, please reach out to:
                  </p>
                  <div className="p-6 rounded-2xl bg-[#FAFBFB] border border-gray-100 space-y-3">
                    <div className="font-semibold text-neutral-900 text-base">
                      D Mimo Architects
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Studio:</strong> SGA Techzone 4, Greater Noida West, Uttar Pradesh, India
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Direct:</strong>{" "}
                      <a href="tel:+918130137015" className="text-neutral-900 font-medium hover:underline">
                        +91 8130137015
                      </a>
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Email:</strong>{" "}
                      <a href="mailto:mimoarchitectshm@gmail.com" className="text-neutral-900 font-medium hover:underline">
                        mimoarchitectshm@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </article>

            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
