import { projects } from "@/data/portfolio";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured"
        gradientWord="Projects"
        subtitle="A selection of projects I've built and contributed to"
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <AnimatedSection
            key={project.name}
            delay={i * 0.08}
            className="card-surface rounded-2xl p-6 sm:p-8 flex flex-col"
          >
            <h3 className="text-lg font-semibold text-white mb-3">{project.name}</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              {project.description}
            </p>

            <ul className="space-y-2 mb-5">
              {project.highlights.map((point) => (
                <li key={point} className="flex gap-2 text-sm text-white/70 leading-relaxed">
                  <span className="text-indigo-400 mt-0.5">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-auto mb-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-indigo-200 bg-indigo-500/10 border border-indigo-400/20 rounded-full px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-300 hover:text-indigo-200 font-medium"
              >
                Live Demo ↗
              </a>
            ) : null}
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
