import { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/Hero';
import { CaseStudySection } from './components/casestudy/CaseStudySection';
import { ProjectsGrid } from './components/ProjectsGrid';
import { Publications } from './components/Publications';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { BeyondTheLab } from './components/BeyondTheLab';
import { Contact } from './components/Contact';

export function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div id="top" className="min-h-screen bg-ink-950 text-zinc-100 antialiased relative">
      <Header />
      <main>
        <Hero />
        <CaseStudySection />
        <ProjectsGrid />
        <Publications />
        <Education />
        <Skills />
        <BeyondTheLab />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
