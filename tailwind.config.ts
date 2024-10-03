import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6D9FF',
          100: '#CAB0FF',
          200: '#AF86FF',
          300: '#935DFF',
          400: '#7733FF',
          500: '#662CDA',
          600: '#5524B6',
          700: '#441D91',
          800: '#33166D',
          900: '#220E48',
        },
      },
    },
  },
  plugins: [],
};
export default config;
