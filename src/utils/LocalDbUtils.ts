import { ApiData }           from '@data/local-storage'
import { DataRequestParams } from 'src/data/request-parameters'


export const LocalDbUtils = {
	filterObjects
}

function filterObjects(idbCursorRequest: IDBRequest,
					   resolve: (value: (ApiData[] | PromiseLike<ApiData[]>)) => void,
					   results: ApiData[],
					   params?: DataRequestParams
) {
	const cursor = idbCursorRequest.result

	if (!cursor) {
		resolve(results)

		return
	}

	const value = cursor.value as ApiData

	if (!params) {
		results.push(value)
		cursor.continue()

		return
	}

	if (params.search) {
		const concatenatedValues = `${value.id}${value.slug}${value.name}`.toLowerCase()
		if (concatenatedValues.includes(params.search.toLowerCase())) {
			results.push(value)
		}
	}
	
	if (params.pageSize && results.length === params.pageSize) {
		resolve(results)
		
		return
	} else {
		results.push(value)
	}

	cursor.continue()
}
