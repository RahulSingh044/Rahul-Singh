"use client";

import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center font-sans px-96 mb-10">
      <div className="w-full" id="works">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-6xl font-bold tracking-tighter text-[#1a1a1a]">
            Work <span className="text-gray-400">/</span>{" "}
            <span className="text-gray-400 font-medium italic">Experience</span>
          </h2>
        </motion.div>

        <div className="bg-[#FCFCFB] text-[#1A1A1A] rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-[#EBEBE8] flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 pb-6 border-b border-[#EBEBE8]">
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-[#1A1A1A]">
                Full-Stack Developer Intern
              </h3>
              <p className="text-lg text-[#70706E] mt-1 font-medium">
                Arinova Studios • Remote
              </p>
            </div>
            <span className="self-start bg-[#EBEBE8] text-[#4A4A48] text-xs font-mono px-4 py-1.5 rounded-full tracking-wide">
              Dec 2025 — Jan 2026
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-sm text-[#4A4A48] bg-[#F4F4F1]/60 p-4 rounded-2xl border border-[#EBEBE8]/60 leading-relaxed">
                Built scalable, performance-focused web applications using
                modern JavaScript technologies. Contributed heavily across both
                frontend and backend architectures following production-grade
                engineering practices.
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#70706E] mb-4 pl-1">
                  Key Contributions
                </h4>
                <ul className="space-y-4 text-sm text-[#333331] leading-relaxed list-none pl-1">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1F7A42] shrink-0"></span>
                    <span>
                      <strong className="text-[#1A1A1A]">
                        Production Architecture:
                      </strong>{" "}
                      Developed and deployed production-ready applications
                      utilizing{" "}
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
                      improve application load times and discoverability.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1F7A42] shrink-0"></span>
                    <span>
                      <strong className="text-[#1A1A1A]">
                        Data Optimization:
                      </strong>{" "}
                      Implemented efficient data-fetching systems using SWR with
                      advanced caching and revalidation techniques.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1F7A42] shrink-0"></span>
                    <span>
                      <strong className="text-[#1A1A1A]">
                        Secure Backend:
                      </strong>{" "}
                      Engineered secure RESTful APIs with Node.js and
                      Express.js, focusing on strict authentication and data
                      integrity.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1F7A42] shrink-0"></span>
                    <span>
                      <strong className="text-[#1A1A1A]">
                        Workflow Integration:
                      </strong>{" "}
                      Actively collaborated in Agile cycles, code reviews, and
                      debugging sessions to enforce high code maintainability.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#F8F8F6] rounded-2xl p-6 border border-[#EBEBE8] flex flex-col justify-between gap-6">
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

              <div className="pt-4 border-t border-[#EBEBE8] grid grid-cols-2 gap-2 text-center">
                <div className="border-r border-[#EBEBE8] pr-2 text-left">
                  <p className="text-[9px] font-mono text-[#70706E] uppercase tracking-wider">
                    Duration
                  </p>
                  <p className="text-md font-bold text-[#1A1A1A] mt-0.5">
                    1 Months
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

          <div className="pt-4 border-t border-[#EBEBE8]/80 flex flex-wrap justify-between items-center gap-2 text-[10px] font-mono text-[#70706E] tracking-widest uppercase">
            <div className="flex items-center gap-4">
              <span>Clean Architecture Focus</span>
              <span>•</span>
              <span>Agile Frameworks</span>
            </div>
            <span className="text-[11px] lowercase tracking-normal text-[#1F7A42] font-sans font-medium bg-[#E8F5E9] px-2.5 py-0.5 rounded-full">
              @arinova-studios
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
