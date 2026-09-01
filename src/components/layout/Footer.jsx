import { profile } from '../../data/content';

const LINKS = [
  { label: 'GitHub', href: profile.links.github },
  { label: 'LinkedIn', href: profile.links.linkedin },
  { label: 'Email', href: `mailto:${profile.links.email}` },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line-soft">
      <div className="max-w-rail mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} {profile.name}
          <span className="hidden sm:inline text-zinc-400"> · {profile.tagline}</span>
        </p>
        <nav className="flex items-center gap-5">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              className="text-sm text-zinc-400 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
