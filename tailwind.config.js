/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      boxShadow: {
        '5xl': '0 25px 50px rgba(0, 0, 0, 0.75)', // Example for a 5xl shadow
        '10xl': '0 50px 100px rgba(0, 0, 0, 0.75)', // Example for a 10xl shadow
      },
    },
  },
  plugins: [],
}

