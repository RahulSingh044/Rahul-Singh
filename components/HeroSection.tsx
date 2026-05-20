"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.0,
        duration: 0.8,
      },
    },
  };

  const RemainingVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="h-screen w-full flex flex-col archivo-bold items-center overflow-hidden select-none md:px-96">
      {/* Main Content Wrapper */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative h-full flex flex-col items-center justify-between p-14 pt-68 lg:pt-32 lg:p-0 w-full max-w-7xl px-6"
      >
        {/* The Text Block with Relative Badges */}
        <div className="relative flex justify-center items-center my-auto sm:my-0 sm:mt-44 md:mt-24 lg:mt-32 px-6">
          {/* Top Left Star Badge */}
          <motion.div
            variants={RemainingVariants}
            className="absolute -top-6 -left-2 sm:-top-10 sm:-left-12 md:-top-16 md:-left-16"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 100 100"
              className="fill-black drop-shadow-[2px_2px_0px_rgba(0,0,0,0.1)] sm:w-16 sm:h-16 md:w-20 md:h-20"
            >
              <path d="M50 0C50 0 53 35 65 45C77 55 100 50 100 50C100 50 77 55 65 65C53 75 50 100 50 100C50 100 47 75 35 65C23 55 0 50 0 50C0 50 23 45 35 35C47 25 50 0 50 0Z" />
            </svg>
          </motion.div>

          <div className="text-[14.5vw] sm:text-[9vw]  lg:text-[10vw] leading-[0.85] font-black text-[#1a1a1a] uppercase text-center">
            <motion.h1 variants={textVariants}>Software</motion.h1>
            <motion.h1 variants={textVariants}>Engineer</motion.h1>
          </div>

          {/* Bottom Right Lightning Bolt */}
          <motion.div
            variants={RemainingVariants}
            className="absolute -bottom-4 -right-2 sm:-bottom-4 sm:-right-8 md:-bottom-4 md:-right-12 lg:-right-16 transform rotate-12"
          >
            <svg
              width="24"
              height="36"
              viewBox="0 0 40 60"
              className="fill-black drop-shadow-[2px_2px_0px_rgba(0,0,0,0.1)] sm:w-10 sm:h-14 md:w-14 md:h-20"
            >
              <path d="M25 0L0 35H15L10 60L35 25H20L25 0Z" />
            </svg>
          </motion.div>
        </div>

        {/* Dynamic Footer Area */}
        <div className="w-full flex flex-col justify-end mt-auto sm:mt-0 pb-4 sm:pb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-4">
            <motion.span
              variants={RemainingVariants}
              className="hidden lg:block md:text-6xl font-bolder text-black opacity-80 tracking-[0.15em] uppercase shrink-0 mt-2 sm:mt-0"
            >
              ©2026
            </motion.span>

            {/* Center Profile Image Container */}
            <div className="w-full flex flex-col items-center sm:w-auto sm:flex-row sm:gap-6 mx-auto sm:mx-0 sm:grow sm:justify-center">
              <motion.div
                variants={imageVariants}
                className="relative w-44 h-52 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-52 lg:h-60 overflow-hidden rounded-[2rem] sm:rounded-2xl shadow-xl flex-shrink-0"
              >
                <Image
                  src="/pfp.jpg"
                  alt="Profile"
                  fill
                  className="object-cover grayscale contrast-125"
                  priority
                />
              </motion.div>
            </div>

            {/* Creating Timestamp Badge */}
            <motion.span
              variants={RemainingVariants}
              className="text-[16px] sm:text-[10px] lg:text-xl font-light text-black opacity-80 tracking-[0.15em] uppercase shrink-0 mt-2 sm:mt-0"
            >
              /CREATING SINCE 2023
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* Subtle Grain Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] contrast-150 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default HeroSection;
