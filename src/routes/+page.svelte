<script lang="ts">
	import { Box, Content, VStack, HStack, Text, Link, Image } from '@/fui'

	import HexagonalScrollBorder from '@/lib/components/HexagonalScrollBorder.svelte'
</script>

<Content p="0">
	<HexagonalScrollBorder />
	<VStack>
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
