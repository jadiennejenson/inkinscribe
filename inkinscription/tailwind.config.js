// ./tailwindcss -i input.css -o styles.css --watch
    module.exports = {
  content: [
    "./*.html", // <-- Add this if your HTML is in the root
    // or
    // "./**/*.{html,js}", // <-- Add this for all subfolders
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  theme: {
    extend: {
      colors: {
        'pink-500': '#EC4899', // You are already using this color in main.
        'primary': '#5c6ac4',
        'secondary': '#ecc94b',
        'new-color': {
          50: '#f7f6f9',
          100: '#e5e3eb',
          // ... you can define shades for your custom color
        },
      },
    },
  },
  // ...
}