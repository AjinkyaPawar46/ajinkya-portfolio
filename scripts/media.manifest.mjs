// Source media lives outside the repo (Downloads / other project dirs).
// This manifest is the only place absolute source paths appear — everything
// downstream (build-media.mjs, content.js) references stable output paths
// under public/media/. To swap the hero video: edit the `hero` entry's
// `src` below, then run `npm run media:hero`.

const DOWNLOADS = 'C:/Users/ajink/Downloads';
const PROGRAMMING = 'C:/Programming';

// Files pulled down from the Google Drive "Portfolio" folder. Download them
// into this directory before running `npm run media` — entries whose source
// is missing are warned about and skipped, so a partial download degrades
// gracefully rather than failing the run.
const PORTFOLIO = DOWNLOADS; // Drive 'Portfolio' files were saved straight into Downloads

export const gifs = [
  {
    id: 'racing-mpc-sim',
    src: `${DOWNLOADS}/Images/Academic/MPC_sim.gif`,
    out: 'public/media/racing/mpc-sim.mp4',
  },
  {
    id: 'racing-rrt',
    src: `${DOWNLOADS}/Images/Academic/RRT.gif`,
    out: 'public/media/racing/rrt.mp4',
  },
  {
    id: 'racing-bot-run',
    src: `${DOWNLOADS}/Images/Academic/Bot_Run.gif`,
    out: 'public/media/racing/bot-run.mp4',
  },
];

// scale target for the vertical dimension; 'portrait' sources use a
// narrower target since scale=-2:720 on a portrait source yields a sliver
export const videos = [
  {
    id: 'rutgers-case02',
    src: `${PROGRAMMING}/cprl-26.github.io/static/videos/Case02.mp4`,
    out: 'public/media/rutgers/case02.mp4',
    height: 720,
  },
  {
    id: 'rutgers-case04',
    src: `${PROGRAMMING}/cprl-26.github.io/static/videos/Case04.mp4`,
    out: 'public/media/rutgers/case04.mp4',
    height: 720,
  },
  {
    id: 'rutgers-case12',
    src: `${PROGRAMMING}/cprl-26.github.io/static/videos/Case12.mp4`,
    out: 'public/media/rutgers/case12.mp4',
    height: 720,
  },
  {
    id: 'rutgers-case13',
    src: `${PROGRAMMING}/cprl-26.github.io/static/videos/Case13.mp4`,
    out: 'public/media/rutgers/case13.mp4',
    height: 720,
  },
  // --- From the Drive Portfolio folder ---
  {
    id: 'racing-dv-accel',
    src: `${PORTFOLIO}/DV_Acceleration.mp4`,
    out: 'public/media/racing/dv-accel.mp4',
    height: 720,
  },
  {
    // webm source — transcodeVideo forces libx264/mp4 output, so Safari and
    // iOS (which won't play VP8/VP9 in a <video> reliably) are covered.
    id: 'racing-mpc',
    src: `${PORTFOLIO}/MPC.webm`,
    out: 'public/media/racing/mpc.mp4',
    height: 720,
  },
  {
    id: 'aerial-drone-flying',
    src: `${DOWNLOADS}/BTP2 Presentation/drone_flying.mp4`,
    out: 'public/media/aerial/drone-flying.mp4',
    // coded as 848x480 landscape but tagged rotation=-90 (a phone video
    // shot in portrait) — build-media.mjs's probeHeight() corrects for
    // this; height here should target the portrait dimension.
    height: 640,
    portrait: true,
  },
  {
    id: 'aerial-bot-running',
    src: `${DOWNLOADS}/BTP2 Presentation/bot_running.mp4`,
    out: 'public/media/aerial/bot-running.mp4',
    height: 640,
    portrait: true,
  },
  {
    id: 'aerial-bot-perspective',
    src: `${DOWNLOADS}/BTP2 Presentation/Bot_perspective.mp4`,
    out: 'public/media/aerial/bot-perspective.mp4',
    height: 640,
    portrait: true,
  },
];

