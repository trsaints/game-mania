import { ApiData }           from '@data/local-storage'
import { DataRequestParams } from '@data/requests'


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

	if (params?.search) {
		const concatenatedValues = `${value.id}${value.name}${value.slug}`
		if (concatenatedValues.trim()
							  .toLowerCase()
							  .includes(params.search
											  .trim()
											  .toLowerCase())) {
			results.push(value)
		}
	}

	cursor.continue()
}
