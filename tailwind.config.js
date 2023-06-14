/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
  ],
  theme: {
    extend: {
      colors: {
        roxo: {
          claro: '#F7F3FF',
          escuro: '#3F4999',
          hover: '#EB569A'
        }
      }
    },
  },
  plugins: [],
}

