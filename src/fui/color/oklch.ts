import type { Color, Oklch, Rgb } from 'culori/fn'

import { modeOklch, parseHex, formatCss } from 'culori/fn'

import felixkaiRgb from './felixkaiRgb'

export const felixkaiOklchColors = Object.entries(felixkaiRgb).reduce(
	(acc, [key, value]) => {
		// console.log('acc', acc, 'key', key, 'value', value)

		let color = parseHex(value) as Rgb
		// console.log('key', key, 'value', value, 'color', color)

		return {
			...acc,
			[key]: modeOklch.fromMode.rgb(color),
		}
	},
	{} as Record<keyof typeof felixkaiRgb, Oklch>,
)

// console.log('felixkaiOklchColors', felixkaiOklchColors)

// Hack to avoid ,999999 because of float bug implementation
function clean(value: number, digits: number = 2): number {
	return (
		Math.round(parseFloat((value * 10 ** digits).toFixed(digits))) /
		10 ** digits
	)
}

function toPercent(value: number): string {
	return `${clean(100 * value)}%`
}

function fastFormatToLch(color: Oklch): string {
	let { l, c, h, alpha } = color
	// handle undefined hues
	if (typeof h === 'undefined') {
		h = 0
	}
	// handle optional alpha
	let postfix = ''
	if (typeof alpha !== 'undefined') {
		postfix = ` / ${toPercent(alpha)}`
	}
	return `oklch(${clean(100 * l)}% ${clean(c, 4)} ${clean(h, 3)}${postfix})`
}

export const felixkaiOklch = Object.entries(felixkaiOklchColors).reduce(
	(acc, [key, value]) => {
		// console.log('acc', acc, 'key', key, 'value', value)
		// console.log('key', key, 'value', value)
		return {
			...acc,
			[key]: fastFormatToLch(value),
		}
	},
	{} as Record<keyof typeof felixkaiRgb, string>,
)

// console.log('felixkaiOklch', felixkaiOklch)

// map(felixkaiRgb, (value: Color, key: string) => {

// }

// modeOklch(felixkaiRgb)
