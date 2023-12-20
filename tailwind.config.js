/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: "'Plus Jakarta Sans Variable', sans-serif",
        heading: "'Archivo Variable', sans-serif",
      },
    },
  },
  plugins: [],
};
