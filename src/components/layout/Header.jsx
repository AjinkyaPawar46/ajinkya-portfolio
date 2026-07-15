import { useActiveSection } from '../../hooks/useActiveSection';
import cvPDF from '../../assets/Ajinkya_Pawar_CV.pdf';

const NAV_ITEMS = [
  { id: 'autonomous-driving', label: 'Autonomous Driving' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'beyond-the-lab', label: 'More' },
  { id: 'contact', label: 'Contact' },
];

export function Header({ hudEnabled, onToggleHud }) {
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id));

  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-black/30 border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-700 to-amber-400 flex items-center justify-center shadow-lg">
            <span className="font-mono text-sm">AP</span>
          </div>
          <span className="hidden sm:block font-semibold tracking-tight">Ajinkya Pawar</span>
        </a>

        <nav className="hidden lg:flex items-center gap-5 text-sm text-slate-300 overflow-x-auto">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`whitespace-nowrap pb-1 border-b-2 transition-colors ${
                activeId === item.id
                  ? 'text-amber-300 border-amber-300'
                  : 'border-transparent hover:text-slate-100'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onToggleHud}
            className={`px-3 py-1 rounded-md text-xs border ${
              hudEnabled ? 'bg-amber-300/10 border-amber-300 text-amber-300' : 'border-slate-700 text-slate-300'
            }`}
            aria-pressed={hudEnabled}
            title="Toggle HUD"
          >
            {hudEnabled ? 'HUD On' : 'HUD Off'}
          </button>
          <a href={cvPDF} download className="px-3 py-1 rounded-md bg-red-700 hover:bg-red-600 text-white text-sm font-medium">
            CV
          </a>
        </div>
      </div>
    </header>
  );
}
