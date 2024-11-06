import { ApiData } from '@data/local-storage'
import { DataRequestParams } from '@data/request-parameters'
import { ILocalDbUtils } from '@utils/interfaces'
import { DataServiceDictionary, Game } from '@data/types'


export const LocalDbUtils: ILocalDbUtils = {
	concatFields(data: ApiData,
				 dataType: keyof DataServiceDictionary
	): string {
		if (dataType !== 'games') {
			return `${data.id}${data.slug}${data.name}`.toLowerCase()
		}

		const values = Object.values(data as Game)
		const fields = values.map(value => {
			if (typeof value === 'string') {
				return value
			}

			if (Array.isArray(value)) {
				return value.join('')
			}

			if (typeof value === 'number') {
				return value.toString()
			}

			return ''
		})

		return fields.join().trim().toLowerCase()
	},

	filterObjects
}

function filterObjects(storageName: keyof DataServiceDictionary,
					   idbCursorRequest: IDBRequest,
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
	const hasSearchMatch     = params.search
							   && LocalDbUtils.concatFields(value, storageName)
											  .includes(params.search.trim()
															  .toLowerCase())

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
