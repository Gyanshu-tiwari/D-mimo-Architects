import { motion } from "motion/react";
import { Phone } from "lucide-react";

export function FloatingContact() {
  return (
    <motion.a
      href="tel:+918130137015"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="font-display group fixed bottom-6 right-6 z-50 bg-black text-white h-12 flex items-center justify-center shadow-lg hover:bg-gray-800 transition-all duration-300 ease-out overflow-hidden px-4"
      aria-label="Call us"
    >
      <Phone className="w-4 h-4 shrink-0" />
      <span className="font-medium text-sm tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300 ease-out max-w-0 opacity-0 group-hover:max-w-50 group-hover:opacity-100 group-hover:ml-3">
        +91 8130137015
      </span>
    </motion.a>
  );
}
