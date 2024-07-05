/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					200: '#66CCA7',
					400: '#66CC66'
				},
				bg: {
					100: '#0A080C',
					200: '#22423A'
				}
			}
		}
	},
	plugins: []
}
