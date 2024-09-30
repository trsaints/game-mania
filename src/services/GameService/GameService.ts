import { Game }        from '@data/types'
import { ApiService }  from '@services/ApiService'
import { ParserUtils } from '@src/utils'


export const GameService = {
	getGames,
	getGameById
}

async function getGames(): Promise<Game[]> {
	const baseUrl  = ApiService.createRouteUrl('games')
	const response = await ApiService.gameApi.get(baseUrl)

	return response.data?.results.map(mapToGameType) ?? []
}

async function getGameById(id: number): Promise<Game> {
	const gameUrl  = ApiService.createRouteUrl(`games/${id}`)
	const response = await ApiService.gameApi.get(gameUrl)

	return mapToGameType(response.data)
}

function mapToGameType(data: any): Game {
	let mappedGame: any = {}
	const dataEntries   = Object.entries(data)

	dataEntries.forEach(([key, value]) => {
		if (!key.includes('_')) {
			mappedGame[key] = value

			return
		}

		const camelCasedKey = ParserUtils.convertSnakeToCamelCase(key)

		mappedGame[camelCasedKey] = value
	})

	return mappedGame as Game
}

