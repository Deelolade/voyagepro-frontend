/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "360px",   // small phones (iPhone SE, older Androids)
      xs: "480px",    // phones
      sm: "640px",    // bigger phones / small tablets
      md: "768px",    // tablets (iPad portrait)
      lg: "1024px",   // small laptops (iPad landscape, 13” laptops)
      xl: "1280px",   // standard desktops (MacBook Pro 14/15”)
      "2xl": "1536px", // large desktops (big monitors)
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      colors: {
        blue: "#0056D2",
        red: "#D04715",
        green: "#50C878",
        orange: "#FF6B35",
        lightblue: "#0056D2",
        gray: "#D3D3D3",
        darkGray: "#36454F"
      },
      backgroundColor: {
        darkGray: "#36454F",
        blue: "#0056D2",
        red: "#D04715",
        green: "#50C878",
        orange: "#FF6B35",
        lightblue: "#0056D2",
        gray: "#D3D3D3",
        lightpurple: "#C5C5E2",
        lightorange: "#FFC8AB",
        lightgray: "#F5F5F54D",
        lightgreen: "#84EBB4",
      },
      backgroundImage: {
        'hero-pattern': "url('/src/images/hero-image.webp')",
        'confirm-pattern': "url('/src/images/confirm-pattern.webp')",
      },
    },
  },
  plugins: [],
}