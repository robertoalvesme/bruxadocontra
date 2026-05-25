/** @type {import('tailwindcss').Config} */
export default {
  // These font utilities are referenced via @apply and may not appear literally
  // in templates, so we safelist them to guarantee the classes are always
  // generated and usable directly on any element (e.g. <p class="font-sans">).
  safelist: ['font-sans', 'font-display', 'font-script', 'font-menu'],
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
        // Decorative headings (the purple titles)
        script: ['"IM Fell DW Pica"', 'Georgia', 'serif'],
        // Body text
        sans: ['"Josefin Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Navigation menu
        menu: ['"Josefin Sans"', 'ui-sans-serif', 'sans-serif'],
        // Display / titles
        display: ['"IM Fell DW Pica"', 'Georgia', 'serif'],
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
