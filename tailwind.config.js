import { tailwindConfig } from '@f*g/felix'

// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         ...tailwindConfig,
//       },
//     },
//   },
//   variants: {
//     color: ['hover'],
//   },
//   plugins: [],
// }

/*
	Tailwind - The Utility-First CSS Framework
	A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
	David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).
	View the full documentation at https://tailwindcss.com.
*/

// import tailwindui from '@tailwindcss/ui'

export default {
  purge: false, // Purging is taken care of in postcss.config.js
  theme: {
    extend: {
      colors: {
        ...tailwindConfig,
      },
    },
  },
  variants: {},
  plugins: [
    // tailwindui, // Can drastically slow down build time, disable if a problem
  ],
}
