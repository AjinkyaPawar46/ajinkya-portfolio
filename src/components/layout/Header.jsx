import { useActiveSection } from '../../hooks/useActiveSection';
import cvPDF from '../../assets/Ajinkya_Pawar_CV.pdf';

const NAV_ITEMS = [
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'beyond-the-lab', label: 'More' },
  { id: 'contact', label: 'Contact' },
];

// Hoisted so it's a stable array identity across renders — useActiveSection's
// effect deps on this array, and a fresh array every render would tear down
// and rebuild the IntersectionObserver on every render.
const NAV_IDS = NAV_ITEMS.map((item) => item.id);

export function Header() {
  const activeId = useActiveSection(NAV_IDS);

  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-ink-950/80 border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full border border-line bg-ink-900 flex items-center justify-center">
            <span className="font-mono text-sm text-accent">AP</span>
          </div>
          <span className="hidden sm:block font-semibold tracking-tight">Ajinkya Pawar</span>
        </a>

        <nav className="hidden lg:flex items-center gap-5 text-sm text-zinc-400 overflow-x-auto">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`whitespace-nowrap pb-1 border-b-2 transition-colors ${
                activeId === item.id
                  ? 'text-accent border-accent'
                  : 'border-transparent hover:text-zinc-100'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a href={cvPDF} download className="px-3 py-1 rounded-md border border-line hover:border-accent hover:text-accent text-sm font-medium transition-colors">
            CV
          </a>
        </div>
      </div>
    </header>
  );
}
