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

	return response.data?.results.map(ParserUtils.mapToCamelCase) as Game[] ?? []
}

async function getGameById(id: number): Promise<Game> {
	const gameUrl  = ApiService.createRouteUrl(`games/${id}`)
	const response = await ApiService.gameApi.get(gameUrl)

	return ParserUtils.mapToCamelCase(response.data) as Game
}



