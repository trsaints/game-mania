import { ApiData, ILocalDb }     from '@data/local-storage'
import { DataServiceDictionary } from '@data/types/DataServiceDictionary.ts'
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

	async getAll(route: keyof DataServiceDictionary): Promise<ApiData[]> {
		let data = await this._localDb.getAll(route)

		if (data.length > 0) return data

		data = await this._dataServiceDictionary[route].getAll({})

		for (const record of data) {
			this._localDb.addObject(route, record)
		}

		return data
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
}
