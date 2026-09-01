import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/Hero';
import { ImpactStrip } from './components/ImpactStrip';
import { CaseStudySection } from './components/casestudy/CaseStudySection';
import { ProjectsGrid } from './components/ProjectsGrid';
import { Publications } from './components/Publications';
import { Timeline } from './components/Timeline';
import { Awards } from './components/Awards';
import { Skills } from './components/Skills';
import { BeyondTheLab } from './components/BeyondTheLab';
import { Contact } from './components/Contact';

export function App() {
  return (
    <div id="top" className="min-h-screen bg-ink-950 text-zinc-100 antialiased relative">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[70] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent focus:text-ink-950 focus:font-semibold"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <ImpactStrip />
        <CaseStudySection />
        <Publications />
        <Timeline />
        <Awards />
        <ProjectsGrid />
        <Skills />
        <BeyondTheLab />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
