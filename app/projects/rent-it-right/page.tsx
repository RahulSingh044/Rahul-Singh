"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Server, Shield, Cpu, Layers } from "lucide-react";
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
  id: "3",
  title: "RentItRight",
  category: "Backend Architecture / Marketplace",
  year: "2026",
  liveUrl: "https://rentitright.vercel.app/",
  description:
    "A modern rental marketplace backend infrastructure built to handle complex multi-role booking workflows, concurrency-safe validation logic, and autonomous background state processing.",
  mockupImage: "/projects/RIR-cover.png",
};

const RentItRightDetail = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  } as const;

  return (
    <section className="w-full min-h-screen text-[#1a1a1a] px-96 select-none pb-20 font-sans">
      {/* ================= HERO HEADER ================= */}
      <div className="pt-20 pb-12 mt-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10">
        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-gray-400 block mb-3">
            {currentProject.category} — {currentProject.year}
          </span>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-black uppercase"
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

      {/* ================= PRIMARY BACKDROP PREVIEW ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full my-12 bg-[#2fb7a4] rounded-[2.5rem] p-6 sm:p-16 flex justify-center items-center"
      >
        <div className="w-full max-w-5xl rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] bg-[#0c0c0e] aspect-[16/10] relative group border border-white/5">
          <div className="absolute top-0 inset-x-0 h-4 bg-transparent flex items-center justify-center pointer-events-none z-20">
            <div className="w-20 h-2.5 bg-black/40 rounded-b-lg border-x border-b border-white/5" />
          </div>
          <Image
            src={currentProject.mockupImage}
            alt="RentItRight System Architecture Diagram Preview"
            fill
            priority
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
          />
        </div>
      </motion.div>

      {/* ================= BRIEF SUMMARY BLOCK ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-black/10">
        <h3 className="lg:col-span-4 text-xs font-black uppercase tracking-widest text-gray-400 pt-1">
          The Engineering Brief
        </h3>
        <p className="lg:col-span-8 text-xl sm:text-2xl font-semibold tracking-tight text-[#1a1a1a] leading-relaxed">
          {currentProject.description}
        </p>
      </div>

      {/* ================= THE HIGHLIGHT BENTO BLOCKS ================= */}
      <div className="py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Box 1: Core Marketplace Infrastructure */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/60 border border-black/5 p-10 rounded-[2rem] shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-8">
              <Server size={22} />
            </div>
            <div>
              <h4 className="text-2xl font-bold tracking-tight mb-3">
                Core Marketplace Infrastructure
              </h4>
              <p className="text-gray-600 font-medium leading-relaxed">
                Designed and engineered a production-ready, modular REST
                architecture using Node.js, Express.js, and MongoDB. The system
                effortlessly coordinates listing management metrics, role-based
                workflows, and distinct user routing pipelines for renters and
                owners alike.
              </p>
            </div>
          </motion.div>

          {/* Box 2: Secure Authentication */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-black text-white p-10 rounded-[2rem] shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/10 blur-[80px]" />
            <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center mb-8 z-10">
              <Shield size={22} />
            </div>
            <div className="z-10">
              <h4 className="text-2xl font-bold tracking-tight mb-3 text-white">
                Authentication & User Boundaries
              </h4>
              <p className="text-gray-300 font-medium leading-relaxed">
                Implemented strict JWT-based communication keys, localized
                routing middleware guards, and robust centralized error
                handlers. This design delivers absolute endpoint security,
                profile management integrity, and strict verification workflows
                across concurrent requests.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= SPLIT FEATURE SECTIONS ================= */}
        <div className="space-y-16 pt-12">
          {/* Row 1: Intelligent Booking Workflow */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <h4 className="text-lg font-bold tracking-tight uppercase">
                Booking Lifecycle
              </h4>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <h5 className="text-3xl font-bold tracking-tight">
                Concurrency-Safe Transaction Logic
              </h5>
              <p className="text-gray-600 font-medium text-lg leading-relaxed mb-4">
                Designed a highly deterministic lifecycle engine driving state
                transitions smoothly between{" "}
                <span className="font-semibold text-black">confirmed</span>,{" "}
                <span className="font-semibold text-black">ongoing</span>,{" "}
                <span className="font-semibold text-black">completed</span>, and{" "}
                <span className="font-semibold text-black">cancelled</span>{" "}
                intervals.
              </p>
              {/* Mini technical badge grid inside the split row */}
              <div className="grid grid-cols-2 gap-4 bg-black/5 p-6 rounded-2xl border border-black/5 font-mono text-xs">
                <div>• Role-Specific Dashboard APIs</div>
                <div>• Conflict Prevention Queries</div>
                <div>• Double-Booking Safeguards</div>
                <div>• Optimized Atomicity Validations</div>
              </div>
            </div>
          </motion.div>

          {/* Row 2: Automated Background Worker System */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8 border-t border-black/5"
          >
            <div className="lg:col-span-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <h4 className="text-lg font-bold tracking-tight uppercase">
                Background Processes
              </h4>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <h5 className="text-3xl font-bold tracking-tight">
                Autonomous Polling Worker Service
              </h5>
              <p className="text-gray-600 font-medium text-lg leading-relaxed">
                To guarantee scaling runtime isolation, I decoupled
                time-sensitive date validations away from the main API thread by
                building a dedicated worker routine. This micro-service watches
                calendar boundaries continuously, automatically shifting
                confirmed records to ongoing status and closing expired active
                contracts asynchronously.
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
          className="bg-white/40 border border-black/5 rounded-[2rem] p-8 md:p-12 mt-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Cpu size={20} className="text-gray-400" />
            <h4 className="text-xs uppercase font-black tracking-widest text-gray-400">
              Technical Foundation
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">
                01 / Runtime Engine
              </span>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "TypeScript"].map((t) => (
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
                02 / Persistence & Security
              </span>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "JWT Auth", "Role-Based Middleware"].map((t) => (
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
                03 / Infrastructure & Tooling
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Docker Containers",
                  "Dedicated Workers",
                  "Postman",
                  "Git / GitHub",
                ].map((t) => (
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

        {/* ================= ARCHITECTURE SUMMARY PANELS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white/60 border border-black/5 p-8 rounded-2xl">
            <span className="text-xs font-bold text-gray-400 uppercase block mb-2">
              Architecture Core Focus
            </span>
            <ul className="space-y-2 font-medium text-sm text-gray-700">
              <li>• Service-Controller Separation of Concerns</li>
              <li>• Centralized Structured Logging & Errors</li>
              <li>• Scalable Structural Layer Directories</li>
            </ul>
          </div>
          <div className="bg-white/60 border border-black/5 p-8 rounded-2xl">
            <span className="text-xs font-bold text-gray-400 uppercase block mb-2">
              Performance Focus
            </span>
            <ul className="space-y-2 font-medium text-sm text-gray-700">
              <li>• Database Field Compounding & Indexing</li>
              <li>• Lean Main Thread Compute offloading</li>
              <li>• Scalable Service Schema Normalization</li>
            </ul>
          </div>
        </div>

        {/* ================= VISION WRAPPER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-16 max-w-4xl border-t border-black/10 mt-16"
        >
          <h4 className="text-xs uppercase font-black tracking-widest text-gray-400 mb-6 flex items-center gap-2">
            <Layers size={14} /> Engineering Mission
          </h4>
          <p className="text-2xl font-bold tracking-tight text-[#1a1a1a] leading-normal mb-6">
            “RentItRight was engineered to transcend elementary CRUD marketplace
            systems, prioritizing database atomicity, automated job intervals,
            and structural decoupling.”
          </p>
          <p className="text-gray-500 font-medium text-md">
            By abstracting temporal tracking operations out to background thread
            pooling, the platform maintains elite API responsiveness while
            guaranteeing absolute consistency for active rental arrangements.
          </p>
        </motion.div>
      </div>

      <MoreProjectsSection projectId={currentProject.id} />

      {/* Structural Ambient Noise Background */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] contrast-150 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default RentItRightDetail;
