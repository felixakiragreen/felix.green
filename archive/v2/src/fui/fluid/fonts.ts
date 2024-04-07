import { addKeys, extractKeys } from './utils'

/* @link https://utopia.fyi/type/calculator?c=320,16,1.25,1240,20,1.333,6,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

// :root {
// 	/* Step -2: 10.24px → 11.26px */
// 	--step--2: clamp(0.64rem, calc(0.62rem + 0.11vw), 0.70rem);

// 	/* Step -1: 12.80px → 15.00px */
// 	--step--1: clamp(0.80rem, calc(0.75rem + 0.24vw), 0.94rem);

// 	/* Step 0: 16.00px → 20.00px */
// 	--step-0: clamp(1.00rem, calc(0.91rem + 0.43vw), 1.25rem);

// 	/* Step 1: 20.00px → 26.66px */
// 	--step-1: clamp(1.25rem, calc(1.11rem + 0.72vw), 1.67rem);

// 	/* Step 2: 25.00px → 35.54px */
// 	--step-2: clamp(1.56rem, calc(1.33rem + 1.15vw), 2.22rem);

// 	/* Step 3: 31.25px → 47.37px */
// 	--step-3: clamp(1.95rem, calc(1.60rem + 1.75vw), 2.96rem);

// 	/* Step 4: 39.06px → 63.15px */
// 	--step-4: clamp(2.44rem, calc(1.92rem + 2.62vw), 3.95rem);

// 	/* Step 5: 48.83px → 84.17px */
// 	--step-5: clamp(3.05rem, calc(2.28rem + 3.84vw), 5.26rem);

// 	/* Step 6: 61.04px → 112.20px */
// 	--step-6: clamp(3.82rem, calc(2.70rem + 5.56vw), 7.01rem);
//  }

export const fluidFont = {
	'1': 'clamp(0.64rem, calc(0.62rem + 0.11vw), 0.70rem)', // Step -2: 10.24px → 11.26px
	'2': 'clamp(0.80rem, calc(0.75rem + 0.24vw), 0.94rem)', // Step -1: 12.80px → 15.00px
	'3': 'clamp(1.00rem, calc(0.91rem + 0.43vw), 1.25rem)', // Step 0: 16.00px → 20.00px
	'4': 'clamp(1.25rem, calc(1.11rem + 0.72vw), 1.67rem)', // Step 1: 20.00px → 26.66px
	'5': 'clamp(1.56rem, calc(1.33rem + 1.15vw), 2.22rem)', // Step 2: 25.00px → 35.54px
	'6': 'clamp(1.95rem, calc(1.60rem + 1.75vw), 2.96rem)', // Step 3: 31.25px → 47.37px
	'7': 'clamp(2.44rem, calc(1.92rem + 2.62vw), 3.95rem)', // Step 4: 39.06px → 63.15px
	'8': 'clamp(3.05rem, calc(2.28rem + 3.84vw), 5.26rem)', // Step 5: 48.83px → 84.17px
	'9': 'clamp(3.82rem, calc(2.70rem + 5.56vw), 7.01rem)', // Step 6: 61.04px → 112.20px
}

const fluidFontKeys = extractKeys(fluidFont)

const shirt = {
	xs: fluidFont['1'],
	sm: fluidFont['2'],
	md: fluidFont['3'],
	lg: fluidFont['4'],
	xl: fluidFont['5'],
	'2xl': fluidFont['6'],
	'3xl': fluidFont['7'],
	'4xl': fluidFont['8'],
	'5xl': fluidFont['9'],
}

const shirtKeys = extractKeys(shirt)

const typo = {
	c2: fluidFont['1'],
	c1: fluidFont['2'],
	b: fluidFont['3'],
	h6: fluidFont['4'],
	h5: fluidFont['5'],
	h4: fluidFont['6'],
	h3: fluidFont['7'],
	h2: fluidFont['8'],
	h1: fluidFont['9'],
}

const typoKeys = extractKeys(typo)

const step = {
	'step_-2': fluidFont['1'],
	'step_-1': fluidFont['2'],
	step_0: fluidFont['3'],
	step_1: fluidFont['4'],
	step_2: fluidFont['5'],
	step_3: fluidFont['6'],
	step_4: fluidFont['7'],
	step_5: fluidFont['8'],
	step_6: fluidFont['9'],
}

const stepKeys = extractKeys(step)

export const fluidFontAliases = {
	shirt, // t-shirt sizes
	shirtKeys,
	typo, // typographical sizes
	typoKeys,
	step, // fluid steps
	stepKeys,
}

export const fontSizes = {
	...fluidFont,
	...fluidFontAliases.shirt,
	...fluidFontAliases.typo,
	...fluidFontAliases.step,
}
