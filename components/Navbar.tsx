"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Shuffle from "./Shuffle";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const router = useRouter();

  interface NavItem {
    title: string;
    link?: string;
  }

  const navItems: NavItem[] = [
    { title: "About Me" },
    { title: "Tools" },
    { title: "Projects", link: "/projects" },
    { title: "Contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      // 1. Container expansion
      gsap.to(menuRef.current, {
        height: "auto",
        duration: 0.6,
        ease: "expo.out",
      });

      // 2. The hinged "Swinging" Entrance for the containers
      gsap.fromTo(
        itemsRef.current,
        {
          x: -20,
          rotate: 0,
          opacity: 0,
        },
        {
          x: 0,
          rotate: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: "back.out(2)",
        },
      );
    } else {
      // Collapse
      gsap.to(menuRef.current, {
        height: 56,
        duration: 0.4,
        ease: "power4.inOut",
      });

      gsap.to(itemsRef.current, { opacity: 0, duration: 0.2 });
    }
  }, [isOpen]);

  const redirect = (item: NavItem) => {
    if (item.title === "Projects") {
      router.push(item.link || "/");
    } else {
      router.push(`/#${item.title.toLowerCase().replace(" ", "-")}`);
    }
  };

  return (
    <div
      ref={menuRef}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-80 bg-[#0c0c0c] text-white rounded-[2rem] overflow-hidden shadow-2xl z-50 px-6  border border-white/5"
      style={{ height: "56px" }}
    >
      {/* Header */}
      <div className="flex mt-2 items-center justify-between h-10">
        <span className="text-xl font-bold tracking-tight ml-2">Rahul</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-12 cursor-pointer items-center justify-center bg-white rounded-xl active:scale-90 transition-transform"
        >
          {isOpen ? (
            <span className="text-black text-xl font-bold leading-none">✕</span>
          ) : (
            <div className="flex gap-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-1 w-1 rounded-full bg-black"></div>
              ))}
            </div>
          )}
        </button>
      </div>

      {/* Menu Items with Shuffle Animation */}
      <div className="mt-6 flex flex-col items-start space-y-3 pb-6">
        {navItems.map((item, index) => (
          <div
            key={item.title}
            ref={(el) => {
              if (el) {
                itemsRef.current[index] = el;
              }
            }}
            className="opacity-0"
          >
            <div
              onClick={() => redirect(item)}
              className="inline-block bg-[#f8f6f2] cursor-pointer text-black rounded-xl p-2 shadow-sm hover:bg-white transition-colors"
            >
              <Shuffle
                key={`${item.title}-${isOpen}`}
                text={item.title}
                tag="span"
                className="font-bold text-xl"
                shuffleDirection="down"
                duration={0.4}
                animationMode="random"
                maxDelay={0.1}
                triggerOnce={false}
                triggerOnHover={true}
                onShuffleComplete={undefined}
                colorFrom={undefined}
                colorTo={undefined}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
