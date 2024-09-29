export const ParserUtils = {
	convertSnakeToCamelCase
}

function convertSnakeToCamelCase(snakeText: string) {
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