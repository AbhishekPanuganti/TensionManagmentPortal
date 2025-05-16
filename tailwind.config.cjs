/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-gray": "#d8e3d7", // soft green-gray tone
      },
      // colors: {
      //   primaryDark: '#184547',
      //   secondaryDark: '#102129',
      // },
      // backgroundImage: {
      //   'tension-gradient': 'linear-gradient(to bottom right, #184547, #102129)',
      // },
    },
  },

  plugins: [],
});
