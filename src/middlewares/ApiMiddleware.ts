import { ApiData, ILocalDb }     from '@data/local-storage'
import { DataServiceDictionary } from '@data/types/DataServiceDictionary.ts'
import {
	IApiMiddleware
}                                from '@src/middlewares/interfaces/IApiMiddleware.ts'


export class ApiMiddleware implements IApiMiddleware {
	private readonly _dataServiceDictionary: DataServiceDictionary

	constructor(dataServiceDictionary: DataServiceDictionary) {
		this._dataServiceDictionary = dataServiceDictionary
	}

	async getAll(route: keyof DataServiceDictionary,
				 localDb: ILocalDb<ApiData>
	): Promise<ApiData[]> {
		let data = await localDb.getAll(route)

		if (data.length > 0) return data

		data = await this._dataServiceDictionary[route].getAll({})

		for (const record of data) {
			localDb.addObject(route, record)
		}

		return data
	}

	async getById(route: keyof DataServiceDictionary,
				  localDb: ILocalDb<ApiData>,
				  id: number
	): Promise<ApiData> {
		let data = await localDb.getObjectById(route, id)

		if (data) return data

		data = await this._dataServiceDictionary[route].getById(id)

		localDb.addObject(route, data)

		return data
	}
}

