/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: { max: "767px" },
        tablet: { min: "768px", max: "1279px" },
        desktop: { min: "1280px" },
      },
      colors: {
        btnBg: "rgba(255, 255, 255, 0.10)",
        menuBg: "rgba(1, 10, 5, 0.75)",
      },
      lineHeight: {
        basic: "1.2",
      },
      fontSize: {
        xs: ["12px", "1.2"],
        s: ["14px", "1.2"],
        m: ["16px", "1.2"],
        ms: ["18px", "1.2"],
        l: ["40px", "1.2"],
        xl: ["67px", "1.2"],
        xxl: ["98px", "1.2"],
      },
    },
  },
  plugins: [],
};
