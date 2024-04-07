import { addKeys, extractKeys } from './utils'

/* @link https://utopia.fyi/space/calculator?c=320,16,1.2,1240,24,1.25,5,2,&s=,6|8|10|12|16|20|24|32|40,s-l&g=s,l,xl,12 */

// :root {
// 	/* Space s: 16px → 24px */
// 	--space-s: clamp(1.00rem, calc(0.83rem + 0.87vw), 1.50rem);

// 	/* Space m: 96px → 144px */
// 	--space-m: clamp(6.00rem, calc(4.96rem + 5.22vw), 9.00rem);

// 	/* Space l: 128px → 192px */
// 	--space-l: clamp(8.00rem, calc(6.61rem + 6.96vw), 12.00rem);

// 	/* Space xl: 160px → 240px */
// 	--space-xl: clamp(10.00rem, calc(8.26rem + 8.70vw), 15.00rem);

// 	/* Space 2xl: 192px → 288px */
// 	--space-2xl: clamp(12.00rem, calc(9.91rem + 10.43vw), 18.00rem);

// 	/* Space 3xl: 256px → 384px */
// 	--space-3xl: clamp(16.00rem, calc(13.22rem + 13.91vw), 24.00rem);

// 	/* Space 4xl: 320px → 480px */
// 	--space-4xl: clamp(20.00rem, calc(16.52rem + 17.39vw), 30.00rem);

// 	/* Space 5xl: 384px → 576px */
// 	--space-5xl: clamp(24.00rem, calc(19.83rem + 20.87vw), 36.00rem);

// 	/* Space 6xl: 512px → 768px */
// 	--space-6xl: clamp(32.00rem, calc(26.43rem + 27.83vw), 48.00rem);

// 	/* Space 7xl: 640px → 960px */
// 	--space-7xl: clamp(40.00rem, calc(33.04rem + 34.78vw), 60.00rem);
// }

export const fluidSize = {
	'0': 'clamp(5.00rem, calc(4.13rem + 4.35vw), 7.50rem)', // Between: 80px → 120px
	'1': 'clamp(6.00rem, calc(4.96rem + 5.22vw), 9.00rem)', // Step 3xs: 96px → 144px
	'2': 'clamp(8.00rem, calc(6.61rem + 6.96vw), 12.00rem)', // Step 2xs: 128px → 192px
	'3': 'clamp(10.00rem, calc(8.26rem + 8.70vw), 15.00rem)', // Step xs: 160px → 240px
	'4': 'clamp(12.00rem, calc(9.91rem + 10.43vw), 18.00rem)', // Step sm: 192px → 288px
	'5': 'clamp(16.00rem, calc(13.22rem + 13.91vw), 24.00rem)', // Step md: 256px → 384px
	'6': 'clamp(20.00rem, calc(16.52rem + 17.39vw), 30.00rem)', // Step lg: 320px → 480px
	'7': 'clamp(24.00rem, calc(19.83rem + 20.87vw), 36.00rem)', // Step xl: 384px → 576px
	'8': 'clamp(32.00rem, calc(26.43rem + 27.83vw), 48.00rem)', // Step 2xl: 512px → 768px
	'9': 'clamp(40.00rem, calc(33.04rem + 34.78vw), 60.00rem)', // Step 3xl: 640px → 960px
}

const fluidSizeKeys = extractKeys(fluidSize)

const shirt = {
	'2xs': fluidSize['0'],
	xs: fluidSize['1'],
	sm: fluidSize['2'],
	md: fluidSize['3'],
	lg: fluidSize['4'],
	xl: fluidSize['5'],
	'2xl': fluidSize['6'],
	'3xl': fluidSize['7'],
	'4xl': fluidSize['8'],
	'5xl': fluidSize['9'],
}

const shirtKeys = extractKeys(shirt)

export const fluidSizeAliases = {
	shirt,
	shirtKeys,
}

const uniqueSizes = {
	full: '100%',
	min: 'min-content',
	max: 'max-content',
	prose: '65ch', // characters
	'screen-vw': '100vw',
	'screen-vh': '100vh',
	'screen-sm': '480px',
	'screen-md': '640px',
	'screen-lg': '1024px',
	'screen-xl': '1280px',
	'screen-xxl': '1536px',
}

export const sizes = {
	...fluidSize,
	...uniqueSizes,
	...fluidSizeAliases.shirt,
}
