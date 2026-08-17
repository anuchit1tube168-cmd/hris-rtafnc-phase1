/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0B0F19',
          900: '#0F172A',
        },
        card: '#1E293B',
        input: '#1E293B',
        muted: '#94A3B8',
        accent: {
          from: '#7C3AED',
          to: '#3B82F6',
        },
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#F43F5E',
      },
      borderRadius: {
        card: '12px',
        input: '8px',
      },
      fontFamily: {
        sans: ['IBM Plex Sans Thai', 'TH Sarabun New', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
