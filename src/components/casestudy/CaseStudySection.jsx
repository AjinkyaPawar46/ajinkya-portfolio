import { useState } from 'react';
import { SectionHeading } from '../layout/SectionHeading';
import { CaseStudyFeature } from './CaseStudyFeature';
import { CaseStudyModal } from './CaseStudyModal';
import { caseStudies } from '../../data/content';

// Not wrapped in <Section>: each feature band owns its own full-bleed ground
// and padding so they can alternate, which a single shared wrapper can't do.
export function CaseStudySection() {
  const [openId, setOpenId] = useState(null);
  const openCaseStudy = caseStudies.find((cs) => cs.id === openId) ?? null;

  return (
    <section id="work" className="relative z-10">
      <div className="max-w-rail mx-auto px-6 sm:px-8 pt-20 sm:pt-28 pb-4">
        <SectionHeading
          eyebrow="Featured work"
          title="Three systems, built end to end"
          subtitle="Autonomous driving, robotic manipulation and aerial robotics — each one from sensing through to control, on real hardware."
        />
      </div>

      {caseStudies.map((cs, i) => (
        <CaseStudyFeature
          key={cs.id}
          caseStudy={cs}
          index={i}
          onOpen={() => setOpenId(cs.id)}
        />
      ))}

      <CaseStudyModal caseStudy={openCaseStudy} onClose={() => setOpenId(null)} />
    </section>
  );
}
