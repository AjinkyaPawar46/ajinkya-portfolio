// Content data for the portfolio site. Components map over these — no copy lives in JSX.

export const profile = {
  name: 'Ajinkya Pawar',
  title: 'Senior Undergraduate, Dept. of Metallurgical Engineering & Materials Science, IIT Bombay',
  tagline: 'Innovation begins where convention ends.',
  role: 'Autonomous Systems & Controls Engineer · Robotics Researcher',
  links: {
    github: 'https://github.com/AjinkyaPawar46',
    linkedin: 'https://www.linkedin.com/in/ajinkya-pawar-ap4630/',
    email: 'ajinkya4630@gmail.com',
    phone: '+91 9920073742',
  },
};

// Hero background video. To swap it: edit the `hero` entry's `src` in
// scripts/media.manifest.mjs, run `npm run media:hero`, and this record
// never needs to change — the output filename stays hero.mp4/-poster.jpg.
export const heroMedia = {
  video: 'media/hero/hero.mp4',
  poster: 'media/hero/hero-poster.jpg',
  alt: "IITB Racing autonomy stack running: cone-detection camera feeds, the bird's-eye planning view, and the E03 driverless car on a cone track",
};

export const researchInterests = [
  'Autonomous Driving',
  'Learning-Based Control',
  'Motion Planning',
  'Computer Vision',
  'Deep Learning',
  'Aerial Robotics',
];

// Degrees live in the `timeline` export at the bottom of this file, not in
// a separate `education` list — one record, so the two can't drift apart.

// `featured: true` items get the large treatment in Awards.jsx; the rest
// render in a compact secondary row. `stat` is the figure pulled out for
// display, `detail` the qualifying line beneath it.
export const achievements = [
  {
    title: "Overall Champions — Formula Student Portugal '26",
    stat: '1st',
    detail:
      "Won both the Driverless Cup and the EV Category as India's 1st and only contingent, plus 1st in the Engineering Design Presentation",
    featured: true,
  },
  {
    title: 'IIT Bombay Undergraduate Research Award',
    stat: '2025',
    detail:
      'For integrated perception pipelines & MPC systems improving autonomous racing reliability',
    featured: true,
  },
  {
    title: 'Jaguar Land Rover cash prize',
    stat: 'JLR',
    detail: 'For pioneering self-driving research & development in electric race-cars',
    featured: true,
  },
  { title: 'JEE Mains', stat: '99.44%-ile', detail: '1M+ candidates' },
  { title: 'JEE Advanced', stat: '98.07%-ile', detail: '150k candidates' },
  {
    title: 'Academic record',
    stat: '25+ AAs/ABs',
    detail: 'Top 15% across 50 courses, incl. Machine Learning, AI & Data Science',
  },
];

// The "proof at a glance" row rendered directly under the hero. Every value
// here already appears in the copy below — this export only decides which
// six lead. `tone` follows the site-wide rule: accent (cyan) for
// quantitative/technical, gold (amber) for recognition.
export const impactStats = [
  { value: '1st', suffix: 'overall', label: "FS Portugal '26 — Driverless & EV", tone: 'gold' },
  { value: '4th', suffix: '/ 25', label: "Formula Student AI '25, UK", tone: 'gold' },
  { value: '100+', label: 'Students led as CTO', tone: 'gold' },
  { value: '15%', label: 'NMPC lap-time gain', tone: 'accent' },
  { value: '100→7', suffix: 'ms', label: 'Detection latency, TensorRT', tone: 'accent' },
  { value: '+40%', label: "Push prediction accuracy, IROS '26", tone: 'accent' },
];

export const publications = [
  {
    authors: 'K. Boyalakuntla, A. Pawar, A. Boluarias, J. Yu',
    title: 'Rapid Object Retrieval from Dense Clutter via Reactive RL Policies',
    venue: 'Submitted to IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2026)',
    link: 'https://cprl-26.github.io',
  },
  {
    authors: 'Y. Rampuria et al.',
    title: 'IIT Bombay Racing Driverless: Autonomous Driving Stack for Formula Student AI',
    venue: 'Contributing author — perception, path planning and controls',
    link: 'https://arxiv.org/pdf/2408.06113',
  },
];

