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

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'zinc': '#EFEFEF',
        // 'accent' : '#8DBDAC',
        'accent' : '#67AEA6',
        'dark-teal': '#001112',
        'paper': '#D8D1C9'
      },


    }
  },
  plugins: [],
}
