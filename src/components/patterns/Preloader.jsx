import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Lock body scroll while preloader is active
    document.body.style.overflow = "hidden";

    const duration = 1500; // 1.5s total loading duration
    const startTime = performance.now();

    const animateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progressFraction = Math.min(elapsed / duration, 1);

      // Smooth custom easing (cubic acceleration and deceleration)
      const easedProgress =
        progressFraction < 0.5
          ? 4 * progressFraction * progressFraction * progressFraction
          : 1 - Math.pow(-2 * progressFraction + 2, 3) / 2;

      const currentPercent = Math.min(100, Math.floor(easedProgress * 100));
      setProgress(currentPercent);

      if (progressFraction < 1) {
        requestAnimationFrame(animateProgress);
      } else {
        setProgress(100);
        // Brief pause at 100% before curtain slide-up
        setTimeout(() => {
          setIsFinished(true);
          document.body.style.overflow = "";
          if (onComplete) onComplete();
        }, 220);
      }
    };

    const animFrame = requestAnimationFrame(animateProgress);

    return () => {
      cancelAnimationFrame(animFrame);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader-overlay"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.85,
            ease: [0.76, 0, 0.24, 1], // Smooth luxury curtain wipe easing
          }}
          className="fixed inset-0 z-[99999] bg-[#09090b] text-white flex flex-col justify-between p-6 sm:p-10 md:p-14 select-none overflow-hidden"
          style={{ willChange: "transform" }}
        >
          {/* Subtle Architectural Blueprint Grid */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "44px 44px",
            }}
          />

          {/* Top Bar: D Mimo Logo in Neutral Colors */}
          <div className="relative z-10 flex items-start justify-between w-full">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl md:text-[26px] font-bold tracking-[0.1em] font-cinzel text-neutral-100 leading-none">
                D MIMO
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.36em] font-sans uppercase mt-1.5 text-neutral-400 leading-none">
                ARCHITECTS
              </span>
            </div>
          </div>

          {/* Bottom Bar: Percentage Counter & Hairline Progress Bar */}
          <div className="relative z-10 w-full space-y-4">
            <div className="flex items-end justify-end">
              {/* Large Percentage Counter in Urbanist Font */}
              <div className="flex items-baseline">
                <span className="font-display text-6xl sm:text-8xl md:text-9xl font-light tracking-[0.015em] text-neutral-100 tabular-nums leading-none">
                  {progress}
                </span>
                <span className="font-display text-3xl sm:text-4xl md:text-5xl text-neutral-500 ml-2 font-light">
                  %
                </span>
              </div>
            </div>

            {/* Hairline Progress Track */}
            <div className="w-full h-0.5 bg-neutral-800/80 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-neutral-400 via-white to-neutral-200"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
