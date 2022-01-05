module.exports = {
	mode: 'jit',
	content: [
		'./public/**/*.{html,js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/lib/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				ubuntu: ['Ubuntu', 'sans-serif'],
				ubuntuMono: ['Ubuntu Mono', 'monospace'],
			},
		},
	},
	plugins: [],
};
