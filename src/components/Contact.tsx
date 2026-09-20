import { personal } from "@/data/portfolio";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const contactItems = [
  {
    icon: "📧",
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: "📱",
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
  },
  {
    icon: "📍",
    label: "Location",
    value: personal.location,
    href: "",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's Work"
        gradientWord="Together"
        subtitle="Have a role or project in mind? Let's connect."
      />

      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
        {contactItems.map((item) => {
          const content = (
            <>
              <div className="text-2xl mb-3">{item.icon}</div>
              <p className="text-xs uppercase tracking-wide text-white/40 mb-1">
                {item.label}
              </p>
              <p className="text-sm text-white/80 break-words">{item.value}</p>
            </>
          );

          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              className="card-surface rounded-2xl p-6 text-center hover:border-indigo-400/30 transition-colors"
            >
              {content}
            </a>
          ) : (
            <div key={item.label} className="card-surface rounded-2xl p-6 text-center">
              {content}
            </div>
          );
        })}
      </div>

      <AnimatedSection className="text-center">
        <a
          href={`mailto:${personal.email}`}
          className="inline-block rounded-lg bg-indigo-500 hover:bg-indigo-400 transition-colors text-white font-medium px-8 py-3"
        >
          Say Hello 👋
        </a>
      </AnimatedSection>
    </section>
  );
}
