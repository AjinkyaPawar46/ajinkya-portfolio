import { Section } from './layout/Section';
import { SectionHeading } from './layout/SectionHeading';
import { skills, caseStudies } from '../data/content';

const GROUPS = [
  { key: 'languages', label: 'Programming Languages' },
  { key: 'packages', label: 'Packages & Libraries' },
  { key: 'frameworks', label: 'Frameworks & Platforms' },
  { key: 'humanLanguages', label: 'Spoken Languages', quiet: true },
];

// Skills that appear in a case study's `tech` list are highlighted, so the
// reader can tell at a glance which of the thirty are backed by shipped
// work rather than coursework. Derived from the case studies themselves, so
// it can't drift out of sync with them.
const PROVEN = new Set(
  caseStudies.flatMap((cs) => cs.tech).map((t) => t.toLowerCase())
);

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Toolkit"
        title="Skills"
        subtitle="Highlighted items are ones used in the case studies above, not just coursework."
      />

      <div className="mt-10 grid md:grid-cols-2 gap-5">
        {GROUPS.map(({ key, label, quiet }) => (
          <div
            key={key}
            className={`rounded-2xl border border-line p-6 ${
              quiet ? 'bg-ink-900/50 md:col-span-2' : 'bg-ink-850 shadow-card'
            }`}
          >
            <h3 className="text-xs uppercase tracking-[0.16em] text-zinc-400 font-mono">{label}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills[key].map((s) => {
                const proven = !quiet && PROVEN.has(s.toLowerCase());
                return (
                  <span
                    key={s}
                    className={`px-3 py-1 rounded-full text-sm font-mono border transition-colors ${
                      proven
                        ? 'border-accent/40 bg-accent/10 text-accent'
                        : 'border-line-soft bg-ink-950/40 text-zinc-300'
                    }`}
                  >
                    {s}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
