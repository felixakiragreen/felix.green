import type { CSS } from '../types'
import { theme } from '../stitches.config'

// Useful Reference: https://konstantin.digital/blog/generating-stitches-variants-for-theme-colors

export function generateSpaceVariants(property: string) {
	return Object.values(theme.space).reduce((acc, next) => {
		return {
			//
			...acc,
			[next.token]: {
				[property]: `$${next.token}`,
			},
		}
	}, {}) as Record<keyof typeof theme.space, CSS>
}

export function generateColorVariants(property: string) {
	return Object.values(theme.colors).reduce((acc, next) => {
		return {
			//
			...acc,
			[next.token]: {
				[property]: `$${next.token}`,
			},
		}
	}, {}) as Record<keyof typeof theme.colors, CSS>
}
