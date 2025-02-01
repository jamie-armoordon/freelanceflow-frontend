/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2A2D7C',
          dark: '#1E2156',
          light: '#3C3F99'
        },
        secondary: '#FFD700',
        background: {
          dark: '#2A2D7C',
          DEFAULT: '#3C3F99',
          light: '#4B4DB3'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 