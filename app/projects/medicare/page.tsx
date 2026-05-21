import type { Metadata } from "next";
import HospitalManagementDetail from "./ProjectClient";

export const metadata: Metadata = {
  title: "Medi Care | Rahul Chouhan",

  description:
    "Medi Care is a scalable full-stack healthcare management platform built to digitize hospital workflows, optimize appointment scheduling, secure patient operations, and automate distributed medical processing pipelines.",

  keywords: [
    "Medi Care",
    "Hospital Management System",
    "Healthcare Platform",
    "Flask Project",
    "Vue.js Project",
    "Redis",
    "Celery",
    "JWT Authentication",
    "Medical Scheduling System",
    "Healthcare Automation",
    "Full Stack Healthcare Application",
    "Rahul Chouhan",
  ],

  authors: [{ name: "Rahul Chouhan" }],

  creator: "Rahul Chouhan",

  openGraph: {
    title: "Medi Care | Rahul Chouhan",

    description:
      "A distributed healthcare management system featuring secure JWT authentication, Redis-powered task orchestration, and intelligent medical scheduling workflows.",

    url: "https://rahul-chouhan.vercel.app/projects/medi-care",

    siteName: "Rahul Chouhan Portfolio",

    images: [
      {
        url: "/projects/MediCare-cover.png",
        width: 1200,
        height: 630,
        alt: "Medi Care Hospital Management Platform Preview",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Medi Care | Rahul Chouhan",

    description:
      "Distributed healthcare platform with JWT security, Celery workers, Redis queues, and scalable appointment orchestration.",

    images: ["/projects/MediCare-cover.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://rahul-chouhan.vercel.app/projects/medi-care",
  },

  category: "technology",
};

export default function Page() {
  return <HospitalManagementDetail />;
}
