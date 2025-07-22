/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#556B2F', // оливковый
        dark: '#1E1E1E',    // почти чёрный
        light: '#F3F4F6',   // светлый фон
      },
    },
  },
  plugins: [],
}
