// const colors = require("tailwindcss/colors");
// module.exports = {
//   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//     colors: {
//       transparent: "transparent",
//       current: "currentColor",
//     },
//   },
//   variants: {
//     extend: {},
//   },
// };

module.exports = {
  purge: ["./src/*/.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      width: {
        600: "600px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
