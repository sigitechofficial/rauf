/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Switzer: ["Switzer", "sans-serif"],
      },
      colors: {
        themeBlue: "#133E9B",
        themeLightBlue: "#4E86FF",
        themeOrange: "#FF8C1D",
        themeDarkOrange: "#A75608",
        themeLightWhite: "#FFFFFFCC",
        themeGray: "#F4F4F4",
        themeGray2: "#EAEAEA",
        themeDarkGray: "#737272",
      },
      backgroundImage: {
        heroBgOne: "url('/hero-bg-1.webp')",
        heroBgLogo: "url('/hero-logo.webp')",
        heroBgTwo: "url('/hero-bg-2.webp')",
        texture: "url('/public/images/texture.webp')",
        contactUs:
          "linear-gradient(180deg, #133E9B 0%, rgba(19, 62, 155, 0.4) 183.44%)",
        insightOne:
          "linear-gradient(180deg, rgba(0, 74, 234, 0.42) 0%, rgba(154, 208, 205, 0.08) 52.48%, rgba(80, 117, 198, 0.53) 100%)",
        insightTwo:
          "linear-gradient(180deg, rgba(227, 8, 21, 0.29) 0%, rgba(10, 91, 47, 0.49) 52.48%, rgba(22, 83, 33, 0.73) 100%)",
        insightThree:
          "linear-gradient(180deg, rgba(10, 6, 62, 0.63) 0%, rgba(31, 25, 16, 0.51) 50.92%, rgba(75, 43, 14, 0.88) 100%)",
      },
      boxShadow: {
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)",
      },
    },
  },
  plugins: [],
};
