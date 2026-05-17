"use client";
import { motion } from "framer-motion";

const Testimonials = () => {
  // Placeholder logic for the 4 logos
  const logos = [1, 2, 3, 4];

  return (
    <div className="relative bg-[#f3f0e9] px-8 md:px-96 overflow-hidden">
      {/* Shared SVG Grain Filter */}
      <svg className="absolute inset-0 w-0 h-0 pointer-events-none">
        <filter id="subtle-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncR type="linear" slope="0.05" />
            <feFuncG type="linear" slope="0.05" />
            <feFuncB type="linear" slope="0.05" />
          </feComponentTransfer>
          <feComposite operator="in" in2="SourceGraphic" />
        </filter>
      </svg>

      {/* Grain Overlay Layer */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ filter: "url(#subtle-grain)" }}
      />

      <div className="mx-auto relative z-10">
        {/* Section Heading */}
        <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-[#0a0a0a] mb-12">
          Testimonials
        </h2>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {logos.map((_, index) => (
            <motion.div
              key={index}
              whileInView={{ rotateY: 180 }}
              transition={{ duration: 0.2 }}
              className="aspect-[4/5] bg-[#0a0a0a] rounded-[1.5rem] flex items-center justify-center transition-transform hover:scale-[1.02] cursor-pointer shadow-lg"
            >
              {/* Replace with your specific SVG logos */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center border border-white/5">
                <span className="text-white/20 text-xs uppercase tracking-widest">
                  Logo
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
