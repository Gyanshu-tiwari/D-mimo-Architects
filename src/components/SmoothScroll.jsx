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

  // Touch-only devices (mobile/tablet with no mouse) already have excellent
  // native scroll physics. Lenis on touch adds RAF overhead with no visible
  // benefit and consumes extra battery. Only enable on pointer:fine (mouse).
  const isTouchOnly =
    typeof window !== 'undefined'
      ? window.matchMedia('(pointer: coarse) and (hover: none)').matches
      : false;

  const skipLenis = prefersReducedMotion || isTouchOnly;

  useEffect(() => {
    if (skipLenis) return;

    // ─── 1. GSAP Ticker → Lenis sync ──────────────────────────────────────────────
    const tickerUpdate = (time) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };
    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    // ─── 2. Debounced ScrollTrigger.refresh() after images finish loading ────
    const debouncedRefresh = debounce(() => {
      ScrollTrigger.refresh(true);
    }, 200);

    const onWindowLoad = () => debouncedRefresh();
    window.addEventListener('load', onWindowLoad, { once: true });

    const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
    lazyImgs.forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', debouncedRefresh, { once: true });
      }
    });

    return () => {
      gsap.ticker.remove(tickerUpdate);
      window.removeEventListener('load', onWindowLoad);
    };
  }, [skipLenis]);

  if (skipLenis) {
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
