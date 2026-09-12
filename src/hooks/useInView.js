import { useEffect, useRef } from 'react';

/**
 * useInView — zero-rerender scroll reveal hook.
 *
 * WHY NO useState: The previous version used setState, which triggered
 * React re-renders during scroll. That caused the jitter visible in the
 * About, Works, and Process sections. This version manipulates the DOM
 * directly — no React state, no re-renders, no jitter.
 *
 * HOW IT WORKS:
 *  - Attach ref to the CONTAINER element.
 *  - When it intersects the viewport, this hook adds 'is-visible' to:
 *      1. The ref element itself (if it has the 'fade-up'/'fade-left'/'fade-scale' class)
 *      2. ALL descendants with 'fade-up', 'fade-left', or 'fade-scale' classes
 *         (handles stagger groups — children animate when parent enters view)
 *
 * USAGE:
 *   // Single element:
 *   const ref = useInView();
 *   <div ref={ref} className="fade-up">...</div>
 *
 *   // Stagger group — ref on parent, fade-up on children:
 *   const ref = useInView();
 *   <div ref={ref}>
 *     {items.map((item, i) => (
 *       <div key={i} className={`fade-up delay-${i + 1}`}>...</div>
 *     ))}
 *   </div>
 *
 * @param {object} [options]
 * @param {string} [options.margin='-80px']   rootMargin (negative = trigger before fully in view)
 * @param {number} [options.threshold=0]
 * @returns {React.RefObject}
 */
export function useInView({ margin = '-80px', threshold = 0 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ANIMATE_CLASSES = ['.fade-up', '.fade-left', '.fade-scale'];

    // Reduced motion: show all immediately, no observer needed
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible');
      el.querySelectorAll(ANIMATE_CLASSES.join(',')).forEach(child =>
        child.classList.add('is-visible')
      );
      return;
    }

    const reveal = () => {
      // Reveal self if it's an animated element
      el.classList.add('is-visible');
      // Reveal all animated children (stagger via CSS delay-N classes)
      el.querySelectorAll(ANIMATE_CLASSES.join(',')).forEach(child =>
        child.classList.add('is-visible')
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect(); // once: true
        }
      },
      { rootMargin: margin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [margin, threshold]);

  return ref;
}
