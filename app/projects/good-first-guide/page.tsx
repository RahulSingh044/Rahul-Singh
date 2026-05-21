import type { Metadata } from "next";
import ProjectDetailHeader from "./ProjectClient";

export const metadata: Metadata = {
  title: "Good First Guide | Rahul Chouhan",

  description:
    "Good First Guide is an intelligent open-source onboarding platform that helps beginners discover beginner-friendly GitHub issues, streamline Git workflows, and contribute seamlessly using VS Code integrations.",

  keywords: [
    "Good First Guide",
    "Open Source Platform",
    "GitHub Contributions",
    "Beginner Friendly Issues",
    "VS Code Integration",
    "Next.js Project",
    "React Project",
    "Rahul Chouhan",
    "Open Source Contributions",
    "Developer Portfolio",
  ],

  openGraph: {
    title: "Good First Guide | Rahul Chouhan",
    description:
      "An intelligent platform helping developers contribute to open source with curated beginner-friendly issues and seamless GitHub workflows.",

    url: "https://rahul-chouhan.vercel.app/projects/good-first-guide",

    siteName: "Rahul Chouhan Portfolio",

    images: [
      {
        url: "/projects/GFG-cover.png",
        width: 1200,
        height: 630,
        alt: "Good First Guide Project Preview",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Good First Guide | Rahul Chouhan",
    description:
      "Open-source onboarding platform with VS Code and GitHub workflow integration.",
    images: ["/projects/GFG-cover.png"],
  },

  alternates: {
    canonical: "https://rahul-chouhan.vercel.app/projects/good-first-guide",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ProjectDetailHeader />;
}
