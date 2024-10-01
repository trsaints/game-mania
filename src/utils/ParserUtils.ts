export const ParserUtils = {
	convertSnakeToCamelCase: toCamelCase,
	mapToCamelCase
}

function mapToCamelCase(data: any) {
	let mappedData: any = {}
	const dataEntries   = Object.entries(data)

	dataEntries.forEach(([key, value]) => {
		const parsedKey = key.includes('_')
						  ? ParserUtils.convertSnakeToCamelCase(key)
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
		const slicedToken = t.slice(1, t.length)

		return upperCasedLetter.concat(slicedToken)
	})

	let result = ''

	for (let i = 0; i < upperCasedTokens.length; i++) {
		result = result.concat(upperCasedTokens[i])
	}
	
	return result
}