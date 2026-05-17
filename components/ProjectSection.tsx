"use client";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Project } from "@/app/projectData";

const projects = Project.slice(1, 3);

const ProjectSection = () => {
  const router = useRouter();

  return (
    <div className="min-w-screen md:px-96 mb-10">
      <div className="flex justify-between items-end">
        {/* Left */}
        <h1 className="md:text-7xl font-bold tracking-tight text-[#0a0a0a] mb-4">
          Featured <br /> Projects
        </h1>

        {/* Right - Hover Container */}
        <motion.div
          whileHover="hover"
          onClick={() => router.push("/projects")}
          className="flex justify-between items-center gap-3 text-2xl cursor-pointer group"
        >
          <h1 className="group-hover:text-gray-600 transition-colors duration-300">
            View All Work
          </h1>

          {/* Icon Box */}
          <motion.div
            variants={{
              initial: { backgroundColor: "transparent", color: "#000" },
              hover: { backgroundColor: "#000", color: "#fff" },
            }}
            transition={{ duration: 0.3 }}
            className="w-10 h-10 rounded-lg flex justify-center items-center border border-black overflow-hidden relative"
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 py-10 gap-y-12">
        {projects.map((project) => (
          <motion.div key={project.id} className="group cursor-pointer">
            {/* Image Container */}
            <div
              onClick={() => router.push(project.href)}
              className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 transition-transform duration-500 ease-out group-hover:scale-[0.98]"
              // style={{ backgroundColor: project.color }}
            >
              {/* Image with subtle zoom on hover */}
              <motion.img
                src={project.imageSrc}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-1 ml-2">
              <h3 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">
                {project.title}
              </h3>
              <p className="text-gray-500 font-medium text-lg tracking-tight">
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
