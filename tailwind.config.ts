import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        // Vercel-style monochrome palette
        'vercel': {
          'black': '#000000',
          'white': '#ffffff',
          'gray-50': '#fafafa',
          'gray-100': '#f4f4f5',
          'gray-200': '#e4e4e7',
          'gray-300': '#d4d4d8',
          'gray-400': '#a1a1aa',
          'gray-500': '#71717a',
          'gray-600': '#52525b',
          'gray-700': '#3f3f46',
          'gray-800': '#27272a',
          'gray-900': '#18181b',
          'gray-950': '#09090b',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;