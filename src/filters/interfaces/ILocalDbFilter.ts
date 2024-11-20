import { ApiData } from '@data/local-storage'
import { DataRequestParams } from '@data/request-parameters'
import { DataServiceDictionary } from '@data/types'


export interface ILocalDbFilter {
	filterObjects(storageName: keyof DataServiceDictionary,
				  results: ApiData[],
				  params?: DataRequestParams
	): ApiData[]

	concatFields(data: ApiData,
				 dataType: keyof DataServiceDictionary
	): string
}