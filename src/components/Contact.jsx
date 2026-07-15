import { Section } from './layout/Section';
import { profile } from '../data/content';
import cvPDF from '../assets/Ajinkya_Pawar_CV.pdf';

export function Contact() {
  return (
    <Section id="contact" className="max-w-6xl mx-auto px-6 mb-12">
      <h3 className="text-2xl font-semibold">Contact</h3>
      <div className="mt-4 bg-ink-900 border border-line rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="font-medium">{profile.name}</div>
          <div className="text-sm text-zinc-400 mt-1">Senior Undergraduate, IIT Bombay · Incoming M.S. Robotics, University of Michigan</div>
          <div className="text-sm text-zinc-400 mt-2">
            Email: <a href={`mailto:${profile.links.email}`} className="text-accent">{profile.links.email}</a>
          </div>
          <div className="text-sm text-zinc-400">
            GitHub: <a href={profile.links.github} className="text-accent">{profile.links.github.replace('https://', '')}</a>
          </div>
        </div>
        <div className="flex gap-3">
          <a href={profile.links.linkedin} className="px-4 py-2 rounded-md border border-line text-zinc-100 hover:border-accent hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href={cvPDF} download className="px-4 py-2 rounded-md bg-accent text-ink-950 hover:bg-accent/90 font-medium transition-colors">
            CV (PDF)
          </a>
        </div>
      </div>
    </Section>
  );
}
