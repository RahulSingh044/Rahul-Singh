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

const ActivitySection = dynamic(() => import("@/components/ActivitySection"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FramerSection />
      <ProjectSection />
      <ActivitySection githubUser="RahulSingh044" />
      <SkillsPage />
      {/*<Testimonials />*/}
      <ContactSection />
    </>
  );
}
