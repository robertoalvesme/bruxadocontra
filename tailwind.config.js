/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        cream: '#F8F6F2',
        sand: {
          DEFAULT: '#E4DBCD',
          dark: '#D4C7B1',
        },
        gold: {
          DEFAULT: '#BCA784',
          dark: '#A8916B',
          light: '#D8C8A8',
        },
        grape: {
          DEFAULT: '#9D7EBC',
          dark: '#7548A0',
        },
        ink: {
          DEFAULT: '#2D2A26',
          soft: '#4A453E',
        },
      },
      fontFamily: {
        // Calligraphy logo
        logo: ['"Pinyon Script"', 'cursive'],
        // Decorative script headings (the purple titles)
        script: ['"Sacramento"', 'cursive'],
        // Body + uppercase display
        sans: ['Jost', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        display: '0.18em',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
