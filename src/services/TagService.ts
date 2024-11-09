import { DataRequestParams } from '@data/request-parameters'
import { Tag } from '@data/types'
import { IApiService, IDataService } from '@src/services'
import { ParserUtils } from '@src/utils'


export const TagService: IDataService<Tag> = {
	getAll,
	getById
}

async function getAll(params: DataRequestParams, apiService: IApiService): Promise<Tag[]> {
	const baseUrl  = apiService.createRouteUrl('tags')
	const response = await apiService.gameApi.get(baseUrl, {
		params: params ? ParserUtils.mapToSnakeCase(params as never) : {}
	})

	return response.data?.results.map(
		(r: never) => ParserUtils.mapToCamelCase(r)) as Tag[] ?? []
}

async function getById(id: number, apiService: IApiService): Promise<Tag> {
	const baseUrl  = apiService.createRouteUrl(`tags/${id}`)
	const response = await apiService.gameApi.get(baseUrl)

	return ParserUtils.mapToCamelCase(response?.data as never) as Tag
}