import { courses } from '../data/content';

const GROUPS = [
  { key: 'robotics', label: 'Robotics' },
  { key: 'mlAndCv', label: 'ML & Computer Vision' },
  { key: 'math', label: 'Mathematics' },
];

export function CoursesList() {
  return (
    <div className="border border-line-soft bg-ink-900/40 rounded-xl p-5 space-y-3">
      <div className="font-medium text-zinc-300">Relevant Courses</div>
      {GROUPS.map(({ key, label }) => (
        <div key={key} className="text-sm">
          <span className="text-zinc-300 font-medium">{label}: </span>
          <span className="text-zinc-400">{courses[key].join(', ')}</span>
        </div>
      ))}
    </div>
  );
}
