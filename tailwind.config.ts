import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modern Classic Blue Palette
        primary: {
          DEFAULT: '#2563eb', // Blue-600
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        background: {
          DEFAULT: '#f8fafc', // Slate-50
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
        },
        surface: {
          DEFAULT: '#ffffff',
          50: '#ffffff',
          100: '#f8fafc',
          200: '#f1f5f9',
        },
        secondary: {
          DEFAULT: '#0f172a', // Slate-900
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        muted: {
          DEFAULT: '#64748b', // Slate-500
          foreground: '#64748b',
        },
        border: {
          DEFAULT: '#e2e8f0', // Slate-200
        },
        // Legacy support (mapping to new system or keeping relevant)
        accent: {
          DEFAULT: '#5cccaa',
          50: '#f0fdf4',
          500: '#5cccaa',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f7fa',
          200: '#e5e7eb',
          300: '#d1d5db', // Used in some borders
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          900: '#111827',
        }
      },
    },
    fontFamily: {
      sans: ['Inter', 'Noto Sans TC', 'Microsoft JhengHei', 'sans-serif'],
      display: ['Outfit', 'Inter', 'sans-serif']
    },
    fontSize: {
      // 響應式字體大小
      'hero': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1' }],
      'h1': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2' }],
      'h2': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.3' }],
      'h3': ['clamp(1.25rem, 2.5vw, 1.875rem)', { lineHeight: '1.4' }],
      'body-lg': ['1.125rem', { lineHeight: '1.7' }],
      'body': ['1rem', { lineHeight: '1.6' }],
    },
    spacing: {
      'section': '5rem',   // 區塊間距
      'section-sm': '3rem', // 移動版區塊間距
    },
    borderRadius: {
      'card': '1rem',
      'button': '0.5rem',
    },
    boxShadow: {
      'card': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
      'card-hover': '0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.08)',
    }
  },
  plugins: [],
}

export default config
