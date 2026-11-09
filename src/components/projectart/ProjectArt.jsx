// Generated cover art for the projects that have no photographs.
//
// These are deliberately graphic — abstract marks that evoke the subject —
// never mocked-up screenshots. Each is a plain viewBox'd SVG that inherits
// the card's text color for its accent, is deterministic (no Math.random,
// so nothing shifts between renders), and carries no animation, so there's
// nothing to gate on prefers-reduced-motion.

const VIEW = '0 0 400 250';
const common = {
  viewBox: VIEW,
  preserveAspectRatio: 'xMidYMid slice',
  className: 'w-full h-full',
  'aria-hidden': 'true',
  focusable: 'false',
};

// A tiny deterministic PRNG (mulberry32) so the star field is identical on
// every render and every machine, without hand-listing 60 coordinates.
function rng(seed) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function StarTrackArt() {
  const rand = rng(20250214);
  const stars = Array.from({ length: 70 }, () => ({
    cx: rand() * 400,
    cy: rand() * 250,
    r: 0.4 + rand() * 1.6,
    o: 0.25 + rand() * 0.65,
  }));

  return (
    <svg {...common}>
      <rect width="400" height="250" fill="#0b0d11" />
      {stars.map((s, i) => (
        <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="#e4e4e7" opacity={s.o} />
      ))}
      {/* Right-ascension arcs — the axis the mount tracks along. */}
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <path d="M -30 210 Q 200 40 430 210" strokeWidth="1.2" opacity="0.55" />
        <path d="M -30 250 Q 200 80 430 250" strokeWidth="0.8" opacity="0.3" />
      </g>
      {/* The tracked star, with its trail arc. */}
      <circle cx="200" cy="97" r="4.5" fill="currentColor" />
      <circle cx="200" cy="97" r="11" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.5" />
      <circle cx="200" cy="97" r="19" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.22" />
    </svg>
  );
}

function BokehArt() {
  // Out-of-focus highlights resolving against one sharp in-focus edge —
  // the effect the segmentation mask produces.
  const bokeh = [
    { cx: 62, cy: 70, r: 30, o: 0.5 },
    { cx: 128, cy: 42, r: 20, o: 0.38 },
    { cx: 96, cy: 148, r: 38, o: 0.3 },
    { cx: 178, cy: 96, r: 15, o: 0.45 },
    { cx: 44, cy: 194, r: 24, o: 0.26 },
    { cx: 158, cy: 200, r: 18, o: 0.34 },
  ];

  return (
    <svg {...common}>
      <defs>
        <filter id="pa-bokeh-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <linearGradient id="pa-bokeh-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f1218" />
          <stop offset="100%" stopColor="#0a0c10" />
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#pa-bokeh-bg)" />
      <g filter="url(#pa-bokeh-blur)">
        {bokeh.map((b, i) => (
          <circle key={i} cx={b.cx} cy={b.cy} r={b.r} fill="currentColor" opacity={b.o} />
        ))}
      </g>
      {/* The sharp subject: a head-and-shoulders silhouette, crisply masked. */}
      <g transform="translate(268 32)">
        <circle cx="46" cy="58" r="34" fill="#18181b" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M -6 190 v -44 a 52 52 0 0 1 104 0 v 44 z"
          fill="#18181b"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </g>
    </svg>
  );
}

function LayoutsArt() {
  // A grid of building layouts resolving into three design families —
  // column position determines cluster membership.
  const cells = [];
  for (let row = 0; row < 5; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const cluster = col < 3 ? 0 : col < 6 ? 1 : 2;
      cells.push({ row, col, cluster, key: `${row}-${col}` });
    }
  }
  const clusterFill = ['currentColor', '#f59e0b', '#71717a'];
  const clusterOpacity = [0.75, 0.55, 0.35];

  return (
    <svg {...common}>
      <rect width="400" height="250" fill="#0b0d11" />
      {cells.map((c) => {
        const x = 28 + c.col * 44;
        const y = 26 + c.row * 42;
        return (
          <g key={c.key} opacity={clusterOpacity[c.cluster]}>
            <rect
              x={x}
              y={y}
              width="32"
              height="30"
              fill="none"
              stroke={clusterFill[c.cluster]}
              strokeWidth="1.1"
              rx="1.5"
            />
            {/* interior partition — varies by row so the "layouts" read as distinct */}
            <path
              d={
                c.row % 2 === 0
                  ? `M ${x} ${y + 18} h 32 M ${x + 19} ${y + 18} v 12`
                  : `M ${x + 13} ${y} v 30 M ${x + 13} ${y + 14} h 19`
              }
              stroke={clusterFill[c.cluster]}
              strokeWidth="0.9"
              fill="none"
            />
          </g>
        );
      })}
    </svg>
  );
}

function PingPongArt() {
  // A damped sinusoid settling to setpoint — the PID response that keeps
  // the ball in the air.
  const setpoint = 125;
  const points = [];
  for (let i = 0; i <= 160; i += 1) {
    const x = i * 2.5;
    const t = i / 160;
    const y = setpoint - Math.sin(t * Math.PI * 5) * 78 * Math.exp(-3.2 * t);
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  const path = `M ${points.join(' L ')}`;
  const lastY = points[points.length - 1].split(',')[1];

  return (
    <svg {...common}>
      <rect width="400" height="250" fill="#0b0d11" />
      {/* setpoint */}
      <line
        x1="0"
        y1={setpoint}
        x2="400"
        y2={setpoint}
        stroke="#f59e0b"
        strokeWidth="1"
        strokeDasharray="5 5"
        opacity="0.6"
      />
      {/* tolerance band */}
      <rect x="0" y={setpoint - 9} width="400" height="18" fill="#f59e0b" opacity="0.06" />
      <path d={path} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* the ball, settled */}
      <circle cx="400" cy={lastY} r="6" fill="currentColor" />
      <circle cx="400" cy={lastY} r="12" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
    </svg>
  );
}

