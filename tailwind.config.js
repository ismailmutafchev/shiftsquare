/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'polar': {
          '50': '#effcfc',
          '100': '#d5f6f6',
          '200': '#b3edee',
          '300': '#7fdee1',
          '400': '#43c7cd',
          '500': '#28aab2',
          '600': '#248a96',
          '700': '#236f7b',
          '800': '#255b65',
          '900': '#234c56',
          '950': '#12323a',
      },
      },
    },
  },
  plugins: [
   '@tailwindcss/forms'
  ],
}

