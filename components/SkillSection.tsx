"use client";
import { motion } from "framer-motion";

const skillsTop = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Fastify",
  "Express",
];

const skillsBottom = [
  "UI/UX Design",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Prisma",
  "Git",
  "Framer Motion",
];

const InfiniteMarquee = ({
  items,
  direction = 1,
}: {
  items: string[];
  direction?: number;
}) => {
  return (
    <div className="flex overflow-hidden select-none py-2 sm:py-4">
      {/* ✅ Animate the PARENT wrapper, not each track individually */}
      <motion.div
        className="flex flex-nowrap gap-3 sm:gap-4 w-max"
        initial={{ x: direction > 0 ? 0 : "-50%" }}
        animate={{ x: direction > 0 ? "-50%" : 0 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {/* Track 1 — plain div, no motion */}
        <div className="flex flex-nowrap gap-3 sm:gap-4 shrink-0">
          {items.map((item, index) => (
            <SkillPill key={`track1-${index}`} text={item} />
          ))}
        </div>
        {/* Track 2 — identical twin */}
        <div className="flex flex-nowrap gap-3 sm:gap-4 shrink-0">
          {items.map((item, index) => (
            <SkillPill key={`track2-${index}`} text={item} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const SkillPill = ({ text }: { text: string }) => (
  <motion.div
    whileHover={{
      scale: 1.05,
      backgroundColor: "#000",
      color: "#fff",
      borderColor: "#000",
    }}
    className="px-5 py-2.5 sm:px-8 sm:py-4 border-2 border-black/10 rounded-full text-lg sm:text-2xl font-bold tracking-tighter whitespace-nowrap cursor-default transition-colors duration-300 bg-white/50 backdrop-blur-sm"
  >
    {text}
  </motion.div>
);

const SkillsPage = () => {
  return (
    <section
      className="w-full flex flex-col justify-center px-4 sm:px-6 md:px-96 py-12 sm:py-20 overflow-hidden"
      id="tools"
    >
      <div className="mb-10 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#1a1a1a] leading-[1.1]"
        >
          Tools <span className="text-gray-400">&</span>{" "}
          <span className="italic font-medium text-gray-400 block sm:inline">
            Expertise
          </span>
        </motion.h2>
      </div>

      {/* Marquee Tracks */}
      <div className="relative flex flex-col gap-1 sm:gap-3 w-full">
        <InfiniteMarquee items={skillsTop} direction={1} />
        <InfiniteMarquee items={skillsBottom} direction={-1} />

        {/* Masking Gradients */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-[#f2f0ea] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-[#f2f0ea] to-transparent z-10 pointer-events-none" />
      </div>

      <div className="max-w-xl mx-auto px-4 mt-12 sm:mt-20 text-center">
        <p className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed">
          I specialize in building high-performance digital products where
          design meets engineering.
        </p>
      </div>
    </section>
  );
};

export default SkillsPage;
