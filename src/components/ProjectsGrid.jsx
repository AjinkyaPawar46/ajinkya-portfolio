import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Section } from './layout/Section';
import { SectionHeading } from './layout/SectionHeading';
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
    <Section id="projects" band="raised">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Side builds"
          title="Key projects"
          subtitle="Smaller systems built end to end - hardware, vision and control, outside the main research tracks."
        />
        <ProjectFilterBar tags={TAGS} activeTag={activeTag} onSelect={setActiveTag} />
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
