<script lang="ts">
	import { stitch, ButtonAtom } from '@/fui'
	import type { PropCss, PropBoolean, VariantOption } from '@/types'

	export let css: PropCss = undefined

	export let look: VariantOption<typeof ss, 'look'> | undefined = 'holo'
	export let size: VariantOption<typeof ss, 'size'> | undefined = 'md'
	export let rounding: VariantOption<typeof ss, 'rounding'> | undefined = 'md'
	export let disabled: PropBoolean = undefined

	// TODO: button looks
	// [x] basic (solid color)
	// [x] holo
	// [x] clean (no styling)
	// [ ] magic
	// [x] brutal
	// chamfer ? (cut corners, maybe just top left & bottom right?)
	// hexagonal ?

	// color = highlight / hue
	//

	const ss = stitch({
		// bg: '$gold',
		// color: '$black',
		// border: '2px solid $felix',

		// fontFamily: '$main',
		// fontWeight: '$bold',

		cursor: 'pointer',
		transition: '$1',

		// TODO: REWORK THIS PART
		// '&:active': {
		// 	boxShadow: 'inset 0 1px 0px 1px rgba(0, 0, 0, 0.5)',
		// 	transform: 'translateY(4px)',
		// 	borderColor: '$indigo',
		// },
		'&:disabled': {
			cursor: 'not-allowed',
			bg: '$background',
			color: '$highground',
		},
		'&:disabled:hover': {
			bg: '$backgrounder',
			color: '$highgroundish',
		},

		variants: {
			look: {
				basic: {
					bg: '$primaryHighground',
					color: '$primaryBackgroundest',
					border: 0,
					'&:hover': {
						bg: '$primaryForegroundest',
					},
				},
				holo: {
					bg: '$backgroundest',
					color: '$primaryHighground',
					border: '1px solid $primaryHighground',
					fontFamily: '$mono',
					// textTransform: 'uppercase',
					'&:hover': {
						bg: '$primaryHighground',
						color: '$primaryBackgroundest',
					},
					'&:disabled': {
						// bg: '$background',
						// color: '$highground',
						border: '1px solid $highground',
					},
					'&:disabled:hover': {
						// bg: '$backgrounder',
						// color: '$highgroundish',
						border: '1px solid $highgroundish',
					},
				},
				clean: {
					bg: '$clear',
					color: '$foreground',
					border: 0,
					'&:active': {},
				},
				brutal: {
					bg: '$primaryHighground',
					color: '$primaryBackgroundest',
					border: 0,
					br: '$no',
					boxShadow: '$hard',
					'&:hover': {
						bg: '$primaryForegroundest',
					},
					'&:active': {
						bg: '$primaryHighground',
						boxShadow:
							'1px 1px 0px 0 rgba(0, 0, 0), inset 2px 2px 0px 2px rgba(0, 0, 0, 0.5)',
						transform: 'translate(4px, 4px)',
					},
					'&:disabled:active': {
						transform: 'translate(0)',
						boxShadow: '$hard',
					},
				},
				brutalist: {
					bg: '$backgroundest',
					color: '$primaryHighground',
					border: '1px solid $primaryHighground',
					br: '$no',
					boxShadow: '4px 4px 0px 0 $colors$primaryHighground',
					'&:hover': {
						bg: '$backgroundish',
					},
					'&:active': {
						boxShadow:
							'0px 0px 0px 0 rgba(0, 0, 0), inset 0px 0px 0px 2px rgba(0, 0, 0, 0.5)',
						transform: 'translate(4px, 4px)',
					},
					'&:disabled': {
						border: '1px solid $highground',
						boxShadow: '4px 4px 0px 0 $colors$highground',
					},
					'&:disabled:hover': {
						border: '1px solid $highgroundish',
						boxShadow: '4px 4px 0px 0 $colors$highgroundish',
					},
					'&:disabled:active': {
						transform: 'translate(0)',
						boxShadow: '4px 4px 0px 0 $colors$highground',
					},
				},
				magic: {
					$$Corner: '$radii$md',
					position: 'relative',
					borderRadius: '$$Corner',
					bg: '$colors$clear',
					p: '$no',
					outlineOffset: '4px',
					border: 0,

					// linearGradient: 'to bottom, $colors$clear, $colors$green-500',
					'.front': {
						display: 'block',
						bg: '$primaryHighground',
						borderRadius: '$$Corner',
						transform: 'translateY(-4px)',
						willChange: 'transform',
						transition: 'transform 600ms cubic-bezier(.3, .7, .4, 1)',
					},

					'&:hover': {
						bg: '$primaryHighgroundest',

						'.front': {
							transition: 'transform 250ms cubic-bezier(.3, .7, .4, 1.5)',
							transform: 'translateY(-6px)',
						},
					},

					'&:active': {
						'.front': {
							transform: 'translateY(-2px)',
						},
					},

					'.shadow': {
						position: 'absolute',
						top: '0',
						left: '0',
						width: '100%',
						height: '100%',
						borderRadius: '$$Corner',
						background: 'hsl(0deg 0% 0% / 0.25)',
						transform: 'translateY(2px)',
						filter: 'blur(2px)',
					},

					'.edge': {
						position: 'absolute',
						top: '0',
						left: '0',
						width: '100%',
						height: '100%',
						borderRadius: '$$Corner',
						background: `linear-gradient(
							to left,
							$primaryBackgroundish 0%,
							$primaryBackground 8%,
							$primaryBackground 92%,
							$primaryBackgroundish 100%
						)`,
					},
				},
			},
			size: {
				no: {
					p: '$no',
				},
				xs: {
					p: '$xs',
					text: '$xs',
				},
				sm: {
					p: '$sm',
					text: '$sm',
				},
				md: {
					p: '$md',
					text: '$md',
				},
				lg: {
					p: '$lg',
					text: '$lg',
				},
				xl: {
					p: '$xl',
					text: '$xl',
				},
			},
			rounding: {
				no: {
					br: '$no',
				},
				xs: {
					br: '$xs',
				},
				sm: {
					br: '$sm',
				},
				md: {
					br: '$md',
				},
				lg: {
					br: '$lg',
				},
				xl: {
					br: '$xl',
				},
				'2xl': {
					br: '$2xl',
				},
				'3xl': {
					br: '$3xl',
				},
				full: {
					br: '$full',
				},
			},
		},
		compoundVariants: [
			// magic + xs
			{
				look: 'magic',
				size: 'xs',
				css: {
					'.front': {
						p: '$xs',
					},
				},
			},
			// magic + sm
			{
				look: 'magic',
				size: 'sm',
				css: {
					'.front': {
						p: '$sm',
					},
				},
			},
			// magic + md
			{
				look: 'magic',
				size: 'md',
				css: {
					'.front': {
						p: '$md',
					},
				},
			},
		],
	})
</script>

<ButtonAtom cls={ss} vrt={{ look, size, rounding }} {css} {disabled} on:click>
	<span class="shadow" />
	<span class="edge" />
	<span class="front">
		<slot />
	</span>
</ButtonAtom>
