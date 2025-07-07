/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      screens: {
        "2xl": { max: "1980px" },
        "xl": { max: "1680px" },
        "lg": { max: "1440px" },
        "md": { max: "1024px" },
        "sm": { max: "769px" },
        "xs": { max: "480px" },
        "xxs": { max: "379px" }
      },
      extend: {
        height: {
          screen: "100dvh",
        },
        colors:{
          blue: "#0056D2",
          red:"#D04715",
          green:"#50C878",
          orange:"#FF6B35",
          lightblue:"#0056D2",
          gray:"#D3D3D3"
        },
        backgroundColor:{
          blue: "#0056D2",
          red:"#D04715",
          green:"#50C878",
          orange:"#FF6B35",
          lightblue:"#0056D2",
          gray:"#D3D3D3",
          lightpurple:"#C5C5E2",
          lightorange:"#FFC8AB"
        },
        backgroundImage: {
        'hero-pattern': "url('/src/images/hero-image.png')",
      },
      },
    },
    plugins: [],
  }