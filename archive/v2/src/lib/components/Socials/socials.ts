import iconX from './icons/x'
import iconGithub from './icons/github'
import iconLinkedIn from './icons/linkedin'

import type { SocialLink } from '@/types'
import links from './links.json'

const transform = {
	transform: {
		scale: 0.65,
		translate: {
			x: 10,
			y: 10,
		},
	},
}

export const x: SocialLink = {
	...links.x,
	...iconX,
	...transform,
}

export const github: SocialLink = {
	...links.github,
	...iconGithub,
	...transform,
}

export const linkedin: SocialLink = {
	...links.linkedin,
	...iconLinkedIn,
	...transform,
}

export const socials: SocialLink[] = [
	//
	// email,
	x,
	github,
	linkedin,
]
