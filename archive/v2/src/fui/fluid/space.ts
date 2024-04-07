import { addKeys, extractKeys, addNegatives } from './utils'

// SPACE

/* @link https://utopia.fyi/space/calculator?c=320,16,1.2,1240,24,1.25,5,2,&s=0.75|0.5|0.25|0.125,1.5|2|3|4|6|8,s-l&g=s,l,xl,12 */

// :root {
// 	/* Space 4xs: 2px → 3px */
// 	--space-4xs: clamp(0.13rem, calc(0.10rem + 0.11vw), 0.19rem);

// 	/* Space 3xs: 4px → 6px */
// 	--space-3xs: clamp(0.25rem, calc(0.21rem + 0.22vw), 0.38rem);

// 	/* Space 2xs: 8px → 12px */
// 	--space-2xs: clamp(0.50rem, calc(0.41rem + 0.43vw), 0.75rem);

// 	/* Space xs: 12px → 18px */
// 	--space-xs: clamp(0.75rem, calc(0.62rem + 0.65vw), 1.13rem);

// 	/* Space s: 16px → 24px */
// 	--space-s: clamp(1.00rem, calc(0.83rem + 0.87vw), 1.50rem);

// 	/* Space m: 24px → 36px */
// 	--space-m: clamp(1.50rem, calc(1.24rem + 1.30vw), 2.25rem);

// 	/* Space l: 32px → 48px */
// 	--space-l: clamp(2.00rem, calc(1.65rem + 1.74vw), 3.00rem);

// 	/* Space xl: 48px → 72px */
// 	--space-xl: clamp(3.00rem, calc(2.48rem + 2.61vw), 4.50rem);

// 	/* Space 2xl: 64px → 96px */
// 	--space-2xl: clamp(4.00rem, calc(3.30rem + 3.48vw), 6.00rem);

// 	/* Space 3xl: 96px → 144px */
// 	--space-3xl: clamp(6.00rem, calc(4.96rem + 5.22vw), 9.00rem);

// 	/* Space 4xl: 128px → 192px */
// 	--space-4xl: clamp(8.00rem, calc(6.61rem + 6.96vw), 12.00rem);
// }

export const fluidSpace = {
	'0': '0',
	'1': 'clamp(0.13rem, calc(0.10rem + 0.11vw), 0.19rem)', // Step 4xs: 2px → 3px
	'2': 'clamp(0.25rem, calc(0.21rem + 0.22vw), 0.38rem)', // Step 3xs: 4px → 6px
	'3': 'clamp(0.50rem, calc(0.41rem + 0.43vw), 0.75rem)', // Step 2xs: 8px → 12px
	'4': 'clamp(0.75rem, calc(0.62rem + 0.65vw), 1.13rem)', // Step xs: 12px → 18px
	'5': 'clamp(1.00rem, calc(0.83rem + 0.87vw), 1.50rem)', // Step s: 16px → 24px
	'6': 'clamp(1.50rem, calc(1.24rem + 1.30vw), 2.25rem)', // Step m: 24px → 36px
	'7': 'clamp(2.00rem, calc(1.65rem + 1.74vw), 3.00rem)', // Step l: 32px → 48px
	'8': 'clamp(3.00rem, calc(2.48rem + 2.61vw), 4.50rem)', // Step xl: 48px → 72px
	'9': 'clamp(4.00rem, calc(3.30rem + 3.48vw), 6.00rem)', // Step 2xl: 64px → 96px
}

const fluidSpaceKeys = extractKeys(fluidSpace)

const shirt = {
	no: fluidSpace['0'],
	xs: fluidSpace['1'],
	sm: fluidSpace['2'],
	md: fluidSpace['3'],
	lg: fluidSpace['4'],
	xl: fluidSpace['5'],
	'2xl': fluidSpace['6'],
	'3xl': fluidSpace['7'],
	'4xl': fluidSpace['8'],
	'5xl': fluidSpace['9'],
}

const shirtKeys = extractKeys(shirt)

export const fluidSpaceAliases = {
	shirt,
	shirtKeys,
}

const uniqueSizes = {
	px: '1px',
}

// TODO: get sizes as 10-19

export const space = {
	...fluidSpace,
	...addNegatives(fluidSpace),
	...uniqueSizes,
	...fluidSpaceAliases.shirt,
}
