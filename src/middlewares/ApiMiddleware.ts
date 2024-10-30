import { ApiData, ILocalDb } from '@data/local-storage'
import { DataRequestParams } from '@data/request-parameters'
import { DataServiceDictionary, Game, Recommended } from '@data/types'
import { IApiMiddleware } from '@src/middlewares'
import { IIApiMiddlewareFilter } from '@src/filters'


export class ApiMiddleware implements IApiMiddleware {
	private readonly _dataServiceDictionary: DataServiceDictionary
	private readonly _localDb: ILocalDb<ApiData>
	private readonly _filter: IIApiMiddlewareFilter

	constructor(dataServiceDictionary: DataServiceDictionary,
				localDb: ILocalDb<ApiData>,
				filter: IIApiMiddlewareFilter
	) {
		this._dataServiceDictionary = dataServiceDictionary
		this._localDb               = localDb
		this._filter                = filter
	}

	async getAll(route: keyof DataServiceDictionary,
				 params: DataRequestParams
	): Promise<ApiData[]> {
		let data = await this._localDb.getAll(route, params)

		if (data.length > 0 && route !== 'games')
			return data

		if (data.length > 0 && route === 'games') {
			const parsedGames = data as Game[]

			return await Promise.all(
				parsedGames.map(game => {
					return game.screenshots
						   ? game
						   : this._filter.mapMissingScreenshots(game,
																this._dataServiceDictionary.games,
																this._localDb
						)
				})
			)
		}

		data = await this._dataServiceDictionary[route].getAll(params)

		return await this._localDb.addBulk(route, data)
	}

	async getById(route: keyof DataServiceDictionary,
				  id: number
	): Promise<ApiData> {
		let data = await this._localDb.getObjectById(route, id)

		if (data && route !== 'games') return data

		if (data && route === 'games') {
			let parsedGame = data as Game

			if (! parsedGame.shortScreenshots) {
				parsedGame =
					await this._filter.mapMissingScreenshots(parsedGame,
															 this._dataServiceDictionary.games,
															 this._localDb
					)
			}

			if (! parsedGame.publishers) {
				parsedGame = await this._filter.mapGameDetails(parsedGame,
															   this._dataServiceDictionary.games,
															   this._localDb
				)
			}

			return parsedGame
		}

		data = await this._dataServiceDictionary[route].getById(id)

		const successfulAddition = await this._localDb.addObject(route, data)

		if (successfulAddition && route !== 'games') return data

		const parsedGame = data as Game

		return await this._filter.mapMissingScreenshots(parsedGame,
														this._dataServiceDictionary.games,
														this._localDb
		)
	}

	async getRecommendations(): Promise<Recommended> {
		const recentId = Math.floor(Math.random() * 1000)
		const dailyId  = Math.floor(Math.random() * 1000)

		return {
			daily            : await this.getById('games', dailyId) as Game,
			recent           : await this.getById('games', recentId) as Game,
			recentScreenshots: await this._dataServiceDictionary.games.getScreenshots(
				recentId),
			dailyScreenshots : await this._dataServiceDictionary.games.getScreenshots(
				dailyId)
		}
	}
}

