import { ReactLenis } from 'lenis/react';

export function SmoothScroll({ children }) {
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const isTouchOnly =
    typeof window !== 'undefined'
      ? window.matchMedia('(pointer: coarse) and (hover: none)').matches
      : false;

  const skipLenis = prefersReducedMotion || isTouchOnly;

  if (skipLenis) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
