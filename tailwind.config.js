module.exports = {
  content: [`./src/**/*.{js,jsx,ts,tsx}`],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        124: '32rem',
      },
      fontFamily: {
        'bold-header': [
          '"IBM Plex Serif"',
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
