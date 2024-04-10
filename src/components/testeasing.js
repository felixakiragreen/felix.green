// import { jsx as _jsx } from 'react/jsx-runtime'
// import { motion } from 'framer-motion'
// import { addPropertyControls, ControlType } from 'framer' // Easing functions
// const easings = {
// 	linear: (t) => t,
// 	easeIn: (t) => t * t,
// 	easeInOut: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
// 	exponential: (t) => (t === 0 ? 0 : Math.pow(1024, t - 1)),
// }
// /**

//  * @framerDisableUnlink
//  *
//  * @framerIntrinsicWidth 200
//  * @framerIntrinsicHeight 200
//  *
//  * @framerSupportedLayoutWidth fixed
//  * @framerSupportedLayoutHeight fixed
//  */ export default function Gradientease(props) {
// 	const { gradientDirection, cornerRadius, easing, grayScale } = props // Generate gradient stops
// 	const generateGradientStops = (easingFunc, numberOfStops = 30) => {
// 		return Array.from({ length: numberOfStops }, (_, i) => {
// 			const t = i / (numberOfStops - 1)
// 			const easedT = easingFunc(t)
// 			return `hsla(0, 0%, ${grayScale}%, ${easedT}) ${t * 100}%`
// 		}).join(', ')
// 	}
// 	const gradient = `linear-gradient(${gradientDirection}, ${generateGradientStops(
// 		easings[easing],
// 	)})`
// 	const style = {
// 		width: '100%',
// 		height: '100%',
// 		background: gradient,
// 		borderRadius: cornerRadius,
// 	}
// 	return /*#__PURE__*/ _jsx(motion.div, { style: style })
// }
// Gradientease.defaultProps = {
// 	gradientDirection: 'to bottom',
// 	cornerRadius: 0,
// 	easing: 'easeInOut',
// 	grayScale: 0,
// }
// addPropertyControls(Gradientease, {
// 	gradientDirection: {
// 		type: ControlType.Enum,
// 		title: 'Direction',
// 		options: ['to left', 'to right', 'to top', 'to bottom'],
// 		optionTitles: ['Left', 'Right', 'Up', 'Down'],
// 		displaySegmentedControl: true,
// 		optionIcons: [
// 			'direction-left',
// 			'direction-right',
// 			'direction-up',
// 			'direction-down',
// 		],
// 		defaultValue: 'to bottom',
// 	},
// 	cornerRadius: {
// 		type: ControlType.Number,
// 		title: 'Corner Radius',
// 		min: 0,
// 		max: 100,
// 		step: 1,
// 		unit: 'px',
// 	},
// 	easing: {
// 		type: ControlType.Enum,
// 		title: 'Easing',
// 		options: ['linear', 'easeIn', 'easeInOut', 'exponential'],
// 		optionTitles: ['Linear', 'Ease In', 'Ease In-Out', 'Exponential'],
// 		defaultValue: 'easeInOut',
// 	},
// 	grayScale: {
// 		type: ControlType.Number,
// 		title: 'Gray Scale',
// 		min: 0,
// 		max: 100,
// 		defaultValue: 0,
// 		unit: '%',
// 	},
// })
// export const __FramerMetadata__ = {
// 	exports: {
// 		default: {
// 			type: 'reactComponent',
// 			name: 'Gradientease',
// 			slots: [],
// 			annotations: {
// 				framerContractVersion: '1',
// 				framerDisableUnlink: '*',
// 				framerSupportedLayoutWidth: 'fixed',
// 				framerSupportedLayoutHeight: 'fixed',
// 				framerIntrinsicHeight: '200',
// 				framerIntrinsicWidth: '200',
// 			},
// 		},
// 		__FramerMetadata__: { type: 'variable' },
// 	},
// }
// //# sourceMappingURL=./Gradient_ease.map
