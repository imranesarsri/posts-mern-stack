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
        // padding: '2rem',
      },
      boxShadow: {
        'custom': '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
      },
      fontSize: {
        '10xl': '5rem',
        '9xl': '4rem',
      },
      colors: {
        Default: {
          primary: '#6A7CF6',
          secondary: '#EB5153',
          tertiary: '#F6F8FA',
          quaternary: '#222566',
          quinary: '#F9FAFB'
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};