function ArmlabArt() {
  // A two-link arm reaching for the block it has localized — the detect →
  // inverse-kinematics → pick loop. The AprilTag corners mark the table frame.
  const table = 214;
  const blocks = [
    { x: 310, w: 22, h: 22, o: 0.35 },
    { x: 222, w: 20, h: 20, o: 0.35 },
  ];
  const target = { x: 275, y: 184 };

  return (
    <svg {...common}>
      <rect width="400" height="250" fill="#0b0d11" />
      {/* table plane */}
      <path d={`M 40 ${table} H 370`} stroke="#3f3f46" strokeWidth="1" />
      {/* tag-corner fiducials */}
      {[60, 350].map((x) => (
        <g key={x} fill="none" stroke="#71717a" strokeWidth="1">
          <rect x={x - 10} y="224" width="20" height="20" />
          <rect x={x - 5} y="229" width="10" height="10" fill="#71717a" opacity="0.5" />
        </g>
      ))}
      {blocks.map((b, i) => (
        <rect key={i} x={b.x} y={table - b.h} width={b.w} height={b.h} fill="none" stroke="#e4e4e7" strokeWidth="1" opacity={b.o} />
      ))}
      {/* the target block, with its detection reticle */}
      <rect x="262" y={table - 26} width="26" height="26" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1.4" />
      <path d="M 254 178 v -8 h 8 M 296 178 v -8 h -8 M 254 220 v 8 h 8 M 296 220 v 8 h -8" fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.7" />
      {/* base + two links reaching the target */}
      <rect x="86" y={table - 18} width="44" height="18" fill="#18181b" stroke="currentColor" strokeWidth="1.4" />
      <path d={`M 108 ${table - 18} L 168 96 L ${target.x} ${target.y}`} fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      <circle cx="108" cy={table - 18} r="7" fill="#0b0d11" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="168" cy="96" r="6" fill="#0b0d11" stroke="currentColor" strokeWidth="1.6" />
      <circle cx={target.x} cy={target.y} r="4" fill="currentColor" />
    </svg>
  );
}

function BotlabArt() {
  // An occupancy grid with a maze wall, a planned A* path and the LiDAR
  // fan that built the map.
  const cols = 16;
  const rows = 10;
  const cell = 22;
  const ox = 24;
  const oy = 15;
  const walls = new Set([
    '4-0', '4-1', '4-2', '4-3', '4-4', '4-5',
    '9-4', '9-5', '9-6', '9-7', '9-8', '9-9',
    '12-0', '12-1', '12-2', '12-3', '12-4', '12-5',
  ]);
  const path = [
    [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 7], [7, 6], [7, 5], [7, 4], [8, 3], [9, 3], [10, 3], [11, 3], [11, 4], [11, 5], [11, 6], [11, 7], [12, 7], [13, 7],
  ];
  const pt = ([c, r]) => `${ox + c * cell + cell / 2},${oy + r * cell + cell / 2}`;
  const robot = path[0];
  const [rx, ry] = pt(robot).split(',').map(Number);

  return (
    <svg {...common}>
      <rect width="400" height="250" fill="#0b0d11" />
      {Array.from({ length: cols * rows }, (_, i) => {
        const c = i % cols;
        const r = Math.floor(i / cols);
        const wall = walls.has(`${c}-${r}`);
        return (
          <rect
            key={i}
            x={ox + c * cell}
            y={oy + r * cell}
            width={cell}
            height={cell}
            fill={wall ? '#e4e4e7' : 'none'}
            opacity={wall ? 0.28 : 1}
            stroke="#27272a"
            strokeWidth="0.6"
          />
        );
      })}
      {/* LiDAR fan from the robot */}
      <g stroke="currentColor" strokeWidth="0.7" opacity="0.3">
        {[-34, -17, 0, 17, 34].map((deg) => {
          const a = (deg * Math.PI) / 180;
          return <line key={deg} x1={rx} y1={ry} x2={rx + Math.cos(a) * 95} y2={ry - Math.sin(a) * 95} />;
        })}
      </g>
      {/* planned path */}
      <polyline points={path.map(pt).join(' ')} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={rx} cy={ry} r="6" fill="currentColor" />
      <circle cx={rx} cy={ry} r="11" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx={pt(path[path.length - 1]).split(',')[0]} cy={pt(path[path.length - 1]).split(',')[1]} r="5" fill="none" stroke="#f59e0b" strokeWidth="1.6" />
    </svg>
  );
}

const ART = {
  armlab: ArmlabArt,
  botlab: BotlabArt,
  startrack: StarTrackArt,
  bokeh: BokehArt,
  layouts: LayoutsArt,
  pingpong: PingPongArt,
};

export function ProjectArt({ art }) {
  const Art = ART[art];
  if (!Art) return <div className="w-full h-full bg-ink-950" />;
  return <Art />;
}
