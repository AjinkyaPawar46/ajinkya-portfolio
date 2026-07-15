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

export const researchInterests = [
  'Autonomous Driving',
  'Learning-Based Control',
  'Motion Planning',
  'Computer Vision',
  'Deep Learning',
  'Aerial Robotics',
];

export const education = [
  {
    institution: 'University of Michigan, Ann Arbor',
    years: '2026 – 2028',
    degree: 'M.S. in Robotics',
    note: 'Incoming',
  },
  {
    institution: 'Indian Institute of Technology Bombay',
    years: '2022 – 2026',
    degree: 'B.Tech, Metallurgical Engineering & Materials Science',
    minor: 'Minor: Artificial Intelligence & Data Science',
    gpa: '8.41 / 10',
  },
];

export const achievements = [
  {
    title: 'IIT Bombay Undergraduate Research Award (2025)',
    detail: 'For integrated perception pipelines & MPC systems improving autonomous racing reliability',
  },
  {
    title: "Formula Student AI '24, United Kingdom",
    detail: 'Represented the 1st and only Indian contingent',
  },
  {
    title: '99.44%-ile JEE Mains',
    detail: '1M+ candidates',
  },
  {
    title: '98.07%-ile JEE Advanced',
    detail: '150k candidates',
  },
  {
    title: '25+ AAs/ABs (top 15%)',
    detail: 'Across 50 courses, incl. Machine Learning, AI & Data Science',
  },
];

export const publications = [
  {
    authors: 'K. Boyalakuntla, A. Pawar, A. Boluarias, J. Yu',
    title: 'Rapid Object Retrieval from Dense Clutter via Reactive RL Policies',
    venue: 'Submitted to IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2026)',
    link: null,
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

// Fixed chip order — not derived from `projects` so it stays stable regardless of data edits.
export const PROJECT_TAGS = ['Robotics', 'Computer Vision', 'ML & Data Science'];

export const projects = [
  {
    title: 'StarTrack: Arduino-based Star Tracker',
    duration: 'Feb 2025 – Apr 2025',
    tag: 'Robotics',
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
