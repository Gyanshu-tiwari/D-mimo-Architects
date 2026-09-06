import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "@/components/primitives/Container";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Works", href: "/projects" },
  { name: "Services", href: "/#services" },
  { name: "About us", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Adjust state during render to close mobile menu on route change
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  }

  const handleLinkClick = (e, href) => {
    if (href.startsWith("/#") && location.pathname === "/") {
      e.preventDefault();
      const hash = href.substring(1);
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
      setMobileMenuOpen(false);
    } else {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine theme based on page and scroll
  const isDarkTheme = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={cn(
          "font-display fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-4 bg-white/80 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1 flex items-center">
            <Link
              to="/"
              onClick={() => {
                if (isHomePage) window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 group focus:outline-none"
              aria-label="D Mimo Architects Home"
            >
              <img
                src="/icons/favicon.webp"
                alt="D Mimo Logo Mark"
                className="h-9 w-9 sm:h-10 sm:w-10 object-contain drop-shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col justify-center select-none">
                <span
                  className={cn(
                    "text-[18px] sm:text-[20px] font-bold tracking-[0.08em] font-cinzel leading-none transition-colors duration-300",
                    isDarkTheme ? "text-white" : "text-neutral-900"
                  )}
                >
                  D MIMO
                </span>
                <span
                  className={cn(
                    "text-[9px] sm:text-[10px] font-semibold tracking-[0.32em] font-sans uppercase mt-1 leading-none transition-colors duration-300",
                    isDarkTheme ? "text-white/80" : "text-neutral-500"
                  )}
                >
                  ARCHITECTS
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav - Pill */}
          <nav 
            className={cn(
              "hidden md:flex items-center gap-8 px-6 py-2.5 rounded-full transition-colors duration-300",
              isDarkTheme 
                ? " text-white/80" 
                : " text-gray-700"
            )}
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  "text-[14px] font-medium transition-colors hover:opacity-100",
                  isDarkTheme ? "hover:text-white" : "hover:text-black"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="flex-1 hidden md:flex items-center justify-end gap-1.5">
            <Link 
              to="/contact" 
              className={cn(
                "px-5 py-2.5 rounded-sm font-medium text-sm transition-colors",
                isDarkTheme 
                  ? "bg-white text-black hover:bg-gray-100" 
                  : "bg-black text-white hover:bg-gray-800"
              )}
            >
              Contact us
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                "p-2.5 rounded-sm transition-colors flex items-center justify-center",
                isDarkTheme 
                  ? "bg-white text-black hover:bg-gray-100" 
                  : "bg-black text-white hover:bg-gray-800"
              )}
            >
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden p-2 -mr-2",
              isDarkTheme ? "text-white" : "text-black"
            )}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="font-display fixed inset-0 z-50 bg-white flex flex-col px-6 py-8"
          >
            <div className="flex items-center justify-between mb-12">
              <Link 
                to="/" 
                className="inline-flex items-center gap-3" 
                onClick={() => {
                  if (isHomePage) window.scrollTo({ top: 0, behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                aria-label="D Mimo Architects"
              >
                <img
                  src="/icons/favicon.webp"
                  alt="D Mimo Logo Mark"
                  className="h-10 w-10 object-contain shrink-0"
                />
                <div className="flex flex-col justify-center select-none">
                  <span className="text-[20px] font-bold tracking-[0.08em] font-cinzel text-neutral-900 leading-none">
                    D MIMO
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.32em] font-sans uppercase mt-1 text-neutral-500 leading-none">
                    ARCHITECTS
                  </span>
                </div>
              </Link>
              <button
                className="p-2 -mr-2 text-black"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {[...links, { name: "Contact us", href: "/contact" }].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-2xl font-medium text-black"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 mt-52 border-t border-gray-100 flex flex-col gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-medium text-neutral-500 hover:text-black transition-colors"
                >
                  Instagram
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
