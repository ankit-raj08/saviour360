/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        gold: "#f0a500",
        orange: "#ff6b35",
        bg: "#04040e",
      },
    },
  },
  plugins: [],
};
