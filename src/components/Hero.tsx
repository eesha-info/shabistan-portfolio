"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personal, stats } from "@/data/portfolio";

function useTypewriter(text: string, start: boolean, speed = 55) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!start) return;
    setOutput("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOutput(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, start, speed]);

  return output;
}

export default function Hero() {
  const name = useTypewriter(personal.name, true, 65);
  const nameDone = name.length === personal.name.length;
  const tagline = useTypewriter(personal.tagline, nameDone, 35);

  return (
    <section
      id="top"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24"
    >
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300 mb-8"
      >
        ✨ {personal.availability}
      </motion.span>

      <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight max-w-4xl">
        Hi, I&apos;m{" "}
        <span className="text-gradient">{name || " "}</span>
      </h1>

      <p className="mt-6 text-lg sm:text-xl text-white/60 min-h-[1.75rem]">
        {tagline}
        <span className="typing-cursor text-indigo-400">|</span>
      </p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="rounded-lg bg-indigo-500 hover:bg-indigo-400 transition-colors text-white font-medium px-6 py-3"
        >
          View My Work →
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-white/15 hover:border-white/30 transition-colors text-white/90 font-medium px-6 py-3"
        >
          Get In Touch
        </a>
        <a
          href={personal.resumeUrl}
          download
          className="rounded-lg border border-white/15 hover:border-white/30 transition-colors text-white/90 font-medium px-6 py-3"
        >
          📄 Download CV
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 flex items-center justify-center gap-10 sm:gap-16"
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</p>
            <p className="text-xs sm:text-sm text-white/50 mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
