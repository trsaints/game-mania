import { GameRequestParams } from '@data/requests'
import {
	Developer,
	GameData,
	GamesPlatform,
	GenreData,
	PublisherData,
	Recommended,
	Screenshots,
	Store,
	TagData
}                            from '@data/types'
import { ApiService }        from '@src/services'
import { ParserUtils }       from '@src/utils'


export const GameService = {
	getGames,
	getGameById,
	getRecommendations,
	getScreenshots
}

async function getGames(params?: GameRequestParams): Promise<GameData[]> {
	const baseUrl  = ApiService.createRouteUrl('games')
	const response = await ApiService.gameApi.get(baseUrl, {
		params: params ? ParserUtils.mapToSnakeCase(params) : {}
	})

	return response.data?.results.map(mapToGame) ?? []
}

async function getGameById(id: number): Promise<GameData> {
	const gameUrl  = ApiService.createRouteUrl(`games/${id}`)
	const response = await ApiService.gameApi.get(gameUrl)

	return mapToGame(response.data)
}

function mapToGame(data: any): GameData {
	const mappedData = ParserUtils.mapToCamelCase(data) as GameData

	if (mappedData.platforms) {
		mappedData.platforms = mapToPlatforms(mappedData.platforms)
	}

	if (mappedData.developers) {
		mappedData.developers = mappedData.developers.map(d => ParserUtils
		.mapToCamelCase(d) as Developer)
	}

	if (mappedData.publishers) {
		mappedData.publishers = mappedData.publishers.map(p => ParserUtils
		.mapToCamelCase(p) as PublisherData)
	}

	if (mappedData.tags) {
		mappedData.tags = mappedData.tags.map(t => ParserUtils
		.mapToCamelCase(t) as TagData)
	}

	if (mappedData.genres) {
		mappedData.genres = mappedData.genres.map(g => ParserUtils
		.mapToCamelCase(g) as GenreData)
	}

	if (mappedData.stores) {
		mappedData.stores = mapToStores(mappedData.stores)
	}

	return mappedData
}

function mapToPlatforms(platforms: GamesPlatform[]) {
	return platforms.map(mainPlatform => {
		mainPlatform.platform = ParserUtils
		.mapToCamelCase(mainPlatform.platform) as typeof mainPlatform.platform

		return ParserUtils.mapToCamelCase(mainPlatform) as GamesPlatform
	})
}

function mapToStores(stores: Store[]) {
	return stores.map(store => {
		store.store
			= ParserUtils.mapToCamelCase(store.store) as typeof store.store

		return store
	})
}

async function getRecommendations(): Promise<Recommended> {
	const recentId = Math.floor(Math.random() * 1000)
	const dailyId  = Math.floor(Math.random() * 1000)

	return {
		recent           : await GameService.getGameById(recentId),
		daily            : await GameService.getGameById(dailyId),
		recentScreenshots: await GameService.getScreenshots(recentId),
		dailyScreenshots : await GameService.getScreenshots(dailyId)
	}
}

async function getScreenshots(id: number): Promise<Screenshots> {
	const routeUrl = ApiService.createRouteUrl(`games/${id}/screenshots`)
	const response = await ApiService.gameApi.get(routeUrl)

	return response.data as Screenshots
}
