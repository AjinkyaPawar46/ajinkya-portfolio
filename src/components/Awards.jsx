import { Section } from './layout/Section';
import { SectionHeading } from './layout/SectionHeading';
import { achievements } from '../data/content';

// Awards are amber throughout — the site-wide rule reserves cyan for
// quantitative/technical values and amber for recognition, so this whole
// section reads as one register.
export function Awards() {
  const featured = achievements.filter((a) => a.featured);
  const rest = achievements.filter((a) => !a.featured);

  return (
    <Section id="awards">
      <SectionHeading
        eyebrow="Recognition"
        title="Honors & awards"
        tone="gold"
        subtitle="Research recognition, international competition results and academic record."
      />

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured.map((a) => (
          <div
            key={a.title}
            className="relative rounded-2xl border border-line bg-ink-850 p-6 shadow-card overflow-hidden hover:border-gold/50 transition-colors"
          >
            <span
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
              aria-hidden="true"
            />
            <span className="font-mono text-2xl font-semibold text-gold leading-none">{a.stat}</span>
            <h3 className="mt-4 font-semibold text-zinc-100 leading-snug">{a.title}</h3>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{a.detail}</p>
          </div>
        ))}
      </div>

      <dl className="mt-5 grid sm:grid-cols-3 gap-5">
        {rest.map((a) => (
          <div
            key={a.title}
            className="rounded-2xl border border-line-soft bg-ink-900/60 px-5 py-4 flex items-baseline gap-3"
          >
            <dt className="sr-only">{a.title}</dt>
            <dd className="font-mono text-base font-semibold text-gold whitespace-nowrap">
              {a.stat}
            </dd>
            <p className="text-sm text-zinc-400 leading-snug">
              <span className="text-zinc-300">{a.title}</span> — {a.detail}
            </p>
          </div>
        ))}
      </dl>
    </Section>
  );
}
