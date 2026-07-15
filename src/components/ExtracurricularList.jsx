import { extracurricular } from '../data/content';

export function ExtracurricularList() {
  return (
    <div className="border border-slate-800 rounded-xl p-4">
      <div className="font-medium text-slate-200">Extra-curricular Activities</div>
      <ul className="mt-3 list-disc ml-5 space-y-1 text-sm text-slate-400">
        {extracurricular.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
