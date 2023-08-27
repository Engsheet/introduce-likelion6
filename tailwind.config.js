/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {},
    backgroundImage: {
      grad1: 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)',
      grad2: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
      grad3: 'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)',
      grad4: 'linear-gradient(to top, #fddb92 0%, #d1fdff 100%)',
      grad5: 'linear-gradient(to top, #feada6 0%, #f5efef 100%)',
      grad6: 'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)',
    },
  },
  plugins: [],
};
