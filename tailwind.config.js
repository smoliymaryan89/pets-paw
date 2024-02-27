/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1D1D1D",
        grey: "#8C8C8C",
        "grey-60": "rgba(255, 255, 255, 0.60)",
        pink: "#FF868E",
        "light-pink": "#FBE0DC",
        "pink-60": "rgba(255, 134, 142, 0.60)",
        "pink-30": "rgba(255, 134, 142, 0.30)",
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
        20: "20px",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
