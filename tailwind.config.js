/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
<<<<<<< HEAD
    "./node_modules/flowbite/**/*.js"
=======
    "./node_modules/flowbite-react/**/*.js",
>>>>>>> 827ba722ff9c5a622de7bcb34a8b87466d5a66ac
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
<<<<<<< HEAD
  plugins: [
    require('flowbite/plugin')
  ],
=======
  plugins: [require("flowbite/plugin")],
>>>>>>> 827ba722ff9c5a622de7bcb34a8b87466d5a66ac
}
