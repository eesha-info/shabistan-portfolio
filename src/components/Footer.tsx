import { personal } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <p>
          © {new Date().getFullYear()} {personal.name}. Crafted with precision.
        </p>
        <div className="flex items-center gap-6">
          {personal.linkedin ? (
            <a href={personal.linkedin} className="hover:text-white transition-colors">
              LinkedIn
            </a>
          ) : null}
          {personal.github ? (
            <a href={personal.github} className="hover:text-white transition-colors">
              GitHub
            </a>
          ) : null}
          <a href={`mailto:${personal.email}`} className="hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
