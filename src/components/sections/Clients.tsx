import { motion } from "framer-motion";

const clientLogos = [
  { name: "Infinite Waves", path: "/logos/Infinite-Waves-logo.png" },
  { name: "The Bhartiya Trekkers", path: "/logos/the-bhartiya-trekkers.png" },
  { name: "MotoTrek Stores", path: "/logos/MotoTrek Stores Logo.jpeg" },
  { name: "AN Motion Pictures", path: "/logos/an-motion-pictures.webp" },
  { name: "UNMAPD", path: "/logos/unmapd-logo.webp" },
  { name: "Apnawalaclick", path: "/logos/apnawalaclick-logo.webp" },
  { name: "SDCSA", path: "/logos/sdcsa-logo.webp" }
];

const Clients = () => {
  // Duplicate logos list to enable seamless marquee looping
  // Repeat the 7 logos 4 times (28 total items) to ensure the half-width (14 items)
  // is wide enough to cover the screen width for seamless looping at -50%.
  const duplicatedLogos = [
    ...clientLogos, ...clientLogos,
    ...clientLogos, ...clientLogos
  ];

  return (
    <section className="py-16 border-y border-white/5 bg-black/40 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[150px] bg-primary/5 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-8">
          <span className="text-[10px] text-primary tracking-[0.4em] uppercase font-bold block mb-2">
            Trusted Partnership
          </span>
          <h2 className="text-xs md:text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by Creative Brands & Industry Leaders
          </h2>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Left/Right Edge Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

          {/* Sliding Container */}
          <div className="flex w-max animate-marquee gap-16 md:gap-24 items-center">
            {duplicatedLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center h-20 w-44 shrink-0 group transition-all duration-500"
              >
                <img
                  src={logo.path}
                  alt={`${logo.name} logo`}
                  className="max-h-16 md:max-h-20 max-w-full object-contain filter transition-all duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
