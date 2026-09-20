import { education } from "@/data/portfolio";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        eyebrow="Academics"
        title="Education"
        gradientWord="Background"
        subtitle="My academic journey"
      />

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {education.map((entry, i) => (
          <AnimatedSection
            key={entry.degree}
            delay={i * 0.08}
            className="card-surface rounded-2xl p-6 text-center"
          >
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="text-white font-semibold mb-1">{entry.degree}</h3>
            <p className="text-sm text-white/50 mb-2">{entry.institution}</p>
            <p className="text-xs text-indigo-300">{entry.period}</p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