// hero is transcoded separately (optional crop + trim), see
// build-media.mjs `transcodeHero()`.
//
// crop is optional: supply cropWidth/cropHeight (and cropX/cropY) only when
// the source is not already 16:9. `trimStart` picks a window out of a
// longer film; `trimSeconds` is the length taken from that point.
// The VSV system film: a 1920x1080/60fps four-panel composite showing the
// whole autonomy stack at once — two cone-detection camera feeds, the
// bird's-eye planning view (cone map, Delaunay/RRT* edges, tracked
// trajectory), the E03 car on the cone track, and the cockpit view. Already
// 16:9, so no crop.
//
// Trim window chosen by eye from ffmpeg contact sheets: the film's first
// half is mostly static pit/paddock shots; 34s–52s is a continuous driving
// stretch with all four panels live. Poster is taken 6s in (=40s absolute).
export const hero = {
  id: 'hero',
  src: `${PORTFOLIO}/VSV5.mp4`,
  out: 'public/media/hero/hero.mp4',
  poster: 'public/media/hero/hero-poster.jpg',
  scale: '1280:720',
  trimStart: 34,
  trimSeconds: 18,
  posterAtSeconds: 6,
};

// quality: 'photo' (q82, max 1920w) | 'diagram' (q90, max 1600w — text/line art)
export const images = [
  // --- Racing ---
  { id: 'racing-e14', src: `${DOWNLOADS}/Images/Academic/E14.jpg`, out: 'public/media/racing/e14.webp', quality: 'photo' },
  { id: 'racing-car', src: `${DOWNLOADS}/Images/Academic/car.jpg`, out: 'public/media/racing/car.webp', quality: 'photo' },
  { id: 'racing-dv-bot', src: `${DOWNLOADS}/Images/Academic/DV bot.jpg`, out: 'public/media/racing/dv-bot.webp', quality: 'photo' },
  { id: 'racing-team', src: `${DOWNLOADS}/Images/Academic/racing dv team pic.jpg`, out: 'public/media/racing/team.webp', quality: 'photo' },
  { id: 'racing-fusion-pipeline', src: `${DOWNLOADS}/Images/Academic/FusionPipeline.jpeg`, out: 'public/media/racing/fusion-pipeline.webp', quality: 'diagram' },
  { id: 'racing-stereo-flowchart', src: `${DOWNLOADS}/Images/Academic/stereoflowchart.png`, out: 'public/media/racing/stereo-flowchart.webp', quality: 'diagram' },
  { id: 'racing-nn-architecture', src: `${DOWNLOADS}/Images/Academic/NNArchitechture.png`, out: 'public/media/racing/nn-architecture.webp', quality: 'diagram' },
  { id: 'racing-fastslam', src: `${DOWNLOADS}/Images/Academic/fastslam1.0_predvsmap.png`, out: 'public/media/racing/fastslam.webp', quality: 'diagram' },
  { id: 'racing-graphslam', src: `${DOWNLOADS}/Images/Academic/graphslam_predvsmap.png`, out: 'public/media/racing/graphslam.webp', quality: 'diagram' },
  { id: 'racing-delaunay', src: `${DOWNLOADS}/Images/Academic/delaunay.png`, out: 'public/media/racing/delaunay.webp', quality: 'diagram' },
  { id: 'racing-rrt-diagram', src: `${DOWNLOADS}/Images/Academic/rrt.png`, out: 'public/media/racing/rrt-diagram.webp', quality: 'diagram' },

  // --- Rutgers ---
  { id: 'rutgers-pipeline', src: `${PROGRAMMING}/cprl-26.github.io/static/images/CPRL_Pipeline.png`, out: 'public/media/rutgers/pipeline.webp', quality: 'diagram' },
  { id: 'rutgers-architecture', src: `${PROGRAMMING}/cprl-26.github.io/static/images/system-architecture-new.png`, out: 'public/media/rutgers/architecture.webp', quality: 'diagram' },
  { id: 'rutgers-figure1', src: `${PROGRAMMING}/cprl-26.github.io/static/images/figure1-v3.png`, out: 'public/media/rutgers/figure1.webp', quality: 'diagram' },

  // --- Aerial (safe set only — see plan for attribution notes) ---
  { id: 'aerial-drone', src: `${DOWNLOADS}/BTP2 Presentation/drone.jpeg`, out: 'public/media/aerial/drone.webp', quality: 'photo' },
  { id: 'aerial-drone-bot', src: `${DOWNLOADS}/BTP2 Presentation/drone+bot.jpeg`, out: 'public/media/aerial/drone-bot.webp', quality: 'photo' },
  { id: 'aerial-bot', src: `${DOWNLOADS}/BTP2 Presentation/bot.jpeg`, out: 'public/media/aerial/bot.webp', quality: 'photo' },
  { id: 'aerial-bot-2', src: `${DOWNLOADS}/BTP2 Presentation/bot_2.jpeg`, out: 'public/media/aerial/bot-2.webp', quality: 'photo' },
  { id: 'aerial-drone-fly', src: `${DOWNLOADS}/BTP2 Presentation/drone_fly.png`, out: 'public/media/aerial/drone-fly.webp', quality: 'diagram' },
  { id: 'aerial-x-flight', src: `${DOWNLOADS}/BTP2 Presentation/x_flight.png`, out: 'public/media/aerial/x-flight.webp', quality: 'diagram' },
  { id: 'aerial-y-flight', src: `${DOWNLOADS}/BTP2 Presentation/y_flight.png`, out: 'public/media/aerial/y-flight.webp', quality: 'diagram' },
  { id: 'aerial-z-flight', src: `${DOWNLOADS}/BTP2 Presentation/z_flight.png`, out: 'public/media/aerial/z-flight.webp', quality: 'diagram' },
  { id: 'aerial-z-ramp', src: `${DOWNLOADS}/BTP2 Presentation/z_ramp.png`, out: 'public/media/aerial/z-ramp.webp', quality: 'diagram' },
  { id: 'aerial-lp', src: `${DOWNLOADS}/BTP2 Presentation/lp.png`, out: 'public/media/aerial/lp.webp', quality: 'diagram' },
  { id: 'aerial-no-lp', src: `${DOWNLOADS}/BTP2 Presentation/no_lp.png`, out: 'public/media/aerial/no-lp.webp', quality: 'diagram' },
  { id: 'aerial-chassis', src: `${DOWNLOADS}/Ajinkya_BTP_2 (1)/Ajinkya_BTP/chassis.png`, out: 'public/media/aerial/chassis.webp', quality: 'photo' },
  { id: 'aerial-traj-helix', src: `${DOWNLOADS}/Ajinkya_BTP_2 (1)/Ajinkya_BTP/traj_helix.png`, out: 'public/media/aerial/traj-helix.webp', quality: 'diagram' },
  { id: 'aerial-traj-line', src: `${DOWNLOADS}/Ajinkya_BTP_2 (1)/Ajinkya_BTP/traj_line.png`, out: 'public/media/aerial/traj-line.webp', quality: 'diagram' },
  { id: 'aerial-quad-coords-helix', src: `${DOWNLOADS}/Ajinkya_BTP_2 (1)/Ajinkya_BTP/quad_coordinates_helix.png`, out: 'public/media/aerial/quad-coords-helix.webp', quality: 'diagram' },
  { id: 'aerial-quad-coords-line', src: `${DOWNLOADS}/Ajinkya_BTP_2 (1)/Ajinkya_BTP/quad_coordinates_line.png`, out: 'public/media/aerial/quad-coords-line.webp', quality: 'diagram' },
];
