/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        bounceLoading: "bounceLoading 0.6s infinite alternate",
      },
      keyframes: {
        bounceLoading: {
          "0%": {
            opacity: "0.1",
            transform: "translateY(-16px)",
          },
          "100%": {
            opacity: "0.5",
            transform: "translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
