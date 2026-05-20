"use client";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Project } from "@/app/projectData";

const projects = Project.slice(1, 3);

const ProjectSection = () => {
  const router = useRouter();

  return (
    // Cleaned up padding and set a max-width with automatic centering
    <div className="w-full mx-auto px-4 sm:px-6 md:px-96 mb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        {/* Left */}
        {/* Removed <br /> to let content flow naturally, adjusted mobile sizing */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0a0a0a]">
          Featured Projects
        </h1>

        {/* Right - Hover Container */}
        <motion.div
          whileHover="hover"
          onClick={() => router.push("/projects")}
          className="flex justify-between items-center gap-3 text-xl sm:text-2xl cursor-pointer group shrink-0"
        >
          <h1 className="group-hover:text-gray-600 transition-colors duration-300 whitespace-nowrap">
            View All Work
          </h1>

          {/* Icon Box */}
          <motion.div
            variants={{
              initial: { backgroundColor: "transparent", color: "#000" },
              hover: { backgroundColor: "#000", color: "#fff" },
            }}
            transition={{ duration: 0.3 }}
            className="w-10 h-10 rounded-lg flex justify-center items-center border border-black overflow-hidden relative shrink-0"
          >
            <motion.div
              variants={{
                initial: { x: 0, y: 0 },
                hover: {
                  x: [0, 25, -25, 0],
                  y: [0, -25, 25, 0],
                },
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                times: [0, 0.4, 0.41, 1],
              }}
            >
              <ArrowUpRight size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Adjusted grid system to collapse nicely from 2 columns down to 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 py-10">
        {projects.map((project) => (
          <motion.div key={project.id} className="group cursor-pointer w-full">
            {/* Image Container */}
            {/* Changed rounded-[2rem] to rounded-2xl/3xl for a more natural look on mobile scales */}
            <div
              onClick={() => router.push(project.href)}
              className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-[2rem] overflow-hidden mb-4 transition-transform duration-500 ease-out group-hover:scale-[0.98]"
            >
              {/* Image with subtle zoom on hover */}
              <motion.img
                src={project.imageSrc}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-1 px-1">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1a1a]">
                {project.title}
              </h3>
              <p className="text-gray-500 font-medium text-base sm:text-lg tracking-tight">
                {project.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
