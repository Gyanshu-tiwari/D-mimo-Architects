import { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Debounce helper — batches rapid calls into one deferred execution
function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

export function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  // Detect reduced motion preference once, outside effects
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  useEffect(() => {
    if (prefersReducedMotion) return;

    // ─── 1. GSAP Ticker → Lenis sync ───────────────────────────────────────
    // Drive Lenis exclusively from GSAP's RAF loop.
    // Multiply by 1000 because GSAP passes seconds; Lenis expects ms.
    const tickerUpdate = (time) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };
    gsap.ticker.add(tickerUpdate);

    // Eliminate GSAP lag-smoothing jumps during network-induced main-thread stalls
    gsap.ticker.lagSmoothing(0);

    // ─── 2. Debounced ScrollTrigger.refresh() after images finish loading ───
    // When lazy images trickle in on slow/throttled networks, they change the
    // document height. We must recalculate all ST trigger positions.
    const debouncedRefresh = debounce(() => {
      ScrollTrigger.refresh(true); // true = safe-force, recalculates all positions
    }, 200);

    // Fire once after the full page load (fonts, images, everything)
    const onWindowLoad = () => debouncedRefresh();
    window.addEventListener('load', onWindowLoad, { once: true });

    // Also hook every individual lazy image's load event so ST
    // refreshes as each image slot materialises on slow networks
    const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
    lazyImgs.forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', debouncedRefresh, { once: true });
      }
    });

    return () => {
      gsap.ticker.remove(tickerUpdate);
      window.removeEventListener('load', onWindowLoad);
      // Individual img listeners auto-remove via { once: true }
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      ref={lenisRef}
      autoRaf={false} // GSAP ticker drives RAF exclusively — never double-loop
      options={{
        lerp: 0.1,
        smoothWheel: true,
        // Sync Lenis scroll events directly to ScrollTrigger.
        // This fires synchronously inside Lenis's own RAF step,
        // which is the correct place — no race condition.
        on: {
          scroll: () => ScrollTrigger.update(),
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}
