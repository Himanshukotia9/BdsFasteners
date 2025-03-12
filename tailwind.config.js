/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

      },
      fontFamily: {
        'heading': ['Big Shoulders', 'sans-serif'],
        'primary': ['Roboto Condensed', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

