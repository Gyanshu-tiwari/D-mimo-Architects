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
      {/* Left Blur & Fade Edge Overlay */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-44 z-10 bg-gradient-to-r from-white via-white/85 to-transparent backdrop-blur-[2px]" 
      />

      {/* Right Blur & Fade Edge Overlay */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-44 z-10 bg-gradient-to-l from-white via-white/85 to-transparent backdrop-blur-[3px]" 
      />

      {/* Marquee Track Moving Right to Left */}
      <div 
        className="relative w-full overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="animate-marquee-fast flex items-center gap-12 sm:gap-20 whitespace-nowrap py-2">
          {logos.map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="text-lg sm:text-xl font-semibold tracking-wider text-neutral-400 hover:text-neutral-900 transition-colors select-none cursor-default shrink-0"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
