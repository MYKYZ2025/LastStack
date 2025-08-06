const colors = require("tailwindcss/colors");
delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
    "./vendor/tales-from-a-dev/flowbite-bundle/templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },},
  },
  plugins: [],
}
