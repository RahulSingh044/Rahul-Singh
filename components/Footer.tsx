"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Animation settings
const DURATION = 0.3;
const STAGGER = 0.025;

interface LinkItem {
  title: string;
  link?: string;
}

interface AnimatedLinkProps {
  item: LinkItem;
  onNavigate: (item: LinkItem) => void;
}

const AnimatedLink = ({ item, onNavigate }: AnimatedLinkProps) => {
  return (
    <motion.button
      onClick={() => onNavigate(item)}
      initial="initial"
      whileHover="hover"
      className="relative block overflow-hidden whitespace-nowrap bg-[#f0f0f0] text-black px-5 py-2 cursor-pointer rounded-xl font-medium"
      style={{
        lineHeight: 1, // Ensures clean vertical alignment
      }}
    >
      <div className="relative">
        {/* First Set: Moves from center to top */}
        <div className="flex">
          {item.title.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { y: 0 },
                hover: { y: "-200%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </div>

        {/* Second Set: Moves from bottom to center */}
        <div className="absolute inset-0 flex">
          {item.title.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { y: "150%" },
                hover: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.button>
  );
};

const Footer = () => {
  const router = useRouter();

  const quickLinks: LinkItem[] = [
    { title: "About Me" },
    { title: "Tools" },
    { title: "Projects", link: "/projects" },
    { title: "Contact" },
    { title: "Works" },
  ];

  const handleRedirect = (item: LinkItem) => {
    if (item.title === "Projects" && item.link) {
      router.push(item.link);
    } else {
      router.push(`/#${item.title.toLowerCase().replace(" ", "-")}`);
    }
  };

  return (
    <footer className="relative w-full bg-[#111111] pt-20 archivo-bold text-white overflow-hidden md:px-96">
      {/* SVG Grain Filter Definition */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComposite operator="in" in2="SourceGraphic" />
        </filter>
      </svg>

      {/* Main Grid Content Area */}
      <div className="max-w-7xl mx-auto grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 items-start px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Left Section */}
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold flex flex-col tracking-tighter leading-[0.9] sm:col-span-2 lg:col-span-1">
          <span>Scaling</span>
          <span>Ideas</span>
          <span>Globally</span>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-gray-400 mb-4 text-xl font-medium tracking-tight">
            /Quick links
          </h3>
          <div className="flex flex-wrap gap-3">
            {quickLinks.map((link) => (
              <AnimatedLink
                key={link.title}
                item={link}
                onNavigate={handleRedirect}
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-gray-400 mb-4 text-xl font-medium tracking-tight">
            /Contact
          </h3>
          <a
            href="mailto:rahulsingh.dev.36@gmail.com"
            className="text-lg hover:text-gray-300 transition-colors break-all underline decoration-white/10 underline-offset-4 hover:decoration-white/30"
          >
            rahulsingh.dev.36@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Large Hero Background Text */}
      <div className="w-full overflow-hidden select-none pointer-events-none mt-12 sm:mt-16">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[30vw] md:text-[18vw] font-black text-[#1c1c1c] leading-[0.75] text-center uppercase tracking-tighter"
          style={{
            marginBottom: "-1vw",
          }}
        >
          Rahul
        </motion.h1>
      </div>
    </footer>
  );
};

export default Footer;
