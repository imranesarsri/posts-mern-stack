const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      boxShadow: {
        'custom': '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
      },
      fontSize: {
        '10xl': '5rem',
        '9xl': '4rem',
      },
      colors: {
        Light: {
          'text': '#000c1a',
          'backgroundPri': '#f0f6ff',
          'backgroundSec': '#EBF3FF',
          'primary': '#1782fd',
          'secondary': '#9176fe',
          'accent': '#8e49fd',
        },
        Dark: {
          'text': '#e5f1ff',
          'backgroundPri': '#00060f',
          'backgroundSec': '#00183d',
          'primary': '#026ee8',
          'secondary': '#1c0189',
          'accent': '#4702b6',
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};