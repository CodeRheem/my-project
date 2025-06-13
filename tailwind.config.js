const { shadcnPreset } = require("@shadcn/ui");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",  // Use js and jsx since no TS
  ],
  presets: [shadcnPreset],
  theme: {
    extend: {},
  },
  plugins: [],
};
// tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // 
        Lato: ['Lato', 'sans-serif'], // custom class
      },
    },
  },
  plugins: [],
};

// Note: Ensure you have the necessary dependencies installed for shadcn/ui
// and that your project is set up to use Tailwind CSS with React.  