import { ApiData, ILocalDb } from '@data/local-storage'
import { DataRequestParams } from '@data/request-parameters'
import { DataServiceDictionary, Game, Recommended } from '@data/types'
import { IApiMiddleware } from '@src/middlewares'
import { IIApiMiddlewareFilter } from '@src/filters'
import { IApiService } from '@src/services'


export class ApiMiddleware implements IApiMiddleware {
	private readonly _dataServiceDictionary: DataServiceDictionary
	private readonly _apiService: IApiService
	private readonly _localDb: ILocalDb<ApiData>
	private readonly _filter: IIApiMiddlewareFilter

	constructor(dataServiceDictionary: DataServiceDictionary,
				apiService: IApiService,
				localDb: ILocalDb<ApiData>,
				filter: IIApiMiddlewareFilter
	) {
		this._dataServiceDictionary = dataServiceDictionary
		this._apiService            = apiService
		this._localDb               = localDb
		this._filter                = filter
	}

	async getAll(route: keyof DataServiceDictionary,
				 params: DataRequestParams
	): Promise<ApiData[]> {
		let data = await this._localDb.getAll(route)

		if (data.length > 0) return data

		data =
			await this._dataServiceDictionary[route].getAll(params,
															this._apiService
			)

		return await this._localDb.addBulk(route, data)
	}

	async getById(route: keyof DataServiceDictionary,
				  id: number
	): Promise<ApiData> {
		let data = await this._localDb.getObjectById(route, id)

		if (data && route !== 'games') return data

		if (data && route === 'games') {
			return this._filter.mapGameData(data,
											this._dataServiceDictionary.games,
											this._apiService,
											this._localDb
			)
		}

		data = await this._dataServiceDictionary[route]
			.getById(id, this._apiService)

		const successfulAddition = await this._localDb.addObject(route, data)

		if (successfulAddition && route !== 'games') return data

		return this._filter.mapGameData(data,
										this._dataServiceDictionary.games,
										this._apiService,
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
				recentId, this._apiService),
			dailyScreenshots : await this._dataServiceDictionary.games.getScreenshots(
				dailyId, this._apiService)
		}
	}
}

