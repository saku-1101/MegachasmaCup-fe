/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['"Work Sans"', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#FFC703',
        primarySecond: '#FFD542',
        secondary: '#5D5FEF',
        secondarySecond: '#8587F3',
        dark: '#131338',
        light: '#FAFCFE',
        success: '#46D5B3',
        accent: '#D22875',
        textBasic: '#363939',
        subtleText: '#9797AA',
        headerBg: 'rgba(255, 255, 255, 0.10)',
        headerShadow: 'rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
};
