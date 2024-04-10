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

type ProjectFacetType = 'mobile' | 'desktop' | 'browser' | 'art'

export type ProjectFacet = {
	type: ProjectFacetType
	image: string
	note?: string
	url?: string | string[]
}

export const ambitionProjects: Project[] = [
	{
		title: 'The Worm',
		facets: [
			{
				type: 'art',
				image: 'the_worm',
				url: [
					'https://theworm.wtf',
					'https://opensea.io/collection/the-worm-church',
					'https://etherscan.io/address/0xACd3CF818EFe8ddce84C585ddCB147c4C844D3b3#code',
					'https://theworm.wtf/us',
					'https://opensea.io/collection/the-worm-x-minimizer',
				],
			},
		],
	},
	{
		title: 'Rooted',
		facets: [
			{
				type: 'mobile',
				image: 'rooted',
				url: 'https://apps.apple.com/us/app/rooted-tarot/id6480379768',
			},
		],
	},
	{
		title: 'LifeTower',
		facets: [
			{
				type: 'mobile',
				image: 'lifetower',
				url: [
					'https://lifetower.app',
					'https://apps.apple.com/us/app/lifetower/id6464431513',
				],
			},
		],
	},
	{
		title: 'Toobins',
		facets: [
			{
				type: 'art',
				image: 'toobins',
				url: 'https://www.proof.xyz/toobins',
			},
		],
	},
	{
		title: 'VisaViz',
		facets: [
			{
				type: 'desktop',
				image: 'visaviz',
				url: 'https://github.com/felixakiragreen/visaviz/releases',
			},
		],
	},
	{
		title: 'Hexis',
		facets: [
			{
				type: 'art',
				image: 'hexis',
				url: 'https://hexis.wtf',
			},
		],
	},
	{
		title: 'ArtSee',
		facets: [
			{
				type: 'desktop',
				image: 'artsee',
				url: 'https://artsee.wtf',
			},
		],
	},
]

export const trabianProjects: Project[] = [
	{
		title: 'BillGo',
		facets: [
			{
				type: 'browser',
				image: 'billgo',
			},
		],
	},
	{
		title: 'VivaFirst',
		facets: [
			{
				type: 'browser',
				image: 'vivafirst',
			},
			{
				type: 'mobile',
				image: 'vivafirst',
			},
		],
	},
	{
		title: 'Relm',
		facets: [
			{
				type: 'browser',
				image: 'relm',
			},
			{
				type: 'mobile',
				image: 'relm',
			},
		],
	},
	{
		title: 'FCFCU',
		facets: [
			{
				type: 'browser',
				image: 'fcfcu',
			},
			{
				type: 'mobile',
				image: 'fcfcu',
			},
		],
	},
	{
		title: 'CU1',
		facets: [
			{
				type: 'browser',
				image: 'cu1',
			},
		],
	},
]

export const emplifyProjects: Project[] = [
	{
		title: 'Emplify Dashboard',
		facets: [
			{
				type: 'desktop',
				image: 'emplify_dash',
			},
			{
				type: 'desktop',
				image: 'emplify_dash2',
			},
		],
	},
	{
		title: 'Emplify App',
		facets: [
			{
				type: 'mobile',
				image: 'emplify',
			},
		],
	},
]

export const bluebridgeProjects: Project[] = [
	{
		title: 'Bluebridge Logo',
		facets: [
			{
				type: 'art',
				image: 'bluebridge',
			},
		],
	},
	{
		title: 'Bluebridge CMS',
		facets: [
			{
				type: 'desktop',
				image: 'bluebridge_cms',
			},
		],
	},
	{
		title: 'Bluebridge Apps',
		facets: [
			{
				type: 'mobile',
				image: 'bluebridge',
			},
		],
	},
]
