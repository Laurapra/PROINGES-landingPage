/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0099cc',
        secondary: '#1B365D',
        accent: '#236192',
        'background-light': '#f5f8f8',
        'background-dark': '#0f1e23',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        full: '9999px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'soft-blue': 'linear-gradient(135deg, #f5f8f8 0%, #e6f2f6 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,249,255,0.5) 100%)',
      },
    },
  },
  plugins: [],
};