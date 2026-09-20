import AnimatedSection from "./AnimatedSection";

export default function SectionHeading({
  eyebrow,
  title,
  gradientWord,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  gradientWord?: string;
  subtitle?: string;
}) {
  return (
    <AnimatedSection className="text-center mb-14">
      <p className="text-sm font-medium tracking-widest uppercase text-indigo-400 mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white">
        {title}{" "}
        {gradientWord ? <span className="text-gradient">{gradientWord}</span> : null}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-white/50 max-w-xl mx-auto">{subtitle}</p>
      ) : null}
    </AnimatedSection>
  );
}