// The featured/spotlight section — kept structurally separate from `projects`.
export const technicalHighlight = {
  role: 'Chief Autonomous Systems Officer & Deputy Team Leader',
  org: 'IITB Racing',
  duration: 'Mar 2023 – Jul 2026',
  guide: 'Prof. Archak Mittal, Civil Engineering, IIT Bombay',
  summary:
    "Leading the Level-4 autonomous vehicle division in a team of 100+ students, representing India as the 1st and only Indian self-driving EV racecar contingent among 80+ teams at IMechE Formula Student AI, United Kingdom.",
  impact: [
    "Secured 1st place overall at Formula Student Portugal '26 — winning both the Driverless Cup and the EV Category",
    "Secured 1st place in the Engineering Design Presentation at FSPT '26, evaluated by AV industry experts",
    "Responsible for India's 1st autonomous EV racecar integrated with vision, SLAM, path planning and controls",
    "Secured 4th place among 25 teams at Formula Student AI '25, a 7-place jump from the previous year",
    "Won 3rd prize in Real World Artificial Intelligence for global AV sector analysis at Formula Student AI '23",
    "Stood Top 5 in Simulation Development and Business Plan Presentation at Formula Student AI '24",
    "Achieved Overall Winner at Formula Bharat '24; Ather Energy System Intelligence award at Formula Bharat '22",
    'Won a cash prize from Jaguar Land Rover for pioneering self-driving research & development in electric race-cars',
  ],
  roboticsAndControls: [
    'Designed and implemented a Nonlinear Model Predictive Controller (NMPC) using a dynamic bicycle model, achieving a 15% lap-time performance gain',
    'Built a high-fidelity CARLA–Unreal Engine simulation environment for testing and validation of the autonomous stack',
    'Developed a path planning framework combining Delaunay Triangulation for visibility graph generation with RRT* for trajectory planning',
    'Reduced cross-track error by 16% by tuning a non-linear pure pursuit controller, validated across 60+ scenarios',
    'Built a ROS-integrated stack on Linux with sensor fusion (LiDAR, Camera, IMU) for robust state estimation',
    'Built a 1/6th scale driverless racecar prototype integrating an STM32 microcontroller with CAN communication',
  ],
  computerVision: [
    'Achieved 22% higher accuracy with a novel depth estimation deep neural network for monocular vision',
    'Reduced object detection and classification latency from 100ms to 7ms with a C++ TensorRT engine for YOLOv5',
    'Implemented LiDAR-based perception with ground removal, DBSCAN clustering and Camera-LiDAR transformation',
  ],
};

// Primary/full-treatment research experience.
export const researchExperience = {
  title: 'Clutter Removal using Transformer-based Push Prediction',
  role: 'Robotics Research Intern',
  org: 'ARC Lab, Computer Science, Rutgers University–New Brunswick',
  guide: 'Prof. Jingjin Yu',
  duration: 'Apr 2025 – Jul 2025',
  bullets: [
    'Preparing a manuscript on "Learning Continuous Non-Prehensile Manipulation for Object Retrieval" from clutter for submission to IROS 2026',
    'Replaced the MLP-based push interaction prediction architecture with a Transformer model, improving accuracy by over 40% and enabling robust generalization to diverse cluttered scenes',
    'Developed a baseline spiral push policy for efficient obstacle clearance and target retrieval, validated through extensive simulations in Isaac Gym and real-world experiments',
    'Performed extensive hyperparameter tuning and ablation studies to evaluate architecture design choices',
    'Explored reinforcement learning approaches for decluttering through end-to-end simulation-trained push policies',
    'Gained hands-on experience with the 6-DoF UR5e robot, deepening understanding of learning-based control methods',
  ],
};

