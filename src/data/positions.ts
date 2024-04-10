import {
	type Project,
	ambitionProjects,
	trabianProjects,
	emplifyProjects,
	bluebridgeProjects,
} from './projects'

export type Position = {
	title: string
	company: string
	logo: string
	url?: string
	startDate: Date
	endDate: Date
	impactPoints: string[]
	projects?: Project[]
}

export const positions: Position[] = [
	{
		title: 'Founder',
		company: 'Ambition',
		logo: 'ambition',
		url: 'https://ambition.wtf',
		// Jan 2021
		startDate: new Date('2021-01-01'),
		// Dec 2023
		endDate: new Date('2023-12-31'),
		impactPoints: [
			'generated $325K revenue',
			'used by 3250 people',
			'built 4 iOS apps, 3 macOS apps',
			// 1 chrome extension
			'deployed 7 websites, 9 contracts',
		],
		projects: ambitionProjects,
	},
	{
		title: 'Lead Developer',
		company: 'Trabian',
		logo: 'trabian',
		url: 'https://trabian.com',
		// Nov 2018
		startDate: new Date('2018-11-01'),
		// Jan 2021
		endDate: new Date('2020-01-01'),
		impactPoints: [
			'led team of 2-5 people',
			'worked with 6 clients',
			'built 3 apps, 6 websites, 2 APIs',
			'replaced 3 legacy stacks',
			'built trabianUI design system',
		],
		projects: trabianProjects,
	},
	{
		title: 'Lead Designer / Frontend Engineer',
		company: 'Emplify',
		logo: 'emplify',
		url: 'https://emplify.com',
		// Jul 2016
		startDate: new Date('2016-07-01'),
		// Oct 2018
		endDate: new Date('2018-10-01'),
		impactPoints: [
			'acquired for $50M by 15Five',
			'led design of new product',
			'built analytics dashboard',
			'2016 Core Value Legend winner',
		],
		projects: emplifyProjects,
	},
	{
		title: 'UI Developer / Designer',
		company: 'Bluebridge',
		logo: 'bluebridge',
		// Oct 2012
		startDate: new Date('2012-10-01'),
		// Jul 2016
		endDate: new Date('2016-07-01'),
		impactPoints: [
			'acquired for $8M',
			'designed brand identity',
			'designed templates used by 200+ apps',
			'designed & built product CMS',
		],
		projects: bluebridgeProjects,
	},
]
