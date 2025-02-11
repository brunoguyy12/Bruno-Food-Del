/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        tomato: "#ff6347",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        rotate: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s",
        fadeInSlow: "fadeIn 0.5s",
        rotateAlways: "rotate 1s infinite",
      },
      fontSize: {
        ten: "10px",
        thirty: "30px",
        fifty: "50px",
      },
      spacing: {
        ten: "10px",
        thirty: "30px",
        fifty: "50px",
        hundred: "100px",
      },
    },
  },
  plugins: [],
};
