/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        slideDown: 'slideDown 0.5s ease-out',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
        scaleUp: 'scaleUp 0.5s ease-out forwards',
        slideIn: 'slideIn 0.3s ease-out forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 