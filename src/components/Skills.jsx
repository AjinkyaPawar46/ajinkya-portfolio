import { Section } from './layout/Section';
import { skills } from '../data/content';

const GROUPS = [
  { key: 'languages', label: 'Programming Languages' },
  { key: 'packages', label: 'Packages & Libraries' },
  { key: 'frameworks', label: 'Frameworks' },
  { key: 'humanLanguages', label: 'Languages' },
];

export function Skills() {
  return (
    <Section id="skills" className="max-w-6xl mx-auto px-6 mb-10">
      <h3 className="text-2xl font-semibold">Skills</h3>
      <div className="mt-4 bg-ink-900 border border-line rounded-2xl p-6 space-y-4">
        {GROUPS.map(({ key, label }) => (
          <div key={key}>
            <div className="text-xs uppercase tracking-wide text-zinc-500 mb-2 font-mono">{label}</div>
            <div className="flex flex-wrap gap-2">
              {skills[key].map((s) => (
                <span key={s} className="px-3 py-1 rounded-full border border-line text-sm text-zinc-300 bg-ink-950/30 font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
