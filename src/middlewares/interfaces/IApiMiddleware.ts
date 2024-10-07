import { ApiData, ILocalDb }     from '@data/local-storage'
import { DataServiceDictionary } from '@data/types/DataServiceDictionary.ts'


export interface IApiMiddleware {
	getAll(route: keyof DataServiceDictionary,
		   localDb: ILocalDb<ApiData>
	): Promise<ApiData[]>

	getById(route: keyof DataServiceDictionary,
			localDb: ILocalDb<ApiData>,
			id: number
	): Promise<ApiData>
}