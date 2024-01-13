<script lang="ts">
	import { Box, Content, VStack, HStack, Text, Link, Image } from '@/fui'

	import HexagonalScrollBorder from '@/lib/components/HexagonalScrollBorder.svelte'
</script>

<Content p="0">
	<HexagonalScrollBorder />
	<VStack>
		<VStack
			fg="felix"
			css={{
				textAlign: 'center',
				'@bp3': {
					$Unit: 'calc((100vw / 6) * 1.155)',
				},
				'@bp6': {
					$Unit: 'calc((100vw / 10) * 1.155)',
				},
				'@bp9': {
					$Unit: 'calc((100vw / 16) * 1.155)',
				},
				marginTop: 'calc(var(--Unit) * 4)',
			}}
		>
			<Text size="lg" css={{ opacity: 0.4 }}>
				I<br />am</Text
			>
			<Text size="2xl" weight="thinn">felix green</Text>
		</VStack>
		<Box
			css={{
				width: '100px',
				height: '2000px',
				backgroundColor: 'red',
				margin: '0 auto',
			}}
		></Box>
	</VStack>
</Content>
