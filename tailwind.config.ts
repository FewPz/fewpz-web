import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#fa872d'
			},
			fontFamily: {
				sans: ['MiSans Latin', 'system-ui', 'sans-serif']
			},
			fontWeight: {
				thin: '100',
				extralight: '200',
				light: '300',
				normal: '400',
				medium: '500',
				semibold: '600',
				demibold: '650',
				bold: '700',
				heavy: '800'
			}
		},
		animation: {
			'fade-in': 'fadeIn 2s ease-in-out',
			'bounce-slow': 'bounce 3s infinite'
		},
		keyframes: {
			fadeIn: {
				'0%': { opacity: 0 },
				'100%': { opacity: 1 }
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
