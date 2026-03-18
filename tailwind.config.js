/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#00d4ff',
          dark: '#00a8cc',
          glow: 'rgba(0, 212, 255, 0.15)',
        },
        dark: {
          DEFAULT: '#0a0a0f',
          100: '#111118',
          200: '#1a1a24',
          300: '#24242e',
          border: '#1e1e2a',
        },
      },
    },
  },
  plugins: [],
};
