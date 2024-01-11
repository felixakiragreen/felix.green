import type { CSS } from './stitches.config'
import type * as Stitches from '@stitches/core'
import type { CssComponent } from '@stitches/core/types/styled-component'

export type { CSS, CssComponent, Stitches }

export const baseColors = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'purple',
	'grey',
] as const
export type Color = (typeof baseColors)[number]

export enum IconTheme {
	None = 'no',
	Clear = 'cl',
	CurrentColor = 'cc',
	Foreground = 'fg',
	Background = 'bg',
	Highlight = 'hl',
	Lowlight = 'll',
	BrandExact = 'be',
	BrandHue = 'bh',
}

export type PropString = string | null | undefined
export type PropBoolean = boolean | null | undefined
export type PropComponent = CssComponent | null | undefined
export type PropCss = CSS | undefined

export type VariantOption<
	Component extends { [key: symbol | string]: any },
	VariantName extends
		| keyof Stitches.VariantProps<Component>
		| unknown = unknown,
> = VariantName extends keyof Stitches.VariantProps<Component>
	? Extract<Stitches.VariantProps<Component>[VariantName], string>
	: Extract<Stitches.VariantProps<Component>, string>

export type VariantOptionBool<
	Component extends { [key: symbol | string]: any },
	VariantName extends
		| keyof Stitches.VariantProps<Component>
		| unknown = unknown,
> = VariantName extends keyof Stitches.VariantProps<Component>
	? Extract<Stitches.VariantProps<Component>[VariantName], boolean>
	: Extract<Stitches.VariantProps<Component>, boolean>

export type SocialLink = {
	url: string
	username: string
	title: string
	hex: string
	hue: string
	path: string
	transform: {
		scale: number
		translate: {
			x: number
			y: number
		}
	}
	look?: string
}
