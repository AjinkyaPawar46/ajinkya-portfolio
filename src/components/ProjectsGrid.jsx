import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Section } from './layout/Section';
import { ProjectFilterBar } from './ProjectFilterBar';
import { ProjectCard } from './ProjectCard';
import { projects, PROJECT_TAGS } from '../data/content';

const TAGS = ['All', ...PROJECT_TAGS];

export function ProjectsGrid() {
  const [activeTag, setActiveTag] = useState('All');

  const filteredProjects = useMemo(
    () => (activeTag === 'All' ? projects : projects.filter((p) => p.tag === activeTag)),
    [activeTag]
  );

  return (
    <Section id="projects" className="max-w-6xl mx-auto px-6 mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-2xl font-semibold">Key Projects</h3>
        <ProjectFilterBar tags={TAGS} activeTag={activeTag} onSelect={setActiveTag} />
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
