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
      <div className="mt-4 bg-slate-800 border border-slate-700 rounded-2xl p-6 space-y-4">
        {GROUPS.map(({ key, label }) => (
          <div key={key}>
            <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">{label}</div>
            <div className="flex flex-wrap gap-2">
              {skills[key].map((s) => (
                <span key={s} className="px-3 py-1 rounded-full border border-slate-700 text-sm text-slate-200 bg-slate-900/30">
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
