module.exports = {
  content: [`./src/**/*.{js,jsx,ts,tsx}`],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mt-blue': '#00476f',
        'mt-green': '#6ba055',
        'mt-darkgreen': '#436e5e',
        'mt-old-blue': '#0073aa',
      },
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
        mt: ['Hyand Px Grotesk', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
