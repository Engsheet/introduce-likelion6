/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {},
    backgroundImage: {
      menu: "url('src/assets/menu.svg')",
      search: "url('src/assets/search.svg')"
    },
  },
  plugins: [],
};
