"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, HardDrive, Layers, ShieldCheck, ArrowUpRight } from "lucide-react";
import MoreProjectsSection from "@/components/moreProjects";

const currentProject = {
  id: "1",
  title: "BrainOS",
  category: "Privacy-First Personal Memory System",
  liveUrl: "https://brain-os-web.vercel.app/",
  year: "Jan 2026 — Present",
  description:
    "A fully on-device personal AI memory system that captures a user's work activity locally, structures useful context from 15+ file types, and makes work history searchable through hybrid retrieval—without sending raw events off the machine.",
  mockupImage: "/projects/BrainOS-cover.png",
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
    <section className="w-full min-h-screen text-[#1a1a1a] px-4 sm:px-8 md:px-12 select-none bg-[#f2f0ea] pb-40 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="pt-20 pb-12 mt-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400 block mb-3">
              {currentProject.category} — {currentProject.year}
            </span>
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
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
            className="flex items-center justify-center gap-3 bg-black text-white px-8 py-5 rounded-2xl text-lg font-bold tracking-tight shadow-lg hover:bg-[#2a2a2a] transition-colors whitespace-nowrap group self-start md:self-end"
          >
            View Source Code
            <ArrowUpRight
              size={20}
              className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300"
            />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full my-12 bg-blue-500 rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-12 lg:p-16 flex justify-center items-center"
        >
          <div className="w-full max-w-5xl rounded-[1rem] sm:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] lg:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] bg-[#0c0c0e] aspect-[16/10] relative group border border-white/5">
            <div className="absolute top-0 inset-x-0 h-4 bg-transparent flex items-center justify-center pointer-events-none z-20">
              <div className="w-20 h-2.5 bg-black/40 rounded-b-lg border-x border-b border-white/5" />
            </div>
            <Image
              src={currentProject.mockupImage}
              alt="BrainOS privacy-first personal memory system preview"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1200px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-12 border-b border-black/10">
          <h3 className="lg:col-span-4 text-xs font-black uppercase tracking-widest text-gray-400 pt-1">
            The Research Brief
          </h3>
          <p className="lg:col-span-8 text-xl sm:text-2xl font-semibold tracking-tight text-[#1a1a1a] leading-relaxed">
            {currentProject.description}
          </p>
        </div>

        <div className="py-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/60 border border-black/5 p-8 sm:p-10 rounded-[2rem] shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-8">
                <HardDrive size={22} />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
                  Private by Default
                </h4>
                <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">
                  BrainOS monitors file-system activity, terminal commands,
                  browser behavior, and application focus sessions. Raw events
                  are stored in a local SQLite database and never leave the
                  machine.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-black text-white p-8 sm:p-10 rounded-[2rem] shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/10 blur-[80px]" />
              <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center mb-8 z-10">
                <ShieldCheck size={22} />
              </div>
              <div className="z-10">
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 text-white">
                  Stateless, Privacy-Aware AI
                </h4>
                <p className="text-gray-300 font-medium text-sm sm:text-base leading-relaxed">
                  The Groq inference layer receives only anonymized,
                  path-stripped file fragments for summarization and embedding
                  generation. It keeps no server-side data beyond
                  authentication.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-12 sm:space-y-16 pt-12">
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
                  Context Preparation
                </h4>
              </div>
              <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                <h5 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Structure-Aware Chunking Across 15+ File Types
                </h5>
                <p className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
                  A language-aware hierarchical chunking engine uses structural
                  extraction and importance scoring to select meaningful
                  segments from formats including Python, JavaScript, SQL, and
                  Markdown—without relying on an ML model for chunk selection.
                </p>
              </div>
            </motion.div>

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
                  Memory Retrieval
                </h4>
              </div>
              <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                <h5 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Searchable Work History, From Multiple Signals
                </h5>
                <p className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
                  Natural-language queries use intent-based routing across SQL
                  temporal queries, FTS5 full-text search, and sqlite-vec vector
                  similarity. Reciprocal Rank Fusion combines the results to
                  surface relevant moments from a user&apos;s work history.
                </p>
              </div>
            </motion.div>
          </div>

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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-3">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">
                  01 / Local Memory
                </span>
                <div className="flex flex-wrap gap-2">
                  {["SQLite", "Local event capture", "Temporal SQL"].map(
                    (technology) => (
                      <span
                        key={technology}
                        className="bg-black/5 border border-black/5 px-3 py-1.5 rounded-lg text-sm font-semibold"
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">
                  02 / Context Processing
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Hierarchical chunking",
                    "Structural extraction",
                    "Importance scoring",
                    "15+ file types",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="bg-black/5 border border-black/5 px-3 py-1.5 rounded-lg text-sm font-semibold"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 sm:col-span-2 lg:col-span-1">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">
                  03 / Search &amp; Inference
                </span>
                <div className="flex flex-wrap gap-2">
                  {["FTS5", "sqlite-vec", "Groq API", "RRF"].map(
                    (technology) => (
                      <span
                        key={technology}
                        className="bg-black/5 border border-black/5 px-3 py-1.5 rounded-lg text-sm font-semibold"
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pt-16 max-w-4xl border-t border-black/10 mt-16"
          >
            <h4 className="text-xs uppercase font-black tracking-widest text-gray-400 mb-6 flex items-center gap-2">
              <Layers size={14} /> Design Principle
            </h4>
            <p className="text-xl sm:text-2xl font-bold tracking-tight text-[#1a1a1a] leading-normal mb-6">
              Useful personal memory should remain private, searchable, and
              grounded in the context of a person&apos;s own work.
            </p>
            <p className="text-gray-500 font-medium text-sm sm:text-base">
              BrainOS keeps raw activity on-device and sends only anonymized,
              path-stripped fragments to stateless inference—bringing personal
              AI memory closer to the user&apos;s machine, not a remote data
              store.
            </p>
          </motion.div>
        </div>

        <MoreProjectsSection projectId={currentProject.id} />
      </div>

      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] contrast-150 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "BrainOS",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Local device",
            description: currentProject.description,
            url: "https://rahul-chouhan.vercel.app/projects/brain-os",
            image: "https://rahul-chouhan.vercel.app/projects/BrainOS-cover.png",
          }),
        }}
      />
    </section>
  );
};

export default ProjectDetailHeader;
