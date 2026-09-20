import { aboutHighlights, personal } from "@/data/portfolio";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        eyebrow="About"
        title="About"
        gradientWord="Me"
        subtitle="A bit about my journey and what drives me"
      />

      <AnimatedSection className="card-surface rounded-2xl p-6 sm:p-8 mb-10 text-white/70 leading-relaxed">
        {personal.summary}
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {aboutHighlights.map((item, i) => (
          <AnimatedSection
            key={item.title}
            delay={i * 0.06}
            className="card-surface rounded-2xl p-6 hover:border-indigo-400/30 transition-colors"
          >
            <div className="text-3xl mb-4">{item.icon}</div>
            <h3 className="text-white font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
