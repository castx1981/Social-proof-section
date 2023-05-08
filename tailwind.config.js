/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['League Spartan', 'sans-serif'],
      },
      colors: {
        // primary
        'very-dark-magenta': 'hsl(300, 43%, 22%)',
        'soft-pink': 'hsl(333, 80%, 67%)',
        // neutral
        'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
        'light-grayish-magenta': 'hsl(300, 24%, 96%)',
      },
      fontSize: {
        'lg': ['19px', {
          lineHeight: '25px',
          letterSpacing: '-0.63px',
        }],
        '4xl': ['40px', {
          lineHeight: '32px',
          letterSpacing: '-1.43px',
        }],
        '6xl': ['56px', {
          lineHeight: '48px',
          letterSpacing: '-2px',
        }],
      }
    }
  },
  plugins: [],
}
