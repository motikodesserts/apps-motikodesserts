/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./projects/web/src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        motikoRed: "#ef426f",
        motikoYelow: "#F4F2BD",
        motikoBlue: "#E1E7EE",
        motikoOrange: "#FACCAD",
        motikoGreen: "#B4D3b2",
        motikoRedOrange: "#F4DAD2",
        motikoPink: "#DBCEE3",
      },
      spacing: {
        100: "28rem",
        128: "32rem",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
