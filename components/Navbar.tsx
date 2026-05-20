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

  // Global listener tracking external clicks and keyboard tab indexing
  useEffect(() => {
    const handleOutsideInteraction = (event: MouseEvent | FocusEvent) => {
      // If the menu isn't open, we don't need to check anything
      if (!isOpen) return;

      // If the targeted target element is outside our main wrapper container, fold it away
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Listen to mouse clicks and focus tab movements
    document.addEventListener("mousedown", handleOutsideInteraction);
    document.addEventListener("focusin", handleOutsideInteraction);

    return () => {
      document.removeEventListener("mousedown", handleOutsideInteraction);
      document.removeEventListener("focusin", handleOutsideInteraction);
    };
  }, [isOpen]);

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
    setIsOpen(false); // Clean closure on successful interaction
    if (item.title === "Projects") {
      router.push(item.link || "/");
    } else {
      router.push(`/#${item.title.toLowerCase().replace(" ", "-")}`);
    }
  };

  return (
    <div
      ref={menuRef}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-full lg:max-w-sm max-w-2xs mx-2 bg-[#0c0c0c] text-white rounded-[2rem] overflow-hidden shadow-2xl z-50 px-6 border border-white/5"
      style={{ height: "56px" }}
    >
      {/* Header */}
      <div className="flex mt-2 items-center justify-between h-10">
        <span className="text-xl font-bold tracking-tight ml-2">Rahul</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-8 w-10 lg:h-10 lg:w-12 cursor-pointer items-center justify-center bg-white rounded-xl active:scale-90 transition-transform"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
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
      <div className="flex flex-col items-start py-4 space-y-2 lg:space-y-3 lg:mt-6 lg:pb-6">
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
            {/* Added button semantic details and keyboard listener support */}
            <button
              onClick={() => redirect(item)}
              onKeyDown={(e) => e.key === "Enter" && redirect(item)}
              className="inline-block bg-[#f8f6f2] text-left text-black rounded-xl p-2 shadow-sm hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
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
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
