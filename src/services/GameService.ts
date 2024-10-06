import { GameRequestParams } from '@data/requests'
import {
	Developer,
	Game,
	GamesPlatform,
	Genre,
	Platform,
	Publisher,
	Recommended,
	Screenshots,
	Store,
	Tag
}                            from '@data/types'
import { ApiService }        from '@services/index.ts'
import { IGameService }      from '@services/interfaces'
import { ParserUtils }       from '@src/utils'


export class GameService implements IGameService {
	public async getAll(params?: GameRequestParams): Promise<Game[]> {
		const baseUrl  = ApiService.createRouteUrl('games')
		const response = await ApiService.gameApi.get(baseUrl, {
			params: params ? ParserUtils.mapToSnakeCase(params) : {}
		})

		return response.data?.results.map(this.mapToGame) ?? []
	}

	public async getById(id: number): Promise<Game> {
		const gameUrl  = ApiService.createRouteUrl(`games/${id}`)
		const response = await ApiService.gameApi.get(gameUrl)

		return this.mapToGame(response.data)
	}

	public async getRecommendations(): Promise<Recommended> {
		const recentId = Math.floor(Math.random() * 1000)
		const dailyId  = Math.floor(Math.random() * 1000)

		return {
			daily            : await this.getById(dailyId),
			recent           : await this.getById(recentId),
			recentScreenshots: await this.getScreenshots(recentId),
			dailyScreenshots : await this.getScreenshots(dailyId)
		}
	}

	public mapToGame(data: any): Game {
		const mappedData = ParserUtils.mapToCamelCase(data) as Game

		if (mappedData.platforms !== undefined) {
			mappedData.platforms
				= this.mapToGamesPlatforms(mappedData.platforms)
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
			mappedData.stores = this.mapToStores(mappedData.stores)
		}

		return mappedData
	}

	public mapToStores(stores: Store[]): Store[] {
		return stores.map(store => {
			store.store
				= ParserUtils.mapToCamelCase(store.store) as typeof store.store

			return store
		})
	}

	public mapToGamesPlatforms(platforms: GamesPlatform[]): GamesPlatform[] {
		return platforms.map(mainPlatform => {
			mainPlatform.platform = ParserUtils
			.mapToCamelCase(mainPlatform.platform) as Platform

			return ParserUtils.mapToCamelCase(mainPlatform) as GamesPlatform
		})
	}

	public async getScreenshots(id: number): Promise<Screenshots> {
		const routeUrl = ApiService.createRouteUrl(`games/${id}/screenshots`)
		const response = await ApiService.gameApi.get(routeUrl)

		return response.data as Screenshots
	}
}


