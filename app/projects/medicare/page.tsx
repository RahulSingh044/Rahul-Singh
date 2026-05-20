"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Server, Shield, Cpu, Layers } from "lucide-react";
import MoreProjectsSection from "@/components/moreProjects";

interface ProjectData {
  title: string;
  category: string;
  liveUrl: string;
  description: string;
  mockupImage: string;
}

const currentProject: ProjectData & { id: string } = {
  id: "4",
  title: "Medi Care",
  category: "Full-Stack Healthcare",
  liveUrl: "https://github.com/RahulSingh044/HOSPITAL_MANAGMENT_SYSTEM",
  description:
    "A scalable and modular hospital operations platform designed to digitize medical workflows, optimize treatment lifecycles, and eliminate scheduling conflicts through intelligent background workers.",
  mockupImage: "/projects/MediCare-cover.png",
};

const HospitalManagementDetail = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  } as const;

  return (
    <section className="w-full min-h-screen text-[#1a1a1a] px-4 sm:px-6 md:px-8 pb-20 font-sans relative">
      {/* Structural layout wrapper to handle flexible scaling up to desktop/ultrawide displays */}
      <div className="max-w-6xl mx-auto">
        {/* ================= HERO HEADER ================= */}
        <div className="pt-20 pb-12 mt-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-gray-400 block mb-3">
              {currentProject.category}
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
          className="w-full my-12 bg-[#3b82f6] rounded-[2.5rem] p-6 sm:p-16 flex justify-center items-center"
        >
          <div className="w-full max-w-5xl rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] bg-[#0c0c0e] aspect-[16/10] relative group border border-white/5">
            <div className="absolute top-0 inset-x-0 h-4 bg-transparent flex items-center justify-center pointer-events-none z-20">
              <div className="w-20 h-2.5 bg-black/40 rounded-b-lg border-x border-b border-white/5" />
            </div>
            <Image
              src={currentProject.mockupImage}
              alt="Hospital Management System Interface Preview"
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
            {/* Box 1: Role-Based Healthcare Management */}
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
                  Role-Based Healthcare Management
                </h4>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Designed a secure multi-tenant architecture isolating
                  workloads for Admins, Doctors, and Patients. The system
                  smoothly balances global staff management tools, customizable
                  clinical diagnostics consultation loops, and self-service
                  practitioner searching for registered patients.
                </p>
              </div>
            </motion.div>

            {/* Box 2: Session Control & Guarded Routing */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-black text-white p-10 rounded-[2rem] shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/10 blur-[80px]" />
              <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center mb-8 z-10">
                <Shield size={22} />
              </div>
              <div className="z-10">
                <h4 className="text-2xl font-bold tracking-tight mb-3 text-white">
                  Session Control & Guarded Routing
                </h4>
                <p className="text-gray-300 font-normal leading-relaxed">
                  Deployed strict JWT state verification tokens fortified by a
                  rapid Redis blocklist database mechanism. This custom
                  configuration secures protected application endpoints,
                  monitors malicious API traffic rates, and instantly secures
                  system data paths upon logout events.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ================= SPLIT FEATURE SECTIONS ================= */}
          <div className="space-y-16 pt-12">
            {/* Row 1: Conflict-Free Consultation Scheduling */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <h4 className="text-lg font-bold tracking-tight uppercase">
                  Treatment Lifecycle
                </h4>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <h5 className="text-3xl font-bold tracking-tight">
                  Conflict-Free Consultation Scheduling
                </h5>
                <p className="text-gray-600 font-medium text-lg leading-relaxed mb-4">
                  Engineered a strict real-time resource validation system
                  preventing parallel overlapping timeslots. The engine
                  coordinates shifting clinician schedules while maintaining
                  uncompromised system state transitions across multiple
                  reservation requests.
                </p>
                {/* Mini technical badge grid inside the split row */}
                <div className="grid grid-cols-2 gap-4 bg-black/5 p-6 rounded-2xl border border-black/5 font-mono text-xs">
                  <div>• Dynamic Practitioner Specialization Maps</div>
                  <div>• Real-Time Consultation State Checks</div>
                  <div>• Historic Diagnosis Log Compounding</div>
                  <div>• Automated Prescription Pipeline Triggers</div>
                </div>
              </div>
            </motion.div>

            {/* Row 2: Distributed Automation Engine */}
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
                  Asynchronous Workers
                </h4>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <h5 className="text-3xl font-bold tracking-tight">
                  Distributed Automation Engine
                </h5>
                <p className="text-gray-600 font-medium text-lg leading-relaxed">
                  Decoupled complex scheduling checks and massive I/O actions
                  from the main runtime execution thread using a dedicated Redis
                  and Celery architecture. The cluster runs unattended
                  background cron-jobs for urgent user reminders, auto-compiles
                  monthly clinician performance metrics, and packages heavy,
                  asynchronous multi-record CSV medical history downloads.
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
                  01 / Client Architecture
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "VueJS",
                    "Bootstrap",
                    "Axios Architecture",
                    "SPA Contexts",
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

              <div className="space-y-3">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">
                  02 / Core API Engine
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Flask Core",
                    "Flask Blueprints",
                    "JWT Middleware",
                    "SQLite Indexing",
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

              <div className="space-y-3">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">
                  03 / Automation Subsystems
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Redis Memory Broker",
                    "Celery Task Nodes",
                    "Cron Polling Workers",
                    "Async CSV Streams",
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
                <li>• Decoupled Modular Flask Blueprint Routes</li>
                <li>• Token Blocklisting State Isolation via Redis</li>
                <li>• Centralized Healthcare Resource Management</li>
              </ul>
            </div>
            <div className="bg-white/60 border border-black/5 p-8 rounded-2xl">
              <span className="text-xs font-bold text-gray-400 uppercase block mb-2">
                Performance Focus
              </span>
              <ul className="space-y-2 font-medium text-sm text-gray-700">
                <li>• Heavy Thread Compute Offloading via Celery Workers</li>
                <li>• Cached Clinician Availability Matrices</li>
                <li>
                  • Scalable Structural Layer Directories for Future Additions
                </li>
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
              “{currentProject.title} was engineered to modernize traditional
              clinical management systems, prioritizing distributed background
              workers, secure token isolation patterns, and decoupled
              application services.”
            </p>
            <p className="text-gray-500 font-medium text-md">
              By shifting resource-intensive analytical operations and automated
              messaging pipelines to isolated queue engines, the application
              preserves continuous uptime and crisp responsiveness for
              administrators, doctors, and patients simultaneously.
            </p>
          </motion.div>
        </div>

        <MoreProjectsSection projectId={currentProject.id} />
      </div>

      {/* Structural Ambient Noise Background */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] contrast-150 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default HospitalManagementDetail;
