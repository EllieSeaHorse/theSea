/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      aspectRatio: {
        'A4': '500 / 600',
        '14': '100 / 250',
        '43': '4 / 3',
        '12': '4 / 5',


      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'zinc': '#EFEFEF',
        // 'accent' : '#8DBDAC',
        // 'accent' : '#67AEA6',
        // 'accent' : '#AAC4D2',
        'accent' : '#9A2121',

        // 'accent' : '#AA3949',
        // 'accent' : '#93A6D9',
        'dark-teal': '#001112',
        'paper': '#D8D1C9',
        'milk': '#FEFFF9',
        'milk-darker': '#FAFBF4'


      },


    }
  },
  plugins: [],
}
