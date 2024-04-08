export type Social = {
	name: string
	url: string
	icon?: string
}

export const socials: Social[] = [
	{
		name: 'GitHub',
		url: 'https://github.com/felixakiragreen',
		icon: 'gh',
	},
	{
		name: 'X',
		url: 'https://x.com/thecolorfelix',
		icon: 'x',
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/felixakiragreen',
		icon: 'in',
	},
	{
		name: 'Email',
		url: 'mailto:work@felix.green',
		icon: '@',
	},
	{
		name: 'CV',
		url: 'https://felix.green/cv.pdf',
		icon: 'cv',
	},
]
