import { ApiData } from '@data/local-storage'
import { DataRequestParams } from '@data/request-parameters'
import { IParserUtils } from '@utils/interfaces'
import { DataServiceDictionary, Game } from '@data/types'
import { ILocalDbFilter } from '@src/filters/interfaces/ILocalDbFilter.ts'


export class LocalDbFilter implements ILocalDbFilter {
	constructor(parserUtils: IParserUtils) {
		this._parserUtils = parserUtils
	}

	private readonly _parserUtils: IParserUtils

	concatFields(data: ApiData,
				 dataType: keyof DataServiceDictionary
	): string {
		if (dataType !== 'games') {
			return `${data.id}${data.slug}${data.name}`.toLowerCase()
		}

		return this._parserUtils.concatGameData(data as Game)
	}

	filterObjects(storageName: keyof DataServiceDictionary,
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
								   && this.concatFields(value,
														storageName
										  )
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
}

