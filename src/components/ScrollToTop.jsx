import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (hash) {
      // Small delay to allow the page to render before scrolling to anchor
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          if (lenis) {
            lenis.scrollTo(element, { offset: -80 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Use the correct Lenis API: immediate+force handles stop/snap/start atomically
      // within its own RAF loop — safe for rapid repeated calls.
      // If Lenis is not mounted (mobile/touch-only), fall back to native scroll.
      if (lenis) {
        lenis.scrollTo(0, { immediate: true, force: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
    // lenis ref is stable — no need to include in deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hash]);

  return null;
}
