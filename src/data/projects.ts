export type Project = {
	title: string
	description?: string
	// logo: string
	// url?: string
	startDate?: Date
	endDate?: Date
	facets: ProjectFacet[]
	// each project can have multiple URLs/images/previews
}

type ProjectFacetType =
	| 'iOS app'
	| 'macOS app'
	| 'android app'
	| 'website'
	| 'solidity contract'

export type ProjectFacet = {
	type: ProjectFacetType
	note?: string
	image?: string
	url?: string
	code?: string
}

export const ambitionProjects: Project[] = [
	{
		title: 'The Worm',
		facets: [
			{
				type: 'website',
				image: '',
				url: 'https://theworm.wtf',
			},
			{
				type: 'solidity contract',
				note: 'The Worm Inception',
				image: '',
				url: 'https://opensea.io/collection/the-worm-church',
				code: 'https://etherscan.io/address/0xACd3CF818EFe8ddce84C585ddCB147c4C844D3b3#code',
			},
			{
				type: 'solidity contract',
				note: 'Blessing 100',
				image: '',
				code: '',
			},
			{
				type: 'solidity contract',
				note: 'Blessing 1000',
				image: '',
				code: '',
			},
			{
				type: 'solidity contract',
				note: 'Blessing 1000',
				image: '',
				code: '',
				url: 'https://theworm.wtf/us',
				// url: 'https://opensea.io/collection/the-worm-x-minimizer',
			},
		],
	},
	{
		title: 'Rooted',
		facets: [
			{
				type: 'iOS app',
				image: '',
				url: 'https://apps.apple.com/us/app/rooted-tarot/id6480379768',
			},
		],
	},
	{
		title: 'LifeTower',
		facets: [
			{
				type: 'website',
				image: '',
				url: 'https://lifetower.app',
			},
			{
				type: 'iOS app',
				image: '',
				url: 'https://apps.apple.com/us/app/lifetower/id6464431513',
			},
		],
	},
	{
		title: 'Toobins',
		facets: [
			{
				type: 'solidity contract',
				image: '',
				url: '',
			},
		],
	},
	{
		title: 'VisaViz',
		facets: [
			{
				type: 'macOS app',
				image: '',
				url: 'https://github.com/felixakiragreen/visaviz/releases',
			},
		],
	},
]
