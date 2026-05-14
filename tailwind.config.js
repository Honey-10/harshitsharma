/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg:      '#080C10',
        surface: '#0D1117',
        card:    '#111827',
        accent:  '#E8652A',
        'accent-soft': '#F0874A',
        'accent-dim':  'rgba(232,101,42,0.12)',
        text:    '#F0F4F8',
        muted:   '#6B7280',
        subtle:  '#374151',
      },
    },
  },
  plugins: [],
}