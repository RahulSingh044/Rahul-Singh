"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Terminal, Users, Cpu, Layers } from "lucide-react";
import MoreProjectsSection from "@/components/moreProjects";

interface ProjectData {
  id: string;
  title: string;
  category: string;
  year: string;
  liveUrl: string;
  description: string;
  mockupImage: string;
}

const currentProject: ProjectData = {
  id: "2",
  title: "Good First Guide",
  category: "Open Source Platform",
  year: "2025",
  liveUrl: "https://good-first-guide.vercel.app/",
  description:
    "An intelligent platform that helps beginners discover beginner-friendly open source issues, streamline Git workflows, and contribute seamlessly with VS Code integration.",
  mockupImage: "/projects/GFG-cover.png",
};

const ProjectDetailHeader = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  } as const;

  return (
    /* CHANGED: Replaced lg:px-96 with standard side paddings */
    <section className="w-full min-h-screen text-[#1a1a1a] px-4 sm:px-8 md:px-12 select-none bg-[#f2f0ea] pb-40 font-sans">
      {/* CHANGED: Wrapped everything in a centered max-w-7xl boundary container */}
      <div className="max-w-7xl mx-auto">
        {/* ================= HERO HEADER ================= */}
        <div className="pt-20 pb-12 mt-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400 block mb-3">
              {currentProject.category} — {currentProject.year}
            </span>
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              /* CHANGED: Tuned font-size array to scale nicely down to mobile viewports */
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-black uppercase leading-none"
            >
              {currentProject.title}
            </motion.h1>
          </div>

          <motion.a
            whileHover={{ scale: 0.98 }}
            href={currentProject.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-black text-white px-6 py-4 sm:px-8 sm:py-5 rounded-2xl text-base sm:text-lg font-bold tracking-tight shadow-lg hover:bg-[#2a2a2a] transition-colors whitespace-nowrap group self-start md:self-end"
          >
            Launch Live App
            <ArrowUpRight
              size={20}
              className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300"
            />
          </motion.a>
        </div>

        {/* ================= PRIMARY BACKDROP PREVIEW ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          /* CHANGED: Adjusted inner paddings (p-4 sm:p-12 lg:p-16) to ensure the device mockup scales cleanly on mobile */
          className="w-full my-12 bg-blue-500 rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-12 lg:p-16 flex justify-center items-center"
        >
          <div className="w-full max-w-5xl rounded-[1rem] sm:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] lg:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] bg-[#0c0c0e] aspect-[16/10] relative group border border-white/5">
            <div className="absolute top-0 inset-x-0 h-4 bg-transparent flex items-center justify-center pointer-events-none z-20">
              <div className="w-20 h-2.5 bg-black/40 rounded-b-lg border-x border-b border-white/5" />
            </div>
            <Image
              src={currentProject.mockupImage}
              alt="Interface Preview"
              fill
              priority
              /* CHANGED: Added comprehensive sizes attribute for modern Next.js image loading rules */
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1200px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </motion.div>

        {/* ================= BRIEF SUMMARY BLOCK ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-12 border-b border-black/10">
          <h3 className="lg:col-span-4 text-xs font-black uppercase tracking-widest text-gray-400 pt-1">
            The Executive Summary
          </h3>
          <p className="lg:col-span-8 text-xl sm:text-2xl font-semibold tracking-tight text-[#1a1a1a] leading-relaxed">
            {currentProject.description}
          </p>
        </div>

        {/* ================= THE HIGHLIGHT BENTO BLOCKS ================= */}
        <div className="py-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Box 1: Concept */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/60 border border-black/5 p-8 sm:p-10 rounded-[2rem] shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-8">
                <Terminal size={22} />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
                  About the Project
                </h4>
                <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">
                  Good First Guide is an intelligent platform designed to remove
                  the friction new contributors face—such as discovering
                  suitable issues, setting up local environments, and breaking
                  down complex workflows.
                </p>
              </div>
            </motion.div>

            {/* Box 2: Mission */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-black text-white p-8 sm:p-10 rounded-[2rem] shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/10 blur-[80px]" />
              <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center mb-8 z-10">
                <Users size={22} />
              </div>
              <div className="z-10">
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 text-white">
                  Making Open Source Accessible
                </h4>
                <p className="text-gray-300 font-medium text-sm sm:text-base leading-relaxed">
                  Many aspiring developers want to contribute but struggle with
                  messy codebases. We solve this by compiling curated,
                  tailor-made tasks to convert friction into a clean learning
                  path.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ================= SPLIT FEATURE SECTIONS ================= */}
          <div className="space-y-12 sm:space-y-16 pt-12">
            {/* Row 1: Workflow */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start"
            >
              <div className="lg:col-span-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <h4 className="text-sm sm:text-lg font-bold tracking-tight uppercase">
                  Smart Workflows
                </h4>
              </div>
              <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                <h5 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Direct VS Code Ecosystem Integration
                </h5>
                <p className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
                  With direct extension integration and GitHub workflow
                  pipelines, contributors transition seamlessly from browsing
                  issues to compiling production code inside their native editor
                  with minimal ambient setups.
                </p>
              </div>
            </motion.div>

            {/* Row 2: Contributors */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start pt-8 border-t border-black/5"
            >
              <div className="lg:col-span-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <h4 className="text-sm sm:text-lg font-bold tracking-tight uppercase">
                  First Contributions
                </h4>
              </div>
              <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                <h5 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Built specifically for real-world confidence
                </h5>
                <p className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
                  By streamlining heavy architecture setup bottlenecks, the
                  architecture builds framework practical experience spanning
                  community code-reviews, atomic version branching, and
                  continuous validation pipelines.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ================= TECH STACK PANEL ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/40 border border-black/5 rounded-[2rem] p-6 sm:p-8 md:p-12 mt-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <Cpu size={20} className="text-gray-400" />
              <h4 className="text-xs uppercase font-black tracking-widest text-gray-400">
                Technical Foundation
              </h4>
            </div>

            {/* CHANGED: Switch from flat 3-columns to a smart staggered grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-3">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">
                  01 / UI Framework
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "TypeScript"].map((t) => (
                    <span
                      key={t}
                      className="bg-black/5 border border-black/5 px-3 py-1.5 rounded-lg text-sm font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">
                  02 / Engine & Data
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Prisma", "Firebase"].map((t) => (
                    <span
                      key={t}
                      className="bg-black/5 border border-black/5 px-3 py-1.5 rounded-lg text-sm font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CHANGED: Made the third item drop gracefully or fill empty space correctly */}
              <div className="space-y-3 sm:col-span-2 lg:col-span-1">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">
                  03 / Gateways
                </span>
                <div className="flex flex-wrap gap-2">
                  {["GitHub API", "VS Code Extensions"].map((t) => (
                    <span
                      key={t}
                      className="bg-black/5 border border-black/5 px-3 py-1.5 rounded-lg text-sm font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= VISION WRAPPER ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pt-16 max-w-4xl border-t border-black/10 mt-16"
          >
            <h4 className="text-xs uppercase font-black tracking-widest text-gray-400 mb-6 flex items-center gap-2">
              <Layers size={14} /> The Platform Vision
            </h4>
            {/* CHANGED: Fixed text scaling for title and description blocks */}
            <p className="text-xl sm:text-2xl font-bold tracking-tight text-[#1a1a1a] leading-normal mb-6">
              “Every part of Good First Guide is built to transform open-source
              contribution from an intimidating process into an engaging,
              structured learning experience.”
            </p>
            <p className="text-gray-500 font-medium text-sm sm:text-base">
              As contributors grow, the framework scales alongside them—paving
              the track for collaborative integration, analytics compilation,
              and AI assistant routines.
            </p>
          </motion.div>
        </div>

        {/* CHANGED: Passed centered constraint alignment through nested global modules */}
        <MoreProjectsSection projectId={currentProject.id} />
      </div>

      {/* Structural Ambient Noise Background */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] contrast-150 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default ProjectDetailHeader;
