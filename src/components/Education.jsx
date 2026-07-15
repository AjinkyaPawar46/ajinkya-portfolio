import { Section } from './layout/Section';
import { education, achievements } from '../data/content';

export function Education() {
  return (
    <Section id="education" className="max-w-6xl mx-auto px-6 mb-10">
      <h3 className="text-2xl font-semibold">Education</h3>
      <div className="mt-4 space-y-4">
        {education.map((ed, i) => (
          <div key={i} className="bg-ink-900 border border-line rounded-2xl p-6">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <div className="text-lg font-medium">
                  {ed.institution}
                  {ed.note && <span className="ml-2 text-xs align-middle px-2 py-0.5 rounded-full border border-accent/40 text-accent font-mono">{ed.note}</span>}
                </div>
                <div className="text-sm text-zinc-400 mt-1">
                  {ed.degree} · {ed.years}
                </div>
                {ed.minor && <div className="text-sm text-zinc-500 mt-1">{ed.minor}</div>}
              </div>
              {ed.gpa && <div className="text-sm text-accent font-semibold font-mono">GPA: {ed.gpa}</div>}
            </div>
          </div>
        ))}
      </div>

      <h4 className="text-sm uppercase tracking-wide text-zinc-500 font-mono mt-8 mb-3">Achievements</h4>
      <div className="grid sm:grid-cols-2 gap-3">
        {achievements.map((a, i) => (
          <div key={i} className="bg-ink-900 border border-line rounded-2xl p-4">
            <div className="font-medium text-zinc-100">{a.title}</div>
            <div className="text-sm text-zinc-500 mt-1">{a.detail}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
