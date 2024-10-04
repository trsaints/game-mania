import { PublisherRequestParams } from '@data/requests'
import { Publisher }              from '@data/types'
import { ApiService }             from '@src/services'
import { ParserUtils }            from '@src/utils'


export const PublisherService = {
	getPublishers,
	getPublisherById
}

async function getPublishers(params: PublisherRequestParams): Promise<Publisher[]> {
	const baseUrl  = ApiService.createRouteUrl('publishers')
	const response = await ApiService.gameApi.get(baseUrl, {
		params: params ? ParserUtils.mapToSnakeCase(params) : {}
	})

	return response?.data?.results.map(
		(r: any) => ParserUtils.mapToCamelCase(r)) as Publisher[] ?? []
}

async function getPublisherById(id: number): Promise<Publisher> {
	const baseUrl  = ApiService.createRouteUrl(`publisher/${id}`)
	const response = await ApiService.gameApi.get(baseUrl)

	return ParserUtils.mapToCamelCase(response?.data) as Publisher
}