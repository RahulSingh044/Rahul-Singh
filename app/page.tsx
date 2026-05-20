"use client";
import dynamic from "next/dynamic";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/TestimonialSection";
import FramerSection from "@/components/FramerSection";
import ProjectSection from "@/components/ProjectSection";
import SkillsPage from "@/components/SkillSection";
import ExperienceSection from "@/components/ExperienceSection";

const ActivitySection = dynamic(() => import("@/components/ActivitySection"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className="mb-20">
        <HeroSection />
      </div>
      <div className="mb-20">
        <AboutSection />
      </div>
      <div className="mb-20">
        <FramerSection />
      </div>
      <div className="mb-20">
        <ExperienceSection />
      </div>
      <div className="mb-20">
        <ProjectSection />
      </div>
      <div className="mb-20">
        <SkillsPage />
      </div>
      <div className="mb-20">
        <ActivitySection githubUser="RahulSingh044" />
      </div>
      <div className="mb-20">
        <Testimonials />
      </div>
      <div className="mb-20">
        <ContactSection />
      </div>
    </>
  );
}
