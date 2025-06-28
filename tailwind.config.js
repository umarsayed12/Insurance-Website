/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1B75BC",
        secondary: "#0091EA",
        accent: "#FBC02D",
      },
    },
  },
  plugins: [],
};
