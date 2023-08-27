/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
    backgroundImage: {
      grad1: "linear-gradient(to right bottom, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
      grad2: "linear-gradient(to right bottom, #ffecd2 0%, #fcb69f 100%)",
      grad3: "linear-gradient(to right bottom, rgb(255, 252, 179), rgb(255, 205, 199))",
      grad4: "linear-gradient(to right bottom, #fddb92 0%, #d1fdff 100%)",
      grad5: "linear-gradient(to right bottom, #E3FDF5 0%, #FFE6FA 100%)",
      grad6: "linear-gradient(to right bottom, #fef9d7 0%, #d299c2 100%)",
      "grad-details": "linear-gradient(45deg, #fad0c4, #fef9d7)",
    },
  },
  plugins: [],
};
