"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DURATION = 0.3;
const STAGGER = 0.025;

// Sub-component for the rolling icon animation
const AnimatedSocialIcon = ({ path, link }: { path: string; link: string }) => {
  const redirect = () => window.open(link, "_blank");

  return (
    <motion.div
      onClick={redirect}
      initial="initial"
      whileHover="hover"
      className="w-12 h-12 bg-gray-200/60 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden relative border border-black/5 shadow-sm"
    >
      <div className="relative h-5 w-5 overflow-hidden">
        {/* Top Icon: center -> top */}
        <motion.svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-black absolute inset-0"
          variants={{
            initial: { y: 0 },
            hover: { y: "-100%" },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <path d={path} />
        </motion.svg>

        {/* Bottom Icon: bottom -> center */}
        <motion.svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-black absolute inset-0"
          variants={{
            initial: { y: "100%" },
            hover: { y: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <path d={path} />
        </motion.svg>
      </div>
    </motion.div>
  );
};

// Character-by-character rolling text animation component
const AnimatedText = ({ title }: { title: string }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative block overflow-hidden whitespace-nowrap text-black text-xl cursor-pointer font-medium"
      style={{ lineHeight: 1 }}
    >
      <div className="relative">
        {/* First Set: Moves from center to top */}
        <div className="flex justify-center items-center">
          {title.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { y: 0 },
                hover: { y: "-200%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </div>

        {/* Second Set: Moves from bottom to center */}
        <div className="absolute inset-0 flex justify-center items-center">
          {title.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { y: "150%" },
                hover: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ContactSection = () => {
  // Form Functional State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", project: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const socials = [
    {
      id: "linkedin",
      link: "https://www.linkedin.com/in/rahul-singh-chouhan-381b252a9",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
    {
      id: "github",
      link: "https://github.com/RahulSingh044",
      path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const tempErrors = { name: "", email: "", project: "" };

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
      valid = false;
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
      valid = false;
    }
    if (!formData.project.trim()) {
      tempErrors.project = "Project summary is required.";
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!data.success) setSubmitStatus("error");
      setSubmitStatus("success");
      setFormData({ name: "", email: "", project: "" });
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-[#f3f0e9] min-h-screen flex items-center justify-center py-20 px-96 overflow-hidden font-sans">
      {/* SVG Grain Filter Definition */}
      <svg className="absolute inset-0 w-0 h-0 pointer-events-none">
        <filter id="bg-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncR type="linear" slope="0.1" />
            <feFuncG type="linear" slope="0.1" />
            <feFuncB type="linear" slope="0.1" />
          </feComponentTransfer>
          <feComposite operator="in" in2="SourceGraphic" />
        </filter>
      </svg>

      {/* Grain Overlay */}
      <div
        id="contact"
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        style={{ filter: "url(#bg-grain)" }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10 max-w-7xl w-full">
        {/* Left Side: Text Content & Social Links */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <h1 className="text-7xl md:text-8xl font-bold tracking-tighter text-[#0a0a0a] mb-4">
              Let’s talk.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-medium max-w-md leading-relaxed">
              Have a project or need help? Fill out the form, and we'll get back
              to you soon.
            </p>
          </div>

          <div className="flex gap-4 mt-12">
            {socials.map((social) => (
              <AnimatedSocialIcon
                key={social.id}
                path={social.path}
                link={social.link}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Dark Form Panel Widget Wrapper */}
        <div className="bg-[#0a0a0a] p-8 md:p-10 rounded-[2rem] shadow-2xl w-full border border-white/5 relative min-h-[500px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {submitStatus === "success" ? (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto border border-green-500/30">
                  <svg
                    className="w-8 h-8 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Message Received
                </h3>
                <p className="text-gray-400 max-w-xs mx-auto text-sm">
                  Thanks for reaching out! I'll review your project details and
                  get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus("idle")}
                  className="text-xs text-gray-500 underline hover:text-white transition-colors pt-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                className="space-y-5"
                layout
              >
                {/* Field: Name */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-gray-400 text-sm font-medium">
                      Name
                    </label>
                    {errors.name && (
                      <span className="text-red-400 text-xs">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    placeholder="Enter your name"
                    className={`w-full bg-[#141414] border rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 transition-all ${
                      errors.name
                        ? "border-red-500/50 focus:ring-red-500/30"
                        : "border-white/10 focus:ring-white/20"
                    }`}
                  />
                </div>

                {/* Field: Email */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-gray-400 text-sm font-medium">
                      Email
                    </label>
                    {errors.email && (
                      <span className="text-red-400 text-xs">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    placeholder="Enter your email"
                    className={`w-full bg-[#141414] border rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 transition-all ${
                      errors.email
                        ? "border-red-500/50 focus:ring-red-500/30"
                        : "border-white/10 focus:ring-white/20"
                    }`}
                  />
                </div>

                {/* Field: Project Details */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-gray-400 text-sm font-medium">
                      Your Project
                    </label>
                    {errors.project && (
                      <span className="text-red-400 text-xs">
                        {errors.project}
                      </span>
                    )}
                  </div>
                  <textarea
                    rows={4}
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    placeholder="Tell us about your project"
                    className={`w-full bg-[#141414] border rounded-2xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 transition-all resize-none ${
                      errors.project
                        ? "border-red-500/50 focus:ring-red-500/30"
                        : "border-white/10 focus:ring-white/20"
                    }`}
                  />
                </div>

                {/* Submit Action Interface Element */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#ededed] h-14 flex justify-center items-center text-black font-bold rounded-xl transition-all hover:bg-white disabled:bg-gray-700 disabled:text-gray-400 cursor-pointer overflow-hidden mt-6 relative"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span className="text-sm font-mono tracking-wider uppercase">
                        Sending...
                      </span>
                    </div>
                  ) : (
                    <AnimatedText title="Submit" />
                  )}
                </button>

                {submitStatus === "error" && (
                  <p className="text-center text-xs text-red-400 mt-2">
                    Something went wrong. Please try again later.
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
