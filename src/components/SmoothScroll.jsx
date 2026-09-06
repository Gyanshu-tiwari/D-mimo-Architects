import { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  
  // Calculate reduced motion preference directly
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Use GSAP ticker loop to run Lenis's requestAnimationFrame
    const update = (time) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    // 1. Setup & GSAP Sync: Connect Lenis to GSAP ScrollTrigger
    // We bind it here but also safely check inside if lenis isn't immediately ready
    const onScroll = () => {
      ScrollTrigger.update();
    };

    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.on('scroll', onScroll);
    }

    gsap.ticker.add(update);
    
    // Disable GSAP lag smoothing to prevent scroll and animations from losing sync
    gsap.ticker.lagSmoothing(0);

    // 2. Integration & Layout Rules: Cleanup function
    return () => {
      if (lenisRef.current?.lenis) {
        lenisRef.current.lenis.off('scroll', onScroll);
      }
      gsap.ticker.remove(update);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      ref={lenisRef}
      autoRaf={false} // Disable autoRaf so GSAP ticker can drive it exclusively
      options={{
        lerp: 0.1,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
