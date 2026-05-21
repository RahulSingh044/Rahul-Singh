import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahul-chouhan.vercel.app"),

  title: {
    default: "Rahul Chouhan | Full Stack Developer",
    template: "%s | Rahul Chouhan",
  },

  description:
    "Rahul Chouhan is a Full Stack Developer specializing in MERN, Next.js, TypeScript, AI-powered applications, and scalable web platforms.",

  keywords: [
    "Rahul Chouhan",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "AI Developer",
    "Web Developer Portfolio",
  ],

  authors: [{ name: "Rahul Chouhan" }],
  creator: "Rahul Chouhan",

  openGraph: {
    title: "Rahul Chouhan | Full Stack Developer",
    description:
      "Portfolio showcasing MERN, Next.js, AI projects, scalable applications, and modern web development.",

    url: "http://rahul-chouhan.vercel.app",
    siteName: "Rahul Chouhan Portfolio",

    images: [
      {
        url: "/pfp.jpg",
        width: 1200,
        height: 630,
        alt: "Rahul Chouhan Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rahul Chouhan Portfolio",
    description:
      "MERN, Next.js, TypeScript, AI-powered applications, and scalable systems.",
    images: ["/og-image.png"],
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
    canonical: "http://rahul-chouhan.vercel.app",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full w-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full w-full flex flex-col overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rahul Chouhan",
              url: "http://rahul-chouhan.vercel.app",
              sameAs: [
                "https://github.com/RahulSingh044",
                "https://linkedin.com/in/rahul-singh-chouhan-381b252a9",
              ],
              jobTitle: "Full Stack Developer",
            }),
          }}
        />
      </body>
    </html>
  );
}
