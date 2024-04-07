import type { SvelteComponent } from 'svelte'
import type { Props } from 'tippy.js'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/translucent.css'

type TooltipProps = Partial<Omit<Props, 'content'>> & {
	content: typeof SvelteComponent | string
	props?: SvelteAllProps
}

const getContentAsString = (
	content: typeof SvelteComponent | string,
	props: any,
) => {
	if (typeof content === 'string') return content
	const shadow = document.createElement('div')
	new content({ target: shadow, props })
	return shadow
}

export const tooltip = (node: HTMLElement, options: TooltipProps): void => {
	const isComponent = !(typeof options.content === 'string')
	const content = getContentAsString(options.content, options.props || {})

	tippy(node, {
		...options,
		theme: 'translucent',
		content,
		allowHTML: isComponent || options.allowHTML,
	})
}
