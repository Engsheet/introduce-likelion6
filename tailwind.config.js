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
      grad3: 'linear-gradient(135deg, #82fafc 0%, #043c84 100%)',
      grad4: 'linear-gradient(135deg, #fed1d8 0%, #eec3fd 100%)',
      grad5: 'linear-gradient(135deg, #c7fecf 0%, #bd91fc 100%)',
      grad6: 'linear-gradient(135deg, #fa9db1 0%, #c2bdfe 100%)',
    },
  },
  plugins: [],
};
