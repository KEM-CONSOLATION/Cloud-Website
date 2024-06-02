/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
        IBM: ["IBM Plex Sans", "sans-serif"],
        Satoshi: ["Satoshi", "sans-serif"],
        SatoshiRegular: ["Satoshi-regular", "sans-serif"],
        SatoshiMedium: ["Satoshi-medium", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
