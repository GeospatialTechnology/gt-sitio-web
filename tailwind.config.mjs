/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			padding: {
				['page-base']: '80px'
			},
			colors: {
				primary: {
					200: '#66CCA7',
					400: '#66CC66',
					500: '#3a9b3a'
				},
				bg: {
					DEFAULT: '#F6F6F6',
					100: '#0A080C',
					200: '#22423A'
				}
			},
			keyframes: {
				appear: {
					'0%': { opacity: '0' },
					'70%': { opacity: '0' },
					'100%': { opacity: '1' }
				}
			}
		}
	},
	plugins: []
}
