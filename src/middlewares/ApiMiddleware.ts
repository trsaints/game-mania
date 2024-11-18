import { ApiData, ILocalDb } from '@data/local-storage'
import { DataRequestParams } from '@data/request-parameters'
import { DataServiceDictionary, Game, Recommended } from '@data/types'
import { IApiMiddleware } from '@src/middlewares'
import { IApiMiddlewareFilter } from '@src/filters'
import { IApiService } from '@src/services'
import { ILocalDbFilter } from '@src/filters/interfaces/ILocalDbFilter.ts'


export class ApiMiddleware implements IApiMiddleware {
	constructor(dataServiceDictionary: DataServiceDictionary,
				apiService: IApiService,
				localDb: ILocalDb<ApiData>,
				apiMiddlewareFilter: IApiMiddlewareFilter,
				localDbFilter: ILocalDbFilter
	) {
		this._dataServiceDictionary = dataServiceDictionary
		this._apiService            = apiService
		this._localDb               = localDb
		this._apiMiddlewareFilter   = apiMiddlewareFilter
		this._localDbFilter         = localDbFilter
	}

	private readonly _dataServiceDictionary: DataServiceDictionary
	private readonly _apiService: IApiService
	private readonly _localDb: ILocalDb<ApiData>
	private readonly _apiMiddlewareFilter: IApiMiddlewareFilter
	private readonly _localDbFilter: ILocalDbFilter

	async getAll(route: keyof DataServiceDictionary,
				 params: DataRequestParams
	): Promise<ApiData[]> {
		let data           = await this._localDb.getAll(route)
		const filteredData = this._localDbFilter.filterObjects(route,
															   data,
															   params
		)

		if (filteredData.length > 0) return filteredData

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
			return this._apiMiddlewareFilter.mapGameData(data,
														 this._dataServiceDictionary.games,
														 this._apiService,
														 this._localDb
			)
		}

		data = await this._dataServiceDictionary[route]
			.getById(id, this._apiService)

		const successfulAddition = await this._localDb.addObject(route, data)

		if (successfulAddition && route !== 'games') return data

		return this._apiMiddlewareFilter.mapGameData(data,
													 this._dataServiceDictionary.games,
													 this._apiService,
													 this._localDb
		)
	}

	async getRecommendations(): Promise<Recommended> {
		const recentId = Math.floor(Math.random() * 1000)
		const dailyId  = Math.floor(Math.random() * 1000)

		return {
			daily : await this.getById('games', dailyId) as Game,
			recent: await this.getById('games', recentId) as Game
		}
	}
}

