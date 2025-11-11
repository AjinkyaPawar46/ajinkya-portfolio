/*
Dark "Ironman" themed portfolio starter (React + Vite + Tailwind)
File: main.jsx
Author: Ajinkya Pawar
*/



import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// -------------------- DATA --------------------
const EDUCATION = {
  degree: 'B.Tech, Metallurgical Engineering & Materials Science (Minor: AI & Data Science)',
  institution: 'Indian Institute of Technology Bombay',
  years: '2022 — 2026',
  gpa: '8.28 / 10'
};

const EXPERIENCE = [
  {
    role: 'Chief Autonomous Systems Officer & Deputy Team Leader',
    org: 'IITB Racing',
    duration: 'Mar 2023 — Present',
    bullets: [
      'Led Level-4 autonomous vehicle division and built India’s first autonomous EV racecar.',
      'Developed NMPC, perception, SLAM, planning and controls for racing stack; 15–20% lap-time gains.',
    ]
  },
  {
    role: 'Robotics Research Intern',
    org: 'Rutgers University (ARC Lab)',
    duration: 'Apr 2025 — Jul 2025',
    bullets: [
      'Transformer-based push prediction & RL push policy for clutter removal — 40% accuracy improvement vs baseline.',
      'Sim-to-real experiments in Isaac Gym; worked with 6-DoF UR5e and grasp pipelines.'
    ]
  },
  {
    role: 'Freelance Teacher',
    org: 'Private / Masterclass',
    duration: 'Jan 2023 — Apr 2025',
    bullets: [
      'Tutored 400+ students in Physics & Chemistry; designed curriculum and lesson plans.'
    ]
  }
];

const PUBLICATIONS = [
  {
    title: 'IIT Bombay Racing Driverless: Autonomous Driving Stack for Formula Student AI',
    note: 'Coauthored — perception, SLAM, path planning and controls',
    link: 'https://arxiv.org/pdf/2408.06113'
  }
];

const PROJECTS = [
  { title: 'Model Predictive Control for Autonomous Driving', desc: 'NMPC + simulator (CARLA/Unreal), path planning, trajectory optimization — applied to reduce lap times.' },
  { title: 'Lighter-Than-Air Drone Localization', desc: 'Localization research for helium-balloon drones in wind / GPS-denied environments (Advisor: Prof. Vivek Sangwan).' },
  { title: 'MCTS + RL Manipulator for Multi-object Retrieval', desc: 'PyBullet simulations, grasp prediction, push policy training.' },
  { title: 'StarTrack — Arduino Star Tracker', desc: 'Dual-axis robotic star tracker with stepper control and calibration routines.' },
  { title: 'Segmentation-based Bokeh', desc: 'Real-time semantic segmentation + GPU optimization for video bokeh effects.' },
  { title: 'Numerical Solver for Kronig–Penney Model (2D/3D)', desc: 'Finite difference solver and band-structure visualization.' }
];

const SKILLS = [
  'Python', 'C++', 'ROS', 'ROS2', 'MATLAB', 'PyTorch', 'PyBullet', 'Gazebo', 'MPC', 'RL', 'SLAM', 'Computer Vision', 'TensorRT'
];

