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
        'pale-lime-green': '#B4FF5C',
        'anti-flash-white': '#F1F4F5',
        'light-100': '#F4F4F4',
        'light-200': '#EBEBEB',
        'light-300': '#DCDCDC',
        'dark-default': '#ADADAD',
        'dark-500': '#7B7B7B',
        'dark-600': '#464646',
        'dark-700': '#353535',
        'dark-800': '#0C0C0C',
      },
      screens: {
        wide: '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
