import { ApiData } from '@data/local-storage'
import { DataRequestParams } from '@data/request-parameters'
import { DataServiceDictionary, Recommended } from '@data/types'


export interface IApiMiddleware {
	getAll(route: keyof DataServiceDictionary,
		   params?: DataRequestParams
	): Promise<ApiData[]>

	getById(route: keyof DataServiceDictionary, id: number): Promise<ApiData>

	getRecommendations(): Promise<Recommended>
}