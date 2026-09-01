import { motion } from 'framer-motion';
import { HeroVideo } from './HeroVideo';
import { profile, researchInterests } from '../data/content';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import cvPDF from '../assets/Ajinkya_Pawar_CV.pdf';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

// Transform only — deliberately NOT opacity. framer-motion applies the
// `hidden` state as an inline style and then animates via rAF, so anything
// faded from opacity:0 stays invisible whenever rAF doesn't run (a
// backgrounded tab, a heavily loaded device, a framer-motion failure). That
// is survivable for a section further down the page, but the hero is the
// first thing anyone sees — it must be readable even if the animation never
// fires. Below-fold reveals in Section.jsx still fade.
const item = {
  hidden: { y: 18 },
  show: { y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative min-h-[88svh] flex overflow-hidden">
      <HeroVideo />

      {/* Three-layer scrim. The flat wash guarantees text contrast everywhere;
          the vertical gradient seats the video into the page below it; the
          horizontal one holds the text column readable on wide screens where
          the subject drifts right. A gradient alone doesn't hold contrast
          reliably over a moving shot. */}
      <div className="absolute inset-0 bg-ink-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/45 to-ink-950/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/20 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-rail mx-auto px-6 sm:px-8 flex flex-col justify-end pb-24 pt-32"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-accent"
        >
          {profile.name} — {profile.role}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-5 text-display font-extrabold text-zinc-50 max-w-4xl text-balance"
        >
          I build perception, planning &amp; control systems for autonomous vehicles.
        </motion.h1>

        <motion.p variants={item} className="mt-6 text-lg text-zinc-300 max-w-2xl leading-relaxed">
          CTO of <span className="text-zinc-100 font-medium">IITB Racing Driverless</span> · Robotics
          research at <span className="text-zinc-100 font-medium">Rutgers ARC Lab</span> · Incoming{' '}
          <span className="text-zinc-100 font-medium">M.S. Robotics, Michigan</span>. My work spans
          NMPC, SLAM, perception and learning-based control for self-driving systems.
        </motion.p>

        <motion.div variants={item} className="mt-7 flex flex-wrap gap-2">
          {researchInterests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1 rounded-full border border-line text-xs text-zinc-300 bg-ink-950/50 backdrop-blur-sm font-mono"
            >
              {interest}
            </span>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
          <a
            href="#work"
            className="px-5 py-2.5 rounded-lg bg-accent text-ink-950 hover:bg-accent/90 font-semibold shadow-glow transition-colors"
          >
            See the work
          </a>
          <a
            href={cvPDF}
            download
            className="px-5 py-2.5 rounded-lg border border-line-strong text-zinc-100 hover:border-accent hover:text-accent bg-ink-950/40 backdrop-blur-sm font-medium transition-colors"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {!prefersReducedMotion && (
        <a
          href="#impact"
          aria-label="Scroll to highlights"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-zinc-400 hover:text-accent transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 animate-cue-bob" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      )}
    </section>
  );
}
