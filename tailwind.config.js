/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customMint: "#55D6C2", // ✅ your custom color
      },
    },
  },
  plugins: [],
};
