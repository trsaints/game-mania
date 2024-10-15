import { ApiData }           from '@data/local-storage'
import { DataRequestParams } from '@data/request-parameters'

export interface ILocalDbUtils {
	filterObjects(idbCursorRequest: IDBRequest,
				  resolve: (value: (ApiData[] | PromiseLike<ApiData[]>)) => void,
				  results: ApiData[],
				  params?: DataRequestParams
	): void
}