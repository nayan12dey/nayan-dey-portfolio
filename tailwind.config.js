import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#08080A', // Ultra-deep neutral black-slate
          alt: '#0C0D10',     // Slightly lighter background variant
        },
        surface: {
          DEFAULT: '#111318', // Primary surface/card tone
          elevated: '#161920',// Hover or elevated state
          subtle: '#1C1F28',  // Active/Pressed or distinct surfaces
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',  // Ultra-fine border default
          DEFAULT: 'rgba(255, 255, 255, 0.12)', // Interactive border
          hover: 'rgba(99, 102, 241, 0.35)',    // Primary accent border hover
        },
        accent: {
          DEFAULT: '#6366F1', // Primary Electric Indigo
          hover: '#4F46E5',   // Deep Indigo for active states
          subtle: 'rgba(99, 102, 241, 0.10)', // Subtle tint fills
          glow: 'rgba(99, 102, 241, 0.18)',   // Glow aura
        },
        content: {
          primary: '#F3F4F6',   // High contrast crisp white-gray
          secondary: '#9CA3AF', // Muted secondary text
          tertiary: '#6B7280',  // Subdued captions and metadata
          code: '#E5E7EB',      // Technical mono text
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.05em' }], // 11px
        'xs': ['0.75rem', { lineHeight: '1.25rem', letterSpacing: '0.04em' }],   // 12px
        'sm': ['0.875rem', { lineHeight: '1.5rem', letterSpacing: '0.01em' }],   // 14px
        'base': ['1rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],   // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }], // 18px
        'xl': ['1.25rem', { lineHeight: '1.875rem', letterSpacing: '-0.015em' }],// 20px
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],     // 24px
        '3xl': ['1.875rem', { lineHeight: '2.375rem', letterSpacing: '-0.02em' }],// 30px
        '4xl': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-0.025em' }], // 36px
        '5xl': ['3rem', { lineHeight: '3.375rem', letterSpacing: '-0.03em' }],   // 48px
        '6xl': ['3.75rem', { lineHeight: '4.125rem', letterSpacing: '-0.035em' }],// 60px
        '7xl': ['4.5rem', { lineHeight: '4.75rem', letterSpacing: '-0.04em' }],   // 72px
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'DEFAULT': '8px',
        'md': '10px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 2px 6px -1px rgba(0, 0, 0, 0.3)',
        'elevated': '0 12px 32px -4px rgba(0, 0, 0, 0.6), 0 4px 12px -2px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 40px -10px rgba(99, 102, 241, 0.25)',
      },
      backgroundImage: {
        'radial-hero': 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.12) 0%, rgba(8, 8, 10, 0) 70%)',
        'radial-card': 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.03), transparent 40%)',
      },
    },
  },
  plugins: [],
};

export default config;