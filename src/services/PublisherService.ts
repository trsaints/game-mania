import { DataRequestParams } from '@data/request-parameters'
import { Publisher } from '@data/types'
import { IApiService, IDataService } from '@src/services'
import { IParserUtils } from '@src/utils'


export class PublisherService implements IDataService<Publisher> {
	constructor(parserUtils: IParserUtils) {
		this._parserUtils = parserUtils
	}

	private readonly _parserUtils: IParserUtils

	async getAll(params: DataRequestParams,
				 apiService: IApiService
	): Promise<Publisher[]> {
		const baseUrl  = apiService.createRouteUrl('publishers')
		const response = await apiService.gameApi.get(baseUrl, {
			params: params
					? this._parserUtils.mapToSnakeCase(params as never)
					: {}
		})

		return response?.data?.results.map(
				   (r: never) => this._parserUtils.mapToCamelCase(r)) as Publisher[]
			   ?? []
	}

	async getById(id: number, apiService: IApiService): Promise<Publisher> {
		const baseUrl  = apiService.createRouteUrl(`publisher/${id}`)
		const response = await apiService.gameApi.get(baseUrl)

		return this._parserUtils.mapToCamelCase(response?.data as never) as Publisher
	}
}


