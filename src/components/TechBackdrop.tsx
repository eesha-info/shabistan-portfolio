"use client";

import { motion } from "framer-motion";

/**
 * Faint floating tech labels shown behind every section of the site.
 * Positions/sizes are hand-picked (not random) so the layout is stable
 * between server and client renders.
 */
const BADGES = [
  { text: "Java", top: "6%", left: "8%", size: "clamp(2.5rem,6vw,5rem)", rotate: -8, duration: 16 },
  { text: "Spring Boot", top: "16%", left: "68%", size: "clamp(1.75rem,3.4vw,3rem)", rotate: 6, duration: 19 },
  { text: "MuleSoft", top: "3%", left: "42%", size: "clamp(1.5rem,3vw,2.5rem)", rotate: -4, duration: 14 },
  { text: "{ }", top: "28%", left: "4%", size: "clamp(2rem,5vw,4rem)", rotate: 10, duration: 12 },
  { text: "Microservices", top: "38%", left: "78%", size: "clamp(1.25rem,2.4vw,2rem)", rotate: -6, duration: 20 },
  { text: "RESTful API", top: "48%", left: "12%", size: "clamp(1.5rem,2.8vw,2.25rem)", rotate: 4, duration: 17 },
  { text: "Maven", top: "58%", left: "70%", size: "clamp(1.5rem,3vw,2.5rem)", rotate: -10, duration: 15 },
  { text: "Oracle", top: "66%", left: "20%", size: "clamp(1.5rem,3vw,2.5rem)", rotate: 8, duration: 18 },
  { text: "MySQL", top: "76%", left: "60%", size: "clamp(1.5rem,3vw,2.5rem)", rotate: -5, duration: 13 },
  { text: "Jenkins", top: "84%", left: "6%", size: "clamp(1.5rem,2.8vw,2.25rem)", rotate: 6, duration: 21 },
  { text: "</>", top: "88%", left: "82%", size: "clamp(2rem,5vw,4rem)", rotate: -12, duration: 14 },
  { text: "RAML", top: "10%", left: "88%", size: "clamp(1.25rem,2.4vw,2rem)", rotate: 5, duration: 16 },
  { text: "JSON", top: "94%", left: "40%", size: "clamp(1.5rem,2.8vw,2.25rem)", rotate: -6, duration: 19 },
  { text: "Git", top: "22%", left: "92%", size: "clamp(1.5rem,3vw,2.5rem)", rotate: 8, duration: 15 },
  { text: "Azure DevOps", top: "56%", left: "40%", size: "clamp(1.25rem,2.2vw,1.9rem)", rotate: -4, duration: 22 },
];

export default function TechBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none"
    >
      {BADGES.map((badge) => (
        <motion.span
          key={badge.text}
          className="absolute font-mono font-bold text-indigo-200/[0.14] whitespace-nowrap"
          style={{
            top: badge.top,
            left: badge.left,
            fontSize: badge.size,
            rotate: `${badge.rotate}deg`,
          }}
          animate={{ y: [0, -16, 0] }}
          transition={{
            duration: badge.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {badge.text}
        </motion.span>
      ))}
    </div>
  );
}
