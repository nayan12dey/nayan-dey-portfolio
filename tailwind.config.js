/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#090A0F',
        surface: {
          DEFAULT: '#11131A',
          hover: '#181B26',
        },
        accent: {
          DEFAULT: '#6366F1',
          hover: '#4F46E5',
          glow: 'rgba(99, 102, 241, 0.10)',
        },
        border: {
          subtle: '#1F2430',
          active: '#374151',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};