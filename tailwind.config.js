const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,jsx,js,ts,tsx}"
  ],
    darkMode: ['class', '[data-mode="dark"]'
  ],
  
  theme: {
    extend: {
      fontFamily: {
        Playfair: ["Playfair", ...defaultTheme.fontFamily.sans]
      },
      animation: {
        blob: "blob 7s infinite",
      },
        screens: {
          "tablet": "640px",
          "laptop": "1024px",
          "desktop": "1280px",
        },

        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        },

      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    }
  },
  plugins: []
}
