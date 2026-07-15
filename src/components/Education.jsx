import { Section } from './layout/Section';
import { education } from '../data/content';

export function Education() {
  return (
    <Section id="education" className="max-w-6xl mx-auto px-6 mb-10">
      <h3 className="text-2xl font-semibold">Education</h3>
      <div className="mt-4 space-y-4">
        {education.map((ed, i) => (
          <div key={i} className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <div className="text-lg font-medium">
                  {ed.institution}
                  {ed.note && <span className="ml-2 text-xs align-middle px-2 py-0.5 rounded-full border border-amber-300/40 text-amber-300">{ed.note}</span>}
                </div>
                <div className="text-sm text-slate-300 mt-1">
                  {ed.degree} · {ed.years}
                </div>
                {ed.minor && <div className="text-sm text-slate-400 mt-1">{ed.minor}</div>}
              </div>
              {ed.gpa && <div className="text-sm text-amber-300 font-semibold">GPA: {ed.gpa}</div>}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
