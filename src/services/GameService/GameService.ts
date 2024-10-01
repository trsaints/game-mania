import { Developer, Game, Genre, Platform, Publisher, Tag } from '@data/types'
import { ApiService }                                       from '@services/ApiService'
import { ParserUtils }                                      from '@src/utils'


export const GameService = {
	getGames,
	getGameById
}

async function getGames(): Promise<Game[]> {
	const baseUrl  = ApiService.createRouteUrl('games')
	const response = await ApiService.gameApi.get(baseUrl)

	return response.data?.results.map(mapToGame) ?? []
}

async function getGameById(id: number): Promise<Game> {
	const gameUrl  = ApiService.createRouteUrl(`games/${id}`)
	const response = await ApiService.gameApi.get(gameUrl)

	return mapToGame(response.data)
}

function mapToGame(data: any): Game {
	const mappedData = ParserUtils.mapToCamelCase(data) as Game

	if (mappedData.platforms) {
		mappedData.platforms = mappedData.platforms.map(mainPlatform => {
			mainPlatform.platform = ParserUtils
			.mapToCamelCase(mainPlatform.platform) as typeof mainPlatform.platform

			return ParserUtils.mapToCamelCase(mainPlatform) as Platform
		})
	}

	if (mappedData.developers) {
		mappedData.developers = mappedData.developers.map(d => ParserUtils
		.mapToCamelCase(d) as Developer)
	}

	if (mappedData.publishers) {
		mappedData.publishers = mappedData.publishers.map(p => ParserUtils
		.mapToCamelCase(p) as Publisher)
	}

	if (mappedData.tags) {
		mappedData.tags = mappedData.tags.map(t => ParserUtils
		.mapToCamelCase(t) as Tag)
	}

	if (mappedData.genres) {
		mappedData.genres = mappedData.genres.map(g => ParserUtils
		.mapToCamelCase(g) as Genre)
	}

	if (mappedData.stores) {
		mappedData.stores = mappedData.stores.map(store => {
			store.store = ParserUtils.mapToCamelCase(store.store) as typeof store.store

			return store
		})
	}

	console.log(mappedData)

	return mappedData
}

