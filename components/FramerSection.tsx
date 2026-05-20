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
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
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
    <section
      ref={sectionRef}
      className="w-full h-screen flex items-center justify-center z-10 md:px-96"
    >
      <p
        ref={textRef}
        className="text-2xl md:text-3xl lg:text-[2.5rem] font-medium text-center lg:max-w-200 text-black/15 px-4"
      >
        {text.split(" ").map((word, i) => (
          <span
            key={i}
            className="word tracking-tighter mr-1 lg:mr-2.5 inline-block font-serif"
          >
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
