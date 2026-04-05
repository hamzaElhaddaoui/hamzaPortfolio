import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'slate-dark': '#0f172a',
        'slate-900': '#1e293b',
        'slate-800': '#1f2937',
        'slate-700': '#334155',
        'slate-400': '#cbd5e1',
        'slate-300': '#e2e8f0',
        'blue-accent': '#0ea5e9',
        'purple-accent': '#8b5cf6',
        'green-accent': '#10b981',
      },
      fontFamily: {
        'sans': '"Plus Jakarta Sans", system-ui, sans-serif',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      spacing: {
        '15': '3.75rem',
      },
    },
  },
} satisfies Config
