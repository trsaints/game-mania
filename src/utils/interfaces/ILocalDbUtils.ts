import { ApiData } from '@data/local-storage'
import { DataRequestParams } from '@data/request-parameters'
import { DataServiceDictionary } from '@data/types'


export interface ILocalDbUtils {
	filterObjects(storageName: keyof DataServiceDictionary,
				  idbCursorRequest: IDBRequest,
				  resolve: (value: (ApiData[] | PromiseLike<ApiData[]>)) => void,
				  results: ApiData[],
				  params?: DataRequestParams
	): void

	concatFields(data: ApiData,
				 dataType: keyof DataServiceDictionary
	): string
}