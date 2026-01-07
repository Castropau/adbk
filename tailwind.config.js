// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // make sure your TSX files are included
  ],
  theme: {
    extend: {
      keyframes: {
        slowBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }, // height of bounce
        },
      },
      animation: {
        slowBounce: 'slowBounce 3s ease-in-out infinite', // slow bounce
      },
    },
  },
  plugins: [],
};
