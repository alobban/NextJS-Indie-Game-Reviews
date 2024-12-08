/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{jsx,tsx}', './components/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
        sans: ['var(--font-exo_2)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
