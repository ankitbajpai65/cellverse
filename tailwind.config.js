/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbarBg: "#0000001A",
        button: "#FF9D0A",
        vision: "#F2F2F2",
        newsBg: "#00000099",
        newsBg2: "#757575",
        accordianBg: "#F5F5F5",
        inputBg: "#F5F5F5",
        footerBg: "#2E2E2E",
        icons: "#B0B0B0",
      },
      backgroundImage: {
        homeBg: "url('/homeBg.jpeg')",
      },
    },
  },
  plugins: [],
};

