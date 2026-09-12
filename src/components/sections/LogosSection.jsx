export function LogosSection() {
  const baseLogos = [
    "ACME Corp",
    "GlobalTech",
    "Nexus",
    "Quantum",
    "Starlight",
    "Vanguard",
    "Aura Living",
    "Komorebi",
  ];

  // Duplicate for infinite seamless marquee loop
  const logos = [...baseLogos, ...baseLogos];

  return (
    <section className="py-12 border-b border-gray-100 bg-white relative overflow-hidden">
      {/* Marquee Track — GPU-composited via translateZ(0) in CSS
          Removed backdrop-blur from edge overlays: blur creates new stacking
          contexts that force the browser to composite them separately from the
          marquee layer, causing layer conflict and subpixel jitter. */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          /* CSS mask fades edges — cheaper than DOM overlay elements */
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="animate-marquee-fast flex items-center gap-12 sm:gap-20 whitespace-nowrap py-2">
          {logos.map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="text-lg sm:text-xl font-semibold tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors select-none cursor-default shrink-0"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
