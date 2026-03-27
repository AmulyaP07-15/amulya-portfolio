import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0D1117',
        card: '#161B22',
        border: '#30363D',
        primary: '#6E40C9',
        text: '#E6EDF3',
        muted: '#8B949E',
      },
      fontFamily: {
        sans: ['var(--font-space-mono)', 'monospace'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      maxWidth: {
        container: '1100px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;