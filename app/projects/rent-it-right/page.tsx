import type { Metadata } from "next";
import RentItRightDetail from "./ProjectClient";

export const metadata: Metadata = {
  title: "Rent It Right | Rahul Chouhan",

  description:
    "Rent It Right is a modern rental marketplace backend infrastructure engineered for concurrency-safe booking workflows, JWT-secured multi-role systems, autonomous worker processing, and scalable marketplace operations.",

  keywords: [
    "Rent It Right",
    "Rental Marketplace",
    "Marketplace Backend",
    "Node.js Backend",
    "Express.js",
    "MongoDB",
    "JWT Authentication",
    "Booking System",
    "Concurrency Safe Architecture",
    "Rental Platform",
    "Background Workers",
    "Marketplace Infrastructure",
    "Rahul Chouhan",
  ],

  authors: [{ name: "Rahul Chouhan" }],

  creator: "Rahul Chouhan",

  openGraph: {
    title: "Rent It Right | Rahul Chouhan",

    description:
      "A scalable rental marketplace backend focused on atomic booking validation, JWT security, and autonomous background worker orchestration.",

    url: "https://rahul-chouhan.vercel.app/projects/rent-it-right",

    siteName: "Rahul Chouhan Portfolio",

    images: [
      {
        url: "/projects/RIR-cover.png",
        width: 1200,
        height: 630,
        alt: "Rent It Right Marketplace Architecture Preview",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Rent It Right | Rahul Chouhan",

    description:
      "Marketplace backend platform with concurrency-safe booking systems, JWT security, and automated worker infrastructure.",

    images: ["/projects/RIR-cover.png"],
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
    canonical: "https://rahul-chouhan.vercel.app/projects/rent-it-right",
  },

  category: "technology",
};

export default function Page() {
  return <RentItRightDetail />;
}
