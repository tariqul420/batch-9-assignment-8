/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "rgb(19, 19, 19)",
        "button1": "rgb(35, 190, 10)",
        "button2": "rgb(89, 198, 210)",
      },
      fontFamily: {
        WorkSans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
};
