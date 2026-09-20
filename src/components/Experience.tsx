import { experience } from "@/data/portfolio";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        eyebrow="Career"
        title="Professional"
        gradientWord="Experience"
        subtitle="My career journey and the projects I've contributed to"
      />

      <div className="space-y-16">
        {experience.map((job) => (
          <div key={job.company}>
            <AnimatedSection className="mb-8">
              <h3 className="text-2xl font-bold text-white">{job.company}</h3>
              <div className="flex flex-wrap items-center gap-3 mt-1 text-white/50 text-sm">
                <span>{job.role}</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span>{job.period}</span>
              </div>
            </AnimatedSection>

            <div className="space-y-6">
              {job.projects.map((project, i) => (
                <AnimatedSection
                  key={project.name}
                  delay={i * 0.08}
                  className="card-surface rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                    <h4 className="text-lg font-semibold text-white">{project.name}</h4>
                    {project.client ? (
                      <span className="text-xs uppercase tracking-wide text-indigo-300">
                        {project.client}
                      </span>
                    ) : null}
                  </div>

                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {project.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm text-white/70 leading-relaxed"
                      >
                        <span className="text-indigo-400 mt-0.5">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-indigo-200 bg-indigo-500/10 border border-indigo-400/20 rounded-full px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
