/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['League Spartan', 'sans-serif'],
    },
    extend: {
      colors: {
        // primary
        'very-dark-magenta': 'hsl(300, 43%, 22%)',
        'soft-pink': 'hsl(333, 80%, 67%)',
        // neutral
        'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
        'light-grayish-magenta': 'hsl(300, 24%, 96%)',
      },
    }
  },
  plugins: [],
}
