import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import { skeleton } from '@skeletonlabs/tw-plugin'
import { recallTheme } from './recall-theme';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			minWidth: {
				'4': '16rem',
			},
			minHeight: {
				'2': '8rem',
			},
			padding: {
				'20p': '20%',
			}
		},
	},
	plugins: [
		forms,
		skeleton({
			themes: {
				custom: [
					recallTheme
				]
				/*preset: [
					{
						name: 'modern',
						enhancements: true,
					},
				],*/
			},
		}),
	],
} satisfies Config;
