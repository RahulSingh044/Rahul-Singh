"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Project as portfolioProjects } from "../projectData";

const ProjectGridSection = () => {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen text-[#1a1a1a] px-4 sm:px-8 md:px-12 py-20 select-none pb-32">
      {/*
        CHANGED: Added max-w-7xl (or max-w-6xl) and mx-auto to cleanly center the grid on desktop
        without crushing it with massive padding values.
      */}
      <div className="max-w-7xl mx-auto pt-20">
        {/* --- HEADER BLOCK --- */}
        <div className="max-w-xl pb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-black mb-3 leading-tight"
          >
            My Brightest <br /> Creations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-lg sm:text-xl font-medium tracking-tight text-[#3a3a3a]"
          >
            A showcase of my latest projects, highlighting thoughtful design,
            clear strategy, and impactful results.
          </motion.p>
        </div>

        {/* --- DYNAMIC TWO COLUMN GRID --- */}
        {/* CHANGED: Made gap styling scale beautifully based on screen size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-12 gap-y-16 lg:gap-y-24">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              onClick={() => project.href && router.push(project.href)}
              className="group cursor-pointer flex flex-col w-full"
            >
              {/* Image Framer Box Wrapper */}
              {/* CHANGED: Reduced border-radius slightly for smaller mobile devices so it looks crisp */}
              <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-[2rem] overflow-hidden mb-5 transition-transform duration-500 ease-out group-hover:scale-[0.985]">
                {/* Embedded Display Media Rendering */}
                <Image
                  src={project.imageSrc}
                  alt={`${project.title} Preview Frame`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  priority={index < 2} // Optimizes loading for above-the-fold images
                />
              </div>

              {/* Text Layout Meta Labels */}
              <div className="space-y-0.5 pl-1">
                {/* CHANGED: Text sizes now adapt down nicely on mobile viewports */}
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-black">
                  {project.title}
                </h3>
                <p className="text-gray-500 font-bold text-base sm:text-lg tracking-tight">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Structural Ambient Noise Background Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] contrast-150 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default ProjectGridSection;
