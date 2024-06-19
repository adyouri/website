const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Jost', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				arkOrange: '#DD7409',
				arkOrangeLight: '#FFF3E6'
			}
		}
	},
	plugins: []
}
