import { useState, useEffect, useRef } from 'react';

/**
 * useInView — lightweight single-IntersectionObserver scroll reveal hook.
 *
 * Replaces Motion's whileInView which spins up one IntersectionObserver +
 * one ResizeObserver per element. This hook uses ONE observer per call-site
 * and disconnects after first intersection (once:true behaviour).
 *
 * @param {object} options
 * @param {string} [options.margin='-80px']  rootMargin shorthand
 * @param {number} [options.threshold=0]
 * @returns {{ ref: React.RefObject, isInView: boolean }}
 */
export function useInView({ margin = '-80px', threshold = 0 } = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If user prefers reduced motion, reveal immediately without observing
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // once:true — stop observing after reveal
        }
      },
      { rootMargin: margin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [margin, threshold]);

  return { ref, isInView };
}
