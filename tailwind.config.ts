import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B4FF5C',
        accent: '#F1F4F5',
        natural: {
          black: '#0C0C0C',
          2: '#353535',
          3: '#464646',
          4: '#7B7B7B',
          5: '#ADADAD',
          6: '#DCDCDC',
          7: '#EBEBEB',
          8: '#F4F4F4',
          white: '#FFFFFF',
        },
      },
      screens: {
        fit: '1170px',
        wide: '1440px',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.headline-h1': {
          fontSize: '88px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '110%',
        },
        '.headline-h2': {
          fontSize: '72px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '110%',
        },
        '.headline-h3': {
          fontSize: '56px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '110%',
        },
        '.headline-h4': {
          fontSize: '48px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '110%',
        },
        '.headline-h5': {
          fontSize: '36px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '110%',
        },
      });
    }),
  ],
};
export default config;
