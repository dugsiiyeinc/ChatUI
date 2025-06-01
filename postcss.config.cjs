const tailwindcss = require('@tailwindcss/postcss'); // ✅ use correct plugin

module.exports = {
  plugins: [
    tailwindcss(),
    require('autoprefixer'),
  ],
};
