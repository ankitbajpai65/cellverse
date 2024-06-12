/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "600px", 
        md:"768px", 
      },
      colors: {
        navbarBg: "#0000001A",
        navbarBg2: "#E5E5E5",
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
