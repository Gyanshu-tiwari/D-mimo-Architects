import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Button } from "@/components/primitives/Button";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-base-dark text-white pt-12 md:pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 mb-10 border-b border-white/10 pb-10">
          
          {/* Newsletter */}
          <div className="lg:col-span-2">
            <Heading as="h4" className="text-white mb-3">Newsletter</Heading>
            <Text className="text-white/70 mb-6">Subscribe for news and insights</Text>
            <form className="flex gap-3 max-w-md">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-b border-gray-600 px-3 py-2.5 w-full focus:outline-none focus:border-white transition-colors text-sm"
                required
              />
              <Button type="submit" variant="secondary" className="rounded-full bg-white text-neutral-900 border border-white font-semibold hover:bg-neutral-100 transition-all shrink-0 shadow-sm">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Contact */}
          <div>
            <Heading as="h6" className="text-white mb-6">Get in touch</Heading>
            <div className="flex flex-col gap-4">
              <a href="tel:+918130137015" className="text-white/70 hover:text-white transition-colors">+91 8130137015</a>
              <a href="mailto:mimoarchitectshm@gmail.com" className="text-white/70 hover:text-white transition-colors">mimoarchitectshm@gmail.com</a>
              <p className="text-white/70">SGA Techzone 4, Greater Noida West, U.P., India</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <Heading as="h6" className="text-white mb-6">Navigation</Heading>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
                <Link to="/projects" className="text-white/70 hover:text-white transition-colors">Projects</Link>
                <Link to="/#services" className="text-white/70 hover:text-white transition-colors">Services</Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link to="/about" className="text-white/70 hover:text-white transition-colors">About us</Link>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link>
                <Link to="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <Heading as="h6" className="text-white mb-6">Socials</Heading>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/d_mimo_architects/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-white"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="inline-flex items-center gap-3 group transition-opacity hover:opacity-90" aria-label="D Mimo Architects">
            <img
              src="/icons/favicon.webp"
              alt="D Mimo Logo Mark"
              className="h-10 w-10 object-contain shrink-0"
            />
            <div className="flex flex-col justify-center select-none">
              <span className="text-[19px] font-bold tracking-[0.08em] font-cinzel text-white leading-none">
                D MIMO
              </span>
              <span className="text-[9px] font-semibold tracking-[0.32em] font-sans uppercase mt-1 text-white/60 leading-none">
                ARCHITECTS
              </span>
            </div>
          </Link>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs text-white/50">
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>·</span>
              <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
            <Text size="sm" className="text-white/50">
              &copy; 2025 D Mimo Architects&reg;. All rights reserved.
            </Text>
          </div>
        </div>
      </Container>
    </footer>
  );
}
