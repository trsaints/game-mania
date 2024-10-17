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

	if (! cursor) {
		resolve(results)

		return
	}

	const value = cursor.value as ApiData

	if (! params) {
		results.push(value)
		cursor.continue()

		return
	}

	const hasReachedPageSize = params.pageSize
							   && results.length === params.pageSize
	const hasSearchMatch = params.search
						   && `${value.id}${value.slug}${value.name}`.toLowerCase()
																	 .includes(
																		 params.search.toLowerCase())

	if (! hasReachedPageSize && ! params.search) {
		results.push(value)
	} else if (! hasReachedPageSize && hasSearchMatch) {
		results.push(value)
	} else if (hasReachedPageSize) {
		resolve(results)

		return
	}

	cursor.continue()
}
