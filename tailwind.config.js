/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1D1D1D",
        "light-dark": "#282828",
        grey: "#8C8C8C",
        "grey-60": "rgba(255, 255, 255, 0.60)",
        "grey-0.05": "rgba(255, 255, 255, 0.05)",
        "grey-10": "rgba(255, 255, 255, 0.10)",
        pink: "#FF868E",
        "light-pink": "#FBE0DC",
        "pink-60": "rgba(255, 134, 142, 0.60)",
        "pink-30": "rgba(255, 134, 142, 0.30)",
        "pink-20": "rgba(255, 134, 142, 0.20)",
        "dark-white": "#F8F8F7",
        green: "#97EAB9",
        "green-30": "rgba(151, 234, 185, 0.30)",
        yellow: "#FFD280",
        "yellow-30": "rgba(255, 210, 128, 0.30)",
        overlay: "rgba(29, 29, 29, 0.6)",
      },
      fontSize: {
        10: "10px",
        12: "12px",
        16: "16px",
        20: "20px",
        36: "36px",
        44: "44px",
        60: "60px",
      },
      transitionDuration: {
        350: "350ms",
      },
      screens: {
        md: "768px",
        lg: "1440px",
      },
      borderRadius: {
        3: "3px",
        5: "5px",
        10: "10px",
        14: "14px",
        20: "20px",
        24: "24px",
        50: "50px",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
