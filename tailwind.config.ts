import type { Config } from 'tailwindcss';

const colors = require('tailwindcss/colors');

const config: Config = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
                ...colors,
                dark: '#334155',
                light: '#fff',
                primary: '#023e8a',
            },
        },
    },
    plugins: [],
};

export default config;
