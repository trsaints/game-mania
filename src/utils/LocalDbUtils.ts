import { ApiData }           from '@data/local-storage'
import { DataRequestParams } from 'src/data/request-parameters'
import { ILocalDbUtils }     from '@utils/interfaces/ILocalDbUtils.ts'


export const LocalDbUtils: ILocalDbUtils = {
	filterObjects
}

function filterObjects(idbCursorRequest: IDBRequest,
					   resolve: (value: (ApiData[] | PromiseLike<ApiData[]>)) => void,
					   results: ApiData[],
					   params?: DataRequestParams
): void {
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

	if (params.pageSize && results.length === params.pageSize) {
		resolve(results)

		return
	}

	if (params.search) {
		const concatenatedValues = `${value.id}${value.slug}${value.name}`.toLowerCase()
		if (concatenatedValues.includes(params.search.toLowerCase())) {
			results.push(value)
		}
	}

	cursor.continue()
}
