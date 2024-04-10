// import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
// import * as React from 'react'
// import { Frame, addPropertyControls, ControlType } from 'framer' // Code component provided by Eleveight Supply. All rights reserved 2024.
// function generateMaskImage(easing, direction) {
// 	let cssDirection
// 	switch (direction) {
// 		case 'to right':
// 			cssDirection = 'to left'
// 			break
// 		case 'to left':
// 			cssDirection = 'to right'
// 			break
// 		case 'to top':
// 			cssDirection = 'to bottom'
// 			break
// 		case 'to bottom':
// 			cssDirection = 'to top'
// 			break
// 		default:
// 			cssDirection = 'to bottom'
// 	}
// 	switch (easing) {
// 		case 'linear':
// 			return `linear-gradient(${cssDirection}, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,1) 100%)`
// 		case 'ease-in':
// 			return `linear-gradient(${cssDirection}, rgba(0,0,0,0) 10%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,1) 90%)`
// 		case 'ease-out':
// 			return `linear-gradient(${cssDirection}, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)`
// 		case 'ease-in-out':
// 			return `linear-gradient(${cssDirection}, rgba(0,0,0,0) 0%, rgba(0,0,0,0.05) 15%, rgba(0,0,0,0.2) 25%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)`
// 	}
// }
// /**
//  * @framerDisableUnlink
//  *
//  * @framerSupportedLayoutWidth any-prefer-fit
//  * @framerSupportedLayoutHeight any-prefer-fit
//  *
//  * @framerIntrinsicWidth 200
//  * @framerIntrinsicHeight 200
//  */ export default function FadeIt({
// 	children,
// 	type,
// 	image,
// 	gradientDirection,
// 	maskEasing,
// 	isMixed,
// 	topLeft,
// 	topRight,
// 	bottomRight,
// 	bottomLeft,
// }) {
// 	const borderRadius = isMixed
// 		? `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
// 		: `${topLeft}px`
// 	const contentStyle = {
// 		width: '100%',
// 		height: '100%',
// 		display: 'flex',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		position: 'relative',
// 		WebkitMaskImage: generateMaskImage(maskEasing, gradientDirection),
// 		maskImage: generateMaskImage(maskEasing, gradientDirection),
// 		objectFit: 'cover',
// 		borderRadius: type === 'image' ? borderRadius : '0px',
// 	}
// 	return /*#__PURE__*/ _jsxs(Frame, {
// 		background: null,
// 		style: contentStyle,
// 		children: [
// 			type === 'component' &&
// 				React.Children.count(children) === 0 &&
// 				/*#__PURE__*/ _jsx('div', {
// 					style: {
// 						width: '200px',
// 						height: '200px',
// 						background: '#333',
// 						color: '#FFFFFF',
// 						display: 'flex',
// 						justifyContent: 'center',
// 						alignItems: 'center',
// 						textAlign: 'center',
// 					},
// 					children: 'Connect to a frame',
// 				}),
// 			type === 'component' &&
// 				React.Children.count(children) > 0 &&
// 				/*#__PURE__*/ _jsx('div', {
// 					style: { width: '100%', height: '100%' },
// 					children: children,
// 				}),
// 			type === 'image' &&
// 				!image &&
// 				/*#__PURE__*/ _jsx('div', {
// 					style: {
// 						...contentStyle,
// 						background: '#555',
// 						width: '250px',
// 						height: '200px',
// 						display: 'flex',
// 						color: '#FFFFFF',
// 						textAlign: 'center',
// 					},
// 					children: 'Upload an image',
// 				}),
// 			type === 'image' &&
// 				image &&
// 				/*#__PURE__*/ _jsx('img', {
// 					style: contentStyle,
// 					src: image.src,
// 					alt: 'Uploaded image',
// 				}),
// 		],
// 	})
// }
// FadeIt.defaultProps = {
// 	type: 'image',
// 	maskDirection: 180,
// 	maskEasing: 'linear',
// 	isMixed: false,
// 	topLeft: 0,
// 	topRight: 0,
// 	bottomRight: 0,
// 	bottomLeft: 0,
// }
// addPropertyControls(FadeIt, {
// 	type: {
// 		type: ControlType.Enum,
// 		options: ['image', 'component'],
// 		optionTitles: ['Image', 'Frame'],
// 		defaultValue: 'image',
// 		displaySegmentedControl: true,
// 		segmentedControlDirection: 'horizontal',
// 	},
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
// 	maskEasing: {
// 		type: ControlType.Enum,
// 		title: 'Mask Easing',
// 		options: ['linear', 'ease-in', 'ease-out', 'ease-in-out'],
// 		optionTitles: ['Linear', 'Ease-In', 'Ease-Out', 'Ease-In-Out'],
// 		defaultValue: 'linear',
// 	},
// 	radius: {
// 		type: ControlType.FusedNumber,
// 		title: 'Radius',
// 		defaultValue: 0,
// 		toggleKey: 'isMixed',
// 		toggleTitles: ['All', 'Individual'],
// 		valueKeys: ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'],
// 		valueLabels: ['TL', 'TR', 'BR', 'BL'],
// 		min: 0,
// 		hidden: ({ type }) => type !== 'image',
// 	},
// 	children: {
// 		type: ControlType.ComponentInstance,
// 		hidden: ({ type }) => type === 'image',
// 	},
// 	image: {
// 		type: ControlType.ResponsiveImage,
// 		title: 'Image',
// 		hidden: ({ type }) => type === 'component',
// 	},
// })
// export const __FramerMetadata__ = {
// 	exports: {
// 		default: {
// 			type: 'reactComponent',
// 			name: 'FadeIt',
// 			slots: ['children'],
// 			annotations: {
// 				framerIntrinsicWidth: '200',
// 				framerSupportedLayoutWidth: 'any-prefer-fit',
// 				framerDisableUnlink: '*',
// 				framerSupportedLayoutHeight: 'any-prefer-fit',
// 				framerContractVersion: '1',
// 				framerIntrinsicHeight: '200',
// 			},
// 		},
// 		__FramerMetadata__: { type: 'variable' },
// 	},
// }
// //# sourceMappingURL=./FadeIt.map
