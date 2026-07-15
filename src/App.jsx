import { useEffect, useState } from 'react';
import { HUDParticles } from './components/layout/HUDParticles';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/Hero';
import { TechnicalHighlight } from './components/TechnicalHighlight';
import { ProjectsGrid } from './components/ProjectsGrid';
import { ResearchExperience } from './components/ResearchExperience';
import { Publications } from './components/Publications';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { BeyondTheLab } from './components/BeyondTheLab';
import { Contact } from './components/Contact';

export function App() {
  const [hudEnabled, setHudEnabled] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-slate-900 via-neutral-900 to-black text-slate-100 antialiased relative overflow-hidden">
      <HUDParticles enabled={hudEnabled} />
      <Header hudEnabled={hudEnabled} onToggleHud={() => setHudEnabled((v) => !v)} />
      <main>
        <Hero />
        <TechnicalHighlight />
        <ProjectsGrid />
        <ResearchExperience />
        <Publications />
        <Education />
        <Achievements />
        <Skills />
        <BeyondTheLab />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
