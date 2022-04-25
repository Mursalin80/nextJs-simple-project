module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "half-screen": "50vh",
      },
    },
    letterSpacing: {
      tight: "-.015em",
    },
  },
  plugins: [],
};
