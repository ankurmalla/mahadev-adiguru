import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { midnight:'#070B18', kailash:'#10224A', gold:'#F7C76B' } } }, plugins: [] };
export default config;
