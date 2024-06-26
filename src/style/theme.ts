import type { Theme } from '@pandacss/types'

const theme: Theme = {
	tokens: {
		colors: {
			felix: { value: 'oklch(91.3% 0.2335 130.017)' },
			black: { value: 'oklch(0% 0 0)' },
			white: { value: 'oklch(100% 0 0)' },
			clear: { value: 'oklch(0% 0 0 / 0%)' },
			semi: { value: 'oklch(0% 0 0 / 50%)' },
			grey: {
				100: { value: 'oklch(96.85% 0.0079 106.547)' },
				200: { value: 'oklch(93.76% 0.012 106.628)' },
				300: { value: 'oklch(86.61% 0.0149 110.917)' },
				400: { value: 'oklch(73.72% 0.0155 110.988)' },
				500: { value: 'oklch(59.6% 0.0149 111.479)' },
				600: { value: 'oklch(44.24% 0.0128 112.703)' },
				650: { value: 'oklch(33.76% 0.0103 114.634)' },
				700: { value: 'oklch(28.63% 0.009 116.156)' },
				750: { value: 'oklch(23.24% 0.0077 118.409)' },
				800: { value: 'oklch(19.01% 0.0059 106.949)' },
				900: { value: 'oklch(14.43% 0.0022 106.671)' },
			},
			red: {
				100: { value: 'oklch(96.22% 0.0274 334.877)' },
				200: { value: 'oklch(82.18% 0.1249 345.84)' },
				300: { value: 'oklch(71.2% 0.1933 358.252)' },
				400: { value: 'oklch(62.66% 0.219 10.912)' },
				500: { value: 'oklch(54.28% 0.2037 21.024)' },
				600: { value: 'oklch(45.53% 0.1726 24.419)' },
				700: { value: 'oklch(35.46% 0.1314 24.373)' },
				800: { value: 'oklch(26.23% 0.0905 23.822)' },
				900: { value: 'oklch(19.06% 0.059 22.813)' },
			},
			orange: {
				100: { value: 'oklch(97.66% 0.0197 77.32)' },
				200: { value: 'oklch(90.11% 0.0749 71.854)' },
				300: { value: 'oklch(82.74% 0.1308 70.586)' },
				400: { value: 'oklch(73.98% 0.162 62.598)' },
				500: { value: 'oklch(62.05% 0.1537 53.58)' },
				600: { value: 'oklch(50.61% 0.1305 48.86)' },
				700: { value: 'oklch(40.55% 0.1037 45.267)' },
				800: { value: 'oklch(31.79% 0.0734 44.337)' },
				900: { value: 'oklch(23.16% 0.0451 37.868)' },
			},
			yellow: {
				100: { value: 'oklch(95.58% 0.0263 106.888)' },
				200: { value: 'oklch(94.44% 0.083 106.405)' },
				300: { value: 'oklch(92.38% 0.1303 103.433)' },
				400: { value: 'oklch(89.41% 0.1608 98.917)' },
				500: { value: 'oklch(85.68% 0.171 92.076)' },
				600: { value: 'oklch(69.37% 0.1405 83.306)' },
				700: { value: 'oklch(51.85% 0.1091 71.212)' },
				800: { value: 'oklch(38.2% 0.0806 66.875)' },
				900: { value: 'oklch(26.56% 0.0533 64.155)' },
			},
			green: {
				100: { value: 'oklch(93.06% 0.024 112.005)' },
				200: { value: 'oklch(92.77% 0.0883 115.623)' },
				300: { value: 'oklch(89.86% 0.1576 120.653)' },
				400: { value: 'oklch(84.07% 0.2058 127.46)' },
				500: { value: 'oklch(72.47% 0.2018 133.311)' },
				600: { value: 'oklch(59.58% 0.1806 137.813)' },
				700: { value: 'oklch(47.18% 0.1489 140.548)' },
				800: { value: 'oklch(35.75% 0.1129 142.009)' },
				900: { value: 'oklch(24.67% 0.0714 143.974)' },
			},
			blue: {
				100: { value: 'oklch(96.12% 0.0181 205.32)' },
				200: { value: 'oklch(89.68% 0.0665 207.936)' },
				300: { value: 'oklch(83.51% 0.1023 211.319)' },
				400: { value: 'oklch(74.31% 0.1249 224.114)' },
				500: { value: 'oklch(61.98% 0.1382 239.824)' },
				600: { value: 'oklch(49.43% 0.1479 252.335)' },
				700: { value: 'oklch(38.41% 0.1403 257.875)' },
				800: { value: 'oklch(28.8% 0.1144 259.489)' },
				900: { value: 'oklch(19.7% 0.0746 258.493)' },
			},
			purple: {
				100: { value: 'oklch(93.84% 0.0275 309.211)' },
				200: { value: 'oklch(83.11% 0.0844 295.979)' },
				300: { value: 'oklch(74.41% 0.1345 294.65)' },
				400: { value: 'oklch(66.83% 0.1736 295.545)' },
				500: { value: 'oklch(58.15% 0.1977 294.724)' },
				600: { value: 'oklch(47.99% 0.1954 291.402)' },
				700: { value: 'oklch(37.56% 0.1721 288.852)' },
				800: { value: 'oklch(27.39% 0.132 286.108)' },
				900: { value: 'oklch(18.73% 0.0913 284.543)' },
			},
		},
		fonts: {
			main: {
				value: '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif, "Apple Color Emoji"',
			},
			mono: {
				value: '"Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
			},
		},
	},
	semanticTokens: {
		colors: {
			muted: {
				value: '{colors.grey.500}',
			},
			faded: {
				value: {
					base: '{colors.grey.700}',
					_dark: '{colors.grey.300}',
				},
			},
			faint: {
				value: {
					base: '{colors.grey.300}',
					_dark: '{colors.grey.700}',
				},
			},
			text: {
				DEFAULT: {
					value: {
						base: '{colors.grey.900}',
						_dark: '{colors.grey.100}',
					},
				},
			},
			bg: {
				DEFAULT: {
					value: {
						base: '{colors.grey.100}',
						_dark: '{colors.grey.900}',
					},
				},
				card: {
					value: {
						base: '{colors.grey.200}',
						_dark: '{colors.grey.800}',
					},
				},
			},
		},
	},
}

export default theme
