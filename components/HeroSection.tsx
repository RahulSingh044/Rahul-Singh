"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const HeroSection = () => {
  // 1. Define container variants to orchestrate child animations
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  // 2. Define standard fade-up variants for the text elements
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  // 3. Define the image variant with an explicit delay
  // It waits for both text animations to finish before firing
  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.0, // Adjust this timing if you change text speeds
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
    <div className="h-screen w-full flex flex-col archivo-bold items-center overflow-hidden select-none">
      {/* Main Content Wrapper controlled by Framer Motion */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Ensures it doesn't re-trigger awkwardly on scroll
        className="relative h-full flex flex-col items-center justify-between py-4 w-full max-w-7xl px-4"
      >
        {/* The Text Block */}
        <div className="relative md:mt-52">
          {/* Top Left Star */}
          <motion.div
            variants={RemainingVariants}
            className="absolute -top-12 -left-12 md:-top-16 md:-left-16"
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              className="fill-black drop-shadow-[4px_4px_0px_rgba(0,0,0,0.1)]"
            >
              <path d="M50 0C50 0 53 35 65 45C77 55 100 50 100 50C100 50 77 55 65 65C53 75 50 100 50 100C50 100 47 75 35 65C23 55 0 50 0 50C0 50 23 45 35 35C47 25 50 0 50 0Z" />
            </svg>
          </motion.div>

          <div className="text-[12vw] md:text-[12rem] leading-[0.8] font-extrabold text-[#1a1a1a] uppercase text-center">
            {/* Inherits initial/whileInView states from parent, plays first */}
            <motion.h1 variants={textVariants}>Software</motion.h1>
            {/* Plays second due to staggerChildren */}
            <motion.h1 variants={textVariants}>Engineer</motion.h1>
          </div>

          {/* Bottom Right Lightning Bolt */}
          <motion.div
            variants={RemainingVariants}
            className="absolute -bottom-4 -right-10 md:-right-16 transform rotate-12"
          >
            <svg
              width="60"
              height="80"
              viewBox="0 0 40 60"
              className="fill-black drop-shadow-[4px_4px_0px_rgba(0,0,0,0.1)]"
            >
              <path d="M25 0L0 35H15L10 60L35 25H20L25 0Z" />
            </svg>
          </motion.div>
        </div>

        <div className="w-full h-44 flex justify-between items-end">
          {/* Footer */}
          <motion.span
            variants={RemainingVariants}
            className="text-4xl md:text-6xl font-medium text-black tracking-tighter"
          >
            ©2026
          </motion.span>

          {/* Profile Image (Appears altogether after text ends) */}
          <motion.div
            variants={imageVariants}
            className="relative w-40 h-48 md:w-52 md:h-60 overflow-hidden rounded-2xl shadow-2xl"
          >
            <Image
              src="/pfp.jpg"
              alt="Profile"
              fill
              className="object-cover grayscale contrast-125"
              priority // Good practice for above-the-fold hero images
            />
          </motion.div>

          <motion.span
            variants={RemainingVariants}
            className="text-[10px] md:text-xs font-bold text-black opacity-60 tracking-[0.2em] uppercase"
          >
            /CREATING SINCE 2023
          </motion.span>
        </div>
      </motion.div>

      {/* Subtle Grain Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] contrast-150 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default HeroSection;
