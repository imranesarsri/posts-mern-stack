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
        'inside': 'rgba(50, 50, 93, 0.25) 0px 3px 6px -2px inset, rgba(0, 0, 0, 0.3) 0px 8px 3px -2px inset',
        'bottom': 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'
      },
      fontSize: {
        '10xl': '5rem',
        '9xl': '4rem',
      },
      colors: {
        Light: {
          'text': '#000c1a',
          'textSec': '#4b5563',
          'backgroundPri': '#f0f6ff',
          'backgroundSec': '#EBF3FF',
          'primary': '#1782fd',
          'secondary': '#9176fe',
          'accent': '#8e49fd',
        },
        Dark: {
          'text': '#e5f1ff',
          'textSec': '#e5f1ff', //!change
          'backgroundPri': '#00060f',
          'backgroundSec': '#00183d',
          'primary': '#026ee8',
          'secondary': '#1c0189',
          'accent': '#4702b6',
        },
        GradientsLight: {
          light: '#8e49fd', // Start color
          dark: '#1782fd',  // End color
        },
        GradientsDark: {
          light: '#4702b6',
          dark: '#1c0189',
        },
      },
      backgroundImage: {
        'hero-light-ltr': "url('/images/sections/hero/heroBackgroundLightLTR.svg')",
        'hero-dark-ltr': "url('/images/sections/hero/heroBackgroundDarkLTR.svg')",
        'hero-light-rtl': "url('/images/sections/hero/heroBackgroundLightRTL.svg')",
        'hero-dark-rtl': "url('/images/sections/hero/heroBackgroundDarkRTL.svg')",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};