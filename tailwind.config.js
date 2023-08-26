/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {},
    backgroundImage: {
      add: "url('src/assets/add.svg')",
      search: "url('src/assets/search.svg')",
      grad1: 'linear-gradient(90deg, rgb(255, 199, 228), rgb(255, 195, 173))',
      grad2: 'linear-gradient(90deg, rgb(207, 199, 255), rgb(179, 254, 255))',
      grad3: 'linear-gradient(180deg, rgb(153, 228, 255), rgb(255, 204, 236))',
      grad4: 'linear-gradient(90deg, rgb(255, 255, 199), rgb(217, 168, 255))',
      grad5: 'linear-gradient(0deg, rgb(255, 194, 237), rgb(189, 255, 198))',
      grad6: 'linear-gradient(90deg, rgb(179, 153, 255), rgb(153, 255, 172))',
    },
  },
  plugins: [],
};
