/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {},
    backgroundImage: {
      add: "url('src/assets/add.svg')",
      search: "url('src/assets/search.svg')",
    },
  },
  plugins: [],
};
