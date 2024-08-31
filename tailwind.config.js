/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        dark: "#0f172a",
        primary: "#f59e0b",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
