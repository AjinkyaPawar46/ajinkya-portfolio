import { motion } from 'framer-motion';
import { ArcReactor } from './layout/ArcReactor';
import { profile, researchInterests } from '../data/content';
import headshot from '../assets/headshot.jpg';
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
    <section className="max-w-6xl mx-auto px-6 pt-10 pb-4 relative z-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="bg-gradient-to-r from-slate-800/60 to-slate-900/40 border border-slate-800 rounded-3xl p-8 shadow-xl backdrop-blur-md relative overflow-hidden"
      >
        <div className="absolute right-8 top-8 w-64 h-64 md:w-72 md:h-72 opacity-60 pointer-events-none">
          <ArcReactor />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative">
          <div className="flex-1">
            <motion.p variants={item} className="text-sm text-amber-300 font-medium tracking-wide uppercase">
              {profile.role}
            </motion.p>
            <motion.h1 variants={item} className="mt-2 text-3xl sm:text-4xl font-extrabold leading-tight">
              I build perception, planning &amp; control systems for autonomous vehicles.
            </motion.h1>
            <motion.p variants={item} className="mt-4 text-slate-300 max-w-2xl">
              CTO — IITB Racing Driverless · Rutgers Research Intern · Incoming M.S. Robotics @ Michigan · B.Tech @
              IIT Bombay. My work spans NMPC, SLAM, perception and learning-based control for self-driving systems.
            </motion.p>

            <motion.div variants={item} className="mt-5 flex flex-wrap gap-2">
              {researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 rounded-full border border-slate-700 text-xs text-slate-300 bg-slate-900/40"
                >
                  {interest}
                </span>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-3">
              <a href="#autonomous-driving" className="px-4 py-2 rounded-md bg-red-700 hover:bg-red-600 text-white font-medium">
                See Autonomous Driving Work
              </a>
              <a href={cvPDF} download className="px-4 py-2 rounded-md border border-slate-700 text-slate-200 hover:border-amber-300 hover:text-amber-300">
                Download CV
              </a>
            </motion.div>
          </div>

          <motion.div variants={item} className="w-44 h-44 rounded-xl overflow-hidden border border-slate-700 shadow-2xl relative shrink-0">
            <img src={headshot} alt={profile.name} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
