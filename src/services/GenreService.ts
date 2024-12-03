import { DataRequestParams } from '@data/request-parameters'
import { Genre } from '@data/types'
import { IApiService, IDataService } from '@src/services'
import { IParserUtils } from '@src/utils'


export class GenreService implements IDataService<Genre> {
	private readonly _parserUtils: IParserUtils

	constructor(parserUtils: IParserUtils) {
		this._parserUtils = parserUtils
	}

	async getAll(params: DataRequestParams,
				 apiService: IApiService
	): Promise<Genre[]> {
		const baseUrl  = apiService.createRouteUrl('genres')
		const response = await apiService.gameApi.get(baseUrl, {
			params: params
					? this._parserUtils.mapToSnakeCase(params as never)
					: {}
		})

		return response.data?.results.map(
			(r: never) => this._parserUtils.mapToCamelCase(r)) as Genre[] ?? []
	}

	async getById(id: number, apiService: IApiService): Promise<Genre> {
		const baseUrl  = apiService.createRouteUrl(`genres/${id}`)
		const response = await apiService.gameApi.get(baseUrl)

		return this._parserUtils.mapToCamelCase(response?.data as never) as Genre
	}
}


