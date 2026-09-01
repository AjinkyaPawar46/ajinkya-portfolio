import { Section } from './layout/Section';
import { profile } from '../data/content';
import cvPDF from '../assets/Ajinkya_Pawar_CV.pdf';

const ICONS = {
  email: 'M3 7l9 6 9-6M3 7v10a1 1 0 001 1h16a1 1 0 001-1V7a1 1 0 00-1-1H4a1 1 0 00-1 1z',
  github:
    'M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z',
  linkedin:
    'M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.75V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.19 1.45-2.19 2.96V21h-4z',
};

const LINKS = [
  { key: 'email', label: 'Email', value: profile.links.email, href: `mailto:${profile.links.email}` },
  { key: 'linkedin', label: 'LinkedIn', value: 'ajinkya-pawar-ap4630', href: profile.links.linkedin },
  { key: 'github', label: 'GitHub', value: 'AjinkyaPawar46', href: profile.links.github },
];

export function Contact() {
  return (
    <Section id="contact" band="raised">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Get in touch</p>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-zinc-50">
          Let&rsquo;s build something that drives itself.
        </h2>
        <p className="mt-5 text-lg text-zinc-300 leading-relaxed">
          Open to research collaborations and autonomous-driving roles.{' '}
          <span className="text-zinc-400 italic">{profile.tagline}</span>
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-3 gap-4">
        {LINKS.map((l) => (
          <a
            key={l.key}
            href={l.href}
            target={l.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-line bg-ink-850 px-5 py-4 hover:border-accent transition-colors"
          >
            <span className="shrink-0 w-10 h-10 grid place-items-center rounded-lg bg-ink-950 border border-line-soft text-zinc-400 group-hover:text-accent transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill={l.key === 'email' ? 'none' : 'currentColor'} stroke={l.key === 'email' ? 'currentColor' : 'none'} strokeWidth="1.6" aria-hidden="true">
                <path d={ICONS[l.key]} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="min-w-0">
              <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400">
                {l.label}
              </span>
              <span className="block text-sm text-zinc-200 truncate group-hover:text-accent transition-colors">
                {l.value}
              </span>
            </span>
          </a>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href={cvPDF}
          download
          className="px-5 py-2.5 rounded-lg bg-accent text-ink-950 hover:bg-accent/90 font-semibold shadow-glow transition-colors"
        >
          Download CV (PDF)
        </a>
        <p className="text-sm text-zinc-400">
          Senior Undergraduate, IIT Bombay · Incoming M.S. Robotics, University of Michigan
        </p>
      </div>
    </Section>
  );
}
