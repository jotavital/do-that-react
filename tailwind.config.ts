import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');

const config: Config = {
	content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
	darkMode: 'selector',
	theme: {
		colors: {
			...colors,
			dark: '#334155',
		},
	},
	plugins: [],
};

export default config;
