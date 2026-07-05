import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        kailash: '#07111f',
        saffron: '#f2a93b',
        ash: '#e6edf7'
      },
      boxShadow: { glow: '0 0 50px rgba(120, 170, 255, .25)' }
    }
  },
  plugins: []
};
export default config;
