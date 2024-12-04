import { ApiData } from '@data/local-storage'
import { DataRequestParams } from '@data/request-parameters'
import { IParserUtils } from '@utils/interfaces'
import { DataServiceDictionary, Game } from '@data/types'
import { ILocalDbFilter } from '@src/filters/interfaces/ILocalDbFilter.ts'


export class LocalDbFilter implements ILocalDbFilter {
	private readonly _parserUtils: IParserUtils

	constructor(parserUtils: IParserUtils) {
		this._parserUtils = parserUtils
	}

	concatFields(data: ApiData, dataType: keyof DataServiceDictionary): string {
		if (dataType !== 'games') {
			return `${data.id}${data.slug}${data.name}`.trim().toLowerCase()
		}

		return this._parserUtils.concatGameData(data as Game)
	}

	filterObjects(
		storageName: keyof DataServiceDictionary,
		results: ApiData[],
		params?: DataRequestParams
	): ApiData[] {
		if (! params) {
			return results
		}

		const filteredData: ApiData[] = []

		for (let i = 0; i < results.length; i++) {
			const data  = results[i] as Game
			let matches = true

			if (params.search) {
				const search   = params.search.trim().toLowerCase()
				const dataMeta = this.concatFields(data, storageName)
				matches        = matches && dataMeta.includes(search)
			}

			if (params.developers) {
				matches =
					matches &&
					data.developers?.some(
						(dev) =>
							params.developers?.includes(String(dev.id)) ||
							params.developers?.includes(dev.slug)
					)
			}

			if (params.publishers) {
				matches =
					(matches &&
					 data.publishers?.some(
						 (pub) =>
							 params.publishers?.includes(String(pub.id)) ||
							 params.publishers?.includes(pub.slug)
					 )) ?? false
			}

			if (params.platforms) {
				matches =
					matches &&
					data.platforms?.some(
						(plat) =>
							params.platforms?.includes(String(plat.platform.id))
							||
							params.platforms?.includes(plat.platform.slug)
					)
			}

			if (params.genres) {
				matches =
					matches &&
					data.genres?.some(
						(gen) =>
							params.genres?.includes(String(gen.id)) ||
							params.genres?.includes(gen.slug)
					)
			}

			if (params.tags) {
				matches =
					matches &&
					data.tags?.some(
						(tag) =>
							params.tags?.includes(String(tag.id)) ||
							params.tags?.includes(tag.slug)
					)
			}

			if (matches) {
				filteredData.push(data)
			}

			if (params.pageSize !== undefined && params.pageSize
				=== filteredData.length) {
				break
			}
		}

		return filteredData
	}
}
