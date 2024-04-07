import { grey, red, orange, yellow, green, blue, purple } from './felixkaiRgb'

const darkTheme = {
	'100': 'foreground' as const,
	'200': 'foregroundish' as const,
	'300': 'foregroundest' as const,
	'400': 'highground' as const,
	'500': 'highgroundish' as const,
	'600': 'highgroundest' as const,
	'650': 'highgrounder' as const,
	'700': 'background' as const,
	'750': 'backgrounder' as const,
	'800': 'backgroundish' as const,
	'900': 'backgroundest' as const,
}
const lightTheme = {
	'100': 'backgroundest' as const,
	'200': 'backgroundish' as const,
	'300': 'background' as const,
	'400': 'highgroundest' as const,
	'500': 'highgroundish' as const,
	'600': 'highground' as const,
	'650': 'highgrounder' as const,
	'700': 'foregroundest' as const,
	'750': 'foregrounder' as const,
	'800': 'foregroundish' as const,
	'900': 'foreground' as const,
}

export const semanticDarkColors = {
	...mapThemeGrey({ grey }, darkTheme),
	...mapThemeColor({ primary: green }, darkTheme),
	...mapThemeColor({ secondary: purple }, darkTheme),
	...mapThemeColor({ positive: green }, darkTheme),
	...mapThemeColor({ negative: red }, darkTheme),
	...mapThemeColor({ warning: yellow }, darkTheme),
	...mapThemeColor({ info: blue }, darkTheme),
}

export const semanticLightColors = {
	...mapThemeGrey({ grey }, darkTheme),
	...mapThemeColor({ primary: green }, lightTheme),
	...mapThemeColor({ secondary: purple }, lightTheme),
	...mapThemeColor({ positive: green }, lightTheme),
	...mapThemeColor({ negative: red }, lightTheme),
	...mapThemeColor({ warning: yellow }, lightTheme),
	...mapThemeColor({ info: blue }, lightTheme),
}

function mapThemeGrey<
	C extends Record<string, Record<string, string>>,
	T extends Record<string, string>,
>(
	color: C,
	theme: T,
): {
	[K in keyof C]: {
		// @ts-ignore - Type 'J' actually can be used to index type 'T'.
		[J in keyof C[K] as `${T[J] & string}`]: string
	}
}[keyof C] {
	const output: any = {}
	Object.entries(color).forEach(([colorName, shades]) => {
		Object.entries(shades).forEach(([shade, hexCode]) => {
			const themeShade = theme[shade as keyof T]
			const outputKey = `${themeShade}`
			output[outputKey] = hexCode
		})
	})
	return output
}

function mapThemeColor<
	C extends Record<string, Record<string, string>>,
	T extends Record<string, string>,
>(
	color: C,
	theme: T,
): {
	[K in keyof C]: {
		// @ts-ignore - Type 'J' actually can be used to index type 'T'.
		[J in keyof C[K] as `${K & string}${Capitalize<T[J]> & string}`]: string
	}
}[keyof C] {
	const output: any = {}
	Object.entries(color).forEach(([colorName, shades]) => {
		Object.entries(shades).forEach(([shade, hexCode]) => {
			const themeShade = theme[shade as keyof T]
			const outputKey = `${colorName}${capitalize(themeShade)}`
			output[outputKey] = hexCode
		})
	})
	return output
}

function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1)
}
