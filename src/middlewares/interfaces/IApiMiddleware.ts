import { ApiData }               from '@data/local-storage'
import { GameRequestParams }     from '@data/requests'
import { Recommended }           from '@data/types'
import { DataServiceDictionary } from '@data/types/DataServiceDictionary.ts'


export interface IApiMiddleware {
	getAll(route: keyof DataServiceDictionary,
		   params: GameRequestParams
	): Promise<ApiData[]>

	getById(route: keyof DataServiceDictionary, id: number): Promise<ApiData>

	search(route: keyof DataServiceDictionary,
		   searchContent: string
	): Promise<ApiData[]>

	getRecommendations(): Promise<Recommended>
}