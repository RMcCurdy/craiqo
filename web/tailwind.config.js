/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      craiqo: ['Craiqo', 'ui-sans-serif', 'system-ui'],
    },
    extend: {},
    colors: {
      'craiqo-orange': '#ffb76f',
      'craiqo-blue': '#1E5E96',
    },
  },
  plugins: [],
}
