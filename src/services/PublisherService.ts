import { DataRequestParams }        from '@data/requests'
import { Publisher }                from '@data/types'
import { ApiService, IDataService } from '@services/index.ts'
import { ParserUtils }              from '@src/utils'


export const PublisherService: IDataService<Publisher> = {
	getAll,
	getById
}

async function getAll(params: DataRequestParams): Promise<Publisher[]> {
	const baseUrl  = ApiService.createRouteUrl('publishers')
	const response = await ApiService.gameApi.get(baseUrl, {
		params: params ? ParserUtils.mapToSnakeCase(params) : {}
	})

	return response?.data?.results.map(
		(r: any) => ParserUtils.mapToCamelCase(r)) as Publisher[] ?? []
}

async function getById(id: number): Promise<Publisher> {
	const baseUrl  = ApiService.createRouteUrl(`publisher/${id}`)
	const response = await ApiService.gameApi.get(baseUrl)

	return ParserUtils.mapToCamelCase(response?.data) as Publisher
}