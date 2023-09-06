import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const recallTheme: CustomThemeConfig = {
	name: 'recall-theme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
		"--theme-font-family-heading": "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "12px",
		"--theme-rounded-container": "6px",
		"--theme-border-base": "0px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "255 255 255",
		"--on-warning": "255 255 255",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #ad0000 
		"--color-primary-50": "243 217 217", // #f3d9d9
		"--color-primary-100": "239 204 204", // #efcccc
		"--color-primary-200": "235 191 191", // #ebbfbf
		"--color-primary-300": "222 153 153", // #de9999
		"--color-primary-400": "198 77 77", // #c64d4d
		"--color-primary-500": "173 0 0", // #ad0000
		"--color-primary-600": "156 0 0", // #9c0000
		"--color-primary-700": "130 0 0", // #820000
		"--color-primary-800": "104 0 0", // #680000
		"--color-primary-900": "85 0 0", // #550000
		// secondary | #731212 
		"--color-secondary-50": "234 219 219", // #eadbdb
		"--color-secondary-100": "227 208 208", // #e3d0d0
		"--color-secondary-200": "220 196 196", // #dcc4c4
		"--color-secondary-300": "199 160 160", // #c7a0a0
		"--color-secondary-400": "157 89 89", // #9d5959
		"--color-secondary-500": "115 18 18", // #731212
		"--color-secondary-600": "104 16 16", // #681010
		"--color-secondary-700": "86 14 14", // #560e0e
		"--color-secondary-800": "69 11 11", // #450b0b
		"--color-secondary-900": "56 9 9", // #380909
		// tertiary | #ba2b08 
		"--color-tertiary-50": "245 223 218", // #f5dfda
		"--color-tertiary-100": "241 213 206", // #f1d5ce
		"--color-tertiary-200": "238 202 193", // #eecac1
		"--color-tertiary-300": "227 170 156", // #e3aa9c
		"--color-tertiary-400": "207 107 82", // #cf6b52
		"--color-tertiary-500": "186 43 8", // #ba2b08
		"--color-tertiary-600": "167 39 7", // #a72707
		"--color-tertiary-700": "140 32 6", // #8c2006
		"--color-tertiary-800": "112 26 5", // #701a05
		"--color-tertiary-900": "91 21 4", // #5b1504
		// success | #104e04 
		"--color-success-50": "219 228 217", // #dbe4d9
		"--color-success-100": "207 220 205", // #cfdccd
		"--color-success-200": "195 211 192", // #c3d3c0
		"--color-success-300": "159 184 155", // #9fb89b
		"--color-success-400": "88 131 79", // #58834f
		"--color-success-500": "16 78 4", // #104e04
		"--color-success-600": "14 70 4", // #0e4604
		"--color-success-700": "12 59 3", // #0c3b03
		"--color-success-800": "10 47 2", // #0a2f02
		"--color-success-900": "8 38 2", // #082602
		// warning | #916403 
		"--color-warning-50": "239 232 217", // #efe8d9
		"--color-warning-100": "233 224 205", // #e9e0cd
		"--color-warning-200": "228 216 192", // #e4d8c0
		"--color-warning-300": "211 193 154", // #d3c19a
		"--color-warning-400": "178 147 79", // #b2934f
		"--color-warning-500": "145 100 3", // #916403
		"--color-warning-600": "131 90 3", // #835a03
		"--color-warning-700": "109 75 2", // #6d4b02
		"--color-warning-800": "87 60 2", // #573c02
		"--color-warning-900": "71 49 1", // #473101
		// error | #3d0000 
		"--color-error-50": "226 217 217", // #e2d9d9
		"--color-error-100": "216 204 204", // #d8cccc
		"--color-error-200": "207 191 191", // #cfbfbf
		"--color-error-300": "177 153 153", // #b19999
		"--color-error-400": "119 77 77", // #774d4d
		"--color-error-500": "61 0 0", // #3d0000
		"--color-error-600": "55 0 0", // #370000
		"--color-error-700": "46 0 0", // #2e0000
		"--color-error-800": "37 0 0", // #250000
		"--color-error-900": "30 0 0", // #1e0000
		// surface | #192e6b 
		"--color-surface-50": "221 224 233", // #dde0e9
		"--color-surface-100": "209 213 225", // #d1d5e1
		"--color-surface-200": "198 203 218", // #c6cbda
		"--color-surface-300": "163 171 196", // #a3abc4
		"--color-surface-400": "94 109 151", // #5e6d97
		"--color-surface-500": "25 46 107", // #192e6b
		"--color-surface-600": "23 41 96", // #172960
		"--color-surface-700": "19 35 80", // #132350
		"--color-surface-800": "15 28 64", // #0f1c40
		"--color-surface-900": "12 23 52", // #0c1734

	}
}
