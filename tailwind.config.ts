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
        primary: '#C68037',
        secondary: '#FDF8F0',
        textMain: '#4A3B32',
        textSub: '#8C8C8C',
        cardBorder: '#E5E5E5',
      },
      fontFamily: {
        sans: ['PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 8px 24px -12px rgba(74, 59, 50, 0.25)',
      },
    },
  },
  plugins: [],
}

export default config
