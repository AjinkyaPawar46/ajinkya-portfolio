import { Section } from './layout/Section';
import { achievements } from '../data/content';

export function Achievements() {
  return (
    <Section id="achievements" className="max-w-6xl mx-auto px-6 mb-10">
      <h3 className="text-2xl font-semibold">Achievements</h3>
      <div className="mt-4 grid sm:grid-cols-2 gap-3">
        {achievements.map((a, i) => (
          <div key={i} className="bg-slate-800 border border-slate-700 rounded-2xl p-4">
            <div className="font-medium text-slate-100">{a.title}</div>
            <div className="text-sm text-slate-400 mt-1">{a.detail}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