// Secondary — rendered inside BeyondTheLab.
export const aerialRoboticsThesis = {
  title: 'Contact Force Control of Quadcopter-Mounted Aerial Manipulators',
  role: 'Undergraduate Thesis',
  org: 'INDUS Lab, Mechanical Engineering, IIT Bombay',
  guide: 'Prof. Vivek Sangwan',
  duration: 'Jan 2025 – May 2026',
  bullets: [
    'Development and control of an autonomous quadcopter with an under-actuated linked manipulator using ArduPilot',
    'Achieved <2% steady-state error and <5s settling time using precise PID tuning for hover and helical trajectories',
    'Optimized controller gains via MATLAB / Gazebo simulations for outer-loop control with a 10x faster attitude inner-loop',
    'Implemented 3D path planning for drones using splines, optimizing trajectory generation in complex environments',
    'Utilized a VICON camera motion capture system for high-accuracy indoor localization',
    'Redesigned the quadcopter chassis using lightweight carbon-fiber composites, decreasing total weight by 10% and reducing vibration-induced noise',
    'Implementing end-effector contact force control for unmanned applications in disaster management',
  ],
};

export const professionalExperience = {
  role: 'Freelance Teacher',
  org: 'Masterclass, Mumbai',
  duration: 'Jan 2023 – Apr 2025',
  bullets: [
    'Tutored 400+ students, including international students, in Physics and Chemistry for exams like JEE/NEET',
    'Designed and delivered comprehensive lesson plans catering to various learning styles and academic backgrounds',
  ],
};