// -------------------- MAIN COMPONENT --------------------
function Main() {
  const [search, setSearch] = useState('');

  const filteredProjects = PROJECTS.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-neutral-900 to-black text-slate-100 antialiased">
      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-red-700 to-amber-400 flex items-center justify-center shadow-lg">
            <span className="font-mono text-lg">AP</span>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Ajinkya Pawar</h1>
            <p className="text-sm text-slate-300">Motion-planning & Controls Engineer · Robotics Researcher</p>
          </div>
        </div>
        <nav className="flex gap-3 text-sm">
          <a href="#education" className="px-3 py-1 rounded-md hover:bg-slate-800">Education</a>
          <a href="#experience" className="px-3 py-1 rounded-md hover:bg-slate-800">Experience</a>
          <a href="#publications" className="px-3 py-1 rounded-md hover:bg-slate-800">Publications</a>
          <a href="#projects" className="px-3 py-1 rounded-md hover:bg-slate-800">Projects</a>
          <a href="#skills" className="px-3 py-1 rounded-md hover:bg-slate-800">Skills</a>
          <a href="#contact" className="px-3 py-1 rounded-md hover:bg-slate-800">Contact</a>
        </nav>
      </header>

      {/* BODY */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* HERO */}
        <section className="bg-gradient-to-r from-slate-800/60 to-slate-900/40 border border-slate-800 rounded-3xl p-8 mb-8 shadow-xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">I build high-performance perception, planning & control systems for robots.</h2>
              <p className="mt-4 text-slate-300 max-w-2xl">CTO — IITB Racing Driverless · Rutgers Research Intern · B.Tech @ IIT Bombay. My work spans MPC, RL, SLAM and aerial robotics.</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/Ajinkya_CV.pdf" className="px-4 py-2 rounded-md bg-red-700 hover:bg-red-600 text-white font-medium">Download CV</a>
                <a href="#projects" className="px-4 py-2 rounded-md border border-slate-700 text-slate-200">See Projects</a>
              </div>
            </div>

            <div className="w-44 h-44 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-700 flex items-center justify-center text-slate-400 shadow-2xl">
              {<img src="/headshot.jpg" alt="Ajinkya" className="rounded-xl"/>}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="mb-8">
          <h3 className="text-2xl font-semibold">Education</h3>
          <div className="mt-4 bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-lg font-medium">{EDUCATION.degree}</div>
                <div className="text-sm text-slate-300 mt-1">{EDUCATION.institution} · {EDUCATION.years}</div>
              </div>
              <div className="text-sm text-amber-300 font-semibold">GPA: {EDUCATION.gpa}</div>
            </div>
            <p className="mt-4 text-slate-400">Minor in Artificial Intelligence & Data Science. Relevant coursework: Machine Learning, Computer Vision, Controls, Robotics.</p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mb-8">
          <h3 className="text-2xl font-semibold">Professional Experience</h3>
          <div className="mt-4 space-y-4">
            {EXPERIENCE.map((e, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium text-lg">{e.role}</div>
                    <div className="text-sm text-slate-300">{e.org} · <span className="text-slate-400">{e.duration}</span></div>
                  </div>
                  <div className="text-sm text-amber-300 font-semibold">Tech & Impact</div>
                </div>
                <ul className="mt-3 list-disc ml-5 text-slate-300 space-y-1">
                  {e.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section id="publications" className="mb-8">
          <h3 className="text-2xl font-semibold">Publications</h3>
          <div className="mt-4 space-y-3">
            {PUBLICATIONS.map((p, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm text-slate-300 mt-1">{p.note}</div>
                </div>
                <a href={p.link} className="text-sm px-3 py-1 rounded-md bg-slate-900 border border-slate-700 text-amber-300">View</a>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">Projects</h3>
            <div className="flex items-center gap-3">
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Filter projects..." className="px-3 py-2 rounded-md bg-slate-900 border border-slate-700 text-slate-300 text-sm" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProjects.map((p, i) => (
              <div key={i} className="p-4 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm text-amber-300">Project</div>
                </div>
                <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mb-8">
          <h3 className="text-2xl font-semibold">Skills</h3>
          <div className="mt-4 bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((s, i) => (
                <span key={i} className="px-3 py-1 rounded-full border border-slate-700 text-sm text-slate-200 bg-slate-900/30">{s}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mb-12">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <div className="mt-4 bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="font-medium">Ajinkya Pawar</div>
              <div className="text-sm text-slate-300 mt-1">Senior Undergraduate, IIT Bombay</div>
              <div className="text-sm text-slate-300 mt-2">Email: <a href="mailto:ajinkya4630@gmail.com" className="text-amber-300">ajinkya4630@gmail.com</a></div>
              <div className="text-sm text-slate-300">GitHub: <a href="https://github.com/AjinkyaPawar46" className="text-amber-300">github.com/AjinkyaPawar46</a></div>
            </div>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/ajinkya-pawar-ap4630/" className="px-4 py-2 rounded-md bg-red-700 hover:bg-red-600 text-white">LinkedIn</a>
              <a href="/Ajinkya_CV.pdf" className="px-4 py-2 rounded-md border border-slate-700 text-amber-300">CV (PDF)</a>
            </div>
          </div>
        </section>

        <footer className="py-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} Ajinkya Pawar — Ironman-inspired portfolio. Built with React + Tailwind.</footer>
      </main>
    </div>
  );
}

// -------------------- RENDER --------------------
createRoot(document.getElementById('root')).render(<Main />);
