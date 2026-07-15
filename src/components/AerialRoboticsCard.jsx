import { aerialRoboticsThesis as at } from '../data/content';

export function AerialRoboticsCard() {
  return (
    <div className="border border-slate-800 rounded-xl p-4">
      <div className="font-medium text-slate-200">{at.title}</div>
      <div className="text-sm text-slate-400">
        {at.role} · {at.org}
      </div>
      <div className="text-xs text-slate-500 mt-1">
        Guide: {at.guide} · {at.duration}
      </div>
      <ul className="mt-3 list-disc ml-5 space-y-1 text-sm text-slate-400">
        {at.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
