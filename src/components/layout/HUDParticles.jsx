import { useState } from 'react';

export function HUDParticles({ enabled }) {
  const [particles] = useState(() =>
    Array.from({ length: 10 }).map(() => ({
      left: 10 + Math.random() * 80 + '%',
      top: 10 + Math.random() * 60 + '%',
      delay: Math.random() * 4 + 's',
      scale: 0.6 + Math.random() * 1.2,
    }))
  );

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: 6,
            height: 6,
            borderRadius: 999,
            boxShadow: '0 0 8px rgba(255,190,64,0.95)',
            background: 'radial-gradient(circle at 30% 30%, rgba(255,190,64,0.95), rgba(192,36,40,0.8))',
            transform: `scale(${p.scale})`,
            animation: `hud-float 6s linear ${p.delay} infinite`,
            opacity: 0.95,
          }}
        />
      ))}
      <style>{`
        @keyframes hud-float {
          0% { transform: translateY(0) translateX(0) scale(1); opacity:0.95; }
          50% { transform: translateY(-28px) translateX(14px) scale(1.06); opacity:0.6; }
          100% { transform: translateY(0) translateX(0) scale(1); opacity:0.95; }
        }
      `}</style>
    </div>
  );
}
