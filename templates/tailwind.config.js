const { theme } = require('tailwindcss/defaultConfig');

module.exports = {
	purge: [
		'**/*.html',
		'**/*.vue',
		'**/*.js',
		'**/*.jsx',
		'**/*.ts',
		'**/*.tsx',
	],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...theme.fontFamily.sans],
			},
		},
	},

	variants: {},

	plugins: [],
};
