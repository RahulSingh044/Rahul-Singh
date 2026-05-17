"use client";
import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.3;
const STAGGER = 0.025;

// 1. Sub-component for the rolling icon animation
const AnimatedSocialIcon = ({ path, link }: { path: string; link: string }) => {
  const redirect = () => window.open(link, "_blank");

  return (
    <motion.div
      onClick={redirect}
      initial="initial"
      whileHover="hover"
      className="w-12 h-12 bg-gray-200/60 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden relative"
    >
      <div className="relative h-5 w-5 overflow-hidden">
        {/* Top Icon: center -> top */}
        <motion.svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-black absolute inset-0"
          variants={{
            initial: { y: 0 },
            hover: { y: "-100%" },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <path d={path} />
        </motion.svg>

        {/* Bottom Icon: bottom -> center */}
        <motion.svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-black absolute inset-0"
          variants={{
            initial: { y: "100%" },
            hover: { y: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <path d={path} />
        </motion.svg>
      </div>
    </motion.div>
  );
};

const AnimatedText = ({ title }: { title: string }) => {
  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      className="relative block overflow-hidden whitespace-nowrap text-black text-xl cursor-pointer font-medium"
      style={{
        lineHeight: 1,
      }}
    >
      <div className="relative">
        {/* First Set: Moves from center to top */}
        <div className="flex">
          {title.split("").map((l, i) => (
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
          {title.split("").map((l, i) => (
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

const ContactSection = () => {
  const socials = [
    {
      id: "linkedin",
      link: "https://www.linkedin.com/in/rahul-singh-chouhan-381b252a9",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
    {
      id: "github",
      link: "https://github.com/RahulSingh044",
      path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    },
  ];

  return (
    <div className="relative bg-[#f3f0e9] min-h-screen flex items-center justify-center py-20 px-96 overflow-hidden font-sans">
      {/* 2. SVG Grain Filter */}
      <svg className="absolute inset-0 w-0 h-0 pointer-events-none">
        <filter id="bg-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncR type="linear" slope="0.1" />
            <feFuncG type="linear" slope="0.1" />
            <feFuncB type="linear" slope="0.1" />
          </feComponentTransfer>
          <feComposite operator="in" in2="SourceGraphic" />
        </filter>
      </svg>

      {/* Grain Overlay */}
      <div
        id="contact"
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ filter: "url(#bg-grain)" }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10 max-w-7xl w-full">
        {/* Left Side: Text & Socials */}
        <div className="flex flex-col h-full justify-between pt-10">
          <div>
            <h1 className="text-7xl md:text-8xl font-bold tracking-tighter text-[#0a0a0a] mb-4">
              Let’s talk.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-medium max-w-md">
              Have a project or need help? Fill out the form, and we'll get back
              to you soon.
            </p>
          </div>

          {/* Corrected Mapping for Social Icons */}
          <div className="flex gap-4 mt-12">
            {socials.map((social) => (
              <AnimatedSocialIcon
                key={social.id}
                path={social.path}
                link={social.link}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Dark Form Card */}
        <div className="bg-[#0a0a0a] p-8 md:p-10 rounded-[2rem] shadow-2xl w-full border border-white/5">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-gray-400 text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-[#141414] border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-400 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#141414] border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-400 text-sm font-medium">
                Your Project
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your project"
                className="w-full bg-[#141414] border border-white/10 rounded-2xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all resize-none"
              />
            </div>

            <motion.div></motion.div>
            <div className="w-full bg-[#ededed] flex justify-center items-center  text-black font-bold py-4 rounded-xl transition-colors mt-4">
              <AnimatedText title="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
