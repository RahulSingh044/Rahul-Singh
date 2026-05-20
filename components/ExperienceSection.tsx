"use client";

import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 md:px-96 flex items-center justify-center font-sans mb-10">
      {/* Centered responsive container */}
      <div className="w-full max-w-5xl mx-auto" id="works">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-[#1a1a1a]">
            Work <span className="text-gray-400">/</span>{" "}
            <span className="text-gray-400 font-medium italic">Experience</span>
          </h2>
        </motion.div>

        {/* Experience Card */}
        <div className="bg-[#FCFCFB] text-[#1A1A1A] rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-[#EBEBE8] flex flex-col gap-6 sm:gap-8">
          {/* Card Header Info */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start md:items-center gap-3 pb-6 border-b border-[#EBEBE8]">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1A1A1A] leading-tight">
                Full-Stack Developer Intern
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-[#70706E] mt-1 font-medium">
                Arinova Studios • Remote
              </p>
            </div>
            <span className="inline-block self-start sm:self-center bg-[#EBEBE8] text-[#4A4A48] text-xs font-mono px-4 py-1.5 rounded-full tracking-wide whitespace-nowrap">
              Dec 2025 — Jan 2026
            </span>
          </div>

          {/* Card Content Grid Split */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Description & Contributions Column */}
            <div className="md:col-span-2 space-y-6">
              {/* Desktop-only longer paragraph description */}
              <p className="hidden md:block text-sm text-[#4A4A48] bg-[#F4F4F1]/60 p-4 rounded-2xl border border-[#EBEBE8]/60 leading-relaxed">
                Built scalable, performance-focused web applications using
                modern JavaScript technologies. Contributed heavily across both
                frontend and backend architectures following production-grade
                engineering practices.
              </p>

              {/* Mobile-only condensed description */}
              <p className="block md:hidden text-xs text-[#4A4A48] leading-relaxed italic">
                Engineered scalable web applications across the frontend and
                backend architectures using modern engineering practices.
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#70706E] mb-3 md:mb-4 pl-1">
                  Key Contributions
                </h4>
                <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-[#333331] leading-relaxed list-none pl-1">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1F7A42] shrink-0"></span>
                    <span>
                      <strong className="text-[#1A1A1A]">
                        Production Architecture:
                      </strong>{" "}
                      Developed apps utilizing{" "}
                      <span className="text-[#1F7A42] font-semibold">
                        Next.js 14
                      </span>
                      , React, and TypeScript.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1F7A42] shrink-0"></span>
                    <span>
                      <strong className="text-[#1A1A1A]">
                        Performance & SEO:
                      </strong>{" "}
                      Optimized frontend rendering strategies to significantly
                      improve application load times.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1F7A42] shrink-0"></span>
                    <span>
                      <strong className="text-[#1A1A1A]">
                        Data Optimization:
                      </strong>{" "}
                      Implemented efficient data-fetching setups using SWR with
                      advanced caching.
                    </span>
                  </li>
                  {/* These deep-dive points show up only on larger viewports to keep mobile scanning swift */}
                  <li className="hidden md:flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1F7A42] shrink-0"></span>
                    <span>
                      <strong className="text-[#1A1A1A]">
                        Secure Backend:
                      </strong>{" "}
                      Engineered secure RESTful APIs with Node.js and
                      Express.js, focusing on strict authentication.
                    </span>
                  </li>
                  <li className="hidden md:flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1F7A42] shrink-0"></span>
                    <span>
                      <strong className="text-[#1A1A1A]">
                        Workflow Integration:
                      </strong>{" "}
                      Actively collaborated in Agile cycles, code reviews, and
                      production bug triage sessions.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Side Stats Panel - Hidden on mobile, completely fleshed out on desktop */}
            <div className="hidden md:flex bg-[#F8F8F6] rounded-2xl p-5 sm:p-6 border border-[#EBEBE8] flex-col justify-between gap-6 h-fit md:h-full">
              <div>
                <h4 className="text-xs font-bold tracking-wider text-[#1A1A1A] uppercase font-mono mb-1">
                  Architecture Stats
                </h4>
                <p className="text-[10px] text-[#70706E] font-mono tracking-widest uppercase mb-6">
                  Stack Distribution
                </p>

                <div className="mb-5">
                  <div className="flex justify-between text-[11px] font-mono mb-1.5">
                    <span className="text-[#4A4A48] tracking-wide">
                      FRONTEND / NEXT.JS
                    </span>
                    <span className="text-[#1F7A42] font-bold">PRO</span>
                  </div>
                  <div className="w-full bg-[#EBEBE8] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#22C55E] h-full rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex justify-between text-[11px] font-mono mb-1.5">
                    <span className="text-[#4A4A48] tracking-wide">
                      BACKEND / NODE.JS
                    </span>
                    <span className="text-[#856404] font-bold">MID</span>
                  </div>
                  <div className="w-full bg-[#EBEBE8] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#EAB308] h-full rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="flex justify-between text-[11px] font-mono mb-1.5">
                    <span className="text-[#4A4A48] tracking-wide">
                      STATE & CACHING
                    </span>
                    <span className="text-[#721C24] font-bold">CORE</span>
                  </div>
                  <div className="w-full bg-[#EBEBE8] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#EF4444] h-full rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Internal Metadata Row */}
              <div className="pt-4 border-t border-[#EBEBE8] grid grid-cols-2 gap-2">
                <div className="border-r border-[#EBEBE8] pr-2 text-left">
                  <p className="text-[9px] font-mono text-[#70706E] uppercase tracking-wider">
                    Duration
                  </p>
                  <p className="text-md font-bold text-[#1A1A1A] mt-0.5">
                    1 Month
                  </p>
                </div>
                <div className="pl-2 text-left">
                  <p className="text-[9px] font-mono text-[#70706E] uppercase tracking-wider">
                    Environment
                  </p>
                  <p className="text-md font-bold text-[#22C55E] mt-0.5">
                    Production
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Footer Meta */}
          <div className="pt-4 border-t border-[#EBEBE8]/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[10px] font-mono text-[#70706E] tracking-widest uppercase">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>Clean Architecture Focus</span>
              <span className="hidden sm:inline">•</span>
              <span>Agile Frameworks</span>
            </div>
            <span className="text-[11px] lowercase tracking-normal text-[#1F7A42] font-sans font-medium bg-[#E8F5E9] px-2.5 py-0.5 rounded-full self-start sm:self-auto">
              @arinova-studios
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
