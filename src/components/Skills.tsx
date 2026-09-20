import { skillGroups } from "@/data/portfolio";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Skills &"
        gradientWord="Expertise"
        subtitle="Technologies and tools I work with"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <AnimatedSection
            key={group.category}
            delay={i * 0.05}
            className="card-surface rounded-2xl p-6"
          >
            <h3 className="text-indigo-300 text-sm font-semibold uppercase tracking-wide mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-white/80 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
