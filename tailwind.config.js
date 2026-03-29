/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
        display: ["'Space Grotesk'", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#1a6cf6",
          cyan: "#38b2f8",
        },
        dark: {
          900: "#0a0e1a",
          800: "#0f1420",
          700: "#141929",
        },
      },
    },
  },
  plugins: [],
}
