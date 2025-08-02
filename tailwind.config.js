 module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "./*.html","./js/**/*.js",
    ],
    theme: {
          extend: {
            colors: {
              primary: "#3b82f6",
              secondary: "#1e40af",
              dark: "#0f172a",
            },
            fontFamily: {
              sans: ["Inter", "sans-serif"],
            },
          },
        },
    plugins: [],
};