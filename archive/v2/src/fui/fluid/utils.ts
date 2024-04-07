export function extractKeys<T extends object>(obj: T): string[] {
	let keys: string[] = Object.keys(obj)
	if (keys.length === 9) {
		keys.unshift('no')
	}

	return keys
}

export function addKeys<T extends object>(obj: T): T & { keys: string[] } {
	const keys: string[] = extractKeys(obj)
	const newObj = { ...obj, keys }

	return newObj as T & { keys: string[] }
}

// This function works in two steps:
function convertToNegative(str: string): string {
	return str.replace(/(-?\d*\.?\d+)/g, (match) => {
		return String(-1 * parseFloat(match))
	})
}

function convertClampToNegative(str: string): string {
	return str.replace(/clamp\((.*?),(.*?),(.*)\)/g, (match, min, val, max) => {
		let negativeMin = convertToNegative(min.trim())
		let negativeMax = convertToNegative(max.trim())
		let negativeVal = convertToNegative(val.trim())
		return `clamp(${negativeMax}, ${negativeVal}, ${negativeMin})`
	})
}

export function addNegatives<T extends Record<string, string>>(obj: T): T {
	let newObj: Record<string, string> = { ...obj }
	for (let key in obj) {
		newObj[`-${key}`] = convertClampToNegative(obj[key])
	}

	return newObj as T
}
