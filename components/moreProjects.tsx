"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Project as portfolioProjects } from "../app/projectData";

type props = {
  projectId: string;
};

const MoreProjectsSection = ({ projectId }: props) => {
  const router = useRouter();

  const suggestedProjects = portfolioProjects
    .filter((project) => project.id !== projectId)
    .slice(0, 2);

  return (
    <section className="w-full text-[#1a1a1a] select-none font-sans">
      <div className="mx-auto pt-16 border-t border-black/10">
        {/* --- SECTION HEADER --- */}
        <div className="pb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black"
          >
            More Projects
          </motion.h2>
        </div>

        {/* --- DYNAMIC TWO COLUMN SUGGESTION GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {suggestedProjects.slice(0, 2).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              onClick={() => project.href && router.push(project.href)}
              className="group cursor-pointer flex flex-col w-full"
            >
              {/* Card Image Frame wrapper */}
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-5 transition-transform duration-500 ease-out group-hover:scale-[0.99]">
                <Image
                  src={project.imageSrc}
                  alt={`${project.title} Preview Framework Asset`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              {/* Typography Labels */}
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
    </section>
  );
};

export default MoreProjectsSection;
