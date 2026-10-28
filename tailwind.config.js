/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all your current .js files inside your components folder
  ],
  theme: {
    extend: {
      keyframes: {
        wobble: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
        }
      },
      animation: {
        wobble: 'wobble 0.2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}