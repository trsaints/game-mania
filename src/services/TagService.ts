import { DataRequestParams } from '@data/request-parameters'
import { Tag } from '@data/types'
import { ApiService, IDataService } from '@src/services'
import { ParserUtils } from '@src/utils'


export const TagService: IDataService<Tag> = {
	getAll,
	getById
}

async function getAll(params: DataRequestParams): Promise<Tag[]> {
	const baseUrl  = ApiService.createRouteUrl('tags')
	const response = await ApiService.gameApi.get(baseUrl, {
		params: params ? ParserUtils.mapToSnakeCase(params as never) : {}
	})

	return response.data?.results.map(
		(r: never) => ParserUtils.mapToCamelCase(r)) as Tag[] ?? []
}

async function getById(id: number): Promise<Tag> {
	const baseUrl  = ApiService.createRouteUrl(`tags/${id}`)
	const response = await ApiService.gameApi.get(baseUrl)

	return ParserUtils.mapToCamelCase(response?.data as never) as Tag
}