/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#316365",
        primaryLight: "#61B49A",
        cYellow: "#FDD651",
      },
    },
  },
  plugins: [require("daisyui")],
};
