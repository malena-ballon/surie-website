import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0072C6',
        accent: '#00B4D8',
        'bg-warm': '#F8F6F2',
        'bg-white': '#FFFFFF',
        'text-primary': '#1A1A2E',
        'text-muted': '#6B7280',
        border: '#E8E4DF',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
        pill: '50px',
      },
      boxShadow: {
        card: '0 2px 12px rgba(0,0,0,0.06)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0072C6 0%, #00B4D8 100%)',
      },
    },
  },
  plugins: [],
}

export default config
