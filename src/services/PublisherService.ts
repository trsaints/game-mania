import { DataRequestParams } from '@data/request-parameters'
import { Publisher } from '@data/types'
import { ApiService, IDataService } from '@src/services'
import { ParserUtils } from '@src/utils'


export const PublisherService: IDataService<Publisher> = {
	getAll,
	getById
}

async function getAll(params: DataRequestParams): Promise<Publisher[]> {
	const baseUrl  = ApiService.createRouteUrl('publishers')
	const response = await ApiService.gameApi.get(baseUrl, {
		params: params ? ParserUtils.mapToSnakeCase(params as never) : {}
	})

	return response?.data?.results.map(
		(r: never) => ParserUtils.mapToCamelCase(r)) as Publisher[] ?? []
}

async function getById(id: number): Promise<Publisher> {
	const baseUrl  = ApiService.createRouteUrl(`publisher/${id}`)
	const response = await ApiService.gameApi.get(baseUrl)

	return ParserUtils.mapToCamelCase(response?.data as never) as Publisher
}