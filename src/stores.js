import { writable, derived } from 'svelte/store'
import { hexPropsFromWidth } from '@fag/hexagonal'

export const widthInner = writable(0)
export const widthOuter = writable(0)
export const heightNav = derived(
  widthInner,
  $widthInner => hexPropsFromWidth({ width: $widthInner }).a
)

// export const dimensions = {
//   widthInner,
//   wOuter
// }
