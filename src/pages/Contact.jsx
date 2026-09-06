import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Button } from "@/components/primitives/Button";
import { motion } from "motion/react";
import { ChevronDown, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [shake, setShake] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 bg-white min-h-screen">
      <SEO 
        title="Contact Us" 
        description="Get in touch with D Mimo Architects. Start discussing your residential or commercial renovation project with our interior designers."
        keywords="contact architects, hire interior designer, design consultation"
      />
      <Section>
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <Text className="text-sm font-semibold tracking-widest uppercase mb-6 text-gray-500">
                // Get in touch
              </Text>
              <Heading as="h1" className="mb-6">
                Let's discuss your next project.
              </Heading>
              <Text className="text-gray-600 mb-12 lg:max-w-md">
                We're always looking for new opportunities to create beautiful, functional spaces. Reach out to start the conversation.
              </Text>

              <div className="flex flex-col gap-6 pt-2">
                <div className="border-b border-gray-100 pb-5">
                  <h4 className="text-sm font-medium tracking-widest mb-1 text-gray-500">
                    Email
                  </h4>
                  <a 
                    href="mailto:mimoarchitectshm@gmail.com" 
                    className="text-sm font-normal text-neutral-900 hover:text-neutral-500 transition-colors inline-block"
                  >
                    mimoarchitectshm@gmail.com
                  </a>
                </div>

                <div className="border-b border-gray-100 pb-5">
                  <h4 className="text-sm font-semibold tracking-widest mb-1 text-gray-500">
                    Direct Line
                  </h4>
                  <a 
                    href="tel:+918130137015" 
                    className="text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors inline-block"
                  >
                    +91 8130137015
                  </a>
                </div>

                <div className="pb-2">
                  <h4 className="text-sm font-semibold tracking-widest mb-1 text-gray-500">
                    Studio Location
                  </h4>
                  <p className="text-sm font-normal text-neutral-800 leading-relaxed max-w-sm">
                    SGA Techzone 4, Greater Noida West, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 bg-base-light p-8 md:p-12 rounded-2xl border border-gray-100"
            >
              <Heading as="h4" className="mb-8">Let's discuss</Heading>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900">Message sent successfully!</h3>
                  <p className="text-sm text-gray-600 max-w-sm">
                    Thank you for reaching out. Our team will review your project details and get back to you within 24 hours.
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                      setAcceptedTerms(false);
                    }}
                    className="mt-4"
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-white border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-shadow text-sm placeholder-neutral-400" 
                      required 
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="bg-white border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-shadow text-sm placeholder-neutral-400" 
                        required 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="bg-white border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-shadow text-sm placeholder-neutral-400" 
                        required 
                      />
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-700">Service</label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-shadow text-sm text-neutral-900 appearance-none cursor-pointer pr-10"
                        required
                      >
                        <option value="" disabled className="text-gray-400">Select a service</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="Architecture">Architecture</option>
                        <option value="Space Planning">Space Planning</option>
                        <option value="Renovation">Renovation</option>
                        <option value="Others">Others</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Project Details</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, timeline, and requirements..."
                      className="bg-white border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-shadow resize-none text-sm placeholder-neutral-400" 
                      required
                    ></textarea>
                  </div>

                  {/* Terms & Privacy Policy Checkbox Line with Shake Animation */}
                  <motion.div
                    animate={shake ? { x: [-10, 10, -8, 8, -4, 4, 0] } : { x: 0 }}
                    transition={{ duration: 0.45 }}
                    className={`flex items-start gap-3 p-2.5 rounded-lg transition-colors ${
                      shake ? "bg-red-50 ring-1 ring-red-400/80" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      id="terms"
                      checked={acceptedTerms}
                      onChange={(e) => {
                        setAcceptedTerms(e.target.checked);
                        if (e.target.checked) setShake(false);
                      }}
                      className="mt-0.5 w-4 h-4 rounded border-gray-300 text-black focus:ring-black accent-black cursor-pointer shrink-0"
                    />
                    <label
                      htmlFor="terms"
                      className={`text-xs sm:text-sm cursor-pointer select-none leading-relaxed transition-colors ${
                        shake ? "text-red-600 font-medium" : "text-gray-600"
                      }`}
                    >
                      I agree to the{" "}
                      <Link
                        to="/terms-and-conditions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-900 font-medium underline underline-offset-2 hover:text-black"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-900 font-medium underline underline-offset-2 hover:text-black"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </motion.div>

                  <Button type="submit" className="mt-2 w-full sm:w-auto h-11 px-8" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send message"}
                  </Button>
                </form>
              )}
            </motion.div>
            
          </div>
        </Container>
      </Section>
    </div>
  );
}
