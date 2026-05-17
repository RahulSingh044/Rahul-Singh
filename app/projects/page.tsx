"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Project as portfolioProjects } from "../projectData";

const ProjectGridSection = () => {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen text-[#1a1a1a] px-96 py-20 select-none pb-32">
      <div className="mx-auto pt-20">
        {/* --- HEADER BLOCK --- */}
        <div className="max-w-xl pb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-7xl font-black tracking-tight text-black mb-2"
          >
            My Brightest <br /> Creations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-xl font-medium tracking-tight text-[#3a3a3a]"
          >
            A showcase of my latest projects, highlighting thoughtful design,
            clear strategy, and impactful results.
          </motion.p>
        </div>

        {/* --- DYNAMIC TWO COLUMN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1.0],
              }}
              onClick={() => project.href && router.push(project.href)}
              className="group cursor-pointer flex flex-col w-full"
            >
              {/* Image Framer Box Wrapper */}
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 transition-transform duration-500 ease-out group-hover:scale-[0.985]">
                {/* Embedded Display Media Rendering */}
                <Image
                  src={project.imageSrc}
                  alt={`${project.title} Preview Frame`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
              </div>

              {/* Text Layout Meta Labels */}
              <div className="space-y-0.5 pl-2">
                <h3 className="text-3xl font-black tracking-tight text-black">
                  {project.title}
                </h3>
                <p className="text-gray-500 font-bold text-lg tracking-tight">
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
