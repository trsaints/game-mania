import { DataRequestParams } from '@data/request-parameters'
import { Platform } from '@data/types'
import { IApiService, IDataService } from '@src/services'
import { ParserUtils } from '@src/utils'


export const PlatformService: IDataService<Platform> = {
	getAll,
	getById
}

async function getAll(params: DataRequestParams, apiService: IApiService): Promise<Platform[]> {
	const baseUrl  = apiService.createRouteUrl('platforms')
	const response = await apiService.gameApi.get(baseUrl, {
		params: params ? ParserUtils.mapToSnakeCase(params as never) : {}
	})

	return response?.data?.results.map(
		(r: never) => ParserUtils.mapToCamelCase(r)) as Platform[] ?? []
}

async function getById(id: number, apiService: IApiService): Promise<Platform> {
	const baseUrl  = apiService.createRouteUrl(`platforms/${id}`)
	const response = await apiService.gameApi.get(baseUrl)

	return ParserUtils.mapToCamelCase(response?.data as never) as Platform
}