// Media-rich case studies, rendered as cards on the page that open into a
// full-screen modal. Order is deliberate: Racing leads (autonomous driving +
// leadership + externally validated), Rutgers second (strongest pure-research
// credential — IROS submission, live project page), Aerial thesis third
// (rich media, but overlaps Racing on controls and is promoted out of
// BeyondTheLab mainly for its thesis status). `detail` points at the
// existing bullet-list exports above rather than duplicating their copy.
//
// Media items: { type: 'image' | 'video', src, poster?, caption }. `src` /
// `poster` are paths under public/media/ (no leading slash) — components
// resolve them through mediaUrl(). Aerial media is restricted to the
// verified-clean "safe set" (BTP2 Presentation/ + 5 uniquely-Ajinkya
// figures) — see the plan for the attribution reasoning; do not add media
// from the shared Ajinkya_BTP/DDP__Dhruvi_Joshi figure pool.
export const caseStudies = [
  {
    id: 'iitb-racing',
    title: "India's First Autonomous Racecar",
    role: 'Chief Autonomous Systems Officer & Deputy Team Leader',
    org: 'IITB Racing',
    duration: 'Mar 2023 – Jul 2026',
    guide: 'Prof. Archak Mittal, Civil Engineering, IIT Bombay',
    summary:
      "Leading the Level-4 autonomous vehicle division building India's first autonomous EV racecar — NMPC, SLAM, perception and path planning. Overall Champions at Formula Student Portugal '26 in both the Driverless and EV categories.",
    poster: { src: 'media/racing/e14.webp', alt: 'IITB Racing E11 electric racecar in the pit lane at Formula Student AI, United Kingdom' },
    // The clip that autoplays inline in this case study's feature band.
    // Distinct from `poster` (still used as the modal header image) and from
    // `sections[].media` (the deep-dive gallery).
    featureMedia: {
      src: 'media/racing/dv-accel.mp4',
      poster: 'media/racing/dv-accel-poster.jpg',
      alt: 'The E03 driverless racecar on its acceleration run at Formula Student Portugal, cones lining the floodlit track at dusk',
      portrait: true,
    },
    metrics: [
      { label: "FS Portugal '26 — Driverless + EV", value: '1st', tone: 'gold' },
      { label: 'Lap-time gain', value: '15%' },
      { label: 'Cross-track error', value: '-16%' },
      { label: 'Detection latency', value: '100ms → 7ms' },
    ],
    tech: ['NMPC', 'ROS', 'CARLA', 'RRT*', 'LiDAR', 'TensorRT', 'YOLOv5'],
    detail: technicalHighlight,
    sections: [
      {
        heading: 'The Car',
        body: 'India\'s 1st autonomous EV racecar, integrated with vision, SLAM, path planning and controls — plus a 1/6th-scale driverless prototype used for rapid iteration on the full autonomy stack.',
        media: [
          { type: 'image', fit: 'cover', src: 'media/racing/car.webp', alt: 'E77 driverless racecar with LiDAR and stereo camera sensor stack mounted on the nose', caption: 'E77 driverless car — LiDAR + stereo camera sensor stack' },
          { type: 'image', fit: 'cover', src: 'media/racing/dv-bot.webp', alt: '1/6th scale driverless prototype with Velodyne LiDAR on a cone track', caption: '1/6th-scale prototype on a cone track, Velodyne LiDAR + stereo cams' },
          { type: 'image', fit: 'cover', src: 'media/racing/team.webp', alt: 'IITB Racing driverless team group photo', caption: 'The driverless division team' },
        ],
      },
      {
        heading: 'Planning & Control',
        body: 'A Nonlinear Model Predictive Controller using a dynamic bicycle model for lap-time-optimal trajectory tracking, paired with a Delaunay Triangulation + RRT* path planning framework for real-time adaptability on dynamic tracks.',
        media: [
          { type: 'video', src: 'media/racing/mpc.mp4', poster: 'media/racing/mpc-poster.jpg', alt: 'Nonlinear MPC tracking a racing line through a cone course', caption: 'NMPC tracking the optimal racing line' },
          { type: 'video', src: 'media/racing/mpc-sim.mp4', poster: 'media/racing/mpc-sim-poster.jpg', alt: 'NMPC trajectory tracking simulation', caption: 'NMPC trajectory tracking simulation' },
          { type: 'video', src: 'media/racing/rrt.mp4', poster: 'media/racing/rrt-poster.jpg', alt: 'RRT* path planning simulation', caption: 'RRT* path planning' },
          { type: 'image', src: 'media/racing/delaunay.webp', alt: 'Delaunay triangulation visibility graph diagram', caption: 'Delaunay triangulation visibility graph' },
          { type: 'image', src: 'media/racing/rrt-diagram.webp', alt: 'RRT* algorithm diagram', caption: 'RRT* trajectory planning' },
        ],
      },
      {
        heading: 'Perception',
        body: 'A ROS-integrated perception stack fusing LiDAR, camera and IMU: ground removal, DBSCAN clustering, Camera-LiDAR transformation, and a monocular depth estimation network alongside a TensorRT-optimized YOLOv5 cone detector.',
        media: [
          { type: 'video', src: 'media/racing/bot-run.mp4', poster: 'media/racing/bot-run-poster.jpg', alt: 'Prototype cone-track run using the perception + planning stack', caption: 'Prototype run on the cone track' },
          { type: 'image', src: 'media/racing/fusion-pipeline.webp', alt: 'Sensor fusion pipeline diagram', caption: 'LiDAR–camera sensor fusion pipeline' },
          { type: 'image', src: 'media/racing/stereo-flowchart.webp', alt: 'Stereo vision processing flowchart', caption: 'Stereo vision pipeline' },
          { type: 'image', src: 'media/racing/nn-architecture.webp', alt: 'Depth estimation neural network architecture diagram', caption: 'Monocular depth estimation network' },
          { type: 'image', src: 'media/racing/fastslam.webp', alt: 'FastSLAM predicted vs. ground-truth map comparison', caption: 'FastSLAM: predicted vs. ground-truth map' },
          { type: 'image', src: 'media/racing/graphslam.webp', alt: 'GraphSLAM predicted vs. ground-truth map comparison', caption: 'GraphSLAM: predicted vs. ground-truth map' },
        ],
      },
    ],
    links: [{ label: 'Formula Student AI paper', href: 'https://arxiv.org/pdf/2408.06113' }],
  },
  {
    id: 'rutgers-arc-lab',
    title: 'Rapid Object Retrieval from Dense Clutter',
    role: 'Robotics Research Intern',
    org: 'ARC Lab, Computer Science, Rutgers University–New Brunswick',
    // The feature band's eyebrow is wide-tracked mono — the full org wraps
    // to two lines there and crowds the title. Modal keeps the full string.
    orgShort: 'Rutgers ARC Lab',
    duration: 'Apr 2025 – Jul 2025',
    guide: 'Prof. Jingjin Yu',
    summary:
      'A Transformer-based push-prediction model and reactive RL policy for retrieving target objects from dense clutter — submitted to IROS 2026.',
    poster: { src: 'media/rutgers/figure1.webp', alt: 'CPRL method figure: reactive RL policy retrieving an object from clutter' },
    featureMedia: {
      src: 'media/rutgers/case04.mp4',
      poster: 'media/rutgers/case04-poster.jpg',
      alt: 'UR5e arm pushing through dense clutter to retrieve a target object',
    },
    metrics: [
      { label: 'Push-prediction accuracy', value: '+40%' },
      { label: 'Venue', value: 'IROS 2026' },
      { label: 'Platform', value: '6-DoF UR5e' },
    ],
    tech: ['PyTorch', 'Transformer', 'Reinforcement Learning', 'Isaac Gym', 'UR5e'],
    detail: researchExperience,
    sections: [
      {
        heading: 'Approach',
        body: 'Replaced an MLP-based push interaction predictor with a Transformer model, improving accuracy by over 40% and generalizing to diverse cluttered scenes with variable object configurations.',
        media: [
          { type: 'image', src: 'media/rutgers/pipeline.webp', alt: 'CPRL pipeline diagram', caption: 'Push-prediction and retrieval pipeline' },
          { type: 'image', src: 'media/rutgers/architecture.webp', alt: 'System architecture diagram', caption: 'System architecture' },
        ],
      },
      {
        heading: 'Results',
        body: 'Validated through extensive simulation in Isaac Gym and real-world experiments on a 6-DoF UR5e arm, across diverse clutter configurations.',
        media: [
          { type: 'video', src: 'media/rutgers/case02.mp4', poster: 'media/rutgers/case02-poster.jpg', alt: 'Object retrieval from clutter, case 2', caption: 'Retrieval case 02' },
          { type: 'video', src: 'media/rutgers/case04.mp4', poster: 'media/rutgers/case04-poster.jpg', alt: 'Object retrieval from clutter, case 4', caption: 'Retrieval case 04' },
          { type: 'video', src: 'media/rutgers/case12.mp4', poster: 'media/rutgers/case12-poster.jpg', alt: 'Object retrieval from clutter, case 12', caption: 'Retrieval case 12' },
          { type: 'video', src: 'media/rutgers/case13.mp4', poster: 'media/rutgers/case13-poster.jpg', alt: 'Object retrieval from clutter, case 13', caption: 'Retrieval case 13' },
        ],
      },
    ],
    links: [{ label: 'Project page', href: 'https://cprl-26.github.io' }],
  },
  {
    id: 'aerial-manipulator',
    title: 'Contact Force Control of an Aerial Manipulator',
    role: 'Undergraduate Thesis',
    org: 'INDUS Lab, Mechanical Engineering, IIT Bombay',
    orgShort: 'INDUS Lab, IIT Bombay',
    duration: 'Jan 2025 – May 2026',
    guide: 'Prof. Vivek Sangwan',
    summary:
      'Design and control of an autonomous quadcopter with an under-actuated linked manipulator, for contact-force applications like debris removal and door/window opening in disaster response.',
    poster: { src: 'media/aerial/drone.webp', alt: 'Quadcopter with linked aerial manipulator on the lab floor' },
    featureMedia: {
      src: 'media/aerial/drone-flying.mp4',
      poster: 'media/aerial/drone-flying-poster.jpg',
      alt: 'Quadcopter with linked manipulator holding a hover during an indoor flight test',
      portrait: true,
    },
    metrics: [
      { label: 'Steady-state error', value: '<2%' },
      { label: 'Settling time', value: '<5s' },
      { label: 'Inner-loop speed', value: '10x' },
      { label: 'Chassis weight', value: '-10%' },
    ],
    tech: ['ArduPilot', 'Gazebo', 'MATLAB', 'VICON', 'PID'],
    detail: aerialRoboticsThesis,
    sections: [
      {
        heading: 'Hardware',
        body: 'An under-actuated linked manipulator mounted on a custom quadcopter, with a lightweight carbon-fiber chassis redesign that cut total weight by 10% and reduced vibration-induced sensor noise.',
        media: [
          { type: 'image', fit: 'cover', src: 'media/aerial/drone.webp', alt: 'Quadcopter with aerial manipulator', caption: 'Quadcopter with linked aerial manipulator' },
          { type: 'image', fit: 'cover', src: 'media/aerial/drone-bot.webp', alt: 'Quadcopter and ground robot together', caption: 'Aerial and ground platforms' },
          { type: 'image', fit: 'cover', src: 'media/aerial/bot.webp', alt: 'Ground robot platform', caption: 'Ground robot platform' },
          { type: 'image', fit: 'cover', src: 'media/aerial/chassis.webp', alt: 'Carbon-fiber chassis redesign', caption: 'Carbon-fiber chassis redesign' },
        ],
      },
      {
        heading: 'Flight',
        body: 'Hover and helical/straight-line trajectory tracking with precise PID tuning, using VICON motion capture for high-accuracy indoor localization.',
        media: [
          { type: 'video', src: 'media/aerial/drone-flying.mp4', poster: 'media/aerial/drone-flying-poster.jpg', alt: 'Quadcopter flight test', caption: 'Flight test', portrait: true },
          { type: 'video', src: 'media/aerial/bot-running.mp4', poster: 'media/aerial/bot-running-poster.jpg', alt: 'Ground robot test run', caption: 'Ground platform test run', portrait: true },
          { type: 'video', src: 'media/aerial/bot-perspective.mp4', poster: 'media/aerial/bot-perspective-poster.jpg', alt: 'Robot-perspective test run', caption: 'Robot-perspective view', portrait: true },
        ],
      },
      {
        heading: 'Control & Trajectories',
        body: 'Outer-loop control tuned via MATLAB/Gazebo simulation with a 10x faster attitude inner-loop; 3D spline-based path planning for helical and straight-line trajectories.',
        media: [
          { type: 'image', src: 'media/aerial/traj-helix.webp', alt: 'Helical trajectory tracking plot', caption: 'Helical trajectory tracking' },
          { type: 'image', src: 'media/aerial/traj-line.webp', alt: 'Straight-line trajectory tracking plot', caption: 'Straight-line trajectory tracking' },
          { type: 'image', src: 'media/aerial/quad-coords-helix.webp', alt: 'Quadcopter coordinates during helical flight', caption: 'Quadcopter coordinates — helical flight' },
          { type: 'image', src: 'media/aerial/quad-coords-line.webp', alt: 'Quadcopter coordinates during straight-line flight', caption: 'Quadcopter coordinates — straight-line flight' },
          { type: 'image', src: 'media/aerial/x-flight.webp', alt: 'X-axis flight response plot', caption: 'X-axis response' },
          { type: 'image', src: 'media/aerial/y-flight.webp', alt: 'Y-axis flight response plot', caption: 'Y-axis response' },
          { type: 'image', src: 'media/aerial/z-flight.webp', alt: 'Z-axis flight response plot', caption: 'Z-axis response' },
          { type: 'image', src: 'media/aerial/z-ramp.webp', alt: 'Z-axis ramp response plot', caption: 'Z-axis ramp response' },
        ],
      },
    ],
    links: [],
  },
];

