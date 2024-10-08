import { ApiData }               from '@data/local-storage'
import { Recommended }           from '@data/types'
import { DataServiceDictionary } from '@data/types/DataServiceDictionary.ts'


export interface IApiMiddleware {
	getAll(route: keyof DataServiceDictionary): Promise<ApiData[]>

	getById(route: keyof DataServiceDictionary, id: number): Promise<ApiData>

	getRecommendations(): Promise<Recommended>
}