"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollSection = ({ text }: { text: string }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll(".word");
      if (!words) return;

      gsap.to(words, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // Pin starts exactly when section hits the top
          end: "+=200%", // Stay pinned for 2x the screen height
          scrub: 1, // Smoothly follow the scroll (1 second lag for smoothness)
          pin: true, // Lock the section in place
          pinSpacing: true, // Push the next section down
          anticipatePin: 1,
        },
        color: "#000000",
        opacity: 1,
        stagger: 0.1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    // sectionRef must be the full-screen container being pinned
    <section
      ref={sectionRef}
      className="w-full h-screen flex items-center justify-center z-10"
    >
      <p
        ref={textRef}
        className="text-[2.5rem] font-medium text-center max-w-200 text-black/15"
      >
        {text.split(" ").map((word, i) => (
          <span key={i} className="word tracking-tighter mr-2.5 inline-block">
            {word}
          </span>
        ))}
      </p>
    </section>
  );
};

export default function Page() {
  return (
    <>
      <GsapScrollSection text="From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use, driven by clarity, structured systems, and intentional design." />
    </>
  );
}
