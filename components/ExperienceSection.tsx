"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const experiences = [
  {
    role: "GPT Intern",
    company: "ADP",
    dates: "Jul 2026 — Sep 2026",
    summary:
      "Owned end-to-end development of a PTO module feature for WFN, spanning frontend and backend across Java microservices.",
    contributions: [
      {
        title: "Backend Development:",
        description:
          "Delivered PTO functionality across 3–4 Java microservices using Spring Boot.",
      },
      {
        title: "UI Migration:",
        description:
          "Built React UI components in MDF with the ADP wrapper for the current-gen to next-gen PTO UI migration.",
      },
      {
        title: "Production Delivery:",
        description:
          "Shipped the feature to production, tested it in pre-production, and fixed 4+ post-release bugs.",
      },
    ],
    stack: [
      "Spring Boot",
      "Java",
      "Microservices",
      "MDF",
      "React",
      "ADP Wrapper",
    ],
    impacts: [
      { value: "3–4", label: "Java microservices" },
      { value: "4+", label: "Post-release bugs fixed" },
    ],
    badge: "@adp",
  },
  {
    role: "MERN Developer",
    company: "Arinova Studios",
    dates: "Dec 2025 — Jan 2026",
    summary:
      "Developed and deployed production-grade web applications, improving performance, API responsiveness, and delivery quality.",
    contributions: [
      {
        title: "Web Applications:",
        description:
          "Built and deployed 2+ production-grade apps with Next.js 14, React, and TypeScript, improving page-load performance by 25% and boosting SEO rankings.",
      },
      {
        title: "Data & APIs:",
        description:
          "Implemented SWR data fetching and caching to cut API latency by 30% for 1K+ monthly active users, and built 10+ secure Node.js/Express endpoints with JWT authentication and authorization.",
      },
      {
        title: "Agile Delivery:",
        description:
          "Collaborated through regular code reviews and Agile practices, reducing bug rates by 20% and accelerating sprint delivery.",
      },
    ],
    stack: [
      "Next.js 14",
      "React",
      "TypeScript",
      "SWR",
      "Node.js",
      "Express.js",
      "JWT",
    ],
    impacts: [
      { value: "25%", label: "Faster page loads" },
      { value: "30%", label: "Lower API latency" },
      { value: "1K+", label: "Monthly active users" },
      { value: "20%", label: "Fewer bugs" },
    ],
    badge: "@arinova-studios",
  },
];

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const experience = experiences[activeIndex];

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + experiences.length) % experiences.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % experiences.length);
  };

  return (
    <div className="min-h-screen py-12 flex items-center justify-center font-sans mb-10">
      <div className="w-[95%] sm:w-[85%] lg:w-[75%] mx-auto" id="works">
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

        <div
          role="region"
          aria-label="Work experience"
          aria-roledescription="carousel"
          className="space-y-5 sm:space-y-6"
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={experience.company}
                aria-label={`${activeIndex + 1} of ${experiences.length}: ${experience.role} at ${experience.company}`}
                aria-roledescription="slide"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25 }}
                className="bg-[#FCFCFB] text-[#1A1A1A] rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-[#EBEBE8] flex flex-col gap-6 sm:gap-8"
              >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start md:items-center gap-3 pb-6 border-b border-[#EBEBE8]">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1A1A1A] leading-tight">
                    {experience.role}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-[#70706E] mt-1 font-medium">
                    {experience.company}
                  </p>
                </div>
                <span className="inline-block self-start sm:self-center bg-[#EBEBE8] text-[#4A4A48] text-xs font-mono px-4 py-1.5 rounded-full tracking-wide whitespace-nowrap">
                  {experience.dates}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="md:col-span-2 space-y-6">
                  <p className="hidden md:block text-sm text-[#4A4A48] bg-[#F4F4F1]/60 p-4 rounded-2xl border border-[#EBEBE8]/60 leading-relaxed">
                    {experience.summary}
                  </p>
                  <p className="block md:hidden text-xs text-[#4A4A48] leading-relaxed italic">
                    {experience.summary}
                  </p>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#70706E] mb-3 md:mb-4 pl-1">
                      Key Contributions
                    </h4>
                    <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-[#333331] leading-relaxed list-none pl-1">
                      {experience.contributions.map((contribution) => (
                        <li
                          key={contribution.title}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1F7A42] shrink-0" />
                          <span>
                            <strong className="text-[#1A1A1A]">
                              {contribution.title}
                            </strong>{" "}
                            {contribution.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <aside className="bg-[#F8F8F6] rounded-2xl p-5 sm:p-6 border border-[#EBEBE8] flex flex-col gap-4">
                  <div>
                    <h4 className="text-xs font-bold tracking-wider text-[#1A1A1A] uppercase font-mono mb-1">
                      Technology Stack
                    </h4>
                    <p className="text-[10px] text-[#70706E] font-mono tracking-widest uppercase mb-4">
                      Tools & Frameworks
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {experience.stack.map((technology) => (
                        <li
                          key={technology}
                          className="bg-white border border-[#EBEBE8] rounded-full px-3 py-1.5 text-xs font-medium text-[#4A4A48]"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>

              <div className="pt-4 border-t border-[#EBEBE8]/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[10px] font-mono text-[#70706E] tracking-widest uppercase">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  {experience.impacts.map((impact) => (
                    <span key={impact.label}>
                      <strong className="text-[#1F7A42]">{impact.value}</strong>{" "}
                      {impact.label}
                    </span>
                  ))}
                </div>
                <span className="text-[11px] lowercase tracking-normal text-[#1F7A42] font-sans font-medium bg-[#E8F5E9] px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                  {experience.badge}
                </span>
              </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2" aria-label="Choose experience">
              {experiences.map((item, index) => (
                <button
                  key={item.company}
                  type="button"
                  aria-label={`Show ${item.company} experience`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-[#1F7A42]"
                      : "w-2.5 bg-[#C9C9C4] hover:bg-[#70706E]"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#70706E]" aria-live="polite">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(experiences.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                aria-label="Previous experience"
                onClick={showPrevious}
                className="w-10 h-10 rounded-full border border-[#DADAD5] flex items-center justify-center text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-white"
              >
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next experience"
                onClick={showNext}
                className="w-10 h-10 rounded-full border border-[#DADAD5] flex items-center justify-center text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-white"
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
