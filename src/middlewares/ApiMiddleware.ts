import { ApiData, ILocalDb }     from '@data/local-storage'
import { DataRequestParams }     from 'src/data/request-parameters'
import { DataServiceDictionary } from '@data/types/DataServiceDictionary.ts'
import { Game, Recommended }     from '@src/data/types'
import {
	IApiMiddleware
}                                from '@src/middlewares/interfaces/IApiMiddleware.ts'


export class ApiMiddleware implements IApiMiddleware {
	private readonly _dataServiceDictionary: DataServiceDictionary
	private readonly _localDb: ILocalDb<ApiData>

	constructor(dataServiceDictionary: DataServiceDictionary,
				localDb: ILocalDb<ApiData>
	) {
		this._dataServiceDictionary = dataServiceDictionary
		this._localDb               = localDb
	}

	async getAll(route: keyof DataServiceDictionary,
				 params: DataRequestParams
	): Promise<ApiData[]> {
		let data = await this._localDb.getAll(route, params)

		if (data.length > 0) return data

		data = await this._dataServiceDictionary[route].getAll(params)

		return await this._localDb.addBulk(route, data)
	}

	async getById(route: keyof DataServiceDictionary,
				  id: number
	): Promise<ApiData> {
		let data = await this._localDb.getObjectById(route, id)

		if (data) return data

		data = await this._dataServiceDictionary[route].getById(id)

		this._localDb.addObject(route, data)

		return data
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

