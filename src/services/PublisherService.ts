import { DataRequestParams } from '@data/request-parameters'
import { Publisher } from '@data/types'
import { IApiService, IDataService } from '@src/services'
import { ParserUtils } from '@src/utils'


export const PublisherService: IDataService<Publisher> = {
	getAll,
	getById
}

async function getAll(params: DataRequestParams, apiService: IApiService): Promise<Publisher[]> {
	const baseUrl  = apiService.createRouteUrl('publishers')
	const response = await apiService.gameApi.get(baseUrl, {
		params: params ? ParserUtils.mapToSnakeCase(params as never) : {}
	})

	return response?.data?.results.map(
		(r: never) => ParserUtils.mapToCamelCase(r)) as Publisher[] ?? []
}

async function getById(id: number, apiService: IApiService): Promise<Publisher> {
	const baseUrl  = apiService.createRouteUrl(`publisher/${id}`)
	const response = await apiService.gameApi.get(baseUrl)

	return ParserUtils.mapToCamelCase(response?.data as never) as Publisher
}