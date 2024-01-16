<script lang="ts">
	import { VStack } from '@/fui'

	import { socials } from './socials'
	import IconSocialRow from './IconSocialRow.svelte'
</script>

<VStack
	align="center"
	alignV="center"
	css={{
		'--ICON-ground': '$colors$clear',
		'--ICON-symbol': '$colors$felix',
		'--ICON-stroke': '$colors$felix',
		'--ICON-symbol-hover': '$colors$backgroundest',
		'--ICON-ground-hover': '$colors$felix',
		'@sm': {
			pt: '$3xl',
			height: 'calc(var(--Unit) * 1)',
			'--ICON-size': '$space$7',
		},
		'@md': {
			pt: '$3xl',
			height: 'calc(var(--Unit) * 2)',
			'--ICON-size': '$space$8',
		},
		'@lg': {
			height: 'calc(var(--Unit) * 2)',
			'--ICON-size': '$space$9',
		},
	}}
>
	<IconSocialRow {socials} gap="sm" shape="hexagon" />
</VStack>
