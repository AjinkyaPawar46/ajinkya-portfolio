import { useState } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { MobileNav } from './MobileNav';
import cvPDF from '../../assets/Ajinkya_Pawar_CV.pdf';

const NAV_ITEMS = [
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'journey', label: 'Journey' },
  { id: 'awards', label: 'Awards' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

// Hoisted so it's a stable array identity across renders — useActiveSection's
// effect deps on this array, and a fresh array every render would tear down
// and rebuild the IntersectionObserver on every render.
const NAV_IDS = NAV_ITEMS.map((item) => item.id);

export function Header() {
  const activeId = useActiveSection(NAV_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-ink-950/85 border-b border-line-soft">
        <div className="max-w-rail mx-auto px-6 sm:px-8 py-4 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3 shrink-0 group">
            <span className="w-10 h-10 rounded-lg border border-line bg-ink-850 grid place-items-center group-hover:border-accent transition-colors">
              <span className="font-mono text-sm font-semibold text-accent">AP</span>
            </span>
            <span className="hidden sm:block font-semibold tracking-tight text-zinc-100">
              Ajinkya Pawar
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-sm">
            {NAV_ITEMS.map((navItem) => (
              <a
                key={navItem.id}
                href={`#${navItem.id}`}
                className={`whitespace-nowrap pb-1 border-b-2 transition-colors ${
                  activeId === navItem.id
                    ? 'text-accent border-accent'
                    : 'text-zinc-400 border-transparent hover:text-zinc-100'
                }`}
              >
                {navItem.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={cvPDF}
              download
              className="px-3.5 py-1.5 rounded-lg border border-line-strong text-sm font-medium text-zinc-200 hover:border-accent hover:text-accent transition-colors"
            >
              CV
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="lg:hidden w-9 h-9 grid place-items-center rounded-lg border border-line text-zinc-300 hover:border-accent hover:text-accent transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={NAV_ITEMS}
        activeId={activeId}
      />
    </>
  );
}
