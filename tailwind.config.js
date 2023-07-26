/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FEF0F3',
          500: '#E90C31',
          700: '#92071F'
        },
        success: {
          500: '#17E884'
        },
        grey: {
          200: '#C9CDCF'
        }
      }
    },
  },
  plugins: [],
}

