module.exports = {
  content: [`./src/**/*.{js,jsx,ts,tsx}`],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'hyand-black': '#000000',
        'hyand-blue': '#0092e1',
        'hyand-green': '#00c48d',
        'hyand-yellow': '#f0eb83',
        'hyand-red': '#e94f35',
        'hyand-border-blue': '#005380',
      },
      spacing: {
        124: '32rem',
      },
      fontFamily: {
        'bold-header': [
          '"Hyand Px Grotesk Mono"',
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
        hyand: ['"Hyand Px Grotesk"', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
