import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        inudesu: {
          bg: '#EFEADD',        // warm cream background (from 1.png)
          bgDeep: '#E6DFCD',    // deeper cream for section contrast
          dark: '#2C2420',      // deep coffee (main text / dark surfaces)
          darker: '#1E1813',    // near-black warm for cinematic panels
          text: '#2C2420',      // primary text
          textSoft: '#6B5E52',  // secondary warm grey text
          light: '#F5F1E8',     // light cream
          accent: '#E67E22',    // terracotta orange (primary accent)
          accentLight: '#F59E4B', // bright orange
          accentDark: '#C85E12', // deep pumpkin
          gold: '#D4A24C',      // warm gold secondary accent
          border: '#DCD4C4',    // warm border on light
          borderDark: '#4A3F35', // warm border on dark
        },
      },
      backgroundImage: {
        'grid-warm':
          'linear-gradient(rgba(230,126,34,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(230,126,34,0.06) 1px, transparent 1px)',
        'hero-glow':
          'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(230,126,34,0.18) 0%, transparent 70%)',
        'accent-sheen':
          'linear-gradient(135deg, #F59E4B 0%, #E67E22 50%, #C85E12 100%)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      boxShadow: {
        'glow-accent': '0 0 24px rgba(230,126,34,0.35), 0 0 48px rgba(230,126,34,0.12)',
        'glow-accent-lg': '0 0 40px rgba(230,126,34,0.5), 0 0 80px rgba(230,126,34,0.2)',
        'glow-gold': '0 0 20px rgba(212,162,76,0.4)',
        'inner-warm': 'inset 0 0 30px rgba(230,126,34,0.08)',
        'card-soft': '0 8px 30px rgba(44,36,32,0.08)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan-line': 'scan-line 6s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 24s linear infinite',
        'reveal-up': 'reveal-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'ticker': 'ticker 26s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(230,126,34,0.35)' },
          '50%': { opacity: '0.85', boxShadow: '0 0 44px rgba(230,126,34,0.6)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'ticker': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      spacing: {
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
    },
  },
  plugins: [],
}

export default config
