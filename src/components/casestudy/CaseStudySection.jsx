import { useState } from 'react';
import { Section } from '../layout/Section';
import { CaseStudyCard } from './CaseStudyCard';
import { CaseStudyModal } from './CaseStudyModal';
import { caseStudies } from '../../data/content';

export function CaseStudySection() {
  const [openId, setOpenId] = useState(null);
  const openCaseStudy = caseStudies.find((cs) => cs.id === openId) ?? null;

  return (
    <Section id="work" className="max-w-6xl mx-auto px-6 mb-10">
      <h3 className="text-2xl font-semibold">Case Studies</h3>
      <p className="text-sm text-zinc-500 mt-1">
        Selected work in autonomous driving, robotic manipulation and aerial robotics.
      </p>
      <div className="mt-4 grid md:grid-cols-3 gap-5">
        {caseStudies.map((cs) => (
          <CaseStudyCard key={cs.id} caseStudy={cs} onOpen={() => setOpenId(cs.id)} />
        ))}
      </div>
      <CaseStudyModal caseStudy={openCaseStudy} onClose={() => setOpenId(null)} />
    </Section>
  );
}
