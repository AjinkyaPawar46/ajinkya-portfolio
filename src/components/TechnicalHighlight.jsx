import { Section } from './layout/Section';
import { technicalHighlight as th } from '../data/content';

export function TechnicalHighlight() {
  return (
    <Section id="autonomous-driving" className="max-w-6xl mx-auto px-6 mb-10">
      <div className="rounded-3xl border-2 border-amber-400/30 bg-gradient-to-br from-red-950/40 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-red-950/40">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">Technical Highlight — Autonomous Racing</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">{th.role}</h2>
        <p className="text-slate-300 mt-1">
          {th.org} · <span className="text-slate-400">{th.duration}</span>
        </p>
        <p className="text-sm text-slate-500 mt-1">Guide: {th.guide}</p>
        <p className="mt-4 text-slate-300 max-w-4xl">{th.summary}</p>

        <div className="mt-6">
          <h3 className="text-sm uppercase tracking-wide text-amber-300 font-semibold mb-3">Impact &amp; Accolades</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {th.impact.map((line, i) => (
              <div key={i} className="text-sm text-slate-200 bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3">
                {line}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm uppercase tracking-wide text-amber-300 font-semibold mb-3">Robotics &amp; Controls</h3>
            <ul className="list-disc ml-5 space-y-2 text-slate-300 text-sm">
              {th.roboticsAndControls.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wide text-amber-300 font-semibold mb-3">Computer Vision</h3>
            <ul className="list-disc ml-5 space-y-2 text-slate-300 text-sm">
              {th.computerVision.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
