import { DataRequestParams } from '@data/request-parameters'
import { Platform } from '@data/types'
import { IApiService, IDataService } from '@src/services'
import { IParserUtils } from '@src/utils'


export class PlatformService implements IDataService<Platform> {
	private readonly _parserUtils: IParserUtils

	constructor(parserUtils: IParserUtils) {
		this._parserUtils = parserUtils
	}

	async getAll(params: DataRequestParams,
				 apiService: IApiService
	): Promise<Platform[]> {
		const baseUrl  = apiService.createRouteUrl('platforms')
		const response = await apiService.gameApi.get(baseUrl, {
			params: params
					? this._parserUtils.mapToSnakeCase(params as never)
					: {}
		})

		return response?.data?.results.map(
				   (r: never) => this._parserUtils.mapToCamelCase(r)) as Platform[]
			   ?? []
	}

	async getById(id: number, apiService: IApiService): Promise<Platform> {
		const baseUrl  = apiService.createRouteUrl(`platforms/${id}`)
		const response = await apiService.gameApi.get(baseUrl)

		return this._parserUtils.mapToCamelCase(response?.data as never) as Platform
	}
}

