/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      backgroundColor: {
        'primary': '#ED5349',
        'primary-trans': 'rgba(237, 83, 73, 0.5)',
        'white-trans': 'rgba(255, 255, 255, 0.8)'
      },
      borderColor: {
        'border': '#DC5850',
        'primary': '#ED5349',
      },
      textColor: {
        'primary': '#ED5349',
      },
    },
  },
  plugins: [],
}

