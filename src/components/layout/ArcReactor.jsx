export function ArcReactor() {
  return (
    <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
      <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50">
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#ffbf5a" stopOpacity="0.15" />
            <stop offset="60%" stopColor="#c02428" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="130" cy="130" r="90" fill="url(#g1)"></circle>
      </svg>
    </div>
  );
}
