import { jsx as _jsx } from 'react/jsx-runtime'
import { Frame, addPropertyControls, ControlType } from 'framer'

const BlurDiv = ({
	blurValue,
	gradientStart,
	gradientEnd,
	zIndex,
	direction,
	cornerRadius,
}) => {
	const maskImage = `linear-gradient(to ${direction}, rgba(0, 0, 0, 0) ${gradientStart}%, rgba(0, 0, 0, 1) ${gradientEnd}%)`
	return /*#__PURE__*/ _jsx('div', {
		style: {
			position: 'absolute',
			inset: 0,
			height: '100%',
			width: '100%',
			backdropFilter: `blur(${blurValue}px)`,
			WebkitBackdropFilter: `blur(${blurValue}px)`,
			maskImage: maskImage,
			WebkitMaskImage: maskImage,
			zIndex: zIndex,
			borderRadius: cornerRadius,
		},
	})
}
/**

 * @framerDisableUnlink
 *
 * @framerIntrinsicWidth 200
 * @framerIntrinsicHeight 200
 * 
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */ export default function ProgressiveBlur(props) {
	const {
		blur,
		blurDirection,
		allCorners,
		radius,
		topLeft,
		topRight,
		bottomRight,
		bottomLeft,
	} = props
	const blurLayers = 10
	const scaledBlur = (blur / 100) * 1e3
	const cornerRadius = allCorners
		? `${radius}px`
		: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
	const blurDivs = Array.from({ length: blurLayers }).map((_, index) => {
		const blurFactor = Math.pow(index / (blurLayers - 1), 2)
		const blurValue = (blurFactor * scaledBlur) / 30
		const gradientStart = (100 / blurLayers) * index
		const gradientEnd = gradientStart + (100 / blurLayers) * 2
		return /*#__PURE__*/ _jsx(
			BlurDiv,
			{
				blurValue: blurValue,
				gradientStart: gradientStart,
				gradientEnd: Math.min(gradientEnd, 100),
				zIndex: index + 1,
				direction: blurDirection,
				cornerRadius: cornerRadius,
			},
			index,
		)
	})
	return /*#__PURE__*/ _jsx(Frame, {
		size: '100%',
		background: null,
		style: {
			position: 'relative',
			borderRadius: cornerRadius,
			overflow: 'visible',
		},
		children: blurDivs,
	})
}
ProgressiveBlur.defaultProps = {
	blur: 100,
	blurDirection: 'bottom',
	allCorners: true,
	radius: 0,
	topLeft: 0,
	topRight: 0,
	bottomRight: 0,
	bottomLeft: 0,
}
addPropertyControls(ProgressiveBlur, {
	blur: {
		type: ControlType.Number,
		title: 'Blur',
		min: 0,
		max: 100,
		step: 1,
		description:
			'Note: Using a larger blur amount may slow down the website if used multiple times.',
	},
	blurDirection: {
		type: ControlType.SegmentedEnum,
		title: 'Direction',
		options: ['top', 'bottom', 'left', 'right'],
		optionTitles: ['↑', '↓', '←', '→'],
	},
	cornerRadius: {
		type: ControlType.FusedNumber,
		title: 'Corner Radius',
		toggleKey: 'allCorners',
		toggleTitles: ['All', 'Individual'],
		valueKeys: ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'],
		valueLabels: ['TL', 'TR', 'BR', 'BL'],
		min: 0,
		description:
			"Set corner radius from here otherwise the blur effect will break. The parent container can't have corner radius.",
	},
})
export const __FramerMetadata__ = {
	exports: {
		default: {
			type: 'reactComponent',
			name: 'ProgressiveBlur',
			slots: [],
			annotations: {
				framerContractVersion: '1',
				framerIntrinsicWidth: '200',
				framerDisableUnlink: '*',
				framerIntrinsicHeight: '200',
				framerSupportedLayoutWidth: 'fixed',
				framerSupportedLayoutHeight: 'fixed',
			},
		},
		__FramerMetadata__: { type: 'variable' },
	},
}
//# sourceMappingURL=./Progressiveblur.map
