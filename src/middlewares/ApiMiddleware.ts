import { ApiData, ILocalDb }               from '@data/local-storage'
import { Genre, Platform, Publisher, Tag } from '@data/types'
import { IDataService, IGameService }      from '@src/services'


export interface IApiMiddleware {
	getAll(route: keyof DataServiceDictionary,
		   dataService: DataServiceDictionary,
		   localDb: ILocalDb<ApiData>
	): Promise<ApiData[]>

	getById(route: keyof DataServiceDictionary,
			dataService: DataServiceDictionary,
			localDb: ILocalDb<ApiData>,
			id: number
	): Promise<ApiData>
}

export const ApiMiddleware: IApiMiddleware = {
	getAll,
	getById
}

export type DataServiceDictionary = {
	games: IGameService
	genres: IDataService<Genre>
	platforms: IDataService<Platform>
	publishers: IDataService<Publisher>
	tags: IDataService<Tag>
}

async function getAll(route: keyof DataServiceDictionary,
					  dataService: DataServiceDictionary,
					  localDb: ILocalDb<ApiData>
): Promise<ApiData[]> {
	let data = localDb.getAll(route)

	if (data.length > 0) return data

	data = await dataService[route].getAll({})

	data.forEach(record => localDb.addObject(route, record))

	return data
}

async function getById(route: keyof DataServiceDictionary,
					   dataService: DataServiceDictionary,
					   localDb: ILocalDb<ApiData>,
					   id: number
): Promise<ApiData> {
	let data = localDb.getObjectById(route, id)

	if (data) return data

	data = await dataService[route].getById(id)

	localDb.addObject(route, data)

	return data
}