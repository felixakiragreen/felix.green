export type Position = {
	title: string
	company: string
	logo: string
	startDate: Date
	endDate: Date
	impactPoints: string[]
}

export const positions: Position[] = [
	{
		title: 'Founder',
		company: 'Ambition',
		logo: 'ambition',
		// Jan 2021
		startDate: new Date('2021-01-01T00:00:00Z'),
		// Dec 2023
		endDate: new Date('2023-12-31T00:00:00Z'),
		impactPoints: [
			'generated X revenue',
			'used by X people',
			'launched X projects',
			'build X apps, X websites, X projects',
		],
		// projects: []
	},
	{
		title: 'Lead Developer',
		company: 'Trabian',
		logo: 'trabian',
		// Nov 2018
		startDate: new Date('2018-11-01'),
		// Jan 2021
		endDate: new Date('2020-01-01'),
		impactPoints: [
			'built X products',
			'lead team of X people',
			'launched X projects',
			'build X apps, X websites, X projects',
		],
	},
	{
		title: 'Lead Designer / Fronend Engineer',
		company: 'Emplify',
		logo: 'emplify',
		// Jul 2016
		startDate: new Date('2016-07-01'),
		// Oct 2018
		endDate: new Date('2018-10-01'),
		impactPoints: [
			'built X products',
			'lead team of X people',
			'launched X projects',
			'build X apps, X websites, X projects',
		],
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
			'built X products',
			'lead team of X people',
			'launched X projects',
			'build X apps, X websites, X projects',
		],
	},
]
