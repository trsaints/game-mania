import { IParserUtils } from '@utils/interfaces'
import { Game } from '@data/types'


export const ParserUtils: IParserUtils = {
	concatGameData(data: Game): string {
		const values = Object.entries(data)
		const fields = values.map(value => {
			const [k, v] = value

			if (typeof v === 'string') {
				return value
			}

			if (Array.isArray(v)) {
				let names: string[] = []

				if (k === 'genres') {
					names = v.map(g => g.name)
				} else if (k === 'platforms') {
					names = v.map(p => p.platform.name)
				} else if (k === 'tags') {
					names = v.map(t => t.name)
				} else if (k === 'developers') {
					names = v.map(d => d.name)
				} else if (k === 'publishers') {
					names = v.map(p => p.name)
				}

				return names.join()
			}

			if (typeof v === 'number') {
				return value.toString()
			}

			return ''
		})

		return fields.join().trim().toLowerCase()
	},
	mapToCamelCase,
	mapToSnakeCase,
	toCamelCase,
	toSnakeCase
}

function mapToCamelCase(data: never): unknown {
	const mappedData: Record<string, unknown> = {}
	const dataEntries                         = Object.entries(data)

	dataEntries.forEach(([key, value]) => {
		const parsedKey = key.includes('_')
						  ? toCamelCase(key)
						  : key

		mappedData[parsedKey] = value
	})

	return mappedData
}

function mapToSnakeCase(data: never): unknown {
	const mappedData: Record<string, unknown> = {}
	const dataEntries                         = Object.entries(data)

	dataEntries.forEach(([key, value]) => {
		const parsedKey = key.match(/[A-Z]/) !== null
						  ? toSnakeCase(key)
						  : key

		mappedData[parsedKey] = value
	})

	return mappedData
}

function toCamelCase(snakeText: string): string {
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

function toSnakeCase(camelText: string): string {
	const keywords = [...camelText.matchAll(/[A-Z]/g)]
	let result     = camelText

	for (const k of keywords) {
		result = result.replace(k[0], `_${k[0].toLowerCase()}`)
	}

	return result
}