import { motion } from 'framer-motion';
import { HeroVideo } from './HeroVideo';
import { profile, researchInterests } from '../data/content';
import cvPDF from '../assets/Ajinkya_Pawar_CV.pdf';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
      <HeroVideo />

      {/* Two-layer scrim: a flat wash guarantees text contrast everywhere;
          the gradient on top seats the video into the page below it. A
          gradient alone doesn't hold contrast reliably over a moving shot. */}
      <div className="absolute inset-0 bg-ink-950/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-end pb-12"
      >
        <motion.p variants={item} className="text-sm text-accent font-medium tracking-wide uppercase font-mono">
          {profile.role}
        </motion.p>
        <motion.h1 variants={item} className="mt-2 text-3xl sm:text-5xl font-extrabold leading-tight max-w-2xl">
          I build perception, planning &amp; control systems for autonomous vehicles.
        </motion.h1>
        <motion.p variants={item} className="mt-4 text-zinc-300 max-w-2xl">
          CTO — IITB Racing Driverless · Rutgers Research Intern · Incoming M.S. Robotics @ Michigan · B.Tech @
          IIT Bombay. My work spans NMPC, SLAM, perception and learning-based control for self-driving systems.
        </motion.p>

        <motion.div variants={item} className="mt-5 flex flex-wrap gap-2">
          {researchInterests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1 rounded-full border border-line text-xs text-zinc-300 bg-ink-950/40 backdrop-blur-sm font-mono"
            >
              {interest}
            </span>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-6 flex flex-wrap gap-3">
          <a href="#work" className="px-4 py-2 rounded-md bg-accent text-ink-950 hover:bg-accent/90 font-medium transition-colors">
            See Autonomous Driving Work
          </a>
          <a href={cvPDF} download className="px-4 py-2 rounded-md border border-line text-zinc-200 hover:border-accent hover:text-accent backdrop-blur-sm transition-colors">
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
