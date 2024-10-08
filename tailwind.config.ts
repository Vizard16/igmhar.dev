import svgToDataUri from 'mini-svg-data-uri';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import type { PluginAPI } from 'tailwindcss/types/config'; // Import PluginAPI type for proper type definitions

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    animationDelay: {
      100: '100ms',
      200: '200ms',
      300: '300ms',
      400: '400ms',
      500: '500ms',
      600: '600ms',
      700: '700ms',
      800: '800ms',
      900: '900ms',
    },
    animationDuration: {
      100: '100ms',
      200: '200ms',
      300: '300ms',
      400: '400ms',
      500: '500ms',
      600: '600ms',
      700: '700ms',
      800: '800ms',
      900: '900ms',
    },
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
      animation: {
        'fade-in': 'fade-in 380ms ease-out forwards',
        'fade-left': 'fade-left 380ms ease-out forwards',
        'fade-right': 'fade-right 480ms ease-out forwards',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        'fade-left': {
          from: {
            opacity: 0,
            transform: 'translate3d(-1.5rem,0,0)',
          },
          to: {
            opacity: 1,
            transform: 'translate3d(0,0,0)',
          },
        },
        'fade-right': {
          from: {
            opacity: 0,
            transform: 'translate3d(3rem,0,0)',
          },
          to: {
            opacity: 1,
            transform: 'translate3d(0,0,0)',
          },
        },
      },
    },
  },
  plugins: [
    function (api: PluginAPI) {
      // Use PluginAPI type here
      const { matchUtilities, theme } = api;

      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
      matchUtilities(
        {
          'animation-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('animationDelay') }
      );
      matchUtilities(
        {
          'animation-duration': (value) => ({
            animationDuration: value,
          }),
        },
        { values: theme('animationDuration') }
      );

      matchUtilities(
        {
          highlight: (value) => ({
            boxShadow: `inset 0 1px 0 0 ${value}`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
  ],
};
