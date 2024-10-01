export const ParserUtils = {
	toCamelCase,
	mapToCamelCase
}

function mapToCamelCase(data: any): unknown {
	let mappedData: any = {}
	const dataEntries   = Object.entries(data)

	dataEntries.forEach(([key, value]) => {
		const parsedKey = key.includes('_')
						  ? toCamelCase(key)
						  : key

		mappedData[parsedKey] = value
	})

	return mappedData
}

function toCamelCase(snakeText: string) {
	const tokens = snakeText.split('_')

	if (tokens.length === 1) return tokens[0]

	const upperCasedTokens = tokens.map((t, i) => {
		if (i === 0) return t

		const upperCasedLetter = t.toUpperCase()[0]
		const slicedToken      = t.slice(1, t.length)

		return upperCasedLetter.concat(slicedToken)
	})

	return upperCasedTokens.join('')
}