// Fixed chip order — not derived from `projects` so it stays stable regardless of data edits.
export const PROJECT_TAGS = ['Robotics', 'Computer Vision', 'ML & Data Science'];

// These four have no photographs, so each carries an `art` key naming a
// generated SVG identity in components/projectart/ — deliberately graphic,
// never dressed up as a real screenshot. `metric` is the one number pulled
// out large on the card.
export const projects = [
  {
    title: 'StarTrack: Arduino-based Star Tracker',
    duration: 'Feb 2025 – Apr 2025',
    tag: 'Robotics',
    art: 'startrack',
    metric: { value: '2-axis', label: 'equatorial mount' },
    tech: ['Arduino', 'Steppers', 'RTC', 'Gyro', '3D printing'],
    bullets: [
      'Led a team of six to develop a dual-axis robotic star tracker for automated celestial alignment and sidereal tracking',
      'Built a 2-axis equatorial mount using Arduino, RTC, and stepper motors with gyro-based feedback',
      'Designed a compact actuation system with 3D-printed gears and firmware for real-time tracking and correction',
      'Implemented automated calibration routines, improving tracking precision under environmental disturbances',
    ],
  },
  {
    title: 'Segmentation-based Bokeh',
    duration: 'Aug 2024 – Nov 2024',
    tag: 'Computer Vision',
    art: 'bokeh',
    metric: { value: '96%', label: 'precision (IoU)' },
    tech: ['DeepLabV3', 'TensorRT', 'OpenCV', 'Alpha matting'],
    bullets: [
      'Implemented real-time semantic segmentation with DeepLabV3 to isolate human faces in video streams',
      'Applied Gaussian blur and alpha matting for a natural bokeh effect',
      'Achieved up to 96% precision (IoU, Pixel Accuracy, F1 Score)',
      'Integrated TensorRT for GPU optimization, reducing latency for real-time segmentation',
    ],
  },
  {
    title: 'Architectural Design Optimization',
    duration: 'Jan 2024 – Apr 2024',
    tag: 'ML & Data Science',
    art: 'layouts',
    metric: { value: '1,183', label: 'layouts clustered' },
    tech: ['K-Means', 'CNN', 'OpenCV', 'Feature engineering'],
    bullets: [
      'Applied advanced clustering and image data mining techniques to optimize architectural design processes',
      'Conducted data analysis and feature engineering on 1,183 building layout images using OpenCV',
      'Employed K-Means & CNN clustering to identify design families and classify layout complexity',
      'Developed a system with 95% accuracy predicting relevant design families from three parameters',
    ],
  },
  {
    title: 'Ping Pong Juggling Robot',
    duration: 'Aug 2023 – Nov 2023',
    tag: 'Robotics',
    art: 'pingpong',
    metric: { value: 'PID', label: 'closed-loop control' },
    tech: ['Arduino UNO', 'C++', 'PID', 'Microphone sensing'],
    bullets: [
      'Led a team of four to design and develop an automatic ping pong juggling robot',
      'Engineered and programmed the robot using an Arduino UNO and advanced C++ scripts',
      "Implemented a PID controller for precise control of the robot's movements during ball juggling",
      'Integrated a microphone sensor to precisely locate the ping pong ball in real time',
    ],
  },
];

