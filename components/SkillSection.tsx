"use client";
import { motion } from "framer-motion";

const skillsTop = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Framer Motion",
  "Tailwind CSS",
  "Node.js",
  "Prisma",
];

const skillsBottom = [
  "UI/UX Design",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "GSAP",
];

const InfiniteMarquee = ({
  items,
  direction = 1,
}: {
  items: string[];
  direction?: number;
}) => {
  return (
    <div className="flex overflow-hidden select-none gap-4 py-4">
      <motion.div
        initial={{ x: direction > 0 ? 0 : "-50%" }}
        animate={{ x: direction > 0 ? "-50%" : 0 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex flex-nowrap gap-4 min-w-full"
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <SkillPill key={index} text={item} />
        ))}
      </motion.div>
    </div>
  );
};

const SkillPill = ({ text }: { text: string }) => (
  <motion.div
    whileHover={{
      scale: 1.1,
      backgroundColor: "#000",
      color: "#fff",
      borderColor: "#000",
    }}
    className="px-8 py-4 border-2 border-black/10 rounded-full text-2xl font-bold tracking-tighter whitespace-nowrap cursor-default transition-colors duration-300 bg-white/50 backdrop-blur-sm"
  >
    {text}
  </motion.div>
);

const SkillsPage = () => {
  return (
    <section
      className="flex flex-col justify-center px-96 py-10 overflow-hidden"
      id="tools"
    >
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-8xl font-black tracking-tighter text-[#1a1a1a]"
        >
          Tools <span className="text-gray-400">&</span> <br />
          <span className="italic font-medium text-gray-400">Expertise</span>
        </motion.h2>
      </div>

      <div className="relative flex flex-col gap-2">
        {/* Top Row - Moving Left */}
        <InfiniteMarquee items={skillsTop} direction={1} />

        {/* Bottom Row - Moving Right */}
        <InfiniteMarquee items={skillsBottom} direction={-1} />

        {/* Decorative Overlay Gradient */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#f2f0ea] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#f2f0ea] to-transparent z-10 pointer-events-none" />
      </div>

      <div className="px-6 md:px-16 mt-20 text-center">
        <p className="text-xl text-gray-600 font-medium leading-relaxed">
          I specialize in building high-performance digital products where
          design meets engineering.
        </p>
      </div>
    </section>
  );
};

export default SkillsPage;
