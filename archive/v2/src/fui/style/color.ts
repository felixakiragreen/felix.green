// import { felixkaiOklch } from '../color'

import { felixkaiOklch as color, semanticDarkColors } from '../color'

// console.log('color', color)

// const rgba = (hexCode: string, opacity: number) => {
// 	let hex = hexCode.replace('#', '')

// 	if (hex.length === 3) {
// 		hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
// 	}

// 	const r = parseInt(hex.substring(0, 2), 16)
// 	const g = parseInt(hex.substring(2, 4), 16)
// 	const b = parseInt(hex.substring(4, 6), 16)

// 	return `rgba(${r},${g},${b},${opacity / 100})`
// }

// const lightThemeColors = {
// 	//
// 	background: '$white',
// 	foreground: '$grey900',
// 	//
// 	faint: '$grey200',
// 	faded: '$grey300',
// 	jaded: '$grey400',
// 	muted: '$grey500',
// 	dusky: '$grey700',
// 	//
// 	highlight: '$green700',
// 	lowlight: '$blue700',
// 	//
// 	depthIn: '$grey200',
// 	depthOut: '$grey300',
// }
// const darkThemeColors = {
// THEME dependent tokens
//
// background: '$grey900',
// foreground: '$grey100',
//
// faint: '$grey800',
// faded: '$grey700',
// jaded: '$grey600',
// muted: '$grey500',
// dusky: '$grey300',
//
// highlight: '$green300',
// lowlight: '$blue300',
//
// depthIn: '$grey800',
// depthOut: '$grey700',
// depthIn: rgba(color.white, 5),
// depthOut: rgba(color.white, 15),
// }

export const colors = {
	...color,
	//
	// felix50: rgba(color.felix, 50),
	//
	// whiteA25: rgba(color.white, 25),
	// whiteA50: rgba(color.white, 50),
	// whiteA75: rgba(color.white, 75),
	// blackA25: rgba(color.black, 25),
	// blackA50: rgba(color.black, 50),
	// blackA75: rgba(color.black, 75),

	//
	// primary: '$green400',
	// primaryHover: '$green300',
	// primaryFocus: '$green600',
	// primaryFaded: '$green800',
	// primaryText: '$green900',

	// experiments
	// green200A50: rgba(color.green200, 50),
	// green300A50: rgba(color.green300, 50),
	// green400A50: rgba(color.green400, 50),
	//

	//
	// ...darkThemeColors,
	...semanticDarkColors,
}

// 100
// 150
// 200
// 300
// 400
// 500
// 600
// 700
// 750
// 800
// 850
// 900