export const skills = {
  languages: ['Python', 'C', 'C++', 'Java', 'JSON', 'HTML', 'LaTeX', 'JavaScript', 'Excel', '8085 Assembly'],
  packages: ['PyTorch', 'Pandas', 'TensorRT', 'Keras', 'Numpy', 'OpenCV', 'PyGame', 'SciPy', 'Casadi'],
  frameworks: ['ROS', 'GitHub', 'CUDA', 'mavros', 'Pixhawk', 'Django', 'Angular'],
  humanLanguages: ['English', 'Hindi', 'Marathi', 'Sanskrit'],
};

export const positionsOfResponsibility = [
  {
    role: 'Marketing Coordinator & Web Coordinator',
    org: 'The Entrepreneurship Cell, IIT Bombay',
    duration: 'May 2023 – Nov 2023',
    bullets: [
      'Approached 5,000+ marketing executives from 100+ companies to secure sponsorships for Eureka!, Asia’s largest student-run business model competition',
      'Ideated and executed 10+ publicity campaigns, increasing registrations for Eureka! by 25%',
      'Created a web portal for Eureka! among 15k participants using Django and Angular',
    ],
  },
];

export const courses = {
  robotics: ['Robotics', 'Motion Planning and Coordination of Autonomous Vehicles', 'Microprocessors & Automatic Controls'],
  mlAndCv: [
    'Introduction to Machine Learning',
    'Machine Learning - Principles & Techniques',
    'Image Processing',
    'Principles of Satellite Image Processing',
    'Computer Graphics',
    'AI and Data Science',
    'Programming for Data Science',
    'Computer Programming and Utilization',
  ],
  math: ['Optimization', 'Numerical Methods', 'Linear Algebra', 'Calculus'],
};

