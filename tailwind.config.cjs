module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08090c', // page ground
          900: '#0e1014', // alternating band
          850: '#14161b', // card surface
          800: '#1b1e25', // raised / hover surface
        },
        line: {
          DEFAULT: '#2f333d', // card borders — lifted so cards read as cards
          strong: '#3d424e',  // hover / emphasis
          soft: '#22252c',    // hairline dividers
        },
        // Two accents, used semantically and nowhere else:
        //   accent (cyan) = quantitative / technical — metrics, tech, links, CTAs
        //   gold  (amber) = recognition — placings, awards, honors, "Incoming"
        accent: { DEFAULT: '#22d3ee', dim: '#0e7490', wash: '#164e63' },
        gold: { DEFAULT: '#f59e0b', dim: '#b45309', wash: '#78350f' },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SF Mono', 'Cascadia Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Hero headline and the big impact numbers.
        display: ['clamp(2.25rem, 4.6vw, 3.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        stat: ['clamp(1.75rem, 3.2vw, 2.75rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        rail: '72rem', // full-bleed band interior
      },
      boxShadow: {
        card: '0 1px 2px rgb(0 0 0 / 0.4), 0 8px 24px -12px rgb(0 0 0 / 0.6)',
        lift: '0 2px 4px rgb(0 0 0 / 0.4), 0 16px 40px -16px rgb(0 0 0 / 0.7)',
        glow: '0 0 0 1px rgb(34 211 238 / 0.25), 0 12px 40px -12px rgb(34 211 238 / 0.2)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'cue-bob': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.5' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        'cue-bob': 'cue-bob 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
