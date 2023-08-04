/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-main': '#181818',
        'dark-light-main': '#202020',
        'dark-text': '#fff',
        'dark-soft-text': '#aaaaaa',
        'dark-soft': '#373737',

        'main': '#f9f9f9',
        'light-main': '#fff',
        'text': '#000',
        'soft-text': '#606060',
        'soft': '#f5f5f5',

      },
      boxShadow: {
        'box': '1px 0px 4px -1px #444444'
      }
    },
  },
  plugins: [],
}