const tailwindcss = require('@tailwindcss/postcss'); // ✅ use correct plugin

module.exports = {
  plugins: [
    tailwindcss(),
    require('autoprefixer'),
  ],
};
// tailwind.config.js
module.exports = {
  darkMode: 'class', // ✅ REQUIRED
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