export const extracurricular = [
  'Mentored and tutored Physics and Chemistry to NGO kids for various examinations under NSS',
  'Mentored 20+ class XII students who qualified the JEE Advanced examination',
  'Received "Scientist of The Year" award in school for extracting DNA of a banana and observing it under a microscope',
  'Received 2nd prize in an inter-school science exhibition for manufacturing an enzyme from wet garbage',
];

// A single 2022 → 2028 arc merging education and roles, rendered by
// Timeline.jsx. Newest first — the spine reads top-down from what's next
// to where it started. Every value here is drawn from the exports above;
// no new claims are introduced.
//   kind: 'education' | 'role' | 'research'
//   tone: 'gold' for recognition/status markers, 'accent' otherwise
export const timeline = [
  {
    period: '2026 – 2028',
    title: 'M.S. in Robotics',
    org: 'University of Michigan, Ann Arbor',
    badge: 'Incoming',
    kind: 'education',
    tone: 'gold',
    note: 'Continuing autonomous-driving research — perception, planning and learning-based control.',
  },
  {
    period: 'Jan 2025 – May 2026',
    title: 'Contact Force Control of Aerial Manipulators',
    org: 'INDUS Lab, Mechanical Engineering, IIT Bombay',
    badge: 'Undergraduate Thesis',
    kind: 'research',
    tone: 'accent',
    guide: 'Prof. Vivek Sangwan',
    note: '<2% steady-state error and <5s settling time on hover and helical trajectories, with a carbon-fiber chassis redesign cutting weight 10%.',
  },
  {
    period: 'Apr 2025 – Jul 2025',
    title: 'Robotics Research Intern',
    org: 'ARC Lab, Computer Science, Rutgers University–New Brunswick',
    badge: 'IROS 2026 submission',
    kind: 'research',
    tone: 'accent',
    guide: 'Prof. Jingjin Yu',
    note: 'Replaced an MLP push-interaction predictor with a Transformer, improving accuracy by over 40% on a 6-DoF UR5e.',
  },
  {
    period: 'Mar 2023 – Jul 2026',
    title: 'Chief Autonomous Systems Officer & Deputy Team Leader',
    org: 'IITB Racing',
    badge: '1st overall, FS Portugal ’26',
    kind: 'role',
    tone: 'gold',
    guide: 'Prof. Archak Mittal',
    note: "Led the Level-4 autonomous vehicle division of a 100+ student team, building India's first autonomous EV racecar. Overall Champions in both the Driverless and EV categories at Formula Student Portugal '26.",
  },
  {
    period: '2022 – 2026',
    title: 'B.Tech, Metallurgical Engineering & Materials Science',
    org: 'Indian Institute of Technology Bombay',
    badge: 'GPA 8.41 / 10',
    kind: 'education',
    tone: 'accent',
    note: 'Minor in Artificial Intelligence & Data Science.',
  },
];
