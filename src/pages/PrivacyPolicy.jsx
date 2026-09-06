import { useState, useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { motion } from "motion/react";
import { Lock, Eye, ArrowUpRight } from "lucide-react";

const sections = [
  { id: "overview", num: "01", title: "Overview & Scope" },
  { id: "collection", num: "02", title: "Information We Collect" },
  { id: "usage", num: "03", title: "How We Use Information" },
  { id: "confidentiality", num: "04", title: "Client & Project Confidentiality" },
  { id: "analytics", num: "05", title: "Cookies & Analytics" },
  { id: "security", num: "06", title: "Data Security & Retention" },
  { id: "rights", num: "07", title: "Your Privacy Rights" },
  { id: "contact", num: "08", title: "Studio Contact Information" }
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("overview");

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
        title="Privacy Policy | D Mimo Architects" 
        description="Read the Privacy Policy of D Mimo Architects. Learn how we handle client data, architectural project details, and privacy protections."
        keywords="privacy policy, data protection, D Mimo Architects, client confidentiality"
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
                // Legal & Compliance
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Updated Sept 2026
              </span>
            </div>

            <Heading as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[0.015em] mb-6 text-neutral-900 leading-[1.1]">
              Privacy Policy
            </Heading>

            <Text className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              At D Mimo Architects, we hold client trust and creative integrity as our core principles. This policy explains how we collect, protect, and handle your information when you visit our studio website, inquire about architectural services, or engage with our design practice.
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
                  <div className="text-xs text-gray-500 mb-2">Have questions?</div>
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

            {/* Right Column: Policy Document Articles */}
            <div className="lg:w-9/12 max-w-3xl space-y-16">

              {/* 01 Overview & Scope */}
              <article id="overview" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-neutral-400 font-medium tracking-widest">01</span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>
                <Heading as="h3" className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                  Overview & Scope
                </Heading>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    D Mimo Architects (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website <span className="font-mono text-neutral-800">dmimo.com</span> and provides architectural design, interior architecture, space planning, and renovation services based in Greater Noida, Uttar Pradesh, India.
                  </p>
                  <p>
                    This Privacy Policy applies to all interactions with our online platforms, contact forms, consultation requests, design inquiries, and client communications. By using our website or submitting your details, you agree to the collection and handling of your data in accordance with this policy.
                  </p>
                </div>
              </article>

              {/* 02 Information We Collect */}
              <article id="collection" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-neutral-400 font-medium tracking-widest">02</span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>
                <Heading as="h3" className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                  Information We Collect
                </Heading>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    We only collect information necessary to understand your project needs, respond to inquiries, and deliver high-precision architectural solutions.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-5 rounded-2xl bg-[#FAFBFB] border border-gray-100">
                      <div className="font-medium text-neutral-900 text-sm mb-2 flex items-center gap-2">
                        <Eye className="w-4 h-4 text-neutral-700" />
                        Direct Personal Information
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 leading-normal">
                        Full name, email address, direct phone number, project location, and your preferred scope of architectural or interior service.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#FAFBFB] border border-gray-100">
                      <div className="font-medium text-neutral-900 text-sm mb-2 flex items-center gap-2">
                        <Lock className="w-4 h-4 text-neutral-700" />
                        Project Specific Data
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 leading-normal">
                        Site measurements, architectural drawings, design briefs, moodboards, reference images, and budget expectations you provide.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* 03 How We Use Information */}
              <article id="usage" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-neutral-400 font-medium tracking-widest">03</span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>
                <Heading as="h3" className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                  How We Use Your Information
                </Heading>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    The information we gather is used strictly for design, professional collaboration, and communication purposes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2 text-sm sm:text-base">
                    <li>Evaluating your project brief and preparing architectural service proposals.</li>
                    <li>Scheduling on-site visits, concept presentations, and design reviews.</li>
                    <li>Drafting project contracts, milestones, and deliverables.</li>
                    <li>Sending critical design updates and responding to direct inquiries.</li>
                    <li>Maintaining website performance and user experience standards.</li>
                  </ul>
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm text-neutral-700 mt-4">
                    <strong>Zero Spam Guarantee:</strong> We do not sell, rent, or trade your personal information or email address to third-party advertisers or marketing brokers.
                  </div>
                </div>
              </article>

              {/* 04 Client & Project Confidentiality */}
              <article id="confidentiality" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-neutral-400 font-medium tracking-widest">04</span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>
                <Heading as="h3" className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                  Client & Project Confidentiality
                </Heading>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    Architectural and residential interior projects involve personal spaces and proprietary commercial layouts. We maintain strict confidentiality protocols:
                  </p>
                  <p>
                    Floor plans, security layouts, client identity, and specific residential addresses remain private. Project photography or 3D renders are only showcased in our portfolio or promotional material with prior client consent and without revealing private personal identifiable data.
                  </p>
                </div>
              </article>

              {/* 05 Cookies & Analytics */}
              <article id="analytics" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-neutral-400 font-medium tracking-widest">05</span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>
                <Heading as="h3" className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                  Cookies & Web Analytics
                </Heading>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    Our website may use lightweight, non-intrusive cookies and aggregated analytics to measure traffic, page loading speeds, and overall usability.
                  </p>
                  <p>
                    These metrics help us ensure our high-resolution project galleries load smoothly across all screen sizes. You can disable cookies at any time through your browser settings without impacting your ability to browse our works or contact our studio.
                  </p>
                </div>
              </article>

              {/* 06 Data Security & Retention */}
              <article id="security" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-neutral-400 font-medium tracking-widest">06</span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>
                <Heading as="h3" className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                  Data Security & Retention
                </Heading>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    We employ industry-standard encryption, SSL protocols, and secure storage solutions to safeguard your project files, correspondence, and personal information against unauthorized access, loss, or disclosure.
                  </p>
                  <p>
                    Contact inquiry data is retained only as long as necessary to manage our professional relationship and comply with applicable statutory requirements in India.
                  </p>
                </div>
              </article>

              {/* 07 Your Privacy Rights */}
              <article id="rights" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-neutral-400 font-medium tracking-widest">07</span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>
                <Heading as="h3" className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                  Your Privacy Rights
                </Heading>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    You have full control over the personal information you share with us. At any time, you may:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2 text-sm sm:text-base">
                    <li>Request a copy of the personal details we hold regarding your inquiry.</li>
                    <li>Request corrections or updates to your contact details.</li>
                    <li>Request the deletion of your contact records from our active database.</li>
                    <li>Opt out of any studio newsletter or publication updates.</li>
                  </ul>
                </div>
              </article>

              {/* 08 Studio Contact Information */}
              <article id="contact" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-neutral-400 font-medium tracking-widest">08</span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>
                <Heading as="h3" className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
                  Studio Contact Information
                </Heading>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    For any questions regarding this Privacy Policy or how your project information is handled, please contact our studio director:
                  </p>
                  <div className="p-6 rounded-2xl bg-[#FAFBFB] border border-gray-100 space-y-3">
                    <div className="font-semibold text-neutral-900 text-base">
                      D Mimo Architects
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Office:</strong> SGA Techzone 4, Greater Noida West, Uttar Pradesh, India
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Direct Line:</strong>{" "}
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
